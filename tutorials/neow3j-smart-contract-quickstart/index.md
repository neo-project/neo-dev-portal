---
title: 'neow3j - Java Smart Contract Quickstart'
description: "In this quickstart guide you will setup a smart contract project and get introduced to all tools necessary
              for contract development in Java."
author: AxLabs
tags: [ "NEOW3J", "SMART CONTRACT", "JAVA"]
skill: beginner
image: /tooling/neow3j-padded.png
source: https://github.com/neow3j/neow3j-boilerplate
sidebar: true
---

<div align="center" style={{ padding: '0% 25% 0% 25%' }}>
  <img src="/tooling/neow3j.png" alt="neow3j" width="75%" style={{ padding: '0% 0% 5% 0%' }}/> 
  <h1> <a href="https://github.com/neow3j/neow3j">neow3j</a> <sub><small>v3.15.0</small></sub></h1> 
</div>

## 1. Introduction

Java Smart contracts are made possible through the neow3j devpack, which provides a smart contract library, a compiler
and a test framework. Neow3j favors [Gradle](https://gradle.org) as the build tool. It offers a Gradle plugin that
allows contract compilation via a Gradle task.

## 2. Setup 

### Requirements

__Java__

Smart contract development in Java requires a Java SDK of at least version 8. Checkout [Adoptium](https://adoptium.net/)
for Java OpenJDK downloads.

__Docker__

For running automated smart contract tests with neow3j you need to have
[Docker](https://www.docker.com/products/docker-desktop) installed.

__Neo-Express__

Neo-Express is a tool for setting up local private blockchains for development purposes. You will use it to deploy and
test your contracts manually. It requires .NET Core installed on your machine. Step through the Neo-Express installation
section [here](https://github.com/neo-project/neo-express#installation) to set it up.

### Development Environment

You could write smart contracts in any editor, but we recommend using 
[IntelliJ IDEA](https://www.jetbrains.com/idea/download/) and [Visual Studio Code](https://code.visualstudio.com/).
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

__Understanding Java for the NeoVM__

When using neow3j to implement smart contracts you will, at some point, have to understand the differences between
normal Java and Java for smart contract. Because smart contract code will run on the NeoVM and not on the JavaVM there
are several restrictions. You can read about that
[here](https://neow3j.io/#/neo-n3/smart_contract_development/neowjava).

__Understanding the neow3j Devpack__

To get to know the neow3j devpack library you can consult the documentation
[here](https://neow3j.io/#/neo-n3/smart_contract_development/devpack). It shows core features of the Neo smart
contract API, like storage, events, and native contracts, and explains how they are available in neow3j.
Or, checkout one of the other neow3j tutorials on the developer portal to get a better idea of how Java smart contracts
look like.

__Automated Testing__

https://neow3j.io/#/neo-n3/smart_contract_development/testing

__Manual Testing__


```shell
neoxp -h
```

```shell
neoxp run 
```