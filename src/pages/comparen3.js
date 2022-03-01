import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
export default function CompareN3() {
    return (
        <Layout>
             <div className="twcontainer  mx-auto max-w-6xl px-4 lg:px-0 flex items-center py-4 sticky top-0">
                <div>
                    <p className="font-semibold text-base">N3</p>
                </div>
                <div className="ml-auto flex items-center gap-6 font-semibold">
                    <Link to="/n3" >Overview</Link>
                    <Link to="/comparen3" className="text-gray-500">Compare N3 with Neo Legacy</Link>
                </div>
            </div> 
            <div className="twcontainer max-w-6xl px-4 lg:px-0 mx-auto py-24">
                <div className="mx-auto items-center justify-center text-center">
                    <h1 className="uppercase text-4xl font-bold">compare <span className="text-primary uppercase font-bold">NEO N3</span><br/> with neo legacy</h1>
                    <p className=" mt-6 font-semibold max-w-lg mx-auto">Neo is more powerful and flexible than ever with the capabilities of Neo N3. Find out what's new.</p>
                </div>
            </div>
            <div className="twcontainer max-w-6xl px-4 lg:px-0 mx-auto  mb-12">
                <div className="grid grid-cols-2 lg:grid-cols-3">

                    <div className="sticky top-14 col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 bg-white border-b">
                        <div className="py-5 col-span-2 lg:col-span-1 font-bold">General Features</div>
                        <div className="py-5 col-span-1 font-bold ">N3</div>
                        <div className="py-5 col-span-1 font-bold">Neo Legacy</div>
                    </div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Total amount of NEO</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">100 Millions</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">100 Millions</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Minimum unit of NEO</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">1</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">1</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Total amount of GAS</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">Unlimited</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">100 Millions</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Account</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">Native contract</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">UTXO</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Block finality</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">1 Block</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">1 Block</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Neo Node</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">neo-cli</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">neo-cli</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Address</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">Start with N</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">Start with A</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Private key</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">Compatible with N3</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">Compatible with N3</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Wallet File</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">NEP6</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">NEP6</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Gas distribution</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">5 GAS Per Block</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">A decaying rate algorithm</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Consensus</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">dBFT 2.0</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">dBFT</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Governance</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">Let's vote</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">-</div>

                    <div className="mt-12 sticky top-14 col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 bg-white border-b">
                        <div className="py-5 col-span-2 lg:col-span-1 font-bold">Protocol</div>
                        <div className="py-5 col-span-1 font-bold  block lg:hidden">N3</div>
                        <div className="py-5 col-span-1 font-bold block lg:hidden">Neo Legacy</div>
                    </div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">NFT Standard</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">NEP11</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">-</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Token Standard</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">NEP17</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">NEP5</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Smart Contract Manifest</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">NEP15</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">-</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Executable format	</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">NEP16</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">.avm file</div>

                    <div className="mt-12 sticky top-14 col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 bg-white border-b">
                        <div className="py-5 col-span-2 lg:col-span-1 font-bold">Fees</div>
                        <div className="py-5 col-span-1 font-bold  block lg:hidden">N3</div>
                        <div className="py-5 col-span-1 font-bold block lg:hidden">Neo Legacy</div>
                    </div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">System fees</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none"><a href="" className="underline">Fee</a></div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none"><a href="" className="underline">Fee</a></div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Network fees</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none"><a href="" className="underline">Require</a></div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none"><a href="" className="underline">Sort of free</a></div>

                    <div className="mt-12 sticky top-14 col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 bg-white border-b">
                        <div className="py-5 col-span-2 lg:col-span-1 font-bold">Technology</div>
                        <div className="py-5 col-span-1 font-bold  block lg:hidden">N3</div>
                        <div className="py-5 col-span-1 font-bold block lg:hidden">Neo Legacy</div>
                    </div>
                    
                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Oracle</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none"><a href="" className="underline">Native</a></div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">-</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Storage</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none"><a href="" className="underline">Native — NeoFS</a></div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">-</div>

                    <div className="mt-12 sticky top-14 col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 bg-white border-b">
                        <div className="py-5 col-span-2 lg:col-span-1 font-bold">Cryptography</div>
                        <div className="py-5 col-span-1 font-bold  block lg:hidden">N3</div>
                        <div className="py-5 col-span-1 font-bold block lg:hidden">Neo Legacy</div>
                    </div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Encode algorithm</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">Base58</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">Base58</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Hash algorithm</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">RIPEMD160,SHA256</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">RIPEMD160,SHA256</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Encryption Algorithm</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">ECC</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">ECC</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Encryption Algorithm</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">ECC</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">ECC</div>


                    <div className="mt-12 sticky top-14 col-span-2 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 bg-white border-b">
                        <div className="py-5 col-span-2 lg:col-span-1 font-bold">Smart contract</div>
                        <div className="py-5 col-span-1 font-bold  block lg:hidden">N3</div>
                        <div className="py-5 col-span-1 font-bold block lg:hidden">Neo Legacy</div>
                    </div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Token sale</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">Simple</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">Complicated</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Cost to deploy</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">10 GAS</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none">Up to 1,000 GAS</div>

                    <div className="py-3 col-span-2 lg:col-span-1 font-semibold">Error handling</div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none"><a href="https://c.tenor.com/50hyInZwYp4AAAAC/breeze-nicolas-cage.gif">Throw</a></div>
                    <div className="pt-0 pb-3 lg:py-3 col-span-1 font-semibold border-b lg:border-none"><a href="https://c.tenor.com/L66gfL1eMUsAAAAC/computer-throw.gif">Ambiguous</a></div>

                </div>
            </div>
        </Layout>
    );
}