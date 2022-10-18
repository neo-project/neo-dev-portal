import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useHistory } from "react-router-dom"
import { default as Neon } from "@cityofzion/neon-js";
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';


export default function Converter(props) {
    return (
        <BrowserOnly>
            {() => {

                const history = useHistory()
                const search = props.location.search;
                const params = new URLSearchParams(search);

                const sampleTextsToConvert = [
                    "7472616e73666572",
                    "00a3e111",
                    "0x3346454E",
                    "5195086",
                    "3ff68d232a60f23a5805b8c40f7e61747f6f61ce",
                    "zmFvf3Rhfg/EuAVYOvJgKiON9j8=",
                    "AHVYXVTcKw==",
                    "03dab84c1243ec01ab2500e1a8c7a1546a26d734628180b0cf64e72bf776536997",
                    // "DARkYXRhAgBlzR0MFPdcrAXPVptVduMEs2lf1jQjxKIKDBT3XKwFz1abVXbjBLNpX9Y0I8SiChTAHwwIdHJhbnNmZXIMFKNSbimM12LkFYX/8KGvm2ttFxulQWJ9W1I=",
                    // "DCECbzTesnBofh/Xng1SofChKkBC7jhVmLxCN1vk\u002B49xa2pBVuezJw==",
                    // "nature post exhibit betray village royal educate worth quantum simple essence trust",
                ]

                const [text, setText] = React.useState(params.get('text') ?? "")

                React.useEffect(() => {
                    if (text.trim().length === 0) {
                        const params = new URLSearchParams()
                        params.delete("text")
                        history.push({ search: params.toString() })
                        return;
                    }

                    const params = new URLSearchParams()
                    params.append("text", text)
                    history.push({ search: params.toString() })
                }, [text])

                const conversionList = [
                    {
                        title: "Hexadecimal little-endian string to UTF8 string",
                        func: (t) => { return Neon.u.hexstring2str(t) },
                        codes: [
                            {
                                "label": "neon-js",
                                "code": `Neon.u.hexstring2str("${text}")`,
                            }
                        ]
                    },
                    {
                        title: "Reversed Hex",
                        func: (t) => { return Neon.u.reverseHex(t) },
                        codes: [
                            {
                                "label": "neon-js",
                                "code": `Neon.u.reverseHex("${text}")`,
                            }
                        ]
                    },
                    {
                        title: "Hexadecimal little-endian string to Base64 string",
                        func: (t) => { return Neon.u.hex2base64(t) },
                        codes: [
                            {
                                "label": "neon-js",
                                "code": `Neon.u.hex2base64("${text}")`,
                            }
                        ]
                    },
                    {
                        title: "UTF8 string to hexadecimal string",
                        func: (t) => { return Neon.u.str2hexstring(t) },
                        codes: [
                            {
                                "label": "neon-js",
                                "code": `Neon.u.str2hexstring("${text}")`,
                            }
                        ]
                    },
                    {
                        title: "Base64 encoding",
                        func: (t) => { return Neon.u.hex2base64(Neon.u.str2hexstring(t)) },
                        codes: [
                            {
                                "label": "neon-js",
                                "code": `Neon.u.hex2base64(Neon.u.str2hexstring("${text}"))`,
                            }
                        ]
                    },
                    {
                        title: "Base64 to Hex string",
                        func: (t) => { return Neon.u.base642hex(t) },
                        codes: [
                            {
                                "label": "neon-js",
                                "code": `Neon.u.base642hex("${text}")`,
                            }
                        ]
                    },
                    {
                        title: "Script hash to Neo3 address",
                        func: (t) => { return t.length == 40 ? Neon.create.account(t).address : "" },
                        codes: [
                            {
                                "label": "neon-js",
                                "code": `Neon.create.account("${text}").address`,
                            }
                        ]
                    },
                    {
                        title: "Public key to Neo3 Address",
                        func: (t) => { return t.length == 66 ? Neon.create.account(t).address : "" },
                        codes: [
                            {
                                "label": "neon-js",
                                "code": `Neon.create.account("${text}").address`,
                            }
                        ]
                    },
                ]

                const run = (f) => {
                    try {
                        return f(text)
                    } catch (error) {
                        return error.toString()
                    }
                }
                return (
                    <Layout>
                        <div className="twcontainer  max-w-6xl px-4 lg:px-0 mx-auto py-20">

                            <p className="text-xl font-semibold mb-4">N3 Data Converter</p>
                            <p>Support conversion of address, script hash, private key, public key, big-endian and little-endian, big-integer, character string, hexadecimal string, hexadecimal script, Base64 script, Application Log, Base64 encoding, Mnemonic etc. and analysis of smart contract script</p>

                            <div className='mt-4 flex flex-col gap-2'>
                                <p className='font-medium'>Please enter the text to be converted</p>
                                <input value={text} onChange={(e) => setText(e.target.value.trim())} type="text" className='border border-gray-200 rounded w-full overflow-hidden p-2' />
                                {/* <button onClick={(e) => { runConversions() }} className="rounded bg-primary text-white uppercase p-2 font-semibold">Convert</button> */}
                            </div>

                            <div className={`mt-8 ${text === "" ? "hidden" : ""}`}>
                                <p className='font-medium'>Conversion results</p>
                                <div className='mt-4 flex flex-col gap-4'>
                                    {
                                        text && conversionList.map((c, i) => (
                                            <div key={`conversion-${i}`} className='border'>
                                                <div className='p-4'>
                                                    <p>{c.title}</p>
                                                </div>
                                                <Tabs className='border-b' defaultValue="result">
                                                    <TabItem key="result" value="result" label="Result" className='px-4'>
                                                        <CodeBlock>
                                                            {
                                                                text && run(c.func)
                                                            }
                                                        </CodeBlock>
                                                    </TabItem>
                                                    {
                                                        c.codes.map((code) => (
                                                            <TabItem key={code.label} value="js" label={code.label} className='px-4'>
                                                                <CodeBlock language="js">
                                                                    {code.code}
                                                                </CodeBlock>
                                                            </TabItem>
                                                        ))
                                                    }

                                                </Tabs>
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>

                            <div className='mt-8'>
                                <p className='font-medium'>Don't know what to enter? Try the following</p>
                                <div className='mt-2'>
                                    {
                                        sampleTextsToConvert.map((t) => (
                                            <div key={t} className='flex items-center text-secondary'>
                                                {t}
                                                <button onClick={(e) => { setText(t) }} className='ml-2 text-primary'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                                                    </svg>

                                                </button>

                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>

                    </Layout >
                )
            }}
        </BrowserOnly>
    )
}