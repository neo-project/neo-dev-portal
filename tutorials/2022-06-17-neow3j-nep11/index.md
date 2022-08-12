---
title: 'neow3j - Implementing a NEP-11 (NFT) Smart Contract in Java'
description: "This tutorial describes an example implementation of a NEP-11 smart contract developed in Java using the neow3j library."
author: AxLabs
tags: ["NEP-11", "JAVA", "NEOW3J"]
skill: beginner
image: "./assets/neow3j-padded.png"
source: https://github.com/neow3j/neow3j-examples-java/blob/ddd90914ea4ec5f928066a582012043bbce01525/src/main/java/io/neow3j/examples/contractdevelopment/contracts/NonFungibleToken.java
sidebar: true
---

<div align="center" style={{ padding: '0% 25% 0% 25%' }}>
  <img src="/tooling/neow3j.png" alt="neow3j" width="75%" style={{ padding: '0% 0% 5% 0%' }}/>
  <h1> <a href="https://github.com/neow3j/neow3j">neow3j</a> <sub><small>v3.19.0</small></sub></h1>
</div>

Neow3j is a development toolkit that provides easy and reliable tools to build Neo dApps and Smart Contracts using the Java platform (Java, Kotlin, Android). Check out [neow3j.io](https://neow3j.io) for more detailed information on neow3j and the technical documentation.

## 1. Setup

If you haven't already set up your environment to use the neow3j library, you can check out our tutorial about setting up a neow3j project [here](/tutorials/neow3j-smart-contract-quickstart).

## 2. NEP-11 Overview

The NEP-11 is the non-fungible token (NFT) standard on Neo N3. Have a look at its official documentation [here](https://github.com/neo-project/proposals/blob/master/nep-11.mediawiki).

## 3. Example NEP-11 Contract

The following example code represents a possible implementation for a token that supports the NEP-11 standard.

:::info

This example contract supports **indivisible** NFTs (i.e., `decimals` is equal to 0).

<br />

The NEP-11 standard also describes what methods are required if divisible NTFs should be supported. Some of the methods required for divisible NFTS deviate from the ones discussed here. Check out the documentation of the NEP-11 standard [here](https://github.com/neo-project/proposals/blob/master/nep-11.mediawiki) for more details.

:::

```java
package io.neow3j.examples.contractdevelopment.contracts;

import io.neow3j.devpack.ByteString;
import io.neow3j.devpack.Contract;
import io.neow3j.devpack.Hash160;
import io.neow3j.devpack.Helper;
import io.neow3j.devpack.Iterator;
import io.neow3j.devpack.Map;
import io.neow3j.devpack.Runtime;
import io.neow3j.devpack.Storage;
import io.neow3j.devpack.StorageContext;
import io.neow3j.devpack.StorageMap;
import io.neow3j.devpack.annotations.DisplayName;
import io.neow3j.devpack.annotations.ManifestExtra;
import io.neow3j.devpack.annotations.OnDeployment;
import io.neow3j.devpack.annotations.Permission;
import io.neow3j.devpack.annotations.Safe;
import io.neow3j.devpack.annotations.SupportedStandard;
import io.neow3j.devpack.constants.CallFlags;
import io.neow3j.devpack.constants.FindOptions;
import io.neow3j.devpack.constants.NativeContract;
import io.neow3j.devpack.constants.NeoStandard;
import io.neow3j.devpack.contracts.ContractManagement;
import io.neow3j.devpack.events.Event3Args;
import io.neow3j.devpack.events.Event4Args;

@DisplayName("FurryFriends")
@ManifestExtra(key = "author", value = "AxLabs")
@SupportedStandard(neoStandard = NeoStandard.NEP_11)
@Permission(nativeContract = NativeContract.ContractManagement)
public class NonFungibleToken {

    static final int contractMapPrefix = 0;
    static final byte[] totalSupplyKey = new byte[]{0x00};
    static final byte[] tokensOfKey = new byte[]{0x01};
    static final byte[] contractOwnerKey = new byte[]{0x02};

    static final int registryMapPrefix = 1;
    static final int ownerOfMapPrefix = 2;
    static final int balanceMapPrefix = 3;

    static final int propNameMapPrefix = 8;
    static final int propDescriptionMapPrefix = 9;
    static final int propImageMapPrefix = 10;
    static final int propTokenURIMapPrefix = 11;

    static final String propName = "name";
    static final String propDescription = "description";
    static final String propImage = "image";
    static final String propTokenURI = "tokenURI";

    // endregion keys of key-value pairs in NFT properties
    // region deploy, update, destroy

    @OnDeployment
    public static void deploy(Object data, boolean update) throws Exception {
        if (!update) {
            initializeContract((Hash160) data);
        }
        if (!Runtime.checkWitness(contractOwner())) {
            throw new Exception("No authorization");
        }
    }

    public static void update(ByteString script, String manifest) throws Exception {
        if (!Runtime.checkWitness(contractOwner())) {
            throw new Exception("No authorization");
        }
        new ContractManagement().update(script, manifest);
    }

    public static void destroy() throws Exception {
        if (!Runtime.checkWitness(contractOwner())) {
            throw new Exception("No authorization");
        }
        new ContractManagement().destroy();
    }

    // endregion deploy, update, destroy
    // region NEP-11 methods

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
        return new StorageMap(Storage.getReadOnlyContext(), contractMapPrefix).getInt(totalSupplyKey);
    }

    @Safe
    public static int balanceOf(Hash160 owner) throws Exception {
        if (!Hash160.isValid(owner)) {
            throw new Exception("The parameter 'owner' must be a 20-byte address.");
        }
        return getBalance(Storage.getReadOnlyContext(), owner);
    }

    @Safe
    public static Iterator<ByteString> tokensOf(Hash160 owner) throws Exception {
        if (!Hash160.isValid(owner)) {
            throw new Exception("The parameter 'owner' must be a 20-byte address.");
        }
        return (Iterator<ByteString>) Storage.find(Storage.getReadOnlyContext(), createTokensOfPrefix(owner),
                (byte) (FindOptions.KeysOnly | FindOptions.RemovePrefix));
    }

    public static boolean transfer(Hash160 to, ByteString tokenId, Object data) throws Exception {
        if (!Hash160.isValid(to)) {
            throw new Exception("The parameter 'to' must be a 20-byte address.");
        }
        if (tokenId.length() > 64) {
            throw new Exception("The parameter 'tokenId' must be a valid NFT ID (64 or less bytes long).");
        }
        Hash160 owner = ownerOf(tokenId);
        if (!Runtime.checkWitness(owner)) {
            return false;
        }
        onTransfer.fire(owner, to, 1, tokenId);
        if (owner != to) {
            StorageContext ctx = Storage.getStorageContext();
            new StorageMap(ctx, ownerOfMapPrefix).put(tokenId, to.toByteArray());

            new StorageMap(ctx, createTokensOfPrefix(owner)).delete(tokenId);
            new StorageMap(ctx, createTokensOfPrefix(to)).put(tokenId, 1);

            decreaseBalanceByOne(ctx, owner);
            increaseBalanceByOne(ctx, to);
        }
        if (new ContractManagement().getContract(to) != null) {
            Contract.call(to, "onNEP11Payment", CallFlags.All, new Object[]{owner, 1, tokenId, data});
        }
        return true;
    }

    // endregion NEP-11 methods
    // region non-divisible NEP-11 methods

    @Safe
    public static Hash160 ownerOf(ByteString tokenId) throws Exception {
        if (tokenId.length() > 64) {
            throw new Exception("The parameter 'tokenId' must be a valid NFT ID (64 or less bytes long).");
        }
        ByteString owner = new StorageMap(Storage.getReadOnlyContext(), ownerOfMapPrefix).get(tokenId);
        if (owner == null) {
            throw new Exception("This token id does not exist.");
        }
        return new Hash160(owner);
    }

    // endregion non-divisible NEP-11 methods
    // region optional NEP-11 methods

    @Safe
    public static Iterator<Iterator.Struct<ByteString, ByteString>> tokens() {
        return (Iterator<Iterator.Struct<ByteString, ByteString>>) new StorageMap(Storage.getReadOnlyContext(),
                registryMapPrefix).find(FindOptions.RemovePrefix);
    }

    @Safe
    public static Map<String, String> properties(ByteString tokenId) throws Exception {
        if (tokenId.length() > 64) {
            throw new Exception("The parameter 'tokenId' must be a valid NFT ID (64 or less bytes long).");
        }
        Map<String, String> p = new Map<>();
        StorageContext ctx = Storage.getReadOnlyContext();
        ByteString tokenName = new StorageMap(ctx, propNameMapPrefix).get(tokenId);
        if (tokenName == null) {
            throw new Exception("This token id does not exist.");
        }

        p.put(propName, tokenName.toString());
        ByteString tokenDescription = new StorageMap(ctx, propDescriptionMapPrefix).get(tokenId);
        if (tokenDescription != null) {
            p.put(propDescription, tokenDescription.toString());
        }
        ByteString tokenImage = new StorageMap(ctx, propImageMapPrefix).get(tokenId);
        if (tokenImage != null) {
            p.put(propImage, tokenImage.toString());
        }
        ByteString tokenURI = new StorageMap(ctx, propTokenURIMapPrefix).get(tokenId);
        if (tokenURI != null) {
            p.put(propTokenURI, tokenURI.toString());
        }
        return p;
    }

    // endregion optional NEP-11 methods
    // region events

    @DisplayName("Mint")
    private static Event3Args<Hash160, ByteString, Map<String, String>> onMint;

    @DisplayName("Transfer")
    private static Event4Args<Hash160, Hash160, Integer, ByteString> onTransfer;

    // endregion events
    // region custom methods

    @Safe
    public static Hash160 contractOwner() {
        return new StorageMap(Storage.getReadOnlyContext(), contractMapPrefix).getHash160(contractOwnerKey);
    }

    public static void mint(Hash160 owner, ByteString tokenId, Map<String, String> properties) throws Exception {
        if (!Runtime.checkWitness(contractOwner())) {
            throw new Exception("No authorization");
        }
        StorageContext ctx = Storage.getStorageContext();
        StorageMap registryMap = new StorageMap(ctx, registryMapPrefix);
        if (registryMap.get(tokenId) != null) {
            throw new Exception("This token id already exists.");
        }
        if (!properties.containsKey(propName)) {
            throw new Exception("The properties must contain a value for the key 'name'.");
        }
        String tokenName = properties.get(propName);
        new StorageMap(ctx, propNameMapPrefix).put(tokenId, tokenName);
        if (properties.containsKey(propDescription)) {
            String description = properties.get(propDescription);
            new StorageMap(ctx, propDescriptionMapPrefix).put(tokenId, description);
        }
        if (properties.containsKey(propImage)) {
            String image = properties.get(propImage);
            new StorageMap(ctx, propImageMapPrefix).put(tokenId, image);
        }
        if (properties.containsKey(propTokenURI)) {
            String tokenURI = properties.get(propTokenURI);
            new StorageMap(ctx, propTokenURIMapPrefix).put(tokenId, tokenURI);
        }

        registryMap.put(tokenId, tokenId);
        new StorageMap(ctx, ownerOfMapPrefix).put(tokenId, owner.toByteArray());
        new StorageMap(ctx, createTokensOfPrefix(owner)).put(tokenId, 1);

        increaseBalanceByOne(ctx, owner);
        incrementTotalSupplyByOne(ctx);
        onMint.fire(owner, tokenId, properties);
    }

    public static void burn(ByteString tokenId) throws Exception {
        Hash160 owner;
        try {
            owner = ownerOf(tokenId);
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
        if (!Runtime.checkWitness(owner)) {
            throw new Exception("No authorization.");
        }

        StorageContext ctx = Storage.getStorageContext();

        new StorageMap(ctx, registryMapPrefix).delete(tokenId);
        new StorageMap(ctx, propNameMapPrefix).delete(tokenId);
        new StorageMap(ctx, propDescriptionMapPrefix).delete(tokenId);
        new StorageMap(ctx, propImageMapPrefix).delete(tokenId);
        new StorageMap(ctx, propTokenURIMapPrefix).delete(tokenId);
        new StorageMap(ctx, ownerOfMapPrefix).delete(tokenId);

        new StorageMap(ctx, createTokensOfPrefix(owner)).delete(tokenId);
        decreaseBalanceByOne(ctx, owner);
        decrementTotalSupplyByOne(ctx);
        onTransfer.fire(owner, null, 1, tokenId);
    }

    // endregion custom methods
    // region private helper methods

    private static void initializeContract(Hash160 contractOwner) {
        StorageMap contractMap = new StorageMap(Storage.getStorageContext(), contractMapPrefix);
        contractMap.put(totalSupplyKey, 0);
        contractMap.put(contractOwnerKey, contractOwner);
    }

    // When storage context is already loaded, this is a cheaper method than `contractOwner()`.
    private static Hash160 contractOwner(StorageContext ctx) {
        return new StorageMap(ctx, contractMapPrefix).getHash160(contractOwnerKey);
    }

    private static int getBalance(StorageContext ctx, Hash160 owner) {
        return new StorageMap(ctx, balanceMapPrefix).getIntOrZero(owner.toByteArray());
    }

    private static void increaseBalanceByOne(StorageContext ctx, Hash160 owner) {
        new StorageMap(ctx, balanceMapPrefix).put(owner.toByteArray(), getBalance(ctx, owner) + 1);
    }

    private static void decreaseBalanceByOne(StorageContext ctx, Hash160 owner) {
        new StorageMap(ctx, balanceMapPrefix).put(owner.toByteArray(), getBalance(ctx, owner) - 1);
    }

    private static void incrementTotalSupplyByOne(StorageContext ctx) {
        StorageMap contractMap = new StorageMap(ctx, contractMapPrefix);
        int updatedTotalSupply = contractMap.getInt(totalSupplyKey) + 1;
        contractMap.put(totalSupplyKey, updatedTotalSupply);
    }

    private static void decrementTotalSupplyByOne(StorageContext ctx) {
        StorageMap contractMap = new StorageMap(ctx, contractMapPrefix);
        int updatedTotalSupply = contractMap.getInt(totalSupplyKey) - 1;
        contractMap.put(totalSupplyKey, updatedTotalSupply);
    }

    private static byte[] createTokensOfPrefix(Hash160 owner) {
        return Helper.concat(tokensOfKey, owner.toByteArray());
    }

    // endregion private helper methods

}
```

## 4. Contract Breakdown

### Imports

The imports show the neow3j devpack classes that are used in the example contract. Check out neow3j devpack's [javadoc](https://javadoc.io/doc/io.neow3j/devpack/latest/index.html) for a full overview of classes and methods that are supported.

```java
package io.neow3j.examples.contractdevelopment.contracts;

import io.neow3j.devpack.ByteString;
import io.neow3j.devpack.Contract;
import io.neow3j.devpack.Hash160;
import io.neow3j.devpack.Helper;
import io.neow3j.devpack.Iterator;
import io.neow3j.devpack.Map;
import io.neow3j.devpack.Runtime;
import io.neow3j.devpack.Storage;
import io.neow3j.devpack.StorageContext;
import io.neow3j.devpack.StorageMap;
import io.neow3j.devpack.annotations.DisplayName;
import io.neow3j.devpack.annotations.ManifestExtra;
import io.neow3j.devpack.annotations.OnDeployment;
import io.neow3j.devpack.annotations.Permission;
import io.neow3j.devpack.annotations.Safe;
import io.neow3j.devpack.annotations.SupportedStandard;
import io.neow3j.devpack.constants.CallFlags;
import io.neow3j.devpack.constants.FindOptions;
import io.neow3j.devpack.constants.NativeContract;
import io.neow3j.devpack.constants.NeoStandard;
import io.neow3j.devpack.contracts.ContractManagement;
import io.neow3j.devpack.events.Event3Args;
import io.neow3j.devpack.events.Event4Args;
```

### Contract-specific Information

Annotations on top of the smart contract's class represent contract-specific information. The following annotations are used in the example contract:

_`@DisplayName`_

Specifies the contract's name. If this annotation is not present, the class name is used for the contract's name.

_`@ManifestExtra`_

Adds the provided key-value pair information in the manifest's `extra` field. You can also use `@ManifestsExtras` to gather multiple `@ManifestExtra` annotations (results in the same as when using single `@ManifestExtra` annotations).

_`@SupportedStandard`_

Sets the `supportedStandards` field in the manifest. You can use `neoStandard = ` with the enum `NeoStandard` to use an official standard (see [here](https://github.com/neo-project/proposals#readme)), or `customStandard = ` with a custom string value.

_`Permission`_
Specifies, which third-party contracts and methods the smart contract is allowed to call. By default (i.e., if no permission annotation is set), the contract is not allowed to call any contract. Use `contract = ` and `methods = ` to specify, respectively, which contracts and methods are allowed.

_For example, if you want to allow transferring NEO tokens from the contract, you can add the annotation `@Permission(nativeContract = NativeContract.NeoToken, methods = "transfer")`._

```java
@DisplayName("FurryFriends")
@ManifestExtra(key = "author", value = "AxLabs")
@SupportedStandard(neoStandard = NeoStandard.NEP_11)
@Permission(nativeContract = NativeContract.ContractManagement)
public class NonFungibleToken {
```

### Constants

You can set a constant value for the contract by using `final` variables. These values are always loaded when the contract is called and cannot be changed once the contract is deployed. If a final value does not include a method call (e.g., raw types, or a final `String` value, such as "name"), then these values are inlined during compilation.

:::note

All contract constants and all methods must be `static` (since the object-orientation of the JVM is different on the NeoVM).

:::
:::tip

The contract owner of this example contract is fixed (i.e., it is a `final` variable). If you intend to provide a way to change such a variable, you should not store it as a `final` variable. Rather, you would store it as a value in the storage, which provides the possibility to be modified through a method.

:::

```java
static final int contractMapPrefix = 0;
static final byte[] totalSupplyKey = new byte[]{0x00};
static final byte[] tokensOfKey = new byte[]{0x01};
static final byte[] contractOwnerKey = new byte[]{0x02};

static final int registryMapPrefix = 1;
static final int ownerOfMapPrefix = 2;
static final int balanceMapPrefix = 3;

static final int propNameMapPrefix = 8;
static final int propDescriptionMapPrefix = 9;
static final int propImageMapPrefix = 10;
static final int propTokenURIMapPrefix = 11;

static final String propName = "name";
static final String propDescription = "description";
static final String propImage = "image";
static final String propTokenURI = "tokenURI";
```

### Deploy

Once a deployment transaction is made (containing the contract and other parameters), the contract data is first stored on the blockchain and then the native contract `ContractManagement` calls the smart contract's `deploy()` method. In neow3j, that method is marked with the annotation `@OnDeployment`. In the example, when the smart contract is deployed, the private method `initializeContract` is called to initialize the contract's storage (see further below in the section about private helper methods).

```java
@OnDeployment
public static void deploy(Object data, boolean update) throws Exception {
    if (!update) {
        initializeContract((Hash160) data);
    }
    if (!Runtime.checkWitness(contractOwner())) {
        throw new Exception("No authorization");
    }
}
```

### Update and Destroy

In order to update the contract, the following method first checks that the contract owner witnessed the transaction and then the native `ContractManagement.update()` method is called. When updating a smart contract, you can change the smart contract's code and its manifest. This means that you can update how the contract programmatically manages its storage context.

:::note

Additionally to changing the smart contract's script and manifest, the method `ContractManagement.update()` eventually calls the smart contract's `deploy()` method (shown above) with the boolean `update` set to true.

:::

```java
public static void update(ByteString script, String manifest) throws Exception {
    if (!Runtime.checkWitness(contractOwner())) {
        throw new Exception("No authorization");
    }
    new ContractManagement().update(script, manifest);
}
```

The example contract also provides the option to destroy the smart contract. As well as the `update()` method, it first verifies that the contract owner witnessed the transaction and then calls the method `ContractManagement.destroy()` method.

:::caution

When the native method `ContractManagement.destroy()` is called from a smart contract, the whole smart contract's storage context is erased, and the contract can no longer be used.

:::

```java
public static void destroy() throws Exception {
    if (!Runtime.checkWitness(contractOwner())) {
        throw new Exception("No authorization");
    }
    new ContractManagement().destroy();
}
```

### NEP-11 Methods

The required NEP-11 methods are implemented as follows. If a method does not change the state of the contract (i.e., it is just used for reading), it can be annotated with the `@Safe` annotation. Out of the required NEP-11 methods, only the `transfer()` method should be writing to the contract's storage and, thus, is not annotated as safe.

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
    return new StorageMap(Storage.getReadOnlyContext(), contractMapPrefix).getInt(totalSupplyKey);
}

@Safe
public static int balanceOf(Hash160 owner) throws Exception {
    if (!Hash160.isValid(owner)) {
        throw new Exception("The parameter 'owner' must be a 20-byte address.");
    }
    return getBalance(Storage.getReadOnlyContext(), owner);
}

@Safe
public static Iterator<ByteString> tokensOf(Hash160 owner) throws Exception {
    if (!Hash160.isValid(owner)) {
        throw new Exception("The parameter 'owner' must be a 20-byte address.");
    }
    return (Iterator<ByteString>) Storage.find(Storage.getReadOnlyContext(), createTokensOfPrefix(owner),
            (byte) (FindOptions.KeysOnly | FindOptions.RemovePrefix));
}

public static boolean transfer(Hash160 to, ByteString tokenId, Object data) throws Exception {
    if (!Hash160.isValid(to)) {
        throw new Exception("The parameter 'to' must be a 20-byte address.");
    }
    if (tokenId.length() > 64) {
        throw new Exception("The parameter 'tokenId' must be a valid NFT ID (64 or less bytes long).");
    }
    Hash160 owner = ownerOf(tokenId);
    if (!Runtime.checkWitness(owner)) {
        return false;
    }
    onTransfer.fire(owner, to, 1, tokenId);
    if (owner != to) {
        StorageContext ctx = Storage.getStorageContext();
        new StorageMap(ctx, ownerOfMapPrefix).put(tokenId, to.toByteArray());

        new StorageMap(ctx, createTokensOfPrefix(owner)).delete(tokenId);
        new StorageMap(ctx, createTokensOfPrefix(to)).put(tokenId, 1);

        decreaseBalanceByOne(ctx, owner);
        increaseBalanceByOne(ctx, to);
    }
    if (new ContractManagement().getContract(to) != null) {
        Contract.call(to, "onNEP11Payment", CallFlags.All, new Object[]{owner, 1, tokenId, data});
    }
    return true;
}
```

### Non-divisible NEP-11 Methods

The NEP-11 standard specifies non-divisible as well as divisible NFT smart contracts. Since this smart contract is indivisible (i.e., its decimals are 0), it is required to implement a specific method `ownerOf` for it. It returns the script hash of the owner the token with the specified token id.

```java
@Safe
public static Hash160 ownerOf(ByteString tokenId) throws Exception {
    if (tokenId.length() > 64) {
        throw new Exception("The parameter 'tokenId' must be a valid NFT ID (64 or less bytes long).");
    }
    ByteString owner = new StorageMap(Storage.getReadOnlyContext(), ownerOfMapPrefix).get(tokenId);
    if (owner == null) {
        throw new Exception("This token id does not exist.");
    }
    return new Hash160(owner);
}
```

### NEP-11 Optional Methods

The NEP-11 standard describes two optional methods called `tokens()` and `properties()`. Meaning that if methods with these names and parameters are implemented, they must follow the standard. Below you can see the implementation of these two methods. The `tokens()` method iterates through the `registryMap` and returns an `Iterator` based on the key-value pairs that are found in the registry. The `properties()` method returns a map of the provided token's properties stored in the contract's storage. This includes its name, and if present its description, image, and URI.

```java
@Safe
public static Iterator<Iterator.Struct<ByteString, ByteString>> tokens() {
    return (Iterator<Iterator.Struct<ByteString, ByteString>>) new StorageMap(Storage.getReadOnlyContext(),
            registryMapPrefix).find(FindOptions.RemovePrefix);
}

@Safe
public static Map<String, String> properties(ByteString tokenId) throws Exception {
    if (tokenId.length() > 64) {
        throw new Exception("The parameter 'tokenId' must be a valid NFT ID (64 or less bytes long).");
    }
    Map<String, String> p = new Map<>();
    StorageContext ctx = Storage.getReadOnlyContext();
    ByteString tokenName = new StorageMap(ctx, propNameMapPrefix).get(tokenId);
    if (tokenName == null) {
        throw new Exception("This token id does not exist.");
    }

    p.put(propName, tokenName.toString());
    ByteString tokenDescription = new StorageMap(ctx, propDescriptionMapPrefix).get(tokenId);
    if (tokenDescription != null) {
        p.put(propDescription, tokenDescription.toString());
    }
    ByteString tokenImage = new StorageMap(ctx, propImageMapPrefix).get(tokenId);
    if (tokenImage != null) {
        p.put(propImage, tokenImage.toString());
    }
    ByteString tokenURI = new StorageMap(ctx, propTokenURIMapPrefix).get(tokenId);
    if (tokenURI != null) {
        p.put(propTokenURI, tokenURI.toString());
    }
    return p;
}
```

### Events

The NEP-11 standard requires an event `Transfer` that contains the values `from`, `to`, `amount`, and `tokenId`. For this, the class `Event4Args` can be used with the annotation `@DisplayName` to set the event's name that will be shown in the manifest and notifications when it has been fired. The event `Mint` is an additional custom event that is fired whenever a new NFT is minted.

```java
@DisplayName("Mint")
private static Event3Args<Hash160, ByteString, Map<String, String>> onMint;

@DisplayName("Transfer")
private static Event4Args<Hash160, Hash160, Integer, ByteString> onTransfer;
```

An event variable can effectively fire an event by using the `fire()` method with the corresponding arguments. For example, the `Transfer` event (represented by the `onTransfer` variable) should be fired whenever a transfer happens.

```java
onTransfer.fire(owner, to, 1, tokenId);
```

### Custom Methods

The example contract contains some custom methods, that are not specified in the NEP-11 standard.

The method `contractOwner()` simply returns the script hash of the contract owner.

The method `mint()` can be invoked by the contract owner in order to mint new NFT tokens. It stores the tokenId in the `registryMap`, its properties in the `propertiesMap`, and its owner in the `ownerMap`. Further, it increases the owner's balance, and the total supply by 1, before it fires the `Mint` event.

The method `burn()` can be invoked by the owner of a token. It deletes all information about the token and updates the balance and total supply accordingly. If the intent of burning a token need not require the storage to be freed, the token could also just be sent to a *burner address*.

```java
@Safe
public static Hash160 contractOwner() {
    return new StorageMap(Storage.getReadOnlyContext(), contractMapPrefix).getHash160(contractOwnerKey);
}

public static void mint(Hash160 owner, ByteString tokenId, Map<String, String> properties) throws Exception {
    if (!Runtime.checkWitness(contractOwner())) {
        throw new Exception("No authorization");
    }
    StorageContext ctx = Storage.getStorageContext();
    StorageMap registryMap = new StorageMap(ctx, registryMapPrefix);
    if (registryMap.get(tokenId) != null) {
        throw new Exception("This token id already exists.");
    }
    if (!properties.containsKey(propName)) {
        throw new Exception("The properties must contain a value for the key 'name'.");
    }
    String tokenName = properties.get(propName);
    new StorageMap(ctx, propNameMapPrefix).put(tokenId, tokenName);
    if (properties.containsKey(propDescription)) {
        String description = properties.get(propDescription);
        new StorageMap(ctx, propDescriptionMapPrefix).put(tokenId, description);
    }
    if (properties.containsKey(propImage)) {
        String image = properties.get(propImage);
        new StorageMap(ctx, propImageMapPrefix).put(tokenId, image);
    }
    if (properties.containsKey(propTokenURI)) {
        String tokenURI = properties.get(propTokenURI);
        new StorageMap(ctx, propTokenURIMapPrefix).put(tokenId, tokenURI);
    }

    registryMap.put(tokenId, tokenId);
    new StorageMap(ctx, ownerOfMapPrefix).put(tokenId, owner.toByteArray());
    new StorageMap(ctx, createTokensOfPrefix(owner)).put(tokenId, 1);

    increaseBalanceByOne(ctx, owner);
    incrementTotalSupplyByOne(ctx);
    onMint.fire(owner, tokenId, properties);
}

public static void burn(ByteString tokenId) throws Exception {
    Hash160 owner;
    try {
        owner = ownerOf(tokenId);
    } catch (Exception e) {
        throw new Exception(e.getMessage());
    }
    if (!Runtime.checkWitness(owner)) {
        throw new Exception("No authorization.");
    }

    StorageContext ctx = Storage.getStorageContext();

    new StorageMap(ctx, registryMapPrefix).delete(tokenId);
    new StorageMap(ctx, propNameMapPrefix).delete(tokenId);
    new StorageMap(ctx, propDescriptionMapPrefix).delete(tokenId);
    new StorageMap(ctx, propImageMapPrefix).delete(tokenId);
    new StorageMap(ctx, propTokenURIMapPrefix).delete(tokenId);
    new StorageMap(ctx, ownerOfMapPrefix).delete(tokenId);

    new StorageMap(ctx, createTokensOfPrefix(owner)).delete(tokenId);
    decreaseBalanceByOne(ctx, owner);
    decrementTotalSupplyByOne(ctx);
    onTransfer.fire(owner, null, 1, tokenId);
}
```

### Private Helper Methods

Private methods can be used to simplify and make the smart contract more readable. The following private methods are used in the NEP-11 example contract.

```java
private static void initializeContract(Hash160 contractOwner) {
    StorageMap contractMap = new StorageMap(Storage.getStorageContext(), contractMapPrefix);
    contractMap.put(totalSupplyKey, 0);
    contractMap.put(contractOwnerKey, contractOwner);
}

// When storage context is already loaded, this is a cheaper method than `contractOwner()`.
private static Hash160 contractOwner(StorageContext ctx) {
    return new StorageMap(ctx, contractMapPrefix).getHash160(contractOwnerKey);
}

private static int getBalance(StorageContext ctx, Hash160 owner) {
    return new StorageMap(ctx, balanceMapPrefix).getIntOrZero(owner.toByteArray());
}

private static void increaseBalanceByOne(StorageContext ctx, Hash160 owner) {
    new StorageMap(ctx, balanceMapPrefix).put(owner.toByteArray(), getBalance(ctx, owner) + 1);
}

private static void decreaseBalanceByOne(StorageContext ctx, Hash160 owner) {
    new StorageMap(ctx, balanceMapPrefix).put(owner.toByteArray(), getBalance(ctx, owner) - 1);
}

private static void incrementTotalSupplyByOne(StorageContext ctx) {
    StorageMap contractMap = new StorageMap(ctx, contractMapPrefix);
    int updatedTotalSupply = contractMap.getInt(totalSupplyKey) + 1;
    contractMap.put(totalSupplyKey, updatedTotalSupply);
}

private static void decrementTotalSupplyByOne(StorageContext ctx) {
    StorageMap contractMap = new StorageMap(ctx, contractMapPrefix);
    int updatedTotalSupply = contractMap.getInt(totalSupplyKey) - 1;
    contractMap.put(totalSupplyKey, updatedTotalSupply);
}

private static byte[] createTokensOfPrefix(Hash160 owner) {
    return Helper.concat(tokensOfKey, owner.toByteArray());
}
```

## 5. Compile the Contract

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
