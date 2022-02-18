---
sidebar_label: 'Development FAQ'
sidebar_position: 1
---

# Development

## How do I apply for TestNet tokens?

Up to 50 NEO and GAS per day (per address & IP) can be requested via the [NGD faucet](https://neowish.ngd.network/neo3/). If you need more than that, go to https://neo.org/testcoin/apply and fill out the application form. If the application is accepted, you will be notified in three to five workdays. 

If all else fails, you can request assets from other TestNet users via the official [Neo Discord](https://discord.gg/tpMW9Te2pY) server (use #dev-general).

## How do I launch a private chain?

The easiest way to launch a private Neo N3 chain instance is to use [Neo Express](https://github.com/neo-project/neo-express#neoexpress-and-neotrace). You can run it directly from the command line, or use it as part of the [Neo Blockchain Toolkit for VSCode](https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit).

Alternatively, you can use the core client directly by following the instructions below:

- Build a private chain with one node. See [here](../n3/develop/network/private-chain/solo.md).
- Build a private chain on your local host. See [here](../n3/develop/network/private-chain/private-chain2.md).

## What languages can I use to develop smart contracts?

Neo supports a variety of mainstream programming languages and can be developed using C#, Python, Go, and Java. Compilers and other well-developed infrastructure can be found for each of these languages:

- C# - [Neo Devpack Dotnet](https://github.com/neo-project/neo-devpack-dotnet)
- Python - [Boa](https://github.com/CityOfZion/neo3-boa)
- Go - [NeoGo](https://github.com/nspcc-dev/neo-go)
- Java - [neow3j](https://github.com/neow3j/neow3j)

## What SDKs are provided for developers?

Neo developer communities have developed and maintained various SDKs for many mainstream languages including C#, JavaScript, Java, Python, and Go. You can check them out here:

- C# SDK: [neo-devpack-dotnet](https://github.com/neo-project/neo-devpack-dotnet)
- JavaScript SDK: [neon-js](https://github.com/CityOfZion/neon-js)
- Java SDK: [neow3j](https://github.com/neow3j/neow3j)
- Go: [neo-go](https://github.com/nspcc-dev/neo-go) / [neo-gogogo](https://github.com/neo-ngd/neo-gogogo)
- Python: [neo-mamba](https://github.com/CityOfZion/neo-mamba)

## How do I obtain the asset hash for NEP-17 tokens?

The asset hash of a given token is the contract's script hash. The most convenient method of obtaining an asset hash is by using a blockchain explorer which maintains a token list. A number of explorers offering this functionality can be found below:

- [OneGate](https://explorer.onegate.space/tokens/Nep17/1)
- [NeoTube](https://neo3.neotube.io/tokens)
- [NeoTracker](https://n3.neotracker.io/browse/asset/1)

Keep in mind that asset hashes will be different across different networks (excluding the NEO and GAS native token contracts).

## Why do I receive a prompt saying that the object has no private key in the wallet when withdrawing assets from a multi-party signature contract?

After the private chain has been set up, you need to make the same configurations in all (n/2+1) wallets (n is the node number). In other words, add the multi-party signed address to each and then rebuild the wallet index.
