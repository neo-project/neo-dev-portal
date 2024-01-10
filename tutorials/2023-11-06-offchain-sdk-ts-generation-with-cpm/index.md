---
slug: coz-create-ts-sdk-with-cpm
title: 'How to use CPM to generate an off-chain TypeScript SDK'
description: "The tutorial aims to provide a comprehensive guide for developers interested in creating TypeScript SDKs for Neo smart contracts, making it easier for them to leverage CPM and successfully work with off-chain SDKs."
author: coz.io
tags: ["TS", "CPM", "SDK"]
skill: BEGINNER
image: "./assets/CPM-logo.png"
sidebar: true
---

[CPM](https://github.com/CityOfZion/cpm) is a tool that can help you download smart contracts and generate on-chain and off-chain SDKs for multiple languages without the need to write them yourself and needing none or minimal changes.

## 1. Initializing workspace
We recommend using [vite](https://vitejs.dev/guide/) to create your project from a template. You just need to run `npm create vite@latest` and select the prompts to generate your project. After creating your project, it's time to start using CPM to automate the off-chain SDK generation.

## 2. Using CPM 
It's pretty easy to use CPM to add an off-chain SDK to your TypeScript project. After installing CPM you can generate a single SDK directly from the command prompt or setup a configuration file that will be processed and allows for generating multiple SDKs at the same time. In this tutorial, we will be using the easiest one to maintain.

We need to generate a configuration file by running `cpm init` on the terminal. This creates a `cpm.yaml` file that by default gets the [Props](https://github.com/CityOfZion/props) smart contract. While it is a useful contract, it's probably not the one you want, in this article, let's suppose we want to easily invoke functions from the [Neo Token contract](https://dora.coz.io/contract/neo3/mainnet/0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5).

The configuration file is divided into 4 different sections that will be tweaked to generate the desired SDK:
- `defaults`: will indicate that we want to generate an off-chain TypeScript SDK inside the `src` folder and that we don't want to download the NEF and manifest;
- `contracts`: will have the Neo Token contract that we want to generate an SDK for;
- `tools`: since we don't want to download the smart contract, this section is unnecessary;
- `networks`: will have the Main Net network where the Neo Token contract is.

After tweaking the `cpm.yaml` file it should be something like this:

```yaml
defaults:
  contract-source-network: mainnet
  contract-generate-sdk: true
  contract-download: false
  off-chain:
    languages:
    - ts
    destinations:
      ts: src/contracts

contracts:
  - label: NEO token
    script-hash: '0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5'

networks:
  - label: mainnet
    hosts:
      - 'https://mainnet1.neo.coz.io:443'
      - 'http://seed1.neo.org:10332'
```

> For more information on how to configure `cpm.yaml`, check out [CPM's documentation](https://github.com/CityOfZion/cpm/blob/master/docs/config.md)

Then just run `cpm run` on the terminal and the SDK should be generated at the `src/contracts/neotoken` folder. Anytime the contract adds or removes method signatures, you'll have to run `cpm run` again to update your SDK.

## 3. Initializing and running the SDK
Now that the SDK is already generated, you'll need to install the dependencies: [`@types/node`](https://www.npmjs.com/package/@types/node), and  [`@cityofzion/neon-dappkit-types`](https://www.npmjs.com/package/@cityofzion/neon-dappkit-types). Then you'll have to import and initialize the SDK to be able to call it.
To initialize the SDK, you'll first need to instantiate a class that implements `Neo3-Invoker`.
To enhance security and user experience, it's advisable to use [`WalletConnect`](https://github.com/CityOfZion/wallet-connect-sdk) for scenarios requiring user authentication, such as signing transactions or accessing user account details. However, for situations where such authentication is unnecessary, [`NeonInvoker`](https://github.com/CityOfZion/neon-dappkit/blob/main/packages/neon-dappkit/src/NeonInvoker.ts) from NeonDappkit offers a more streamlined solution, as it eliminates the need for users to approve requests through their wallets. In our example, we employ both methods: NeonInvoker is utilized when the user is not logged into their wallet.
```ts
import { NeoToken } from './contracts/neotoken'

import { Neo3Invoker } from "@cityofzion/neon-dappkit-types"
import { NeonInvoker } from "@cityofzion/neon-dappkit"
import WcSdk from '@cityofzion/wallet-connect-sdk-core'


let wcSdk: WcSdk
let neonInvoker: NeonInvoker

async function initInvokers() {
  wcSdk = await WcSdk.init({
    projectId: 'a9ff54e3d56a52230ed8767db4d4a810', // the ID of your project on Wallet Connect website
    relayUrl: 'wss://relay.walletconnect.com', // we are using walletconnect's official relay server
    metadata: {
    name: 'MyApplicationName', // your application name to be displayed on the wallet
    description: 'My Application description', // description to be shown on the wallet
    url: 'https://myapplicationdescription.app/', // url to be linked on the wallet
    icons: ['https://myapplicationdescription.app/myappicon.png'], // icon to be shown on the wallet
    },
  })

  neonInvoker = await NeonInvoker.init({
    rpcAddress: NeonInvoker.MAINNET,
  })
}

function getInvoker(): Neo3Invoker {
  if (wcSdk.isConnected()) {
      return wcSdk
  } else {
    return neonInvoker
  }
}
```
> To connect a wallet to your application, checkout [Wallet Connect's documentation](https://github.com/CityOfZion/wallet-connect-sdk/blob/main/USAGE_GUIDE.md#connect-to-the-wallet)

Then you can invoke the contract methods with this SDK:
```ts
async function main() {
  const neoToken = new NeoToken({
    scriptHash: NeoToken.SCRIPT_HASH,
    invoker: getInvoker()
  })
  console.log(await neoToken.symbol())        // NEO
  console.log(await neoToken.decimals())      // 0
  console.log(await neoToken.totalSupply())   // 100000000
}
```
