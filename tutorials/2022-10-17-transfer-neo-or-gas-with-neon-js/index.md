---
title: "How to transfer Neo, Gas or any NEP-17 token using neon-js"
description: "Transfer Neo, Gas or NEP-17 token on the Neo blockchain from one wallet to another wallet using neon-js"
author: Apisit
tags: [ "NEP-17","REACT","JS","NEON-JS"]
skill: beginner
sidebar: true

---


# How to transfer Neo, GAS or any NEP-17 token using Neon.js
In this short tutorial, you will learn how to transfer any Nep-17 token on the Neo blockchain using neon-js

## Prerequisite
- [Neon.js](https://github.com/CityOfZion/neon-js)
> npm i @cityofzion/neon-js  


## Code

```js
import { default as Neon, sc } from "@cityofzion/neon-js";

const GAS = '0xd2a4cff31913016155e38e474a2c06d08be276cf' //GAS Contract. You can replace this with any NEP-17 compatible smart contract.
const networkMagic = Neon.CONST.MAGIC_NUMBER.MainNet // Using mainnet
const rpcAddress = "" // You can find reliable node here -> https://dora.coz.io/monitor
const fromAccount = Neon.create.account("WIF HERE") // You can create your account with a WIF.
const toAddress = "NQx4coq2SUdEti7USwL4J6GSggmefGGNt8" 
const contract = new Neon.experimental.SmartContract(Neon.u.HexString.fromHex(GAS),
    {
    networkMagic,
    rpcAddress,
    account
    }
)

const data = null;
const amount = 1 * Math.pow(10,8) // We are trasferring 1 GAS
const operation = "transfer"
const params = [
    sc.ContractParam.hash160(fromAccount.address),
    sc.ContractParam.hash160(toAddress),
    sc.ContractParam.integer(amount),
    sc.ContractParam.any(null)
]

let result;
try {
    const txHash = await contract.invoke(operation, params);
    console.log(txHash) //this is a transaction ID
} catch (e) {   
    console.log(e);
}
```


