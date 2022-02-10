---
title: 'Neow3j - Implementing a NEP-17 Smart Contract in Java'
description: "This tutorial describes an example implementation of a NEP-17 smart contract developed in Java using the neow3j library."
slug: neow3j-nep17-smart-contract
author: AxLabs
tags: ["NEP-17", "JAVA", "NEOW3J"]
skill: beginner
image: "/tooling/neow3j.png"
sidebar: true
---

![img](/tooling/neow3j.png)

Neow3j is a development toolkit that provides easy and reliable tools to build Neo dApps and Smart
Contracts using the Java platform (Java, Kotlin, Android). Check out [neow3j.io](https://neow3j.io) for more detailed information on neow3j and the technical documentation.

## 1. Setup

If you haven't already set up your environment to use the neow3j library, you can check out our tutorial about setting up a neow3j project [here](../../../2022/02/07/neow3j-setup).

## 2. NEP-17 Overview

The NEP-17 is the fungible token standard on Neo N3. Have a look at its official documentation [here](https://github.com/neo-project/proposals/blob/master/nep-17.mediawiki).

## 3. Example NEP-17 Contract

The following example code represents a possible implementation for a token that supports the NEP-17 standard.

```java
package io.neow3j.examples.contractdevelopment.contracts;

import static io.neow3j.devpack.StringLiteralHelper.addressToScriptHash;

import io.neow3j.devpack.ByteString;
import io.neow3j.devpack.Contract;
import io.neow3j.devpack.Hash160;
import io.neow3j.devpack.Runtime;
import io.neow3j.devpack.Storage;
import io.neow3j.devpack.StorageContext;
import io.neow3j.devpack.StorageMap;
import io.neow3j.devpack.annotations.DisplayName;
import io.neow3j.devpack.annotations.ManifestExtra;
import io.neow3j.devpack.annotations.OnDeployment;
import io.neow3j.devpack.annotations.Permission;
import io.neow3j.devpack.annotations.SupportedStandards;
import io.neow3j.devpack.constants.CallFlags;
import io.neow3j.devpack.constants.NativeContract;
import io.neow3j.devpack.contracts.ContractManagement;
import io.neow3j.devpack.events.Event3Args;

@DisplayName("AxLabsToken")
@ManifestExtra(key = "author", value = "AxLabs")
@SupportedStandards("NEP-17") // 
@Permission(nativeContract = NativeContract.ContractManagement)
public class FungibleToken {

    // Constants

    static final Hash160 owner = addressToScriptHash("NM7Aky765FG8NhhwtxjXRx7jEL1cnw7PBP");

    static final int decimals = 2;
    static final byte[] totalSupplyKey = new byte[]{0x00};
    static final StorageContext ctx = Storage.getStorageContext();
    static final StorageMap assetMap = new StorageMap(ctx, new byte[]{0x01});

    // NEP-17 Events

    @DisplayName("Transfer")
    static Event3Args<Hash160, Hash160, Integer> onTransfer;

    // NEP-17 Methods

    @Safe
    public static String symbol() {
        return "ALT";
    }

    @Safe
    public static int decimals() {
        return decimals;
    }

    @Safe
    public static int totalSupply() {
        return Storage.getInt(ctx, totalSupplyKey);
    }

    @Safe
    public static int balanceOf(Hash160 account) {
        assert Hash160.isValid(account) : "Argument is not a valid address.";
        return getBalance(account);
    }

    public static boolean transfer(Hash160 from, Hash160 to, int amount, Object[] data) {

        assert Hash160.isValid(from) && Hash160.isValid(to) : "'from' or 'to' address is not a valid address.";
        assert amount >= 0 : "The transfer amount must be non-negative.";
        assert Runtime.checkWitness(from) : "No authorization.";

        if (amount > getBalance(from)) {
            return false;
        }

        if (from != to && amount != 0) {
            deductFromBalance(from, amount);
            addToBalance(to, amount);
        }
        if (ContractManagement.getContract(to) != null) {
            onTransfer.fire(from, to, amount);
            Contract.call(to, "onNEP17Payment", CallFlags.All, data);
        }
        return true;
    }

    // Private Helper Methods

    private static void throwIfSignerIsNotOwner() {
        assert Runtime.checkWitness(owner) : "The calling entity is not the owner of this contract.";
    }

    private static void addToBalance(Hash160 key, int value) {
        assetMap.put(key.toByteArray(), getBalance(key) + value);
    }

    private static void deductFromBalance(Hash160 key, int value) {
        int oldValue = getBalance(key);
        assetMap.put(key.toByteArray(), oldValue - value);
    }

    private static int getBalance(Hash160 key) {
        return assetMap.getIntOrZero(key.toByteArray());
    }

    // Deploy, Update, and Destroy

    @OnDeployment
    public static void deploy(Object data, boolean update) {
        if (!update) {
            throwIfSignerIsNotOwner();
            int initialSupply = 200_000_000;
            Storage.put(ctx, totalSupplyKey, initialSupply);
            assetMap.put(owner.toByteArray(), initialSupply);
        }
    }

    public static void update(ByteString script, String manifest) {
        throwIfSignerIsNotOwner();
        ContractManagement.update(script, manifest);
    }

    public static void destroy() throws Exception {
        throwIfSignerIsNotOwner();
        ContractManagement.destroy();
    }

}
```

## 4. Contract Breakdown

In the following, we're looking at each part of the NEP-17 example contract.

### Imports

The imports show the neow3j devpack classes that are used in the example contract. Check out neow3j devpack's [javadoc](https://javadoc.io/doc/io.neow3j/devpack/latest/index.html) for a full overview of classes and methods that are supported.

```java
package io.neow3j.examples.contractdevelopment.contracts;

import static io.neow3j.devpack.StringLiteralHelper.addressToScriptHash;

import io.neow3j.devpack.ByteString;
import io.neow3j.devpack.Contract;
import io.neow3j.devpack.Hash160;
import io.neow3j.devpack.Runtime;
import io.neow3j.devpack.Storage;
import io.neow3j.devpack.StorageContext;
import io.neow3j.devpack.StorageMap;
import io.neow3j.devpack.annotations.DisplayName;
import io.neow3j.devpack.annotations.ManifestExtra;
import io.neow3j.devpack.annotations.OnDeployment;
import io.neow3j.devpack.annotations.Permission;
import io.neow3j.devpack.annotations.SupportedStandards;
import io.neow3j.devpack.constants.CallFlags;
import io.neow3j.devpack.constants.NativeContract;
import io.neow3j.devpack.contracts.ContractManagement;
import io.neow3j.devpack.events.Event3Args;
```

### Contract-specific Information

Annotations on top of the contract's class represent contract-specific information. The following annotations can be used for a contract:

_`@DisplayName`_

Specifies the contract's name. If this annotation is not present, the class name is used for the contrat's name.

_`@ManifestExtra`_

Adds the provided key-value pair information in the manifest's `extra` field. You can also use `@ManifestsExtras` to gather multiple `@ManifestExtra` annotations (results in the same as when using single `@ManifestExtra` annotations).

_`@SupportedStandards`_

Sets the `supportedStandards` field in the manifest.

_`@Permission`_

Specifies, what other contracts and which methods it is allowed to call. By default (i.e., if no permission annotation is set), the contract is not allowed to call any contract. Use `contract = ` to specify what contracts and `methods = ` to specify what methods are allowed.

_For example, if you want to allow transferring NEO tokens from the contract, you can add the annotation `@Permission(nativeContract = NativeContract.NeoToken, methods = "transfer")`._

```java
@DisplayName("AxLabsToken")
@ManifestExtra(key = "author", value = "AxLabs")
@SupportedStandards("NEP-17")
@Permission(nativeContract = NativeContract.ContractManagement)
public class FungibleToken {
```

### Constants

You can set a constant value for the contract by using `final` variables. These values are always loaded when the contract is called and cannot be changed once the contract is deployed.

> Note: The owner of this NEP-17 example contract is fixed (i.e., it is a `final` variable). If you intend to provide a functionality to change such a variable, you should not store it as a `final` variable. Rather, you would store it as a value in the storage, that you then can change through a method.

-

> Note: All contract constants and all methods have to be `static` (since the object-orientation of the JVM is different on the NeoVM).

-

```java
    static final Hash160 owner = addressToScriptHash("NM7Aky765FG8NhhwtxjXRx7jEL1cnw7PBP");

    static final int decimals = 2;
    static final byte[] totalSupplyKey = new byte[]{0x00};
    static final StorageContext ctx = Storage.getStorageContext();
    static final StorageMap assetMap = new StorageMap(ctx, new byte[]{0x01});
```

### NEP-17 Methods

The required NEP-17 methods are implemented in the following. If a method does not change the state of the contract (i.e., it is just used for reading), it can be annotated with the `@Safe` annotation. Out of the NEP-17 methods, only the `transfer` method should be writing to the contract and is thus not annotated as safe.

> Note: Java's `assert` statement is used in neow3j to throw exceptions on the NeoVM. Thus, there is no need of using an `if` statement with a followed `throw new Exception()` statement. Although, it may still be used like that. It is up to the developer's preference, as it results in the exact same NeoVM code once compiled.

-

```java
    @Safe
    public static String symbol() {
        return "ALT";
    }

    @Safe
    public static int decimals() {
        return decimals;
    }

    @Safe
    public static int totalSupply() {
        return Storage.getInt(ctx, totalSupplyKey);
    }

    @Safe
    public static int balanceOf(Hash160 account) {
        assert Hash160.isValid(account) : "Argument is not a valid address.";
        return getBalance(account);
    }

    public static boolean transfer(Hash160 from, Hash160 to, int amount, Object[] data) {
        assert Hash160.isValid(from) && Hash160.isValid(to) : "'from' or 'to' address is not a valid address.";
        assert amount >= 0 : "The transfer amount must be non-negative.";
        assert Runtime.checkWitness(from) : "No authorization.";

        if (getBalance(from) < amount) {
            return false;
        }

        if (from != to && amount != 0) {
            deductFromBalance(from, amount);
            addToBalance(to, amount);
        }
        if (ContractManagement.getContract(to) != null) {
            onTransfer.fire(from, to, amount);
            Contract.call(to, "onNEP17Payment", CallFlags.All, data);
        }
        return true;
    }
```

### Events

The NEP-17 standard requires an event `Transfer` that contains the values `from`, `to`, and `amount`. For this, the class `Event3Args` can be used with the annotation `@DisplayName` to set the event's name that will be shown in the manifest and notifications when it has been fired.

```java
    @DisplayName("Transfer")
    static Event3Args<Hash160, Hash160, Integer> onTransfer;
```

When the event should be fired, its `fire` method can be called with the three arguments as shown in the `transfer` method.

```java
    onTransfer.fire(from, to, amount);
```

### Deploy

Within the deployment transaction of the contract, the contract data is first stored on the blockchain and then the native contract `ContractManagement` calls the contract's `deploy` method. In neow3j, that method is marked with the annotation `@OnDeployment`. In the example, when the contract is deployed, the `initialSupply` is set to 200'000'000 and it is allocated to the contract's owner.

```java
    @OnDeployment
    public static void deploy(Object data, boolean update) {
        if (!update) {
            throwIfSignerIsNotOwner();
            int initialSupply = 200_000_000;
            Storage.put(ctx, totalSupplyKey, initialSupply);
            assetMap.put(owner.toByteArray(), initialSupply);
        }
```

### Update and Destroy

In order to update or destroy the contract, the following two simple methods first check that the contract owner witnessed the transaction and then the appropriate method is called on the native contract `ContractManagement`.

:::note

In case of an update, besides updating the contract's nef and manifest, the `ContractManagement.update` eventually calls the `deploy` method (shown above) with the boolean `update` set to true.

:::

-

```java
    public static void update(ByteString nef, String manifest) {
        throwIfSignerIsNotOwner();
        ContractManagement.update(nef, manifest);
    }

    public static void destroy() throws Exception {
        throwIfSignerIsNotOwner();
        ContractManagement.destroy();
    }
```

### Private Helper Methods

Private methods can be used to extract code that is used internally in the contract. The following private methods are used in the NEP-17 example contract. For example, in order to prevent writing the same exception message to check the witness of the owner, the private method `throwIfSignerIsNotOwner` allows to write this code only once.

```java
    private static void throwIfSignerIsNotOwner() {
        assert Runtime.checkWitness(owner) : "The calling entity is not the owner of this contract.";
    }

    private static void addToBalance(Hash160 key, int value) {
        assetMap.put(key.toByteArray(), getBalance(key) + value);
    }

    private static void deductFromBalance(Hash160 key, int value) {
        int oldValue = getBalance(key);
        assetMap.put(key.toByteArray(), oldValue - value);
    }

    private static int getBalance(Hash160 key) {
        return assetMap.getIntOrZero(key.toByteArray());
    }

}
```

## 5. Compile the Contract

The contract can be compiled using the gradle plugin. First, set the `className` in the file `gradle.build` to the contract's class name. Then, the gradle task `neow3jCompile` can be executed from the project's root path to compile the contract.

```bash
./gradlew neow3jCompile
```

The output is then accessible in the folder `./build/neow3j`, and should contain the following three files:

```bash
AxLabsToken.manifest.json
AxLabsToken.nef
AxLabsToken.nefdbgnfo
```

> Note: The filenames can deviate according to what the contract's name is (i.e., not the class name). See [here](#contract-specific-information).

-

Now, the contract's `.manifest.json` and `.nef` files can be used to deploy the contract. Neow3j's SDK can be used to do so. Check out the example [here](https://github.com/neow3j/neow3j-examples-java/blob/4d82df91c27bf9d4992c166e1ae98045bd24fbbd/src/main/java/io/neow3j/examples/contractdevelopment/DeployFromFiles.java) about how to deploy a contract with its manifest and nef files.

## About

Feel free to report any issues that might arise. Open an issue [here](https://github.com/neow3j/neow3j/issues/new/choose) to help us directly including it in our backlog.


<!---
## How to test my dApp

This could also be handled in another tutorial
--->
