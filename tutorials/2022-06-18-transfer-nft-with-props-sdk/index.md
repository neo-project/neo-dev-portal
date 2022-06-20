---
title: "How to transfer NFT using PROPS's SDK"
description: "You will learn how to transfer NFT on the Neo blockchain from one wallet to another wallet using props's SDK."
author: Apisit
tags: [ "PROPS","REACT","JS"]
skill: beginner
sidebar: true
# image: ./assets/cover.png
---

# How to transfer NFT using PROPS's SDK
In this tutorial you will learn how to transfer any NFT on the Neo blockchain using Props's SDK.

## Prerequisite
- [Neon.js](https://github.com/CityOfZion/neon-js)
> npm i @cityofzion/neon-js  

- [Props SDK](https://props.coz.io/d)
> npm install @cityofzion/props --save  



## Code

```js
//import these two libs
import * as PropsSDK from '@cityofzion/props'
import Neon from "@cityofzion/neon-js";



//Code part to make a transfer
try {
    const fromAccount = Neon.create.account("PUT YOUR WIF HERE")
    const node = Neon.create.rpcClient('https://mainnet1.neo.coz.io:443')
    const assetHash = ""
    const toAddress = ""
    const tokenID = ""
    const res = await PropsSDK.api.PuppetAPI.transfer(
        node.url,
        Neon.CONST.MAGIC_NUMBER.MainNet,
        assetHash,
        toAddress,
        tokenId,
        fromAccount
    )
    console.log(res) //The response is published transaction ID.
} catch (e) {
    console.log(e)
}
```