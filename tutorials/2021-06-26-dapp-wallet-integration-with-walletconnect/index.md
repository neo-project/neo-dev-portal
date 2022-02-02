---
title: 'dApp-Wallet Integration with WalletConnect'
description: "This article covers implementation of WalletConnect, an open source protocol for communication between dApps and wallets. With it, a user can securely sign dApp proposed transactions directly from their personal wallet without exposing their private key to the application."
author: Gil Lopes Bueno
tags: [ "DAPP", "WALLETCONNECT"]
image: ./assets/cover.png
skill: beginner
sidebar: true
---


# 1. An Introduction:

This article covers implementation of **WalletConnect**, an open source protocol for communication between dApps and wallets. With it, a user can securely sign dApp proposed transactions directly from their personal wallet without exposing their private key to the application.

## Why do I need WalletConnect in my dApp?

Almost every decentralized application needs a user's authentication to send a signed transaction to the blockchain. From minting tokens to making a simple transfer, users must always sign their transactions whenever the client-side application needs to call a SmartContract method that requires the user's Account.

Without a solution like WalletConnect, the user would need to trust their private key to the dApp in order to sign. For obvious reasons, outside of testing environments, this is a huge security issue. The dApp could simply use the key to maliciously steal funds or sign something not approved by the user.


## The **WalletConnect 2.0** protocol:

[WalletConnect](https://walletconnect.org/) is an established chain-agnostic open source protocol for connecting decentralized applications to wallets. Whereas there are different options on how to safely implement such connection, WalletConnect is a widely supported standard across different wallets, chains and applications, and it's technical approach is simple, safe and proven.


## The **WalletConnect SDK**:

This article will present the usage of [`COZ's WalletConnect 2.0 SDK`](https://github.com/CityOfZion/wallet-connect-sdk), an auxiliary library built on top of [WalletConnect](https://github.com/WalletConnect/walletconnect-monorepo) which wraps the protocol for integration within the Neo ecosystem.

## And this is how it works:


![img](assets/walletconnect-diagram.png)

1. The application generates a connection payload and presents it to the user (commonly as a QR code) to provide to their wallet. The QR code contains the wallet with the information required to create a secure communication channel between the requesting application and wallet via a relay server.

2. Now, the application will have the ability to send requests directly to the user's wallet.

3. When a request is received, the wallet will ask for the user to approve the transaction. It will then sign the transaction, send it to the network and respond back to the dApp with the response it gets from the blockchain.

# 2. Using WalletConnect

## Requirements

- A front-end application that needs to interact with smart contracts deployed to the blockchain;
- A wallet supporting N3 with WalletConnect integration.  For testing purposes, we recommend [aero](https://aero.coz.io).

## Choose your path

There are currently two packages available for [COZ's WalletConnect 2.0 SDK](https://github.com/CityOfZion/wallet-connect-sdk): the [Core SDK](https://github.com/CityOfZion/wallet-connect-sdk/tree/develop/packages/wallet-connect-sdk-core), that can be used with any front end framework, and a [React SDK](https://github.com/CityOfZion/wallet-connect-sdk/tree/develop/packages/wallet-connect-sdk-react), an example of a higher level implementation with a context provider that handles some state changes for us.

From here on, you will need to choose a path. Each upcoming section will briefly showcase the implementation of WalletConnect basic features using each of the packages.

## A Chain-Agnostic SDK

We'll be presenting code examples that run against the Neo blockchain, but the SDK can be used to operate on other networks by simply changing the respective values for each constant that identifies the network.


# 3. Core SDK

## Installation

Install the dependency on your client-side application:

```shell
npm i @cityofzion/wallet-connect-sdk-core
```

## Setup

First thing we need to do is establish the connection to a relay server of choice by initiating a WalletConnect Client.

```javascript
import {WcSdk} from "@cityofzion/wallet-connect-sdk-core/lib";

const wcClient = await WcSdk.initClient(
  "debug", // logger: use debug to show all log information on browser console
  "wss://connect.coz.io" // relayServer: which relay server do you want to use, alternatively you can use "wss://relay.walletconnect.org"
);
```

## Initiating a Wallet Connection Request

Then we generate the QR-Code that will be scanned by the wallet and the connection parameters that will be sent to the wallet. The wallet will have to scan the code and accept or decline the connection parameters sent by the application.

```javascript
import { SessionTypes } from '@walletconnect/types'
import Client from '@walletconnect/client'
import QRCodeModal from '@walletconnect/qrcode-modal'

WcSdk.subscribeToEvents(wcClient, {
  onProposal: uri => {
    QRCodeModal.open(uri, () => { /* nothing */ })
  }
});

WcSdk.connect(wcClient, {
  chainId: "neo3:testnet", // blockchain and network identifier
  methods: ["invokefunction"], // which RPC methods do you plan to call
  appMetadata: {
    name: "MyApplicationName", // your application name to be displayed on the wallet
    description: "My Application description", // description to be shown on the wallet
    url: "https://myapplicationdescription.app/", // url to be linked on the wallet
    icons: ["https://myapplicationdescription.app/myappicon.png"], // icon to be shown on the wallet
  }
})
```

Notice that we need to state which RPC methods we're going to use with the proposed connection. If the wallet accepts, the relay server will establish a Websocket encrypted connection between the user's wallet and the dApp.

The front-end application can then check for established connections by asking the WcClient for open sessions.

```javascript
const session = await WcSdk.getSession(wcClient);

if (session) {
  console.log(session.state.accounts); // print the accounts
  console.log(session.peer.metadata); // print the wallet metadata 
}
```

And also easily terminate an established connection.

```javascript
await WcSdk.disconnect(wcClient, session);
```

## Recipes

### Make a JSON-RPC call

Every transaction request to the wallet needs to be sent via JSON-RPC. You need to provide a method name that is expected by the connected wallet - that is, one that's been [listed on the methods property](#connect-to-the-wallet) when creating the connection request. 

Apart from the method, you can pass any additional `parameters`.The JSON-RPC format accepts parameters in many formats. The rules on how to construct this request will depend entirely on the blockchain you are using. The code below is an example of a request constructed for the Neo Blockchain.

```js
import {WcSdk} from "@cityofzion/wallet-connect-sdk-core/lib";

const chainId = "neo3:testnet"; // blockchain and network identifier
const resp = await WcSdk.sendRequest(wcClient, session, chainId, {
  method: '{{NEO_RPC_METHOD}}',
  params: [{{NEO_RPC_METHOD_PARAMETERS}}]
});

// the response format depends interely on the blockchain response format
if (resp.result.error && resp.result.error.message) {
    window.alert(resp.result.error.message);
}
```

### Invoking a SmartContract method on Neo Blockchain

On the example below we are invoking the `transfer` method of the `GAS` token. Neo blockchain expects params with `{ type, value }` format, and on `type` you should provide one of the types mentioned [here](https://github.com/neo-project/neo/blob/master/src/neo/SmartContract/ContractParameterType.cs).


```js
import Neon, { sc } from "@cityofzion/neon-js";

const scripthash = '0xd2a4cff31913016155e38e474a2c06d08be276cf'; // GAS token
const methodName = 'transfer';

const [senderAddress] = session.state.accounts[0].split("@")

const from = sc.ContractParam.hash160(senderAddress)
const recipient = sc.ContractParam.hash160('NbnjKGMBJzJ6j5PHeYhjJDaQ5Vy5UYu4Fv')
const value = sc.ContractParam.integer(100);
const args = sc.ContractParam.array([])

const params = [from, recipient, value, args];
const resp = await WcSdk.invokeFunction(wcClient, session, scripthash, methodName, params);
```

To invoke a SmartContract method in Neo you can use `WcSdk.sendRequest` with `invokefunction` as method. But as we've seen above, WcSdk gives us a useful shortcut: `WcSdk.invokeFunction`.

Also notice that WcSdk has some special types to make things quicker on type declaration: `Address` and `ScriptHash`.


# 4. React SDK

## Installation

Install the dependency on your client-side application:

```shell
npm i @cityofzion/wallet-connect-sdk-react @walletconnect/client@2.0.0-alpha.42
```

(Or, idk... do your yarn thing 😅)

## Setup

Wrap WalletConnectContextProvider around your App and pass an options object as prop:

```jsx
import {WalletConnectContextProvider} from "@cityofzion/wallet-connect-sdk-react";

const wcOptions = {
  chainId: "neo3:testnet", // blockchain and network identifier
  logger: "debug", // use debug to show all log information on browser console
  methods: ["invokefunction"], // which RPC methods do you plan to call
  relayServer: "wss://connect.coz.io", // which relay server do you want to use, alternatively you can use "wss://relay.walletconnect.org"
  appMetadata: {
    name: "MyApplicationName", // your application name to be displayed on the wallet
    description: "My Application description", // description to be shown on the wallet
    url: "https://myapplicationdescription.app/", // url to be linked on the wallet
    icons: ["https://myapplicationdescription.app/myappicon.png"], // icon to be shown on the wallet
  }
};

ReactDOM.render(
  <>
    <WalletConnectContextProvider options={wcOptions}>
      <App />
    </WalletConnectContextProvider>
  </>,
  document.getElementById("root"),
);
```

The WalletConnect Context will mainly handle some lower level connection tasks that we've seen in the Core SDK implementation in the previous section. It will also hold the connection parameters that our dapp will use to connect to wallets.

Notice that in our `wcOptions` object we need to state which RPC methods we're going to use with the proposed connection.

From now on, everytime you need to use WalletConnect, you simply import it and call a method.

```ts
import {useWalletConnect} from "@cityofzion/wallet-connect-sdk-react";

export default function MyComponent() {
  const walletConnectCtx = useWalletConnect()
  // do something
}
```

## Connect to the Wallet

On the following example we are implementing all the connection features previously presented for the Core SDK in a single screen of our React app.

A simple screen displaying a `Connect your Wallet` link, that when clicked will show a dialog with the QRCode to proceed with the connection. While the session is loading a `Loading Session` text will be displayed. And if the user already has a session it will show a list of connected addresses with a related `Disconnect` link.

```ts
return <>
{walletConnectCtx.loadingSession
  ? "Loading Session"
  : !walletConnectCtx.session ? <a
        onClick={() => walletConnectCtx.connect()}>Connect your Wallet</a>
  : <ul>
            {walletConnectCtx.accounts.map((account) => {
                const [address] = account.split("@");
                return <li key={address}>
                    <span>{walletConnectCtx.session?.peer.metadata.name}</span>
                    <span>{address}</span>
                    <a onClick={walletConnectCtx.disconnect}>Disconnect</a>
                </li>
            })}
    </ul>
}
</>;
```

## Recipes

### Make a JSON-RPC call

Every transaction request to the wallet needs to be sent via JSON-RPC. You need to provide a method name that is expected by the connected wallet - that is, one that's been listed on the methods property of our `wcOptions` object. 

Apart from the method, you can pass any additional `parameters`.The JSON-RPC format accepts parameters in many formats. The rules on how to construct this request will depend entirely on the blockchain you are using. The code below is an example of a request constructed for the Neo Blockchain.

```js
const resp = await walletConnectCtx.sendRequest({
  method: 'rpcMethod',
  params: ['param', 3, true]
});

// the response format depends interely on the blockchain response format
if (resp.result.error && resp.result.error.message) {
    window.alert(resp.result.error.message);
}
```

### Invoking a SmartContract method on Neo Blockchain

On the example below we are invoking the `transfer` method of the `GAS` token. Neo blockchain expect params with `{ type, value }` format, and on `type` you should provide one of the types mentioned [here](https://github.com/neo-project/neo/blob/master/src/neo/SmartContract/ContractParameterType.cs).


```ts
const scripthash = '0xd2a4cff31913016155e38e474a2c06d08be276cf'; // GAS token
const methodName = 'transfer';

const [senderAddress] = walletConnectCtx.accounts[0].split("@")

const from = {type: 'Address', value: senderAddress};
const recipient = {type: 'Address', value: 'NbnjKGMBJzJ6j5PHeYhjJDaQ5Vy5UYu4Fv'};
const value = {type: 'Integer', value: 100000000};
const args = {type: 'Array', value: []}

const params = [from, recipient, value, args];
const resp = await walletConnectCtx.invokeFunction(scripthash, methodName, params);
```

To invoke a SmartContract method in Neo you can use `WcSdk.sendRequest` with `invokefunction` as method. But as we've seen above, WcSdk gives us a useful shortcut: `walletConnectCtx.invokeFunction`.

Also notice that WcSdk has some special types to make things quicker on type declaration: `Address` and `ScriptHash`.

# 5. How to test my dApp?

This SDK implements [WalletConnect 2.0](https://docs.walletconnect.org/v/2.0/) protocol, therefore it's compatible with any wallet application that works with it.

Regarding the Neo blockchain, WalletConnect dApp interaction can be tested using the [aero web wallet](https://aero.coz.io/).

Other major ecosystem wallets, such as our own **Neon Wallet**, are on their way to implementing the WalletConnect Protocol as standard of choice for dApp-Wallet communication.