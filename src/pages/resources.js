import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { useHistory } from "react-router-dom"

export default function Tooling(props) {
    return (
        <BrowserOnly>
            {() => {

                const search = props.location.search;
                const params = new URLSearchParams(search);


                const [selectedTags, setSelectedTags] = React.useState(params.get('tags') ? params.get('tags').split(",") : [])
                const [selectedCategories, setSelectedCategories] = React.useState(params.get('categories') ? params.get('categories').split(",") : [])
                const [searchResult, setSearchResult] = React.useState([])
                const history = useHistory()

                //Define category item here
                const categories = {
                    "protocols":
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
                        </svg>)
                    },
                    "dev-env": {
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
                    },
                    "cdks": {
                        title: "Contract Development Kits",
                        id: "cdks",
                        iconSVG: <svg className='stroke-current' width="31" height="36" viewBox="0 0 31 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="6.75" y="0.75" width="17.5" height="33.5" rx="1.75" stroke-width="1.5" />
                            <rect x="3.75" y="3.75" width="23.5" height="30.5" rx="1.75" fill="white" stroke-width="1.5" />
                            <rect x="0.75" y="6.75" width="29.5" height="28.5" rx="4.25" fill="white" stroke-width="1.5" />
                            <path d="M8.80078 14.5996H22.4008" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M11.2008 21.5996L8.80078 23.9996L11.2008 26.3996" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.7992 21.5996L23.1992 23.9996L20.7992 26.3996" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.1992 27.8848L16.4871 20.8009" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    },
                    "tools": {
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
                    },
                    "nodes": {
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
                    },
                    "sdks": {
                        title: "SDKs",
                        id: "sdks",
                        iconSVG: <svg className='stroke-current' width="30" height="36" viewBox="0 0 30 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.7086 15.3345L1.29527 23.6851C0.683778 24.0658 0.663189 24.9486 1.25627 25.3574L14.669 34.6023C15.0153 34.8411 15.474 34.8375 15.8166 34.5935L28.7973 25.3482C29.3734 24.9378 29.3531 24.0753 28.7582 23.6926L15.7782 15.3424C15.4531 15.1333 15.0367 15.1302 14.7086 15.3345Z" stroke-width="1.5" />
                            <path d="M14.7086 8.33449L1.29527 16.6851C0.683778 17.0658 0.663189 17.9486 1.25627 18.3574L14.669 27.6023C15.0153 27.8411 15.474 27.8375 15.8166 27.5935L28.7973 18.3482C29.3734 17.9378 29.3531 17.0753 28.7582 16.6926L15.7782 8.34241C15.4531 8.13332 15.0367 8.13023 14.7086 8.33449Z" fill="white" stroke-width="1.5" />
                            <path d="M14.7086 1.33449L1.29527 9.68514C0.683778 10.0658 0.663189 10.9486 1.25627 11.3574L14.669 20.6023C15.0153 20.8411 15.474 20.8375 15.8166 20.5935L28.7973 11.3482C29.3734 10.9378 29.3531 10.0753 28.7582 9.69264L15.7782 1.34241C15.4531 1.13332 15.0367 1.13023 14.7086 1.33449Z" fill="white" stroke-width="1.5" />
                        </svg>
                    }
                }

                //Add your resource here
                const resources = [
                    {
                        name: "NeoFS",
                        by: "Neo SPCC",
                        description: "NeoFS is a distributed, decentralized object storage network natively integrated with the Neo blockchain.",
                        icon_url: "/tooling/nspcc.png",
                        web_url: "https://fs.neo.org/",
                        github_url: "https://github.com/nspcc-dev",
                        docs_url: "https://fs.neo.org/services",
                        supported_languages: ["c#", "go"],
                        categories: ["protocols"],
                    },
                    {
                        name: "Oracles",
                        by: "Neo Global Development",
                        description: "Oracles are a utility which can be leveraged by smart contracts to interface with systems outside the Neo blockchain.",
                        icon_url: "/tooling/ngd.png",
                        web_url: "https://developers.neo.org/docs/n3/Advances/Oracles",
                        github_url: "https://github.com/neo-project",
                        docs_url: "https://developers.neo.org/docs/n3/Advances/Oracles",
                        supported_languages: ["c#", "go", "python", "java"],
                        categories: ["protocols"],
                    },
                    {
                        name: "Neo Blockchain Toolkit",
                        by: "NGD Enterprise",
                        description: "The Neo Blockchain Toolkit is an all-in-one extension for VS Code for creating and preparing smart contracts for production.",
                        icon_url: "/tooling/neoblockchaintoolkit.png",
                        web_url: "https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit",
                        github_url: "https://github.com/neo-project/neo-blockchain-toolkit",
                        docs_url: "https://github.com/neo-project/neo-blockchain-toolkit",
                        supported_languages: ["c#", "python", "java", "js", "go"],
                        categories: ["dev-env"],
                    },
                    {
                        name: "Neo Compiler Eco",
                        by: "Neo Research",
                        description: "Online development environment/tool to write, compile, and deploy smart contracts to TestNet.",
                        icon_url: "/tooling/neocompiler.png",
                        web_url: "https://neocompiler.io/",
                        github_url: "https://github.com/NeoResearch/neocompiler-eco",
                        docs_url: "https://github.com/NeoResearch/neocompiler-eco",
                        supported_languages: ["c#"],
                        categories: ["dev-env"],
                    },
                    {
                        name: "NEO•ONE",
                        by: "Neo Tracker",
                        description: "NEO•ONE is an end-to-end development framework for Neo applications created with TypeScript or JavaScript.",
                        icon_url: "/tooling/neo-one.svg",
                        web_url: "https://n3.neo-one.io/",
                        github_url: "https://github.com/neo-one-suite/neo-one",
                        docs_url: "https://github.com/neo-one-suite/neo-one",
                        supported_languages: ["js"],
                        categories: ["dev-env"],
                    },
                    {
                        name: "Neow3j",
                        by: "AxLabs",
                        description: "Neow3j is a reputable development toolkit to build dApps and Smart Contracts using the Java platform (Java, Kotlin, Android).",
                        icon_url: "/tooling/neow3j.png",
                        web_url: "https://neow3j.io/",
                        github_url: "https://github.com/neow3j/neow3j",
                        docs_url: "https://neow3j.io/",
                        supported_languages: ["java"],
                        categories: ["sdks", "cdks"]
                    },
                    {
                        name: "boa",
                        by: "COZ",
                        description: "Boa is a compiler for Python smart contracts. Test and debug your smart contracts written in Python.",
                        icon_url: "/tooling/boa.png",
                        web_url: "https://dojo.coz.io/neo3/boa/index.html",
                        github_url: "https://github.com/CityOfZion/neo3-boa",
                        docs_url: "https://dojo.coz.io/neo3/boa/index.html",
                        supported_languages: ["python"],
                        categories: ["cdks"]
                    },
                    {
                        name: "Neo-Go",
                        by: "Neo SPCC",
                        description: "Neo-Go is a fully featured and well documented alternative implementation of the core Neo stack, written in Go.",
                        icon_url: "/tooling/nspcc.png",
                        web_url: "https://github.com/nspcc-dev/neo-go/releases",
                        github_url: "https://github.com/nspcc-dev/neo-go",
                        docs_url: "https://pkg.go.dev/github.com/nspcc-dev/neo-go",
                        supported_languages: ["go"],
                        categories: ["cdks", "nodes"]
                    },
                    {
                        name: "neo-devpack",
                        by: "Neo Global Development",
                        description: "The core neo devpack for dotnet provides all the tools required to compile smart contracts written in C#.",
                        icon_url: "/tooling/ngd.png",
                        web_url: "https://github.com/neo-project/neo-devpack-dotnet",
                        github_url: "https://github.com/neo-project/neo-devpack-dotnet",
                        docs_url: "https://github.com/neo-project/neo-devpack-dotnet",
                        supported_languages: ["c#"],
                        categories: ["cdks"]
                    },
                    {
                        name: "WalletConnect SDK",
                        by: "COZ",
                        description: "WalletConnect is an open protocol to communicate securely between Wallets and Dapps",
                        icon_url: "/tooling/walletconnect.svg",
                        web_url: "https://neon.coz.io/wksdk/core/index.html",
                        github_url: "https://github.com/CityOfZion/wallet-connect-sdk",
                        docs_url: "https://neon.coz.io/wksdk/core/index.html",
                        supported_languages: ["js"],
                        categories: ["tools"]
                    },
                    {
                        name: "dAPI",
                        by: "NEXT",
                        description: "dAPI is a wallet interface which allows users to sign transaction requests without exposing their private key.",
                        icon_url: "/tooling/neo-line.png",
                        web_url: "https://neoline.io/dapi/N3.html",
                        github_url: "https://neoline.io/dapi/N3.html",
                        docs_url: "https://neoline.io/dapi/N3.html",
                        supported_languages: [],
                        categories: ["tools"]
                    },
                    {
                        name: "dora",
                        by: "COZ",
                        description: "Dora is a high speed block explorer with N3 and Neo Legacy integrations. Comes with a public API.",
                        icon_url: "/tooling/dora.png",
                        web_url: "https://dora.coz.io/",
                        github_url: "https://github.com/CityOfZion/dora",
                        docs_url: "https://github.com/CityOfZion/dora",
                        supported_languages: [],
                        categories: ["tools"]
                    },
                    {
                        name: "Faucet",
                        by: "Neo Global Development",
                        description: "Get GAS on the Neo N3 TestNet for the development, testing, debugging, and deployment of smart contracts.",
                        icon_url: "/tooling/ngd.png",
                        web_url: "https://n3t5wish.ngd.network/#/",
                        github_url: "",
                        docs_url: "",
                        supported_languages: [],
                        categories: ["tools"]
                    },
                    {
                        name: "NeoTube",
                        by: "NEXT",
                        description: "NeoTube is a reliable Neo block explorer with seperate versions for Neo Legacy and N3.",
                        icon_url: "/tooling/ngd.png",
                        web_url: "https://neo3.neotube.io/",
                        github_url: "",
                        docs_url: "",
                        supported_languages: [],
                        categories: ["tools"]
                    },
                    {
                        name: "Neo-Node",
                        by: "The Neo Project",
                        description: "A reference for neo full-node that includes all of the CLI functionality required to interface with the network.",
                        icon_url: "/tooling/neo-cli.svg",
                        web_url: "https://github.com/neo-project/neo-node",
                        github_url: "https://github.com/neo-project/neo-node",
                        docs_url: "https://github.com/neo-project/neo-node",
                        supported_languages: ["c#"],
                        categories: ["nodes"]
                    },
                    {
                        name: "Neo GUI",
                        by: "The Neo Project",
                        description: "The Neo GUI project wraps a neo node in an electron app, exposing many of its features in a graphical interface.",
                        icon_url: "/tooling/neo-gui.png",
                        web_url: "https://docs.neo.org/docs/en-us/node/gui/install.html",
                        github_url: "https://docs.neo.org/docs/en-us/node/gui/install.html",
                        docs_url: "https://docs.neo.org/docs/en-us/node/gui/install.html",
                        supported_languages: ["c#"],
                        categories: ["nodes"]
                    },
                    {
                        name: "mamba",
                        by: "COZ",
                        description: "Mamba is a Python SDK on steroids. Capable of speeds over twenty times faster than official release.",
                        icon_url: "/tooling/mamba.png",
                        web_url: "https://dojo.coz.io/",
                        github_url: "https://github.com/CityOfZion/neo-mamba",
                        docs_url: "https://dojo.coz.io/neo3/mamba/index.html",
                        supported_languages: ["python"],
                        categories: ["sdks"]
                    },
                    {
                        name: "Neo-gogogo",
                        by: "Neo Global Development",
                        description: "Neo-gogogo is a Go SDK that provides all the structures and methods required to interface with the Neo blockchain.",
                        icon_url: "/tooling/ngd.png",
                        web_url: "https://github.com/neo-ngd/neo3-gogogo",
                        github_url: "https://github.com/neo-ngd/neo3-gogogo",
                        docs_url: "https://github.com/neo-ngd/neo3-gogogo",
                        supported_languages: ["go"],
                        categories: ["sdks"]
                    },
                    {
                        name: "neon.js",
                        by: "COZ",
                        description: "Neon.js provides users with a complete set of JavaScript tools for integration with Neo. Connect your app to the Neo blockchain.",
                        icon_url: "/tooling/neon-js.png",
                        web_url: "https://github.com/CityOfZion/neon-js",
                        github_url: "https://github.com/CityOfZion/neon-js",
                        docs_url: "https://dojo.coz.io/neo3/neon-js",
                        supported_languages: ["js"],
                        categories: ["sdks"]
                    },
                    {
                        name: "RpcClient",
                        by: "The Neo Project",
                        description: "Neo RPC SDK is a dependency library used to streamline the integration of C# applications with Neo.",
                        icon_url: "/tooling/ngd.png",
                        web_url: "https://developers.neo.org/docs/n3/develop/tool/sdk/introduction",
                        github_url: "https://github.com/neo-project/neo-modules",
                        docs_url: "https://github.com/neo-project/neo-modules",
                        supported_languages: ["c#"],
                        categories: ["sdks"]
                    },
                    {
                        name: "Props",
                        by: "COZ",
                        description: "The PROPS project is general purpose smart contracts and developer framework for Neo N3.",
                        icon_url: "/tooling/props_puppet_icon.svg",
                        web_url: "https://props.coz.io/d",
                        github_url: "https://github.com/CityOfZion/props",
                        docs_url: "https://props.coz.io/d",
                        supported_languages: ["js"],
                        categories: ["sdks"]
                    }

                ]


                const allLanguages = () => {
                    var languages = []
                    resources.map((item) => {
                        item.supported_languages.map((lang) => {
                            if (languages.includes(lang) == false) {
                                languages.push(lang)
                            }
                        })
                    })
                    return languages
                }

                const onSelectTag = (e, tag) => {
                    const index = selectedTags.indexOf(tag);
                    if (index > -1) {
                        const temp = [...selectedTags];
                        temp.splice(index, 1);
                        setSelectedTags(temp)
                    } else {
                        setSelectedTags(selectedTags => [...selectedTags, tag])
                    }
                }

                const onSelectCategory = (e, categoryId) => {
                    const index = selectedCategories.indexOf(categoryId);
                    if (index > -1) {
                        const temp = [...selectedCategories];
                        temp.splice(index, 1);
                        setSelectedCategories(temp)
                    } else {
                        setSelectedCategories(selectedCategories => [...selectedCategories, categoryId])
                    }
                }

                React.useEffect(() => {

                    const params = new URLSearchParams()
                    if (selectedTags.length > 0) {
                        params.append("tags", selectedTags)
                    } else {
                        params.delete("tags")
                    }

                    if (selectedCategories.length > 0) {
                        params.append("categories", selectedCategories)
                    } else {
                        params.delete("categories")

                    }
                    history.push({ search: params.toString() })

                    if (selectedTags.length == 0 && selectedCategories.length === 0) {
                        setSearchResult([])
                        return
                    }

                    let temp = []

                    if (selectedCategories.length > 0) {
                        selectedCategories.map((categoryId) => {
                            let filtered = resources.filter((item) => {
                                return item.categories.includes(categoryId)
                            })
                            temp.push.apply(temp, filtered)
                        })
                    } else {
                        temp = [...resources]
                    }

                    //when user selected tags/languages
                    if (selectedTags.length > 0) {
                        let filtered = selectedTags.map((tag) => {
                            return temp.filter((item) => {
                                return item.supported_languages.includes(tag)
                            })
                        })
                        let unique = filtered.reduce((prev, curr) => prev.concat(curr), [])
                        temp = unique
                    }

                    if (selectedTags.length > 0 || selectedCategories.length > 0) {
                        setSearchResult(temp)
                    } else {
                        setSearchResult([])
                    }



                }, [selectedTags, selectedCategories])


                return (
                    <Layout>
                        <div className="twcontainer  max-w-6xl px-4 lg:px-0 mx-auto">
                            <div className='flex'>

                                <div className='pt-20'>
                                    <div className="">
                                        <div className="mb-16 mx-auto flex flex-col text-center">
                                            <h2 className='mb-6'>Resources & Tooling</h2>
                                            <p className='max-w-xl mx-auto'>Find everything you need to build on the Neo platform in the language you know best. This page points you to recommended resources and tooling from NGD and Neo developer communities.</p>
                                        </div>

                                        <div className='flex flex-wrap items-start gap-6 justify-evenly mb-16'>
                                            {
                                                Object.keys(categories).map((key) => (
                                                    <div key={key} onClick={(e) => onSelectCategory(e, key)}
                                                        className={` relative cursor-pointer text-center flex flex-col items-center justify-center hover:text-primary hover:no-underline ${selectedCategories.indexOf(key) > -1 ? "text-primary" : "text-secondary"}`}>
                                                        <div className='relative'>
                                                            {categories[key].iconSVG}
                                                            {
                                                                selectedCategories.indexOf(key) > -1 ?
                                                                    <div className='absolute -top-2  -right-6'>
                                                                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M3.50008 3.50001L6.5 6.5M6.49992 3.5L3.5 6.49999" stroke="#10E6A0" stroke-linecap="round" />
                                                                            <circle cx="5" cy="5" r="4.5" stroke="#10E6A0" />
                                                                        </svg>
                                                                    </div>
                                                                    : null
                                                            }

                                                        </div>
                                                        <p className='mt-4 font-semibold w-40'>{categories[key].title}</p>
                                                    </div>
                                                ))
                                            }

                                        </div>

                                        <div className='flex gap-3 p-6 border-t border-b mb-20' style={{ backgroundColor: "#FAFBFC" }}>
                                            {
                                                allLanguages().map((tag) => (
                                                    <p key={tag} className={`text-xs font-semibold px-2 py-1 inline-flex items-center cursor-pointer ${selectedTags.indexOf(tag) > -1 ? "bg-primary text-secondary" : "bg-gray-200 text-secondary"}`} onClick={(e) => onSelectTag(e, tag)}>
                                                        {tag.toUpperCase()}
                                                        {
                                                            selectedTags.indexOf(tag) > -1 ?
                                                                <svg className='ml-1' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M3.50008 3.50001L6.5 6.5M6.49992 3.5L3.5 6.49999" stroke="#000033" stroke-linecap="round" />
                                                                    <circle cx="5" cy="5" r="4.5" stroke="#000033" />
                                                                </svg>
                                                                : null
                                                        }
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    {
                                        searchResult.length > 0 && (
                                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-y-8 mb-20">
                                                {
                                                    searchResult.map((item) => (
                                                        <div key={item.name} className="">
                                                            <div className="border hover:border-primary hover:shadow-lg" style={{ height: 504 }}>
                                                                <div className='px-6 py-3 border-b flex items-center truncate overflow-ellipsis gap-3'>
                                                                    {item.categories.map((id) => (
                                                                        <p key={id} className='font-semibold'>{categories[id].title}</p>
                                                                    ))}
                                                                </div>
                                                                <div className="border-b flex items-center justify-center p-10">
                                                                    <img src={item.icon_url} className="h-16" />
                                                                </div>
                                                                <div className="p-6">
                                                                    <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                                                                    <p className="text-sm text-gray-500 mb-4">{item.by}</p>
                                                                    <p className=" line-clamp-3 mb-4">{item.description}</p>
                                                                    <p className='text-xs mb-3 uppercase'>Supported languages:</p>
                                                                    <div className="mb-6 flex gap-3">

                                                                        {
                                                                            item.supported_languages.map((t) => (
                                                                                <div key={t} className=" text-xs text-secondary px-2 py-1 uppercase bg-gray-200">{t}</div>
                                                                            ))
                                                                        }
                                                                        <div className="bg-transparent text-xs text-secondary px-2 py-1 uppercase">&nbsp;</div>
                                                                    </div>
                                                                    <div className='flex'>
                                                                        <a className="text-secondary hover:text-primary font-semibold inline-flex items-center" href={item.web_url} target="_blank">
                                                                            Website
                                                                        </a>
                                                                        {
                                                                            item.github_url == "" ? null
                                                                                :
                                                                                <p>
                                                                                    &nbsp;|&nbsp;
                                                                                    <a className="text-secondary hover:text-primary font-semibold inline-flex items-center" href={item.github_url} target="_blank">
                                                                                        Github
                                                                                    </a>
                                                                                </p>
                                                                        }
                                                                        {
                                                                            item.docs_url == "" ? null
                                                                                :
                                                                                <p>
                                                                                    &nbsp;|&nbsp;

                                                                                    <a className="text-secondary hover:text-primary font-semibold inline-flex items-center" href={item.docs_url} target="_blank">
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
                                        )
                                    }


                                    {
                                        selectedTags.length === 0 && selectedCategories.length === 0 && Object.keys(categories).map((key) => (

                                            <div key={key} className="mb-20">
                                                <a name={categories[key].title} style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }}></a>
                                                <h1 className="text-xl font-semibold mb-6">{categories[key].title}</h1>

                                                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                                    {
                                                        resources.filter((item) => (item.categories.includes(categories[key].id))).map((item) => (
                                                            <div className="">
                                                                <div className="border hover:border-primary hover:shadow-lg" style={{ height: 440 }}>
                                                                    <div className="border-b flex items-center justify-center p-10">
                                                                        <img src={item.icon_url} className="h-16" />
                                                                    </div>
                                                                    <div className="p-6">
                                                                        <h3 className="text-lg font-bold mb-1">{item.name}</h3>
                                                                        <p className="text-sm text-gray-500 mb-4">{item.by}</p>
                                                                        <p className=" line-clamp-3 mb-4">{item.description}</p>
                                                                        <p className='text-xs mb-3 uppercase'>Supported languages:</p>
                                                                        <p className="mb-6 flex gap-2">

                                                                            {
                                                                                item.supported_languages.map((t) => (
                                                                                    <div key={t} className=" text-xs text-secondary px-2 py-1 uppercase bg-gray-200">{t}</div>
                                                                                ))
                                                                            }
                                                                            <div className="bg-transparent text-xs text-secondary px-2 py-1 uppercase">&nbsp;</div>
                                                                        </p>
                                                                        <div className='flex'>
                                                                            <a className="text-secondary hover:text-primary font-semibold inline-flex items-center" href={item.web_url} target="_blank">
                                                                                Website
                                                                            </a>
                                                                            {
                                                                                item.github_url == "" ? null
                                                                                    :
                                                                                    <p>
                                                                                        &nbsp;|&nbsp;
                                                                                        <a className="text-secondary hover:text-primary font-semibold inline-flex items-center" href={item.github_url} target="_blank">
                                                                                            Github
                                                                                        </a>
                                                                                    </p>
                                                                            }
                                                                            {
                                                                                item.docs_url == "" ? null
                                                                                    :
                                                                                    <p>
                                                                                        &nbsp;|&nbsp;

                                                                                        <a className="text-secondary hover:text-primary font-semibold inline-flex items-center" href={item.docs_url} target="_blank">
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
