---
title: 'Neow3j Project Setup'
description: "This tutorial contains a quickstart to set up a neow3j boilerplate in order to interact with Neo N3 and developing Neo N3 smart contracts in Java."
slug: neow3j-project-setup
author: AxLabs
tags: ["NEOW3J","JAVA", "QUICKSTART"]
image: /tooling/neow3j.png
skill: beginner
sidebar: true
---

# Introduction

Neow3j is a development toolkit that provides easy and reliable tools to build Neo dApps and Smart
Contracts using the Java platform (Java, Kotlin, Android). Check out [neow3j.io](https://neow3j.io) for more detailed information on neow3j and the technical documentation.

# Setup

In order to get set up with the neow3j toolkit, you can start by using the boilerplate project setup for developing Java smart contracts. It brings the minimum amount of code to compile and test a "Hello World" smart contract for Neo N3.

## Requirements

> [Java 1.8](https://adoptopenjdk.net/installation.html) (or higher) is required.
> 
> [Docker](https://www.docker.com/products/docker-desktop) is required for running smart contract tests.

## Steps to get started

Clone the boilerplate git repo:

```bash
git clone https://github.com/neow3j/neow3j-boilerplate.git
```

Go to the project directory:

```bash
cd neow3j-boilerplate
```

In the repository exists a simple hello world example contract. You can compile it using the neow3j gradle plugin by executing the following command:

```bash
./gradlew neow3jCompile
```

The above gradle command executes the `neow3jCompile` gradle task specified in the file `gradle.build`.

```gradle
neow3jCompiler {
    className = "org.example.HelloWorldSmartContract"
}
```

The output files of the compilation can then be found in the directory `./build/neow3j`. It contains the contract's `.manifest.json`, `.nef` files, and further a `.nefdbgnfo` file that contains debugging information.

```bash
$ ls -la build/neow3j 
total 24
drwxr-xr-x  5 user  wheel  160 23 Feb 17:40 .
drwxr-xr-x  7 user  wheel  224 23 Feb 17:40 ..
-rw-r--r--  1 user  wheel  425 23 Feb 17:40 HelloWorldSmartContract.manifest.json
-rw-r--r--  1 user  wheel   94 23 Feb 17:40 HelloWorldSmartContract.nef
-rw-r--r--  1 user  wheel  430 23 Feb 17:40 HelloWorldSmartContract.nefdbgnfo
```

Now, you can run the contract tests  with the `test` gradle task:

```bash
./gradlew test
```

## Adapting the Boilerplate Code

To adapt the boilerplate project to your own smart contract project, here are some things that 
you will have to change in the code.

- Project name. I.e., the root folder's name and the `rootProject.name` property in the
  *settings.gradle* file.
- Name of the contract (i.e., the name of the class and the value in the `@DisplayName`
  annotation on the contract class).
- Name of the author. (i.e., the value in the `@ManifestExtra(key = "author", value = "Your Name")`
  annotation on the contract class).
- Package name.
- Group name (i.e., the `group 'org.example'` property in the *build.gradle* file).
- Neow3j Gradle plugin property `className = "org.example.HelloWorldSmartContract"` in the
  *build.gradle* file according to the new package and class name you chose.
- And of course the contract tests in `HelloWorldSmartContractTest`.

## About

Feel free to report any issues that might arise. Open an issue [here](https://github.com/neow3j/neow3j/issues) to help us directly including it in our backlog.
