---
title: 'neow3j - Implementing a NEP-11 (NFT) Smart Contract in Java'
description: "This tutorial describes an example implementation of a NEP-11 smart contract developed in Java using the neow3j library."
author: AxLabs
tags: ["NEP-11", "JAVA", "NEOW3J"]
skill: beginner
image: "./assets/neow3j-padded.png"
source: https://github.com/neow3j/neow3j-examples-java/blob/6754899457538a6fb05f765146c12e009ab679d7/src/main/java/io/neow3j/examples/contractdevelopment/contracts/NonFungibleToken.java
sidebar: true
---

<div align="center" style={{ padding: '0% 25% 0% 25%' }}>
  <img src="/tooling/neow3j.png" alt="neow3j" width="75%" style={{ padding: '0% 0% 5% 0%' }}/> 
  <h1> <a href="https://github.com/neow3j/neow3j">neow3j</a> <sub><small>v3.15.0</small></sub></h1> 
</div>

## 1. Introduction

Neow3j is a development toolkit that provides easy and reliable tools to build Neo dApps and Smart
Contracts using the Java platform (Java, Kotlin, Android). Check out [neow3j.io](https://neow3j.io) for more detailed information on neow3j and the technical documentation.

## 2. Setup

If you haven't already set up your environment to use the neow3j library, you can check out our tutorial about setting up a neow3j project [here](/tutorials/neow3j-smart-contract-quickstart).

## 3. NEP-11 Overview

The NEP-11 is the non-fungible token (NFT) standard on Neo N3. Have a look at its official documentation [here](https://github.com/neo-project/proposals/blob/master/nep-11.mediawiki).

## 4. Example NEP-11 Contract

The following example code represents a possible implementation for a token that supports the NEP-11 standard.

:::info

This example contract supports **indivisible** NFTs (i.e., `decimals` is equal to 0).

<br />

The NEP-11 standard also describes what methods are required if divisible NTFs should be supported. Some of the methods required for divisible NFTS deviate from the ones discussed here. Check out the documentation of the NEP-11 standard [here](https://github.com/neo-project/proposals/blob/master/nep-11.mediawiki) for more details.

:::

```java
package io.neow3j.examples.contractdevelopment.contracts;

import io.neow3j.devpack.ByteString;
import io.neow3j.devpack.Hash160;
import io.neow3j.devpack.Helper;
import io.neow3j.devpack.Iterator;
import io.neow3j.devpack.Map;
import io.neow3j.devpack.Runtime;
import io.neow3j.devpack.Storage;
import io.neow3j.devpack.StorageContext;
import io.neow3j.devpack.StorageMap;
import io.neow3j.devpack.StringLiteralHelper;
import io.neow3j.devpack.annotations.DisplayName;
import io.neow3j.devpack.annotations.ManifestExtra;
import io.neow3j.devpack.annotations.OnDeployment;
import io.neow3j.devpack.annotations.Safe;
import io.neow3j.devpack.annotations.SupportedStandards;
import io.neow3j.devpack.constants.FindOptions;
import io.neow3j.devpack.contracts.ContractManagement;
import io.neow3j.devpack.events.Event3Args;
import io.neow3j.devpack.events.Event4Args;

@DisplayName("FurryFriends")
@ManifestExtra(key = "author", value = "AxLabs")
@SupportedStandards("NEP-11")
public class NonFungibleToken {

    static final Hash160 contractOwner = StringLiteralHelper.addressToScriptHash("NM7Aky765FG8NhhwtxjXRx7jEL1cnw7PBP");

    static final StorageContext ctx = Storage.getStorageContext();
    static final StorageMap contractMap = new StorageMap(ctx, 0);
    static final StorageMap registryMap = new StorageMap(ctx, 1);
    static final StorageMap ownerOfMap = new StorageMap(ctx, 2);
    static final StorageMap balanceMap = new StorageMap(ctx, 3);

    // Keys of key-value pairs in NFT properties
    static final String propName = "name";
    static final String propDescription = "description";
    static final String propImage = "image";
    static final String propTokenURI = "tokenURI";

    static final StorageMap propertiesNameMap = new StorageMap(ctx, 8);
    static final StorageMap propertiesDescriptionMap = new StorageMap(ctx, 9);
    static final StorageMap propertiesImageMap = new StorageMap(ctx, 10);
    static final StorageMap propertiesTokenURIMap = new StorageMap(ctx, 11);

    static final byte[] totalSupplyKey = new byte[]{0x10};
    static final byte[] tokensOfKey = new byte[]{0x11};

    // NEP-11 Methods

    @Safe
    public static String symbol() {
        return "NEOW";
    }

    @Safe
    public static int decimals() {
        return 0;
    }

    @Safe
    public static int totalSupply() {
        return contractMap.getInt(totalSupplyKey);
    }

    @Safe
    public static int balanceOf(Hash160 owner) {
        return balanceMap.getIntOrZero(owner.toByteArray());
    }

    @Safe
    public static Iterator<ByteString> tokensOf(Hash160 owner) {
        return (Iterator<ByteString>) Storage.find(
                ctx.asReadOnly(), createTokensOfPrefix(owner), FindOptions.RemovePrefix);
    }

    public static boolean transfer(Hash160 to, ByteString tokenId, Object data) {
        Hash160 owner = ownerOf(tokenId);
        assert owner != null : "This token id does not exist.";
        throwIfSignerIsNotOwner(owner);

        ownerOfMap.put(tokenId, to.toByteArray());

        new StorageMap(ctx, createTokensOfPrefix(owner)).delete(tokenId);
        new StorageMap(ctx, createTokensOfPrefix(to)).put(tokenId, 1);

        decreaseBalanceByOne(owner);
        increaseBalanceByOne(to);

        onTransfer.fire(owner, to, 1, tokenId);
        return true;
    }

    @Safe
    public static Hash160 ownerOf(ByteString tokenId) {
        ByteString owner = ownerOfMap.get(tokenId);
        if (owner == null) {
            return null;
        }
        return new Hash160(owner);
    }

    @Safe
    public static Iterator<Iterator.Struct<ByteString, ByteString>> tokens() {
        return (Iterator<Iterator.Struct<ByteString, ByteString>>) registryMap.find(FindOptions.RemovePrefix);
    }

    @Safe
    public static Map<String, String> properties(ByteString tokenId) {
        Map<String, String> p = new Map<>();
        ByteString tokenName = propertiesNameMap.get(tokenId);
        assert tokenName != null : "This token id does not exist.";

        p.put(propName, tokenName.toString());
        ByteString tokenDescription = propertiesDescriptionMap.get(tokenId);
        if (tokenDescription != null) {
            p.put(propDescription, tokenDescription.toString());
        }
        ByteString tokenImage = propertiesImageMap.get(tokenId);
        if (tokenImage != null) {
            p.put(propImage, tokenImage.toString());
        }
        ByteString tokenURI = propertiesTokenURIMap.get(tokenId);
        if (tokenURI != null) {
            p.put(propTokenURI, tokenURI.toString());
        }
        return p;
    }

    // Events

    @DisplayName("Mint")
    private static Event3Args<Hash160, ByteString, Map<String, String>> onMint;

    @DisplayName("Transfer")
    static Event4Args<Hash160, Hash160, Integer, ByteString> onTransfer;

    // Custom Methods

    @Safe
    public static Hash160 contractOwner() {
        return contractOwner;
    }

    public static void mint(Hash160 owner, ByteString tokenId, Map<String, String> properties) {
        assert Runtime.checkWitness(contractOwner) : "No authorization.";
        assert registryMap.get(tokenId) == null : "This token id already exists.";
        assert properties.containsKey(propName) : "The properties must contain a value for the key 'name'.";

        String tokenName = properties.get(propName);
        propertiesNameMap.put(tokenId, tokenName);

        if (properties.containsKey(propDescription)) {
            String description = properties.get(propDescription);
            propertiesDescriptionMap.put(tokenId, description);
        }
        if (properties.containsKey(propImage)) {
            String image = properties.get(propImage);
            propertiesImageMap.put(tokenId, image);
        }
        if (properties.containsKey(propTokenURI)) {
            String tokenURI = properties.get(propTokenURI);
            propertiesTokenURIMap.put(tokenId, tokenURI);
        }

        registryMap.put(tokenId, tokenId);
        ownerOfMap.put(tokenId, owner.toByteArray());
        new StorageMap(ctx, createTokensOfPrefix(owner)).put(tokenId, 1);

        increaseBalanceByOne(owner);
        incrementTotalSupplyByOne();
        onMint.fire(owner, tokenId, properties);
    }

    public static boolean burn(ByteString tokenId) {
        Hash160 owner = ownerOf(tokenId);
        assert owner != null : "This token id does not exist.";
        throwIfSignerIsNotOwner(owner);

        registryMap.delete(tokenId);
        propertiesNameMap.delete(tokenId);
        propertiesDescriptionMap.delete(tokenId);
        propertiesImageMap.delete(tokenId);
        propertiesTokenURIMap.delete(tokenId);
        ownerOfMap.delete(tokenId);

        new StorageMap(ctx, createTokensOfPrefix(owner)).delete(tokenId);
        decreaseBalanceByOne(owner);
        decrementTotalSupplyByOne();
        return true;
    }

    // Private Helper Methods

    private static void throwIfSignerIsNotContractOwner() {
        assert Runtime.checkWitness(contractOwner) : "No authorization.";
    }

    private static void throwIfSignerIsNotOwner(Hash160 owner) {
        assert Runtime.checkWitness(owner) : "No authorization.";
    }

    private static void increaseBalanceByOne(Hash160 owner) {
        balanceMap.put(owner.toByteArray(), balanceOf(owner) + 1);
    }

    private static void decreaseBalanceByOne(Hash160 owner) {
        balanceMap.put(owner.toByteArray(), balanceOf(owner) - 1);
    }

    private static void incrementTotalSupplyByOne() {
        int updatedTotalSupply = contractMap.getInt(totalSupplyKey) + 1;
        contractMap.put(totalSupplyKey, updatedTotalSupply);
    }

    private static void decrementTotalSupplyByOne() {
        int updatedTotalSupply = contractMap.getInt(totalSupplyKey) - 1;
        contractMap.put(totalSupplyKey, updatedTotalSupply);
    }

    private static byte[] createTokensOfPrefix(Hash160 owner) {
        return Helper.concat(tokensOfKey, owner.toByteArray());
    }

    // Deploy, Update, and Destroy

    @OnDeployment
    public static void deploy(Object data, boolean update) {
        if (!update) {
            throwIfSignerIsNotContractOwner();
            contractMap.put(totalSupplyKey, 0);
        }
    }

    public static void update(ByteString script, String manifest) {
        throwIfSignerIsNotContractOwner();
        ContractManagement.update(script, manifest);
    }

    public static void destroy() {
        throwIfSignerIsNotContractOwner();
        ContractManagement.destroy();
    }

}
```

## 5. Contract Breakdown

### Imports

The imports show the neow3j devpack classes that are used in the example contract. Check out neow3j devpack's [javadoc](https://javadoc.io/doc/io.neow3j/devpack/latest/index.html) for a full overview of classes and methods that are supported.

```java
package io.neow3j.examples.contractdevelopment.contracts;

import io.neow3j.devpack.ByteString;
import io.neow3j.devpack.Hash160;
import io.neow3j.devpack.Helper;
import io.neow3j.devpack.Iterator;
import io.neow3j.devpack.Map;
import io.neow3j.devpack.Runtime;
import io.neow3j.devpack.Storage;
import io.neow3j.devpack.StorageContext;
import io.neow3j.devpack.StorageMap;
import io.neow3j.devpack.StringLiteralHelper;
import io.neow3j.devpack.annotations.DisplayName;
import io.neow3j.devpack.annotations.ManifestExtra;
import io.neow3j.devpack.annotations.OnDeployment;
import io.neow3j.devpack.annotations.Safe;
import io.neow3j.devpack.annotations.SupportedStandards;
import io.neow3j.devpack.constants.FindOptions;
import io.neow3j.devpack.contracts.ContractManagement;
import io.neow3j.devpack.events.Event3Args;
import io.neow3j.devpack.events.Event4Args;
```

### Contract-specific Information

Annotations on top of the smart contract's class represent contract-specific information. The following annotations are used in the example contract:

_`@DisplayName`_

It specifies the contract's name. If this annotation is not present, the class name is used for the contract's name.

_`@ManifestExtra`_

Adds the provided key-value pair information in the manifest's `extra` field. You can also use `@ManifestsExtras` to gather multiple `@ManifestExtra` annotations (results in the same as when using single `@ManifestExtra` annotations).

_`@SupportedStandards`_

Sets the `supportedStandards` field in the manifest.

```java
@DisplayName("FurryFriends")
@ManifestExtra(key = "author", value = "AxLabs")
@SupportedStandards("NEP-11")
public class NonFungibleToken {
```

### Constants

You can set a constant value for the contract by using `final` variables. These values are always loaded when the contract is called and cannot be changed once the contract is deployed.

:::note

All contract constants and all methods must be `static` (since the object-orientation of the JVM is different on the NeoVM).

:::
:::tip

The contract owner of this example contract is fixed (i.e., it is a `final` variable). If you intend to provide a way to change such a variable, you should not store it as a `final` variable. Rather, you would store it as a value in the storage, which provides the possibility to be modified through a method.

:::

```java
static final Hash160 contractOwner = StringLiteralHelper.addressToScriptHash("NM7Aky765FG8NhhwtxjXRx7jEL1cnw7PBP");

static final StorageContext ctx = Storage.getStorageContext();
static final StorageMap contractMap = new StorageMap(ctx, 0);
static final StorageMap registryMap = new StorageMap(ctx, 1);
static final StorageMap ownerOfMap = new StorageMap(ctx, 2);
static final StorageMap balanceMap = new StorageMap(ctx, 3);

// Keys of key-value pairs in NFT properties
static final String propName = "name";
static final String propDescription = "description";
static final String propImage = "image";
static final String propTokenURI = "tokenURI";

static final StorageMap propertiesNameMap = new StorageMap(ctx, 8);
static final StorageMap propertiesDescriptionMap = new StorageMap(ctx, 9);
static final StorageMap propertiesImageMap = new StorageMap(ctx, 10);
static final StorageMap propertiesTokenURIMap = new StorageMap(ctx, 11);

static final byte[] totalSupplyKey = new byte[]{0x10};
static final byte[] tokensOfKey = new byte[]{0x11};
```

### NEP-11 Methods

The required NEP-11 methods are implemented as follows. If a method does not change the state of the contract (i.e., it is just used for reading), it can be annotated with the `@Safe` annotation. Out of the required NEP-11 methods, only the `transfer()` method should be writing to the contract's storage and, thus, is not annotated as safe.

:::info

Neow3j uses Java's `assert` statement to throw exceptions on the NeoVM. Thus, there is no need of using an `if` statement with a followed `throw new Exception()` statement. Although, it may still be used like that. It is up to the developer to go either way, as it results in the exact same NeoVM code once compiled.

:::

```java
@Safe
public static String symbol() {
    return "NEOW";
}

@Safe
public static int decimals() {
    return 0;
}

@Safe
public static int totalSupply() {
    return contractMap.getInt(totalSupplyKey);
}

@Safe
public static int balanceOf(Hash160 owner) {
    return balanceMap.getIntOrZero(owner.toByteArray());
}

@Safe
public static Iterator<ByteString> tokensOf(Hash160 owner) {
    return (Iterator<ByteString>) Storage.find(
            ctx.asReadOnly(), createTokensOfPrefix(owner), FindOptions.RemovePrefix);
}

public static boolean transfer(Hash160 to, ByteString tokenId, Object data) {
    Hash160 owner = ownerOf(tokenId);
    assert owner != null : "This token id does not exist.";
    throwIfSignerIsNotOwner(owner);

    ownerOfMap.put(tokenId, to.toByteArray());

    new StorageMap(ctx, createTokensOfPrefix(owner)).delete(tokenId);
    new StorageMap(ctx, createTokensOfPrefix(to)).put(tokenId, 1);

    decreaseBalanceByOne(owner);
    increaseBalanceByOne(to);

    onTransfer.fire(owner, to, 1, tokenId);
    return true;
}

@Safe
public static Hash160 ownerOf(ByteString tokenId) {
    ByteString owner = ownerOfMap.get(tokenId);
    if (owner == null) {
        return null;
    }
    return new Hash160(owner);
}
```

### NEP-11 Optional Methods

The NEP-11 standard describes two optional methods called `tokens()` and `properties()` -- meaning that if methods with these names and parameters are implemented, they must follow the standard. Below you can see the implementation of these two methods. The `tokens()` method iterates through the `registryMap` and returns an `Iterator` based on the key-value pairs that are found in the registry. The `properties()` method returns a map of the provided token's properties stored in the contract's storage. This includes its name, and if present its description, image, and URI.

```java
@Safe
public static Iterator<Iterator.Struct<ByteString, ByteString>> tokens() {
    return (Iterator<Iterator.Struct<ByteString, ByteString>>) registryMap.find(FindOptions.RemovePrefix);
}

@Safe
public static Map<String, String> properties(ByteString tokenId) {
    Map<String, String> p = new Map<>();
    ByteString tokenName = propertiesNameMap.get(tokenId);
    assert tokenName != null : "This token id does not exist.";

    p.put(propName, tokenName.toString());
    ByteString tokenDescription = propertiesDescriptionMap.get(tokenId);
    if (tokenDescription != null) {
        p.put(propDescription, tokenDescription.toString());
    }
    ByteString tokenImage = propertiesImageMap.get(tokenId);
    if (tokenImage != null) {
        p.put(propImage, tokenImage.toString());
    }
    ByteString tokenURI = propertiesTokenURIMap.get(tokenId);
    if (tokenURI != null) {
        p.put(propTokenURI, tokenURI.toString());
    }
    return p;
}
```

### Events

The NEP-11 standard requires an event `Transfer` that contains the values `from`, `to`, `amount`, and `tokenId`. For this, the class `Event4Args` can be used with the annotation `@DisplayName` to set the event's name that will be shown in the manifest and notifications when it has been fired. The event `Mint` is an additional custom event that is fired whenever a new NFT is minted.

```java
@DisplayName("Transfer")
static Event4Args<Hash160, Hash160, Integer, ByteString> onTransfer;

@DisplayName("Mint")
private static Event3Args<Hash160, ByteString, Map<String, String>> onMint;
```

An event variable can effectively fire an event by using the `fire()` method with the corresponding arguments. For example, the `Transfer` event (represented by the `onTransfer` variable) should be fired whenever a transfer happens.

```java
onTransfer.fire(owner, to, 1, tokenId);
```

### Deploy

Once a deployment transaction is made (containing the contract and other parameters), the contract data is first stored on the blockchain and then the native contract `ContractManagement` calls the smart contract's `deploy()` method. In neow3j, that method is marked with the annotation `@OnDeployment`. In the example, when the smart contract is deployed, the total supply is set to 0.

```java
@OnDeployment
public static void deploy(Object data, boolean update) {
    if (!update) {
        throwIfSignerIsNotContractOwner();
        contractMap.put(totalSupplyKey, 0);
    }
}
```

### Update and Destroy

In order to update the contract, the following method first checks that the contract owner witnessed the transaction and then the native `ContractManagement.update()` method is called. When updating a smart contract, you can change the smart contract's code and its manifest. This means that you can update how the contract programmatically manages its storage context.

:::note

Additionally to changing the smart contract's script and manifest, the method `ContractManagement.update()` eventually calls the smart contract's `deploy()` method (shown above) with the boolean `update` set to true.

:::

```java
public static void update(ByteString script, String manifest) {
    throwIfSignerIsNotContractOwner();
    ContractManagement.update(script, manifest);
}
```

The example contract also provides the option to destroy the smart contract. As well as the `update()` method, it first verifies that the contract owner witnessed the transaction and then calls the method `ContractManagement.destroy()` method.

:::caution

When the native method `ContractManagement.destroy()` is called from a smart contract, the whole smart contract's storage context is erased, and the contract can no longer be used.

:::

```java
public static void destroy() {
    throwIfSignerIsNotContractOwner();
    ContractManagement.destroy();
}
```

### Custom Methods

The example contract contains some custom methods, that are not specified in the NEP-11 standard.

The method `contractOwner()` simply returns the script hash of the contract owner.

The method `mint()` can be invoked by the contract owner in order to mint new NFT tokens. It stores the tokenId in the `registryMap`, its properties in the `propertiesMap`, and its owner in the `ownerMap`. Further, it increases the owner's balance, and the total supply by 1, before it fires the `Mint` event.

The method `burn()` can be invoked by the owner of a token. It deletes all information about the token and updates the balance and total supply accordingly. If the intent of burning a token need not require the storage to be freed, the token could also just be sent to a *burner address*.

```java
@Safe
public static Hash160 contractOwner() {
    return contractOwner;
}

public static void mint(Hash160 owner, ByteString tokenId, Map<String, String> properties) {
    assert Runtime.checkWitness(contractOwner) : "No authorization.";
    assert registryMap.get(tokenId) == null : "This token id already exists.";
    assert properties.containsKey(propName) : "The properties must contain a value for the key 'name'.";

    String tokenName = properties.get(propName);
    propertiesNameMap.put(tokenId, tokenName);

    if (properties.containsKey(propDescription)) {
        String description = properties.get(propDescription);
        propertiesDescriptionMap.put(tokenId, description);
    }
    if (properties.containsKey(propImage)) {
        String image = properties.get(propImage);
        propertiesImageMap.put(tokenId, image);
    }
    if (properties.containsKey(propTokenURI)) {
        String tokenURI = properties.get(propTokenURI);
        propertiesTokenURIMap.put(tokenId, tokenURI);
    }

    registryMap.put(tokenId, tokenId);
    ownerOfMap.put(tokenId, owner.toByteArray());
    new StorageMap(ctx, createTokensOfPrefix(owner)).put(tokenId, 1);

    increaseBalanceByOne(owner);
    incrementTotalSupplyByOne();
    onMint.fire(owner, tokenId, properties);
}

public static boolean burn(ByteString tokenId) {
    Hash160 owner = ownerOf(tokenId);
    assert owner != null : "This token id does not exist.";
    throwIfSignerIsNotOwner(owner);

    registryMap.delete(tokenId);
    propertiesNameMap.delete(tokenId);
    propertiesDescriptionMap.delete(tokenId);
    propertiesImageMap.delete(tokenId);
    propertiesTokenURIMap.delete(tokenId);
    ownerOfMap.delete(tokenId);

    new StorageMap(ctx, createTokensOfPrefix(owner)).delete(tokenId);
    decreaseBalanceByOne(owner);
    decrementTotalSupplyByOne();
    return true;
}
```

### Private Helper Methods

Private methods can be used to, for example, simplify and make the smart contract a bit more readable. The following private methods are used in the NEP-11 example contract. For example, in order to prevent writing the same exception message to check the witness of the owner, the private method `throwIfSignerIsNotContractOwner()` allows writing this code only once.

```java
private static void throwIfSignerIsNotContractOwner() {
    assert Runtime.checkWitness(contractOwner) : "No authorization.";
}

private static void throwIfSignerIsNotOwner(Hash160 owner) {
    assert Runtime.checkWitness(owner) : "No authorization.";
}

private static void increaseBalanceByOne(Hash160 owner) {
    balanceMap.put(owner.toByteArray(), balanceOf(owner) + 1);
}

private static void decreaseBalanceByOne(Hash160 owner) {
    balanceMap.put(owner.toByteArray(), balanceOf(owner) - 1);
}

private static void incrementTotalSupplyByOne() {
    int updatedTotalSupply = contractMap.getInt(totalSupplyKey) + 1;
    contractMap.put(totalSupplyKey, updatedTotalSupply);
}

private static void decrementTotalSupplyByOne() {
    int updatedTotalSupply = contractMap.getInt(totalSupplyKey) - 1;
    contractMap.put(totalSupplyKey, updatedTotalSupply);
}

private static byte[] createTokensOfPrefix(Hash160 owner) {
    return Helper.concat(tokensOfKey, owner.toByteArray());
}
```

## 6. Compile the Contract

The contract can be compiled using the gradle plugin. First, set the `className` in the file `gradle.build` to the contract's class name. Then, the gradle task `neow3jCompile` can be executed from the project's root path to compile the contract.

```bash
./gradlew neow3jCompile
```

The output is then accessible in the folder `./build/neow3j`, and should contain the following three files:

```bash
FurryFriends.manifest.json
FurryFriends.nef
FurryFriends.nefdbgnfo
```

:::note

The filenames can deviate according to what the contract's name is. See [here](#contract-specific-information).

:::

Now, the contract's `.manifest.json` and `.nef` files can be used to deploy the contract. Neow3j's SDK can be used to do so. Check out the example [here](https://github.com/neow3j/neow3j-examples-java/blob/4d82df91c27bf9d4992c166e1ae98045bd24fbbd/src/main/java/io/neow3j/examples/contractdevelopment/DeployFromFiles.java) about how to deploy a contract with its manifest and nef files.

## About

Feel free to report any issues that might arise. Open an issue [here](https://github.com/neow3j/neow3j/issues/new/choose) to help us directly including it in our backlog.


<!---
## How to test my dApp

This could also be handled in another tutorial
--->
