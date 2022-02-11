---
title: 'neow3j - Java SDK Quickstart'
description: "In this quickstart guide, you will set up a neow3j project and get introduced to all tools necessary for interacting with the Neo N3 blockchain using Java."
author: AxLabs
tags: ["DAPP", "SDK", "NEOW3J", "JAVA", "KOTLIN"]
skill: beginner
image: ./assets/neow3j-padded.png
source: https://github.com/neow3j/neow3j-boilerplate-sdk
sidebar: true
---

## 1. Introduction

Neow3j is a development toolkit that provides easy and reliable tools to build Neo dApps and Smart
Contracts using the Java platform (Java, Kotlin, Android). Check out [neow3j.io](https://neow3j.io) for more detailed information on neow3j and the technical documentation.

## 2. Setup

### Requirements

__Java__

DApp development in Java requires a Java SDK of at least version 8. Checkout [Adoptium](https://adoptium.net/)
for Java OpenJDK downloads.

__Neo-Express__

Neo-Express is a tool for setting up local private blockchains for development purposes. You will use it to learn how to interact with a
Neo blockchain using the neow3j SDK. It requires .NET Core installed on your machine. Step through the Neo-Express installation
section [here](https://github.com/neo-project/neo-express#installation) to set it up.

### Development Environment

You can develop a dApp with neow3j in any editor, but we recommend using 
[IntelliJ IDEA](https://www.jetbrains.com/idea/download/) and [Visual Studio Code](https://code.visualstudio.com/).
IntelliJ offers one of the best Java/Kotlin developer experiences while VS Code offers a powerful extension for
development on Neo.

If you use VS Code make sure to install the 
[Neo Blockchain Toolkit](https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit)
extension. It supports an easy setup of private blockchains, provides functionality to quickly fund an address, an in-editor block explorer and much more.
To get familiar with the Blockchain Toolkit checkout the quickstart tutorials
[here](https://ngdenterprise.com/neo-tutorials/quickstart1.html).
For optimal Java support in VS Code we recommend using the 
[Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack).

### Code 

For a quick setup of your dApp project fetch the SDK boilerplate project structure from our [SDK boilerplate](https://github.com/neow3j/neow3j-boilerplate-sdk) repository. This project contains two simple examples. First, you'll build, sign and send a transaction. Then, we'll show you how to subscribe to new blocks on a Neo N3 blockchain.

```
git clone https://github.com/neow3j/neow3j-boilerplate-sdk.git
cd neow3j-boilerplate-sdk
```

## 3. Building, Signing and Sending a Transaction

In the following example code, a transaction that transfer 10 NEO is built, signed and sent. Then, its status is printed when it has been executed successfully and is persisted on the blockchain.

```java
package com.axlabs.boilerplate;

import io.neow3j.contract.GasToken;
import io.neow3j.contract.NeoToken;
import io.neow3j.crypto.WIF;
import io.neow3j.protocol.Neow3j;
import io.neow3j.protocol.core.response.NeoApplicationLog;
import io.neow3j.protocol.core.response.NeoSendRawTransaction;
import io.neow3j.protocol.http.HttpService;
import io.neow3j.transaction.AccountSigner;
import io.neow3j.transaction.Transaction;
import io.neow3j.transaction.TransactionBuilder;
import io.neow3j.types.Hash160;
import io.neow3j.types.Hash256;
import io.neow3j.utils.Await;
import io.neow3j.utils.Numeric;
import io.neow3j.wallet.Account;

import java.math.BigInteger;

public class BuildAndSendTransaction {

    public static void main(String[] args) throws Throwable {

        Neow3j neow3j = Neow3j.build(new HttpService("http://seed2t4.neo.org:20332"));

        NeoToken neoToken = new NeoToken(neow3j);
        Hash160 scriptHash = GasToken.SCRIPT_HASH;

        Hash160 recipient = new Hash160("b897160506030c5d06dc087a21544b4853768012");
        String aliceWif = WIF.getWIFFromPrivateKey(
                Numeric.hexStringToByteArray("6c54536dbd876b92bfc96dd7b9fd6a4286d9a51ac5e26b5cf9becfa27e330918"));
        Account alice = Account.fromWIF(aliceWif);

        TransactionBuilder b = neoToken.transfer(alice, recipient, new BigInteger("10"));

        Transaction tx = b.signers(AccountSigner.calledByEntry(alice))
                .sign();

        NeoSendRawTransaction response = tx.send();

        if (response.hasError()) {
            System.out.printf("Transaction was not successful. Error message from Neo node was: "
                    + "'%s'\n", response.getError().getMessage());
        } else {
            Hash256 txHash = response.getSendRawTransaction().getHash();
            Await.waitUntilTransactionIsExecuted(txHash, neow3j);

            NeoApplicationLog applicationLog = neow3j.getApplicationLog(txHash).send().getApplicationLog();
            System.out.println(applicationLog);
        }
    }

}
```

### Imports

The imports show the neow3j SDK classes that are used in the example contract. Check out neow3j's javadoc [here](https://javadoc.io/doc/io.neow3j/contract/latest/index.html) and [here](https://javadoc.io/doc/io.neow3j/core/latest/index.html) for a full overview of classes and methods that are supported.

```java
package com.axlabs.boilerplate;

import io.neow3j.contract.GasToken;
import io.neow3j.contract.NeoToken;
import io.neow3j.crypto.WIF;
import io.neow3j.protocol.Neow3j;
import io.neow3j.protocol.core.response.NeoApplicationLog;
import io.neow3j.protocol.core.response.NeoSendRawTransaction;
import io.neow3j.protocol.http.HttpService;
import io.neow3j.transaction.AccountSigner;
import io.neow3j.transaction.Transaction;
import io.neow3j.transaction.TransactionBuilder;
import io.neow3j.types.Hash160;
import io.neow3j.types.Hash256;
import io.neow3j.utils.Await;
import io.neow3j.utils.Numeric;
import io.neow3j.wallet.Account;

import java.math.BigInteger;
```

### Connect to Neo N3 Network

The `Neow3j` class sets up a connection to a Neo N3 blockchain. The endpoint in the example code points to a testnet node. If you run a local Neo N3 network and want to interact with it through neow3j, you have to change this endpoint accordingly.

```java
Neow3j neow3j = Neow3j.build(new HttpService("http://seed2t4.neo.org:20332"));
```

### Initialize NeoToken

In the example code, 10 NEO are transferred. The NEO token is managed in the native smart contract `NeoToken`. Neow3j's class `NeoToken` provides all necessary methods that can be invoked on the `NeoToken` smart contract. This allows you to build a transfer transaction that then can be sent to the blockchain.

```java
NeoToken neoToken = new NeoToken(neow3j);
```

Now we prepare all necessary parameters that are required to build a transaction that transfers 10 NEO from `alice` to the script hash `b897160506030c5d06dc087a21544b4853768012`.

```java
Hash160 recipient = new Hash160("b897160506030c5d06dc087a21544b4853768012");

// Alice's address = NNSyinBZAr8HMhjj95MfkKD1PY7YWoDweR
String aliceWif = WIF.getWIFFromPrivateKey(
        Numeric.hexStringToByteArray("6c54536dbd876b92bfc96dd7b9fd6a4286d9a51ac5e26b5cf9becfa27e330918"));
Account alice = Account.fromWIF(aliceWif);
```

### Create Transfer Script

The `transfer()` method of the `NeoToken` with the following parameters builds the transfer script and initializes a `TransactionBuilder`. Before building the transaction, additional variables can be set in this `TransactionBuilder`, e.g., an additional network fee, signers, etc.,

```java
TransactionBuilder b = neoToken.transfer(alice, recipient, new BigInteger("10"));
```

### Build and Sign the Transaction

To transfer NEO from `alice`, `alice` must be a witness to this transaction. The `alice` account can be set in the `TransactionBuilder` as a signer with witness scope `calledByEntry`. Then, the `TransactionBuilder` is ready to be signed. When the `sign()` method is called, the transaction is built, and the witness is appended to it with the provided account passed to the `TransactionBuilder`'s signers.

```java
Transaction tx = b.signers(AccountSigner.calledByEntry(alice))
        .sign();
```

### Send the Transaction

The transaction is now ready to be sent and can be sent with the `send()` method.

```java
NeoSendRawTransaction response = tx.send();
```

### Wait for Response

You can now check the node's response for an error as the transaction has been sent. If there is no error, the transaction's hash is retrieved, and the method `Await.waitUntilTransactionIsExecuted()` waits until the transaction is persisted on the blockchain. Then, the transaction's application log is fetched. It contains all relevant information about the transaction (e.g., its notifications, the invocation results, state, etc.).

```java
if (response.hasError()) {
    System.out.printf("Transaction was not successful. Error message from Neo node was: "
            + "'%s'\n", response.getError().getMessage());
} else {
    Hash256 txHash = response.getSendRawTransaction().getHash();
    Await.waitUntilTransactionIsExecuted(txHash, neow3j);

    NeoApplicationLog applicationLog = neow3j.getApplicationLog(txHash).send().getApplicationLog();
    System.out.println(applicationLog);
}
```

## 4. Tracking new Blocks

In the following example, the Neo N3 network is subscribed to track newly created blocks.

```java
package com.axlabs.boilerplate;

import io.neow3j.protocol.Neow3j;
import io.neow3j.protocol.http.HttpService;

import java.io.IOException;

public class SubscribeToBlocks {

    public static void main(String[] args) throws IOException {

        Neow3j neow3j = Neow3j.build(new HttpService("http://seed2t4.neo.org:20332"));

        neow3j.subscribeToNewBlocksObservable(true)
                .subscribe((blockReqResult) -> {
                    System.out.println("#######################################");
                    System.out.println("Block Index:     " + blockReqResult.getBlock().getIndex());
                    System.out.println("Block Hash:      " + blockReqResult.getBlock().getHash());
                    System.out.println("Prev Block Hash: " + blockReqResult.getBlock().getPrevBlockHash());
                    System.out.println("Next Consensus:  " + blockReqResult.getBlock().getNextConsensus());
                    System.out.println("Transactions:    " + blockReqResult.getBlock().getTransactions());
                });
    }

}
```

### Subscribe to new Blocks

As in the previous example, first, we have to establish a connection to a blockchain by initializing a `Neow3j` object.

```java
Neow3j neow3j = Neow3j.build(new HttpService("http://seed2t4.neo.org:20332"));
```

The method `subscribeToNewBlocksObservable()` creates an observable that emits every new block and the method `subscribe()` provides a callback function.

In this example, as soon as a new block exists, we print the information of the new block, i.e., its index, hash, previous block hash, the next consensus node and a list of all transactions included in that block.

```java
neow3j.subscribeToNewBlocksObservable(true)
        .subscribe((blockReqResult) -> {
            System.out.println("#######################################");
            System.out.println("Block Index:     " + blockReqResult.getBlock().getIndex());
            System.out.println("Block Hash:      " + blockReqResult.getBlock().getHash());
            System.out.println("Prev Block Hash: " + blockReqResult.getBlock().getPrevBlockHash());
            System.out.println("Next Consensus:  " + blockReqResult.getBlock().getNextConsensus());
            System.out.println("Transactions:    " + blockReqResult.getBlock().getTransactions());
        });
```

## About

Feel free to report any issues that might arise. Open an issue [here](https://github.com/neow3j/neow3j/issues/new/choose) to help us directly including it in our backlog.