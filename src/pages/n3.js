import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
export default function N3() {

    const registerVideo = (bound, video) => {
        bound = document.querySelector(bound);
        video = document.querySelector(video);
        const scrollVideo = ()=>{
            if(video.duration) {
                console.log()
                const distanceFromTop = window.scrollY + bound.getBoundingClientRect().top;
                const rawPercentScrolled = (window.scrollY - distanceFromTop) / (bound.scrollHeight - window.innerHeight);
                const percentScrolled = Math.min(Math.max(rawPercentScrolled, 0), 1);
                
                video.currentTime = video.duration * percentScrolled;
            }
            requestAnimationFrame(scrollVideo);
        }
        requestAnimationFrame(scrollVideo);
    }

    React.useEffect(()=>{
        // registerVideo("#bound", "#bound video");
    },[])

    return (
        <Layout >
            <div className="twcontainer mx-auto max-w-6xl px-4 lg:px-0 flex items-center py-4 sticky top-0">
                <div>
                    <p className="font-semibold text-base">N3</p>
                </div>
                <div className="ml-auto flex items-center gap-6 font-semibold">
                    <Link to="/n3" className="text-gray-500">Overview</Link>
                    <Link to="/comparen3">Compare N3 with Neo Legacy</Link>
                </div>
            </div> 
            <div className="bg-secondary mb-12 flex items-center justify-center sticky top-0">
                <div className="max-w-6xl mx-auto flex items-center justify-center w-full h-full" id="bound">
                        <video width="100%" height={"100%"} muted preload="true">
                            <source src="/n3/n3overview.mp4" type="video/mp4" />
                            <p>Your user agent does not support the HTML5 Video element.</p>
                    </video>
                </div>
            </div>
            <div className="twcontainer px-4 mx-auto max-w-6xl" >

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="order-2 lg:order-1">
                        <p className="uppercase text-3xl font-bold text-secondary mb-4"><span className="text-primary uppercase">DECENTRALIZED</span><br />STORAGE</p>
                        <p className="text-secondary max-w-sm mb-4">
                        NeoFS Network provides the benefits of decentralized storage without the compromises. Your data is always securely encrypted and available. Fully control its placement and access, and phase out centralized dependencies. NeoFS uses HTTP and S3 gateways so you can integrate existing apps or users without rearchitecting.
                        </p>
                        <a className="text-primary inline-flex items-center" href="">Learn more about the NeoFS Network
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg></a>
                    </div>
                    <div className="order-1 lg:order-1">
                        <img className="object-cover" src="/n3/storage.png" style={{height:"350px"}} />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div className="order-1 lg:order-1">
                        <img className="object-cover" src="/n3/oracle.png" style={{height:"350px"}}/>
                    </div>
                    <div  className="order-2 lg:order-2">
                        <p className="uppercase text-3xl font-bold text-secondary mb-4"><span className="text-primary uppercase">NATIVE</span><br />ORACLE</p>
                        <p className="text-secondary max-w-sm mb-4">
                        Smart contracts are a revolutionary tool, but their utility is limited by the data they can access. N3’s native oracle service lets developers access rich off-chain data sources through HTTPS or NeoFS requests, opening new opportunities to create valuable decentralized services.
                        </p>
                        <a className="text-primary inline-flex items-center" href="">Learn more about Neo's Native Oracles
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg></a>
                    </div>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  mb-20">

                    <div>
                        <img className="mb-12 object-cover" src="/n3/smartcontracts.png" style={{height:"350px"}}/>
                        <p className="uppercase text-3xl font-bold text-secondary mb-4"><span className="text-primary uppercase">SMART</span><br />CONTRACTS</p>
                        <p className="text-secondary max-w-sm mb-4">
                        N3’s smart contract system introduces a wide range of new functionality to improve the contract development experience and provides benefits to off-chain applications as well.
                        </p>
                        <a className="text-primary inline-flex items-center" href="">Learn more about Smart Contracts
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    <div>
                        <img className="mb-12 object-cover" src="/n3/identity.png" style={{height:"350px"}}/>
                        <p className="uppercase text-3xl font-bold text-secondary mb-4"><span className="text-primary uppercase">SELF-SOVEREIGN </span><br />IDENTITY</p>
                        <p className="text-secondary max-w-sm mb-4">
                        Through NeoID, you can customize the precise level of attribute verification needed to ensure that your contract operates correctly.
                        </p>
                        <a className="text-primary inline-flex items-center" href="">Learn more about NeoID
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="order-2 lg:order-1">
                        <p className="uppercase text-3xl font-bold text-secondary mb-4"><span className="text-primary uppercase">NEO NAME</span><br />SERVICE</p>
                        <p className="text-secondary max-w-sm mb-4">
                        Neo makes it easy for users to interact with the next generation of decentralized services. 
<br/><br/>
                        Neo's native name service provides domain-mapping for a number of record types. Powered by NFTs to enable open trading, NNS aliases can be used to replace public addresses, contract hashes, and NeoFS containers with human-friendly names.
                        </p>
                        <a className="text-primary inline-flex items-center" href="">Learn more about Neo's Native Domain Service
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg></a>
                    </div>
                    <div className="order-1 lg:order-2">
                        <img className="object-cover" src="/n3/nameservice.png" style={{height:"350px"}}/>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  mb-20">

                    <div>
                        <img className="mb-12 object-cover" src="/n3/finality.png" style={{height:"350px"}}/>
                        <p className="uppercase text-3xl font-bold text-secondary mb-4"><span className="text-primary uppercase">ONE BLOCK</span><br />FINALITY</p>
                        <p className="text-secondary max-w-sm mb-4">
                        Transactions on Neo are given immediate, irrevocable finality as soon as they are added to the blockchain.
                        </p>
                        <a className="text-primary inline-flex items-center" href="">Learn about Neo's dBFT Consensus Mechanism
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                    <div>
                        <img className="mb-12 object-cover" src="/n3/multilanguage.png" style={{height:"350px"}}/>
                        <p className="uppercase text-3xl font-bold text-secondary mb-4"><span className="text-primary uppercase">MULTI-LANGUAGE</span><br />SUPPORT</p>
                        <p className="text-secondary max-w-sm mb-4">
                        Neo meets developers where they are by integrating seamlessly with the world’s most widely used languages and tools.
                        </p>
                        <a className="text-primary inline-flex items-center" href="">Learn more about Neo's Multi-Language support
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <img className="object-cover" src="/n3/tooling.png" style={{height:"350px"}}/>
                    </div>
                    <div>
                        <p className="uppercase text-3xl font-bold text-secondary mb-4"><span className="text-primary uppercase">BEST IN CLASS </span><br />TOOLING</p>
                        <p className="text-secondary max-w-sm mb-4">
                        Neo continues to deliver on the's goal of being has always been to be the most developer- friendly platform. 
                        <br/>
                        The crown jewel of Neo's developer experience is the Neo Blockchain Toolkit for VS Code. Built by Microsoft-alumni at NGD Enterprise, the toolkit offers industry best tools for easy network deployment, testing, and time-travel debugging.
                        </p>
                        <a className="text-primary inline-flex items-center" href="">Explore Neo's Developer Resources
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg></a>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="order-2 lg:order-1">
                        <p className="uppercase text-3xl font-bold text-secondary mb-4"><span className="text-primary uppercase">ADVANCED</span><br />INTEROPERABILITY</p>
                        <p className="text-secondary max-w-sm mb-4">
                        Neo makes cross-chain interaction as easy as a native transaction. Neo connects with an ever-growing list of other blockchains through Neo's integration with Poly Network, enabling applications on Neo to easily tap into resources from heterogenous networks.
                        </p>
                        <a className="text-primary inline-flex items-center" href="">Learn more about Neo's Poly Network Integration
                            <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg></a>
                    </div>
                    <div className="order-1 lg:order-2">
                        <img className="object-cover" src="/n3/interop.png" style={{height:"350px"}}/>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-20 mb-24">
                    <div>
                        <svg className="mb-6" width="45" height="45" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1" width="45" height="45" stroke="#000033" strokeWidth="2" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M37.512 31.9296C36.4341 32.3757 35.2261 32.5987 33.888 32.5987C31.8065 32.5987 30.1014 32.2131 28.7726 31.4418C27.4439 30.6706 26.5193 29.5137 25.9989 27.9712L31.184 25.8247C31.2026 26.4751 31.3141 26.9862 31.5185 27.3579C31.7229 27.7296 32.0063 27.9851 32.3687 28.1245C32.7311 28.2639 33.1168 28.3336 33.5256 28.3336C33.9345 28.3336 34.2922 28.2639 34.5989 28.1245C34.9055 27.9851 35.1425 27.776 35.3097 27.4973C35.477 27.2185 35.5606 26.8933 35.5606 26.5216C35.5606 26.0941 35.4723 25.7596 35.2958 25.518C35.1192 25.2764 34.8823 25.1045 34.5849 25.0023C34.2876 24.9001 33.9438 24.849 33.5535 24.849C33.2933 24.849 33.0656 24.8583 32.8705 24.8769C32.6754 24.8954 32.4477 24.9233 32.1875 24.9605V21.5038C32.3362 21.5224 32.4849 21.5363 32.6336 21.5456C32.7822 21.5549 32.9681 21.5595 33.1911 21.5595C33.8787 21.5595 34.3805 21.4109 34.6964 21.1135C35.0124 20.8162 35.1703 20.333 35.1703 19.6639C35.1703 19.1064 35.017 18.6743 34.7104 18.3677C34.4037 18.061 33.9809 17.9077 33.442 17.9077C32.8659 17.9077 32.378 18.0796 31.9785 18.4234C31.5789 18.7672 31.3512 19.3945 31.2955 20.3051L26.3613 18.7161C26.51 17.6011 26.9328 16.6718 27.6297 15.9285C28.3266 15.1851 29.2094 14.6183 30.278 14.228C31.3466 13.8377 32.5313 13.6426 33.8323 13.6426C35.3004 13.6426 36.5409 13.847 37.5538 14.2559C38.5666 14.6647 39.3379 15.2501 39.8675 16.0121C40.3972 16.7741 40.662 17.7033 40.662 18.7998C40.662 19.6361 40.5273 20.3237 40.2578 20.8626C39.9883 21.4016 39.6492 21.829 39.2403 22.145C38.8315 22.4609 38.4412 22.6885 38.0695 22.8279C37.6978 22.9673 37.4098 23.037 37.2053 23.037V23.1485C37.4283 23.1485 37.7489 23.195 38.1671 23.2879C38.5852 23.3808 39.0127 23.5574 39.4494 23.8175C39.8861 24.0777 40.2578 24.4634 40.5645 24.9744C40.8711 25.4855 41.0244 26.1592 41.0244 26.9955C41.0244 28.1477 40.7085 29.1466 40.0766 29.9922C39.4447 30.8378 38.5899 31.4836 37.512 31.9296ZM11.3077 24.3453V32.318H6.3457V13.9194H12.5622L17.58 23.0351L18.7787 25.5161H18.8066L18.6951 21.8922V13.9194H23.685V32.318H17.4406L12.4228 23.2024L11.252 20.7213H11.1962L11.3077 24.3453Z" fill="#000033" />
                        </svg>

                        <p className="text-xl font-bold mb-3">Guide to N3 Migration</p>
                        <p className="text-secondary mb-3">Learn how to migrate<br/>legacy Neo assets<br/> to Neo N3.</p>
                        <a href="" className="inline-flex items-center text-primary">Learn more
                            <svg className="ml-2" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.53516 1L5.07069 4.53553L1.53516 8.07107" stroke="#10E6A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </a>
                    </div>

                    <div>
                        <svg className="mb-6" width="39" height="45" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 11H28" stroke="#000033" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 17H28" stroke="#000033" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="1" y="1" width="37" height="43" rx="4" stroke="#000033" strokeWidth="2" />
                            <path d="M14 27L11 30L14 33" stroke="#000033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M26 27L29 30L26 33" stroke="#000033" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M19 34.8555L20.6098 26.0006" stroke="#000033" strokeWidth="2" strokeLinecap="round" />
                        </svg>

                        <p className="text-xl font-bold mb-3">Developer Resources</p>
                        <p className="text-secondary mb-3">
                        This comprehensive collection of tools and resources will help you build applications on the Neo blockchain.
                        </p>
                        <a href="" className="inline-flex items-center text-primary">Learn more
                            <svg className="ml-2" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.53516 1L5.07069 4.53553L1.53516 8.07107" stroke="#10E6A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </a>
                    </div>

                    <div>
                        <svg className="mb-6" width="39" height="45" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.9327 22L18.786 19.1915H13.2463L12.0996 22H10L15.1521 10H16.8479L22 22H19.9327ZM13.9246 17.4894H18.0915L16.0081 12.383L13.9246 17.4894Z" fill="#000033" />
                            <path d="M11 28H28" stroke="#000033" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M11 34H28" stroke="#000033" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                            <rect x="1" y="1" width="37" height="43" rx="4" stroke="#000033" strokeWidth="2" />
                        </svg>


                        <p className="text-xl font-bold mb-3">Read Documentation</p>
                        <p className="text-secondary mb-3">
                        Browse an extensive library of Neo technical documents, including development examples.
                        </p>
                        <a href="" className="inline-flex items-center text-primary">Learn more
                            <svg className="ml-2" width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.53516 1L5.07069 4.53553L1.53516 8.07107" stroke="#10E6A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </a>
                    </div>

                </div>

            </div>
        </Layout>
    )
}