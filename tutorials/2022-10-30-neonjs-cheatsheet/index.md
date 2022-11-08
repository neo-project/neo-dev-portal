---
title: "Neonjs Cheatsheet"
description: "Get up to speed with neon-js, Helpful cheatsheet to give you complete overview of the neon-js you need to know when building dapp on Neo!"
author: Apisit
tags: [ "REACT","JS","NEON-JS"]
skill: beginner
sidebar: true
---

Helpful cheatsheet to give you complete overview of the neon-js methods you need to know when building dapp on Neo!

## Wallet or Account

`Neon.create.account()` can take different type of value such as WIF, private key, public key, script hash and when you leave it blank it will create a new keypair.

#### Create a new keypair
```js
const account = Neon.create.account()
console.log(a.address)
console.log(a.WIF)
console.log(a.privateKey)
console.log(a.publicKey)
```

#### Account with WIF
```js
const WIF = "L4VqMgXehi1k97C3dH3xR5XWMWt1BxfYNj87QrYxVVBhjo7woAKa"
const account = Neon.create.account(WIF)
console.log(a.address)
console.log(a.WIF)
console.log(a.privateKey)
console.log(a.publicKey)
```

#### Get address from a public key
```js
const publicKey = "031b88e4809d7c384b7f3fb4d04559870cbc3cddf3c50a38bae9fedb90256127b6"
const account = Neon.create.account(publicKey)
console.log(a.address)
```


#### Get address from a script hash
```js
const scriptHash = "ec35d21b1b121dd5653454f8c615709ec7ba36a7"
const account = Neon.create.account(scriptHash)
console.log(a.address)
```

## Smart contract

#### Invoke a method in a smart contract
```js
const contractHash = "0xd2a4cff31913016155e38e474a2c06d08be276cf" //GAS Contract
const networkMagic = Neon.CONST.MAGIC_NUMBER.MainNet
const rpcAddress = "https://n3seed1.ngd.network:10332/"
const WIF = "L4VqMgXehi1k97C3dH3xR5XWMWt1BxfYNj87QrYxVVBhjo7woAKa"
const account = Neon.create.account(WIF)
const contract = new Neon.experimental.SmartContract(Neon.u.HexString.fromHex(contractHash),
    {
        networkMagic,
        rpcAddress,
        account
    }
)

const amount = 1 * Math.pow(10,8)
const operation = "transfer"
const params = [
    sc.ContractParam.hash160(account.address),
    sc.ContractParam.hash160("NbA7bUJM6bFTvVEcYZhkwaSMKnVho4faRW"),
    sc.ContractParam.integer(amount),
    sc.ContractParam.any("")
]

let result;
try {
    const txHash = await contract.invoke(operation, params);
    console.log(txHash)
} catch (e) {
    console.log(e);
}
```

## Validating
neon-js provides convenient methods in `Neon.is` package. Some of the example below. 
```js
const address = Neon.is.address("NbA7bUJM6bFTvVEcYZhkwaSMKnVho4faRW")
console.log(address) //true
```




## Converter
neon-js provides several method to convert value from one to another. You will be using some of these methods very often. Most of the time When something is wrong, it's likely related to the data type.

```js
let b64 = Neon.u.hex2base64(Neon.u.str2hexstring("apisit.neo"))
console.log(b64)
```

```js
let reversedHex = Neon.u.reverseHex("3ff68d232a60f23a5805b8c40f7e61747f6f61ce")
console.log(reversedHex)
```










