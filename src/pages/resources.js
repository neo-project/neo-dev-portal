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
                        title: "Ecosystem Tools, Explorers, and API Providers",
                        id: "tools",
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
                                <div className=" pt-4 h-full sticky top-14 hidden lg:block">
                                    <div className='pl-2 w-80'>
                                        {
                                            data.map((category) => (
                                                <a href={`#${category.title}`} className='menu__link pl-0 hover:text-primary hover:bg-transparent'>{category.title}</a>
                                            ))
                                        }
                                    </div>
                                </div>

                                <div className='lg:border-l  ml-auto  pt-4'>


                                

                                    <div className='sticky top-16 bg-white pb-6'>
                                        <div className="flex mb-4 lg:pl-4">
                                            <h2>Resources & Tooling</h2>
                                            <div className="ml-auto">

                                            </div>
                                        </div>

                                    <p className='mb-2 font-bold lg:pl-4'>Choose your stack</p>
                                        <div className=' flex gap-4 lg:pl-4'>
                                            <p className={`bg-gray-200 px-3 py-2 cursor-pointer ${selectedTag == "" ? "bg-primary" : ""}`} onClick={() => setSelectedTag("")}>All</p>
                                            {
                                                allTags().map((tag) => (
                                                    <p className={`bg-gray-200 px-3 py-2 cursor-pointer ${selectedTag == tag ? "bg-primary" : ""}`} onClick={() => setSelectedTag(tag)}>{tag}</p>
                                                ))
                                            }

                                        </div>
                                    </div>
                                    {
                                        data.map((category) => (

                                            <div className="mb-12 lg:pl-4">
                                                <a name={category.title} style={{ display: "block", position: "relative", top: "-80px", visibility: "hidden" }}></a>
                                                <h1 className="text-lg font-semibold mb-6">{category.title}</h1>

                                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                                                                            <div className='flex gap-3'>
                                                                                <a className="text-gray-500 font-semibold inline-flex items-center" href={tool.web_url} target="_blank">
                                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                                                                    </svg>
                                                                                </a>
                                                                                {
                                                                                    tool.github_url == "" ? null
                                                                                        :
                                                                                        <a className="text-gray-500 font-semibold inline-flex items-center" href={tool.github_url} target="_blank">
                                                                                            <svg class="h-5 w-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                                                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                                                            </svg>
                                                                                        </a>
                                                                                }
                                                                                {
                                                                                    tool.docs_url == "" ? null
                                                                                        :
                                                                                        <a className="text-gray-500 font-semibold inline-flex items-center" href={tool.docs_url} target="_blank">
                                                                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                                            </svg>
                                                                                        </a>
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