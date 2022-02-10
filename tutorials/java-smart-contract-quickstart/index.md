---
title: 'neow3j - Java Smart Contract Quickstart'
description: "In this quickstart guide you will setup a smart contract project and get introduced to all tools necessary for contract development in Java."
# slug: neow3j-java-smart-contract-quickstart
author: AxLabs
tags: [ "NEOW3J", "SMART CONTRACT", "JAVA"]
skill: beginner
image: /tooling/neow3j-padded.png
source: https://github.com/neow3j/neow3j-boilerplate
sidebar: true
---

<img src="/tooling/neow3j.png" alt="neow3j" width="75%" style={{ padding: '5% 5% 5% 25%' }}/> 

## 1. Introduction

Java Smart contracts are made possible through the neow3j devpack, which provides a smart contract library, a compiler
and a test framework. Neow3j favors [Gradle](https://gradle.org) as the build tool. It offers a Gradle plugin that allows contract
compilation via a Gradle task.

## 2. Setup 

### Requirements

__Java__

Smart contract development in Java requires a Java SDK of at least version 8. Checkout
[Adoptium](https://adoptium.net/) for Java OpenJDK downloads.

__Docker__

For running smart contract tests with neow3j you need to have [Docker](https://www.docker.com/products/docker-desktop) installed.

### Development Environment

You could write smart contracts in any editor, but we recommend using 
[IntelliJ IDEA](https://www.jetbrains.com/idea/download/) and [**Visual Studio Code**](https://code.visualstudio.com/).
IntelliJ offers one of the best Java/Kotlin developer experiences while VS Code offers a powerful extension for
development on Neo.

If you use VS Code make sure to install the 
[Neo Blockchain Toolkit](https://marketplace.visualstudio.com/items?itemName=ngd-seattle.neo-blockchain-toolkit)
extension. It supports contract debugging, easy setup of private blockchains, and an in-editor block explorer. 
To get familiar with the Blockchain Toolkit checkout the quickstart tutorials
[here](https://ngdenterprise.com/neo-tutorials/quickstart1.html) (the tutorials use C# as the smart contract
language). 
For optimal Java support in VS Code we recommend using the 
[Java Extension Pack](https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack).

### Code 

For a quick setup of your smart contract project fetch the boilerplate project structure from our
[boilerplate](https://github.com/neow3j/neow3j-boilerplate) repository. This project contains a simple "HelloWorld"
smart contract.

```
git clone https://github.com/neow3j/neow3j-boilerplate.git
cd neow3j-boilerplate
```

## 3. Compilation

### Using the Gradle Task

With the setup from above, we can already compile our HelloWorld contract. Open a terminal in the project's root directory and run 

```
./gradlew neow3jCompile
```

This compiles the smart contract class `HelloWorldSmartContract`, and places a NEF file, contract manifest, and
debugging information file. NEF file and contract manifest are described [here](/docs/n3/develop/write/manifest) by
default at `build/neow3j`. They are the artifacts that are deployed on-chain. The debugging information file, is
required by the Neo Debugger (part of the Neo Blockchain Toolkit) to debug your contract. 


### Using the Compiler in Code

The neow3j compiler can also be invoked in Java code. This is practical if you are using Java code to deploy your
contract and want to compile your contract in the same code.

You will find an example for the compiler usage `com.axlabs.helloworld.Deployment` in the boilerplate project.

```java
CompilationUnit res = new Compiler().compile(
    HelloWorldSmartContract.class.getCanonicalName(),
    substitutions);
```

The name of the contract to compile as well as a map of placeholder substitutions is passed to the compiler. The
compilation result is a `CompilationUnit` which gives access to the NEF file and the contract manifest. They are used to call the `ContractManagement` contract - a contract that is native to the Neo blockchain.

```java
TransactionBuilder builder = new ContractManagement(neow3j)
    .deploy(res.getNefFile(), res.getManifest(), hash160(owner))
    .signers(signer);
```

## 4. Development

## About


