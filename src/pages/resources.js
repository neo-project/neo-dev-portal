import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
export default function Tooling() {
    return (
        <BrowserOnly>
            {() => {


                const [selectedTag, setSelectedTag] = React.useState("")
                const data = [
                    {
                        title: "Protocols",
                        id: "protocols",
                        iconSVG: (<svg className='stroke-current' width="32" height="38" viewBox="0 0 32 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.80078 23.8999H22.4008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 19.5H16" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.80078 15.1001H22.4008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.80078 10.7002H22.4008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.80078 28.7002H22.4008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <rect x="0.75" y="2.25" width="29.7" height="34.5" rx="4.25" stroke-width="1.5" />
                            <rect x="8" width="15" height="4" rx="1" fill="#000033" />
                        </svg>),
                        tools: [
                            {
                                name: "NeoFS",
                                by: "Neo SPCC",
                                description: "NeoFS is a distributed, decentralized object storage network developed by Neo SPCC. Built with Neo blockchain integration in mind, NeoFS aims to support the shift away from third-party storage providers, providing users with complete control over their data.",
                                icon_url: "/tooling/nspcc.png",
                                web_url: "https://fs.neo.org/",
                                github_url: "https://github.com/nspcc-dev",
                                docs_url: "https://fs.neo.org/services",
                                tags: []
                            },
                            {
                                name: "Oracles",
                                by: "Neo Global Development",
                                description: "Oracles are a utility which can be leveraged by smart contracts to interface with systems outside the Neo blockchain using http(s).",
                                icon_url: "/tooling/ngd.png",
                                web_url: "https://developers.neo.org/docs/n3/Advances/Oracles",
                                github_url: "https://github.com/neo-project",
                                docs_url: "https://developers.neo.org/docs/n3/Advances/Oracles",
                                tags: []
                            }
                        ]
                    },
                    {
                        title: "Development Environments",
                        id: "dev-env",
                        iconSVG: <svg className='stroke-current' width="32" height="36" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.80078 22.4004H22.4008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 18H16" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.80078 13.5996H22.4008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5 4H6" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9 4H10" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13 4H14" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M1 7L30 7" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.80078 27.2002H22.4008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <rect x="0.75" y="0.75" width="29.7" height="34.5" rx="4.25" stroke-width="1.5" />
                        </svg>
                        ,
                        tools: [
                            {
                                name: "Neo Blockchain Toolkit",
                                by: "NGD Enterprise",
                                description: "The Neo Blockchain Toolkit is a one-stop-shop for creating and preparing smart contracts for production, seamlessly integrated with VS Code, the most popular code editor. Out of the box, developers can easily deploy private networks, compile, deploy, and invoke smart contracts, or tap into its fully integrated debugging experience. With time-travel debug support, a source-mapped opcode view, and an automated test harness, NBT provides a best-in-class blockchain development experience.",
                                icon_url: "/tooling/neoblockchaintoolkit.png",
                                web_url: "https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit",
                                github_url: "https://github.com/neo-project/neo-blockchain-toolkit",
                                docs_url: "https://github.com/neo-project/neo-blockchain-toolkit",
                                tags: ["c#"]
                            },
                            {
                                name: "Neo Compiler Eco",
                                by: "Neo Research",
                                description: "Allows developers to code and compile smart contracts via web interface and deploy them to a TestNet without having to install any other development tools. NeoCompiler Eco currently supports C# for compiling, deployment and testing.",
                                icon_url: "/tooling/neocompiler.png",
                                web_url: "https://neocompiler.io/",
                                github_url: "https://github.com/NeoResearch/neocompiler-eco",
                                docs_url: "https://github.com/NeoResearch/neocompiler-eco",
                                tags: ["c#"]
                            },
                            {
                                name: "NEO•ONE",
                                by: "Neo Tracker",
                                description: "NEO•ONE is an end-to-end development framework for Neo applications created with TypeScript or JavaScript. Like the Blockchain Toolkit, it includes tools for local network setup, contract compiling and deploying, wallet handling, automated testing, and also provides client APIs to simplify interaction with deployed contracts.",
                                icon_url: "/tooling/neo-one.svg",
                                web_url: "https://n3.neo-one.io/",
                                github_url: "https://github.com/neo-one-suite/neo-one",
                                docs_url: "https://github.com/neo-one-suite/neo-one",
                                tags: ["js"]
                            },
                            {
                                name: "Neo Playground",
                                by: "AxLabs",
                                description: "Neo playground is a development environment that packages the features of the Neo Blockchain Toolkit into a VS Code web client with a number of additional utilities. It is designed for team collaboration in a controlled development environment.",
                                icon_url: "/tooling/neow3j.png",
                                web_url: "https://neo-playground.dev/",
                                github_url: "https://github.com/AxLabs",
                                docs_url: "https://github.com/AxLabs",
                                tags: ["java"]
                            }
                        ]
                    },
                    {
                        title: "Contract Development Kits",
                        id: "contract-sdk",
                        iconSVG: <svg className='stroke-current' width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6.75" y="0.75" width="17.5" height="33.5" rx="1.75" stroke-width="1.5" />
                            <rect x="3.75" y="3.75" width="23.5" height="30.5" rx="1.75" fill="white" stroke-width="1.5" />
                            <rect x="0.75" y="6.75" width="29.5" height="28.5" rx="4.25" fill="white" stroke-width="1.5" />
                            <path d="M8.80078 14.5996H22.4008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.2008 21.5996L8.80078 23.9996L11.2008 26.3996" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.7992 21.5996L23.1992 23.9996L20.7992 26.3996" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.1992 27.8848L16.4871 20.8009" stroke-width="1.5" stroke-linecap="round" />
                        </svg>,
                        tools: [
                            {
                                name: "boa",
                                by: "COZ",
                                description: "Boa is a compiler for smart contracts written in Python. Designed to feel as natural as possible for Python developers, Boa contracts are assisted with decorators, helper functions, type hints, and support testing against the core VM TestEngine. Debug data generated by the compiler also follows the standard format, enabling debugging through the Neo Blockchain Toolkit.",
                                icon_url: "/tooling/boa.png",
                                web_url: "https://dojo.coz.io/neo3/boa/index.html",
                                github_url: "https://github.com/CityOfZion/neo3-boa",
                                docs_url: "https://dojo.coz.io/neo3/boa/index.html",
                                tags: ["python"]
                            },
                            {
                                name: "Neo-Go",
                                by: "Neo SPCC",
                                description: "Neo-Go is a fully featured and well documented alternative implementation of the core Neo stack, written in Go. Provides a highly performant node implementation, a compiler for Go smart contracts, and an SDK for app integration.",
                                icon_url: "/tooling/nspcc.png",
                                web_url: "https://github.com/nspcc-dev/neo-go/releases",
                                github_url: "https://github.com/nspcc-dev/neo-go",
                                docs_url: "https://pkg.go.dev/github.com/nspcc-dev/neo-go",
                                tags: ["go"]
                            },
                            {
                                name: "neo-devpack",
                                by: "Neo Global Development",
                                description: "The core neo devpack for dotnet provides all the tools required to compile smart contracts written in C#. In addition to producing deployable NEF contract files, the compiler also emits manifest files and debug information following a standard format for use in the Neo Debugger.",
                                icon_url: "/tooling/ngd.png",
                                web_url: "https://github.com/neo-project/neo-devpack-dotnet",
                                github_url: "https://github.com/neo-project/neo-devpack-dotnet",
                                docs_url: "https://github.com/neo-project/neo-devpack-dotnet",
                                tags: ["c#"]
                            },
                            {
                                name: "Neow3j",
                                by: "AxLabs",
                                description: "Neow3j is a Java library that aims to provide easy and reliable integration with Neo nodes. It supports Neo RPC, asset transfers, smart contract invocations and deployments, NEP-2, NEP-6, building, signing and sending raw transactions, and more.",
                                icon_url: "/tooling/neow3j.png",
                                web_url: "https://neow3j.io/",
                                github_url: "https://github.com/neow3j/neow3j",
                                docs_url: "https://neow3j.io/",
                                tags: ["java"]
                            }
                        ]
                    },
                    {
                        title: "Explorers, and API Providers",
                        id: "tools",
                        iconSVG: <svg className='stroke-current' width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.75" y="0.75" width="29.5" height="9.5" rx="1.75" stroke-width="1.5" />
                            <rect x="0.75" y="25.75" width="29.5" height="9.5" rx="1.75" stroke-width="1.5" />
                            <rect x="0.75" y="13.25" width="29.5" height="9.5" rx="1.75" stroke-width="1.5" />
                            <path d="M21 5.5L26 5.5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6 5.5H8" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M5 18L10 18" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M21 30.5L26 30.5" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        ,
                        tools: [
                            {
                                name: "WalletConnect SDK",
                                by: "COZ",
                                description: "WalletConnect is an open protocol to communicate securely between Wallets and Dapps",
                                icon_url: "/tooling/walletconnect.svg",
                                web_url: "https://neon.coz.io/wksdk/core/index.html",
                                github_url: "https://github.com/CityOfZion/wallet-connect-sdk",
                                docs_url: "https://neon.coz.io/wksdk/core/index.html",
                                tags: ["js"]
                            },
                            {
                                name: "dAPI",
                                by: "NEXT",
                                description: "dAPI is a wallet interface for decentralized applications which allows users to sign transaction requests on applications without exposing their private key.",
                                icon_url: "/tooling/neo-line.png",
                                web_url: "https://neoline.io/dapi/N3.html",
                                github_url: "https://neoline.io/dapi/N3.html",
                                docs_url: "https://neoline.io/dapi/N3.html",
                                tags: []
                            },
                            {
                                name: "dora",
                                by: "COZ",
                                description: "Dora is a high speed block explorer with N3 and Neo Legacy integrations. A public API is also exposed, allowing developers to easily acquire information about supported blockchains including chain stats, contract storage, and more.",
                                icon_url: "/tooling/dora.png",
                                web_url: "https://dora.coz.io/",
                                github_url: "https://github.com/CityOfZion/dora",
                                docs_url: "https://github.com/CityOfZion/dora",
                                tags: []
                            },
                            {
                                name: "Faucet",
                                by: "Neo Global Development",
                                description: "The faucet is an ecosystem utility for acquiring GAS which is the native token required to publish transactions to the network. This faucet is configured to work with the N3 Testnet.",
                                icon_url: "/tooling/ngd.png",
                                web_url: "https://neowish.ngd.network/#/",
                                github_url: "",
                                docs_url: "",
                                tags: []
                            },
                            {
                                name: "NeoTube",
                                by: "NEXT",
                                description: "NeoTube is a reliable Neo block explorer with seperate versions for Neo Legacy and N3. Network statistics, fungible and non-fungible assets, and contract lists are all provided.",
                                icon_url: "/tooling/ngd.png",
                                web_url: "https://neo3.neotube.io/",
                                github_url: "",
                                docs_url: "",
                                tags: []
                            }
                        ]
                    },
                    {
                        title: "Nodes",
                        id: "nodes",
                        iconSVG: <svg className='stroke-current' width="35" height="36" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M16.4479 3.69036C17.2111 3.26163 18.1426 3.26163 18.9058 3.69036L30.839 10.3938C31.6299 10.8381 32.1194 11.6745 32.1194 12.5816V25.8706C32.1194 26.7777 31.6299 27.6141 30.839 28.0584L18.9058 34.7618C18.1426 35.1906 17.2111 35.1906 16.4479 34.7618L4.5146 28.0584C3.72378 27.6141 3.23427 26.7777 3.23427 25.8706V12.5816C3.23427 11.6745 3.72378 10.8381 4.5146 10.3938L16.4479 3.69036Z" fill="white" stroke-width="1.5" />
                            <path d="M17.9031 35.0014V19.6768" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M3.47852 12.0146L17.9017 19.677" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M31.8748 12.0146L17.8496 19.4655" stroke-width="1.5" stroke-linecap="round" />
                            <circle cx="18" cy="19" r="3" fill="#000033" />
                            <circle cx="18" cy="3" r="3" fill="#000033" />
                            <circle cx="32" cy="12" r="3" fill="#000033" />
                            <circle cx="3" cy="12" r="3" fill="#000033" />
                        </svg>
                        ,
                        tools: [
                            {
                                name: "Neo-Node",
                                by: "The Neo Project",
                                description: "This project is the reference architecture for a neo full-node. It reprents the atomic building block of the Neo blockchain and includes all of the CLI functionality required to interface with the network.",
                                icon_url: "/tooling/neo-cli.svg",
                                web_url: "https://github.com/neo-project/neo-node",
                                github_url: "https://github.com/neo-project/neo-node",
                                docs_url: "https://github.com/neo-project/neo-node",
                                tags: ["c#"]
                            },
                            {
                                name: "Neo GUI",
                                by: "The Neo Project",
                                description: "The Neo GUI project wraps a neo node in an electron app, exposing many of its features in a graphical interface.",
                                icon_url: "/tooling/neo-gui.png",
                                web_url: "https://docs.neo.org/docs/en-us/node/gui/install.html",
                                github_url: "https://docs.neo.org/docs/en-us/node/gui/install.html",
                                docs_url: "https://docs.neo.org/docs/en-us/node/gui/install.html",
                                tags: ["c#"]
                            },
                            {
                                name: "Neo-Go",
                                by: "Neo SPCC",
                                description: "Neo-Go is a fully featured and well documented alternative implementation of the core Neo stack, written in Go. Provides a highly performant node implementation, a compiler for Go smart contracts, and an SDK for app integration.",
                                icon_url: "/tooling/nspcc.png",
                                web_url: "https://github.com/nspcc-dev/neo-go/releases",
                                github_url: "https://github.com/nspcc-dev/neo-go",
                                docs_url: "https://github.com/nspcc-dev/neo-go",
                                tags: ["go"]
                            }
                        ]
                    },
                    {
                        title: "SDKs",
                        id: "sdks",
                        iconSVG: <svg className='stroke-current' width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7086 15.3345L1.29527 23.6851C0.683778 24.0658 0.663189 24.9486 1.25627 25.3574L14.669 34.6023C15.0153 34.8411 15.474 34.8375 15.8166 34.5935L28.7973 25.3482C29.3734 24.9378 29.3531 24.0753 28.7582 23.6926L15.7782 15.3424C15.4531 15.1333 15.0367 15.1302 14.7086 15.3345Z" stroke-width="1.5" />
                            <path d="M14.7086 8.33449L1.29527 16.6851C0.683778 17.0658 0.663189 17.9486 1.25627 18.3574L14.669 27.6023C15.0153 27.8411 15.474 27.8375 15.8166 27.5935L28.7973 18.3482C29.3734 17.9378 29.3531 17.0753 28.7582 16.6926L15.7782 8.34241C15.4531 8.13332 15.0367 8.13023 14.7086 8.33449Z" fill="white" stroke-width="1.5" />
                            <path d="M14.7086 1.33449L1.29527 9.68514C0.683778 10.0658 0.663189 10.9486 1.25627 11.3574L14.669 20.6023C15.0153 20.8411 15.474 20.8375 15.8166 20.5935L28.7973 11.3482C29.3734 10.9378 29.3531 10.0753 28.7582 9.69264L15.7782 1.34241C15.4531 1.13332 15.0367 1.13023 14.7086 1.33449Z" fill="white" stroke-width="1.5" />
                        </svg>
                        ,
                        tools: [
                            {
                                name: "mamba",
                                by: "COZ",
                                description: "Mamba is a python SDK on steroids. Leveraging the lessons learned on the neo-python project, we have completely rearchitected our popular python tool to significantly improve its usability. If you want to perform any operation with Neo ranging from transaction execution to chain sync, you can do it in Mamba. Mamba is bundled with our Blink VM, a high performance N3 virtual machine capable of speeds over twenty times faster than official release.",
                                icon_url: "/tooling/mamba.png",
                                web_url: "https://dojo.coz.io/",
                                github_url: "https://github.com/CityOfZion/neo-mamba",
                                docs_url: "https://dojo.coz.io/neo3/mamba/index.html",
                                tags: ["python"]
                            },
                            {
                                name: "Neo-gogogo",
                                by: "Neo Global Development",
                                description: "Neo-gogogo is a lightweight Go SDK that provides all the structures and methods required to interface with the Neo blockchain. All the necessary tools are available for any kind of application, making it easy to manage wallets, verify state proofs, interact with contracts and tokens, build transactions, send RPC requests, and more.",
                                icon_url: "/tooling/ngd.png",
                                web_url: "https://github.com/neo-ngd/neo3-gogogo",
                                github_url: "https://github.com/neo-ngd/neo3-gogogo",
                                docs_url: "https://github.com/neo-ngd/neo3-gogogo",
                                tags: ["go"]
                            },
                            {
                                name: "neon.js",
                                by: "COZ",
                                description: "Neon.js provides users with a complete set of javascript tools for integration with Neo. Neon.js is heavily leveraged in applications where the client directly communicates with the blockchain.",
                                icon_url: "/tooling/neon-js.png",
                                web_url: "https://github.com/CityOfZion/neon-js",
                                github_url: "https://github.com/CityOfZion/neon-js",
                                docs_url: "https://dojo.coz.io/neo3/neon-js",
                                tags: ["js"]
                            },
                            {
                                name: "Neow3j",
                                by: "AxLabs",
                                description: "Neow3j is a Java library that aims to provide easy and reliable integration with Neo nodes. It supports Neo RPC, asset transfers, smart contract invocations and deployments, NEP-2, NEP-6, building, signing and sending raw transactions, and more.",
                                icon_url: "/tooling/neow3j.png",
                                web_url: "https://neow3j.io/",
                                github_url: "https://github.com/neow3j/neow3j",
                                docs_url: "https://neow3j.io/",
                                tags: ["java"]
                            },
                            {
                                name: "RpcClient",
                                by: "The Neo Project",
                                description: "Neo RPC SDK is a dependency library used to streamline the integration of C# applications with Neo. Well suited for games, wallets, and other projects, the RPC SDK makes it easy to construct transactions, invoke RPC interfaces, and call deployed contracts.",
                                icon_url: "/tooling/ngd.png",
                                web_url: "https://developers.neo.org/docs/n3/develop/tool/sdk/introduction",
                                github_url: "https://github.com/neo-project/neo-modules",
                                docs_url: "https://github.com/neo-project/neo-modules",
                                tags: ["c#"]
                            }
                        ]
                    },

                ]

                const allTags = () => {
                    var tags = []
                    data.map((category) => {
                        category.tools.map((tool) => {
                            tool.tags.map((tag) => {
                                if (tags.includes(tag) == false)
                                    tags.push(tag)
                            })
                        })
                    })
                    return tags
                }



                return (
                    <Layout>
                        <div className="twcontainer  max-w-6xl px-4 lg:px-0 mx-auto">
                            <div className='flex'>

                                <div className='pt-20'>
                                    <div className="">
                                        <div className="mb-4 mx-auto flex flex-col text-center">
                                            <h2 className='mb-6'>Resources & Tooling</h2>
                                            <p className='max-w-xl mx-auto'>Discuss your application development questions in our Neo Discord channel, where you can find full support from the Neo global community — or help out your peers who are developing on the Neo platform.</p>
                                        </div>

                                        <div className='flex flex-wrap items-start gap-6 justify-evenly py-12'>
                                            {
                                                data.map((category) => (
                                                    <a href={`#${category.title}`} className='text-center flex flex-col items-center justify-center text-secondary hover:text-primary hover:no-underline'>
                                                        <div className=''>{category.iconSVG}</div>
                                                        <p className='mt-4 font-semibold w-40'>{category.title}</p>
                                                    </a>
                                                ))
                                            }
                                        </div>

                                        <div className='flex gap-4 p-6 bg-gray-100 mb-12'>
                                            <p className={`ppercase text-xs bg-gray-200 px-3 py-2 cursor-pointer ${selectedTag == "" ? "bg-primary" : ""}`} onClick={() => setSelectedTag("")}>All</p>
                                            {
                                                allTags().map((tag) => (
                                                    <p className={`uppercase text-xs bg-gray-200 px-3 py-2 cursor-pointer ${selectedTag == tag ? "bg-primary" : ""}`} onClick={() => setSelectedTag(tag)}>{tag}</p>
                                                ))
                                            }

                                        </div>
                                    </div>
                                    {
                                        data.map((category) => (

                                            <div className="mb-12">
                                                <a name={category.title} style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }}></a>
                                                <h1 className="text-xl font-semibold mb-6">{category.title}</h1>

                                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                                    {
                                                        category.tools.filter((tool) => { return category.id == "protocols" || tool.tags.includes(selectedTag) || selectedTag == "" }).length == 0 ?

                                                            <div className="lg:col-span-3">
                                                                Interested in contributing to <span className='font-semibold'>{category.title}</span> with <span className='font-semibold'>{selectedTag}</span>?
                                                                <p className='flex items-center'>
                                                                    <a className="text-primary flex items-center" href="https://neo.org/eco#general-grants" target="_blank">
                                                                        <span className='mr-2'>Check out Eco Support</span>
                                                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M11 7.66667V11.6667C11 12.0203 10.8595 12.3594 10.6095 12.6095C10.3594 12.8595 10.0203 13 9.66667 13H2.33333C1.97971 13 1.64057 12.8595 1.39052 12.6095C1.14048 12.3594 1 12.0203 1 11.6667V4.33333C1 3.97971 1.14048 3.64057 1.39052 3.39052C1.64057 3.14048 1.97971 3 2.33333 3H6.33333" stroke="#10E6A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                            <path d="M9 1H13V5" stroke="#10E6A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                            <path d="M5.66602 8.33333L12.9993 1" stroke="#10E6A0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                        </svg>
                                                                    </a>
                                                                </p>
                                                            </div>

                                                            :
                                                            category.tools.filter((tool) => { return category.id == "protocols" || (tool.tags.includes(selectedTag) || selectedTag == "") }).map((tool) => (
                                                                <div className="">
                                                                    <div className="border hover:border-primary hover:shadow-lg" style={{ height: 440 }}>
                                                                        <div className="border-b flex items-center justify-center p-10">
                                                                            <img src={tool.icon_url} className="h-16" />
                                                                        </div>
                                                                        <div className="p-6">
                                                                            <h3 className="text-lg font-bold mb-1">{tool.name}</h3>
                                                                            <p className="text-sm text-gray-500 mb-4">{tool.by}</p>
                                                                            <p className=" line-clamp-3 mb-6">{tool.description}</p>
                                                                            <p className="mb-6 flex gap-2">
                                                                                {
                                                                                    tool.tags.map((t) => (
                                                                                        <div className="bg-gray-300 text-xs text-secondary px-2 py-1 uppercase">{t}</div>
                                                                                    ))
                                                                                }
                                                                                <div className="bg-transparent text-xs text-secondary px-2 py-1 uppercase">&nbsp;</div>
                                                                            </p>
                                                                            <div className='flex'>
                                                                                <a className="text-secondary hover:text-primary font-semibold inline-flex items-center" href={tool.web_url} target="_blank">
                                                                                    Website
                                                                                </a>
                                                                                {
                                                                                    tool.github_url == "" ? null
                                                                                        :
                                                                                        <p>
                                                                                            &nbsp;|&nbsp;
                                                                                            <a className="text-secondary hover:text-primary font-semibold inline-flex items-center" href={tool.github_url} target="_blank">
                                                                                                Github
                                                                                            </a>
                                                                                        </p>
                                                                                }
                                                                                {
                                                                                    tool.docs_url == "" ? null
                                                                                        :
                                                                                        <p>
                                                                                            &nbsp;|&nbsp;

                                                                                            <a className="text-secondary hover:text-primary font-semibold inline-flex items-center" href={tool.docs_url} target="_blank">
                                                                                                Docs
                                                                                            </a>
                                                                                        </p>
                                                                                }
                                                                            </div>


                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ))
                                                    }

                                                </div>
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