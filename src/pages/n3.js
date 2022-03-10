import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
export default function N3() {
    return (
        <Layout>
            <div className="twcontainer mx-auto max-w-6xl px-4 lg:px-0 flex items-center py-4 sticky top-0">
                <div>
                    <p className="font-semibold text-base">N3</p>
                </div>
                <div className="ml-auto flex items-center gap-6 font-semibold">
                    <Link to="/n3" className="text-gray-500">Overview</Link>
                    <Link to="/comparen3">Compare N3 with Neo Legacy</Link>
                </div>
            </div> 
            <div className="bg-secondary mb-12 flex items-center justify-center w-full">
                {/* <div className="max-w-6xl mx-auto flex items-center justify-center">
                    <svg width="125" height="125" viewBox="0 0 125 125" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="3" y="3" width="119" height="119" stroke="#00E599" strokeWidth="5" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M99.5531 84.7908C96.7026 85.9703 93.5082 86.56 89.9697 86.56C84.4654 86.56 79.9563 85.5403 76.4424 83.5007C72.9285 81.4612 70.4835 78.4019 69.1074 74.3228L82.819 68.6465C82.8682 70.3666 83.163 71.7181 83.7037 72.701C84.2443 73.6839 84.9937 74.3597 85.9521 74.7283C86.9104 75.0968 87.9302 75.2811 89.0114 75.2811C90.0926 75.2811 91.0386 75.0968 91.8495 74.7283C92.6604 74.3597 93.287 73.8068 93.7293 73.0696C94.1716 72.3324 94.3928 71.4724 94.3928 70.4895C94.3928 69.3591 94.1593 68.4745 93.6925 67.8356C93.2256 67.1967 92.599 66.7421 91.8127 66.4718C91.0263 66.2015 90.1171 66.0664 89.0851 66.0664C88.397 66.0664 87.795 66.0909 87.279 66.1401C86.763 66.1892 86.1609 66.2629 85.4729 66.3612V57.2202C85.8661 57.2693 86.2592 57.3062 86.6524 57.3308C87.0455 57.3553 87.537 57.3676 88.1267 57.3676C89.9451 57.3676 91.2721 56.9744 92.1075 56.1881C92.943 55.4018 93.3607 54.124 93.3607 52.3548C93.3607 50.8804 92.9553 49.7378 92.1444 48.9269C91.3335 48.116 90.2154 47.7105 88.7902 47.7105C87.2667 47.7105 85.9766 48.1651 84.92 49.0743C83.8634 49.9835 83.2613 51.6422 83.1139 54.0503L70.0658 49.8484C70.4589 46.8996 71.577 44.4424 73.42 42.4765C75.2629 40.5107 77.5973 39.0118 80.4232 37.9797C83.2491 36.9477 86.3821 36.4316 89.8223 36.4316C93.7048 36.4316 96.9852 36.9722 99.6636 38.0534C102.342 39.1346 104.382 40.6827 105.782 42.6977C107.183 44.7127 107.883 47.1699 107.883 50.0695C107.883 52.2811 107.527 54.0994 106.814 55.5247C106.102 56.9499 105.205 58.0802 104.124 58.9157C103.042 59.7512 102.01 60.3532 101.027 60.7218C100.045 61.0904 99.2828 61.2747 98.7422 61.2747V61.5696C99.3319 61.5696 100.18 61.6924 101.285 61.9381C102.391 62.1839 103.522 62.6508 104.676 63.3388C105.831 64.0268 106.814 65.0466 107.625 66.3981C108.436 67.7496 108.842 69.5311 108.842 71.7427C108.842 74.7897 108.006 77.4313 106.335 79.6674C104.664 81.9035 102.404 83.6113 99.5531 84.7908ZM30.2576 64.7394V85.8228H17.1357V37.1688H33.5749L46.8442 61.2747L50.0141 67.8356H50.0878L49.7929 58.2522V37.1688H62.9885V85.8228H46.4756L33.2063 61.717L30.1101 55.1561H29.9627L30.2576 64.7394Z" fill="#000033" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M99.5531 84.7908C96.7026 85.9703 93.5082 86.56 89.9697 86.56C84.4654 86.56 79.9563 85.5403 76.4424 83.5007C72.9285 81.4612 70.4835 78.4019 69.1074 74.3228L82.819 68.6465C82.8682 70.3666 83.163 71.7181 83.7037 72.701C84.2443 73.6839 84.9937 74.3597 85.9521 74.7283C86.9104 75.0968 87.9302 75.2811 89.0114 75.2811C90.0926 75.2811 91.0386 75.0968 91.8495 74.7283C92.6604 74.3597 93.287 73.8068 93.7293 73.0696C94.1716 72.3324 94.3928 71.4724 94.3928 70.4895C94.3928 69.3591 94.1593 68.4745 93.6925 67.8356C93.2256 67.1967 92.599 66.7421 91.8127 66.4718C91.0263 66.2015 90.1171 66.0664 89.0851 66.0664C88.397 66.0664 87.795 66.0909 87.279 66.1401C86.763 66.1892 86.1609 66.2629 85.4729 66.3612V57.2202C85.8661 57.2693 86.2592 57.3062 86.6524 57.3308C87.0455 57.3553 87.537 57.3676 88.1267 57.3676C89.9451 57.3676 91.2721 56.9744 92.1075 56.1881C92.943 55.4018 93.3607 54.124 93.3607 52.3548C93.3607 50.8804 92.9553 49.7378 92.1444 48.9269C91.3335 48.116 90.2154 47.7105 88.7902 47.7105C87.2667 47.7105 85.9766 48.1651 84.92 49.0743C83.8634 49.9835 83.2613 51.6422 83.1139 54.0503L70.0658 49.8484C70.4589 46.8996 71.577 44.4424 73.42 42.4765C75.2629 40.5107 77.5973 39.0118 80.4232 37.9797C83.2491 36.9477 86.3821 36.4316 89.8223 36.4316C93.7048 36.4316 96.9852 36.9722 99.6636 38.0534C102.342 39.1346 104.382 40.6827 105.782 42.6977C107.183 44.7127 107.883 47.1699 107.883 50.0695C107.883 52.2811 107.527 54.0994 106.814 55.5247C106.102 56.9499 105.205 58.0802 104.124 58.9157C103.042 59.7512 102.01 60.3532 101.027 60.7218C100.045 61.0904 99.2828 61.2747 98.7422 61.2747V61.5696C99.3319 61.5696 100.18 61.6924 101.285 61.9381C102.391 62.1839 103.522 62.6508 104.676 63.3388C105.831 64.0268 106.814 65.0466 107.625 66.3981C108.436 67.7496 108.842 69.5311 108.842 71.7427C108.842 74.7897 108.006 77.4313 106.335 79.6674C104.664 81.9035 102.404 83.6113 99.5531 84.7908ZM30.2576 64.7394V85.8228H17.1357V37.1688H33.5749L46.8442 61.2747L50.0141 67.8356H50.0878L49.7929 58.2522V37.1688H62.9885V85.8228H46.4756L33.2063 61.717L30.1101 55.1561H29.9627L30.2576 64.7394Z" fill="url(#paint0_linear_389_1902)" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M99.5531 84.7908C96.7026 85.9703 93.5082 86.56 89.9697 86.56C84.4654 86.56 79.9563 85.5403 76.4424 83.5007C72.9285 81.4612 70.4835 78.4019 69.1074 74.3228L82.819 68.6465C82.8682 70.3666 83.163 71.7181 83.7037 72.701C84.2443 73.6839 84.9937 74.3597 85.9521 74.7283C86.9104 75.0968 87.9302 75.2811 89.0114 75.2811C90.0926 75.2811 91.0386 75.0968 91.8495 74.7283C92.6604 74.3597 93.287 73.8068 93.7293 73.0696C94.1716 72.3324 94.3928 71.4724 94.3928 70.4895C94.3928 69.3591 94.1593 68.4745 93.6925 67.8356C93.2256 67.1967 92.599 66.7421 91.8127 66.4718C91.0263 66.2015 90.1171 66.0664 89.0851 66.0664C88.397 66.0664 87.795 66.0909 87.279 66.1401C86.763 66.1892 86.1609 66.2629 85.4729 66.3612V57.2202C85.8661 57.2693 86.2592 57.3062 86.6524 57.3308C87.0455 57.3553 87.537 57.3676 88.1267 57.3676C89.9451 57.3676 91.2721 56.9744 92.1075 56.1881C92.943 55.4018 93.3607 54.124 93.3607 52.3548C93.3607 50.8804 92.9553 49.7378 92.1444 48.9269C91.3335 48.116 90.2154 47.7105 88.7902 47.7105C87.2667 47.7105 85.9766 48.1651 84.92 49.0743C83.8634 49.9835 83.2613 51.6422 83.1139 54.0503L70.0658 49.8484C70.4589 46.8996 71.577 44.4424 73.42 42.4765C75.2629 40.5107 77.5973 39.0118 80.4232 37.9797C83.2491 36.9477 86.3821 36.4316 89.8223 36.4316C93.7048 36.4316 96.9852 36.9722 99.6636 38.0534C102.342 39.1346 104.382 40.6827 105.782 42.6977C107.183 44.7127 107.883 47.1699 107.883 50.0695C107.883 52.2811 107.527 54.0994 106.814 55.5247C106.102 56.9499 105.205 58.0802 104.124 58.9157C103.042 59.7512 102.01 60.3532 101.027 60.7218C100.045 61.0904 99.2828 61.2747 98.7422 61.2747V61.5696C99.3319 61.5696 100.18 61.6924 101.285 61.9381C102.391 62.1839 103.522 62.6508 104.676 63.3388C105.831 64.0268 106.814 65.0466 107.625 66.3981C108.436 67.7496 108.842 69.5311 108.842 71.7427C108.842 74.7897 108.006 77.4313 106.335 79.6674C104.664 81.9035 102.404 83.6113 99.5531 84.7908ZM30.2576 64.7394V85.8228H17.1357V37.1688H33.5749L46.8442 61.2747L50.0141 67.8356H50.0878L49.7929 58.2522V37.1688H62.9885V85.8228H46.4756L33.2063 61.717L30.1101 55.1561H29.9627L30.2576 64.7394Z" fill="#00E599" />
                        <defs>
                            <linearGradient id="paint0_linear_389_1902" x1="119.534" y1="126.261" x2="160.964" y2="-44.2131" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#000033" />
                                <stop offset="0.243781" stop-color="#00AF92" />
                                <stop offset="0.78496" stop-color="#00E599" />
                                <stop offset="1" stop-color="#00E599" />
                            </linearGradient>
                        </defs>
                    </svg>

                </div> */}
                <div className='hidden lg:block w-full h-full'>
                <video className='h-full w-full ' autoPlay muted playsinline>
                <source src="/n3/n3_desktop.mp4" type="video/mp4" />
                </video>
                </div>
                <div className='block lg:hidden w-full h-full'>
                <video className='h-full w-full' autoPlay muted playsinline>
                <source src="/n3/n3_mobile.mp4" type="video/mp4" />
                </video>
                </div>
            </div>
            <div className="twcontainer px-4 mx-auto max-w-6xl">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-center">
                    <div className="order-2 lg:order-1">
                        <p className="uppercase text-3xl font-bold text-secondary mb-4"><span className="text-primary uppercase">DECENTRALIZED</span><br />STORAGE</p>
                        <p className="text-secondary max-w-sm mb-4">
                        NeoFS Network provides the benefits of decentralized storage without the compromises. Your data is always securely encrypted and available. Fully control its placement and access, and phase out centralized dependencies. NeoFS uses HTTP and S3 gateways so you can integrate existing apps or users without rearchitecting.
                        </p>
                        <a className="text-primary inline-flex items-center" href="https://fs.neo.org/" target="_blank">Learn more about the NeoFS Network
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
                        <a className="text-primary inline-flex items-center" href="/docs/n3/Advances/Oracles">Learn more about Neo's Native Oracles
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
                        <a className="text-primary inline-flex items-center" href="/docs/n3/develop/write/basics">Learn more about Smart Contracts
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
                        <a className="text-primary inline-flex items-center" href="/docs/n3/foundation/consensus/consensus_algorithm">Learn about Neo's dBFT Consensus Mechanism
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
                        <a className="text-primary inline-flex items-center" href="/resources">Learn more about Neo's Multi-Language support
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
                        Neo continues to deliver the goal of being the most developer-friendly platform.
                        <br/>
                        The crown jewel of Neo's developer experience is the Neo Blockchain Toolkit for VS Code. Built by Microsoft-alumni at NGD Enterprise, the toolkit offers industry best tools for easy network deployment, testing, and time-travel debugging.
                        </p>
                        <a className="text-primary inline-flex items-center" href="/resources">Explore Neo's Developer Resources
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
                        <a className="text-primary inline-flex items-center" href="https://poly.network/">Learn more about Neo's Poly Network Integration
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
                        <a href="https://neo.org/blog/details/4244" className="inline-flex items-center text-primary">Learn more
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
                        <a href="/resources" className="inline-flex items-center text-primary">Learn more
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
                        <a href="/docs" className="inline-flex items-center text-primary">Learn more
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