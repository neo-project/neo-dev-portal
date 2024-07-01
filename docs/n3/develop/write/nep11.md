---
sidebar_position: 2
---
# NEP-11 

The NEP-11 proposal outlines the standard for writing NFT (Non-fungible token) contracts. This document will explain how to write a simple NFT contract using C#.

## Defining NFT attributes

A shortcut for developers to develop NFT contracts is inheriting directly from the class  `Nep11Token<Nep11TokenState>`, where `Nep11TokenState` is the class accommodating all the NFT attributes. In addition to the default `Name` and `Owner` fields, you can add customized attributes, such as images, videos, categories, URLs, attack power, defense power, etc.

| Fields | Example                                    | Description                 |
| ------ | ------------------------------------------ | --------------------------- |
| Name   | HarryPotter #001                           | NFT name                    |
| Owner  | 0x4578060c29f4c03f1e16c84312429d991952c94c | NFT owner                   |
| Type   | 0                                          | Type（customized）          |
| Image  | https://neo.org/images/HarryPotter.jpg     | Image（customized）         |
| ATK    | 3000                                       | Attack power（customized）  |
| DEF    | 3000                                       | Defense power（customized） |

An NFT asset requires a unique identifier. If your contract includes NFT assets with different names, you can use the `Name` field in `Nep11TokenState` as TokenID. If there are NFT assets with duplicate name, you need to add a new field like ID or TokenID.

Particularly, it is recommended that developers name the image field `Image` in order for the wallet to display the NFT image properly. Wallet developers can also capture NFT images based on the NFT Image attribute.  

The `TokenState`  code example is as follows：

```cs
public class MyTokenState : Nep11TokenState
{
    public string Image { get; set; }
    
    public MyTokenState(string name)
    {
        //TODO: Replace it with your own URL.
        Image = "https://neo.org/images/" + name + ".jpg";
    }
}
```

After inheriting `Nep11Token<Nep11TokenState>` you need to rewrite the Symbol method, as follows:

```cs
public override string Symbol { [Safe] get => "MNFT"; }
```

## Distribution Method

The base class `Nep11Token` doesn't include the method for NFT distribution. Developers can write it on demand. In this example we create a method `Airdrop`, which functions airdrop of NFT to the specified address, to enable the contract owner to issue NFT assets.

```cs
public static bool Airdrop(UInt160 to, string name)
{
    if (!IsOwner()) throw new Exception("No authorization.");
    if (!to.IsValid) throw new Exception("Amount is invalid.");

    Mint(name, new MyTokenState(name));
    return true;
}
```

In the above code segment, the `Mint` method is inherited from `Nep11Token`. To invoke it, you just need to pass in TokenID and the `TokenState` object of NFT.

## Example

The complete code is as follows:

```cs
using Neo;
using Neo.SmartContract;
using Neo.SmartContract.Framework;
using Neo.SmartContract.Framework.Attributes;
using Neo.SmartContract.Framework.Services;
using System;

namespace Contract1
{
    [SupportedStandards(NepStandard.Nep11)]
    public class Contract1 : Nep11Token<MyTokenState>
    {
        //TODO: Replace it with your own address.
        static readonly UInt160 Owner = "NiNmXL8FjEUEs1nfX9uHFBNaenxDHJtmuB";

        private static bool IsOwner() => Runtime.CheckWitness(Owner);

        public override string Symbol { [Safe] get => "MNFT"; }

        public static bool Airdrop(UInt160 to, string name)
        {
            if (!IsOwner()) throw new Exception("No authorization.");
            if (!to.IsValid) throw new Exception("Amount is invalid.");

            Mint(name, new MyTokenState(name));
            return true;
        }
    }

    public class MyTokenState : Nep11TokenState
    {
        public string Image { get; set; }

        public MyTokenState(string name)
        {
            //TODO: Replace it with your own URL.
            Image = "https://neo.org/images/" + name + ".jpg";
        }
    }
}

```

To enable the user to purchase NFT with GAS, you can add the following method:

```cs
public static void OnNEP17Payment(UInt160 from, BigInteger amount, object _)
{
    
    if (Runtime.CallingScriptHash != GAS.Hash)
        throw new Exception("Please pay with GAS");
    amount /= 100000000;
    for (int i = 0; i < amount; i++)
    {
        //TODO: Please replace with your own naming logic. TokenId is not allowed to be the same
        var name = "HarryPotter #001";
        Mint(name, new MyTokenState(name));
    }
}
```

By now we have completed a simple NFT contract.

## Methods and events in base class

The base class `Nep11Token` also provides the following methods and events:

### NEP-11 methods

| Name        | Parameters                                     | Returns          | Description                                                  |
| ----------- | ---------------------------------------------- | ---------------- | ------------------------------------------------------------ |
| symbol      | --                                             | String           | Returns the contract symbol, e.g. "MNFT"                     |
| decimals    | --                                             | Integer          | Returns the integer 0                                        |
| totalSupply | --                                             | Integer          | NFT total supply. Total supply= Amount of minted tokens - Amount of burned tokens |
| balanceOf   | Hash160（owner）                               | Integer          | The total amount of NFT owned by the user                    |
| ownerOf     | ByteArray（tokenId）                           | Hash160          | Returns the owner of the specified NFT.                      |
| properties  | ByteArray（tokenId）                           | Map              | Returns the properties of the given NFT.                     |
| tokens      |                                                | InteropInterface | Returns all of the tokens minted by the contract.            |
| tokensOf    | Hash160（owner）                               | InteropInterface | Returns all of the token ids owned by the specified address  |
| transfer    | Hash160（to） ByteArray（tokenId） Any（data） | Boolean          | It transfers an amount of NFT with  TokenId. This method requires the signature of NFT owner. |

### Events

| Name     | Parameters                                                   | Returns         | Description                                                  |
| -------- | ------------------------------------------------------------ | --------------- | ------------------------------------------------------------ |
| transfer | Hash160（from） Hash160（to） Integer（amount） ByteArray（tokenId） | Transfer  event | When the `from` address is set to `null` tokens are created; When the `to` address set to `null`tokens are burned. |

### Compatibility check

Compatibility checks will be activated for any contract that includes the `[SupportedStandards(NepStandard.Nep17)]` or `[SupportedStandards(NepStandard.Nep11)]` attribute.
The Compatibility Check reviews method names, parameters, return values, events, and similar elements to ensure they comply with the standard, and alerts about any failures in the check.

### NFT Royalty Standard

To allow developers to receive better royalty benefits from NFTs, it is recommended to implement the Royalty standard in the contract.

The NFT store can query the royalty amount by calling the contract's `RoyaltyInfo` method. At this point, the total NFT transaction price will be the NFT selling price plus the royalty amount.

In this example code, the royalty fee is 1/1000th of the NFT's selling price, rounded down, regardless of the transaction currency. For instance, if the NFT sells for 0.1 GAS, the royalty fee is 0.0001 GAS (10,000 Datoshi). If the NFT sells for 10 NEO, the royalty fee is 0 NEO.

```csharp
[Safe]
public static Map<string, object>[] RoyaltyInfo(ByteString tokenId, UInt160 royaltyToken, BigInteger salePrice)
{
    ExecutionEngine.Assert(OwnerOf(tokenId) != null, "This TokenId doesn't exist!");
    var royaltyInfo = new Map<string, object>();
    royaltyInfo["royaltyRecipient"] = InitialRecipient;
    royaltyInfo["royaltyAmount"] = salePrice / 1000;
    return new[] { royaltyInfo };
}
```

## See also

[NEP-11 Proposal](https://github.com/neo-project/proposals/blob/master/nep-11.mediawiki)

[Nep11TokenState Source Code](https://github.com/neo-project/neo-devpack-dotnet/blob/master/src/Neo.SmartContract.Framework/Nep11TokenState.cs)

[Nep11Token Source Code](https://github.com/neo-project/neo-devpack-dotnet/blob/master/src/Neo.SmartContract.Framework/Nep11Token.cs)

[NeoVerse Document](https://github.com/chenzhitong/neoverse-readme)

[NFT Royalty Standard](https://github.com/neo-project/proposals/blob/master/nep-24.mediawiki)

[NFT Royalty Example](https://github.com/neo-project/neo-devpack-dotnet/blob/master/examples/Example.SmartContract.SampleRoyaltyNEP11Token/SampleRoyaltyNEP11Token.cs)

