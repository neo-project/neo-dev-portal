---
sidebar_position: 3
---
# NEP-17

The NEP-17 proposal is a replacement for the original NEP-5 proposal, outlining a token standard for the Neo blockchain. It establishes a generalized interaction mechanism for tokenized smart contracts. 

NEP-17 assets are stored in the contract's storage area. Transactions are completed by updating account balances within this storage.

In the method definitions below, we provide both the function definitions as specified in the contract and their corresponding invocation parameters.

## totalSupply

    {
      "name": "totalSupply",
      "parameters": [],
      "returntype": "Integer"
    }

Returns the total token supply deployed in the system.

## symbol

    {
      "name": "symbol",
      "parameters": [],
      "returntype": "String"
    }

Returns a short string symbol of the token managed in this contract. e.g. "MYT". 

This string MUST be valid ASCII, MUST NOT contain whitespace or control characters, SHOULD be limited to uppercase Latin alphabet (i.e. the 26 letters used in English) and SHOULD be short (3-8 characters is recommended). 

This method MUST always return the same value every time it is invoked.

## decimals

    {
      "name": "decimals",
      "parameters": [],
      "returntype": "Integer"
    }

Returns the number of decimals used by the token - e.g. `8`, means to divide the token amount by `100,000,000` to get its user representation.

This method MUST always return the same value every time it is invoked.

## balanceOf

    {
      "name": "balanceOf",
      "parameters": [
        {
          "name": "account",
          "type": "Hash160"
        }
      ],
      "returntype": "Integer"
    }

Returns the token balance of the `account`.

The parameter `account` MUST be a 20-byte address. If not, this method SHOULD `throw` an exception.

If the `account` is an unused address, this method MUST return `0`.

## transfer

    {
      "name": "transfer",
      "parameters": [
        {
          "name": "from",
          "type": "Hash160"
        },
        {
          "name": "to",
          "type": "Hash160"
        },
        {
          "name": "amount",
          "type": "Integer"
        },
        {
          "name": "data",
          "type": "Any"
        }
      ],
      "returntype": "Boolean"
    }

Transfers an `amount` of tokens from the `from` account to the `to` account. 

The parameters `from` and `to` MUST be 20-byte addresses. If not, this method SHOULD `throw` an exception.<br/>

The parameter `amount` MUST be greater than or equal to `0`. If not, this method SHOULD `throw` an exception.<br/>

The function MUST return `false` if the `from` account balance does not have enough tokens to spend.<br/>

If the method succeeds, it MUST fire the `Transfer` event, and MUST return `true`, even if the `amount` is `0`, or `from` and `to` are the same address.<br/>

The function SHOULD check whether the `from` address equals the caller contract hash. If so, the transfer SHOULD be processed; If not, the function SHOULD use the SYSCALL `Neo.Runtime.CheckWitness` to verify the transfer.<br/>

If the transfer is not processed, the function MUST return `false`.

If the receiver is a deployed contract, the function MUST call `onNEP17Payment` method on receiver contract with the `data` parameter from `transfer` AFTER firing the `Transfer` event. If the receiver doesn't want to receive this transfer it MUST call `ABORT`. 

## Transfer Event

    {
      "name": "Transfer",
      "parameters": [
        {
          "name": "from",
          "type": "Hash160"
        },
        {
          "name": "to",
          "type": "Hash160"
        },
        {
          "name": "amount",
          "type": "Integer"
        }
      ]
    }

MUST trigger when tokens are transferred, including zero value transfers and self-transfers. <br/>

A token contract which creates new tokens MUST trigger a `Transfer` event with the `from` address set to `null` when tokens are created.<br/>

A token contract which burns tokens MUST trigger a `Transfer` event with the `to` address set to `null` when tokens are burned.

NEP17 methods are as follows. For the complete code refer to [NEP-17 contract code](https://github.com/neo-project/neo-devpack-dotnet/tree/master/examples/Example.SmartContract.NEP17).

```cs
using Neo.SmartContract.Framework;
using Neo.SmartContract.Framework.Attributes;
using Neo.SmartContract.Framework.Native;
using Neo.SmartContract.Framework.Services;
using System;
using System.ComponentModel;
using System.Numerics;

namespace NEP17
{
    /// <inheritdoc />
    [DisplayName("SampleNep17Token")]
    [ContractAuthor("core-dev", "dev@neo.org")]
    [ContractVersion("0.0.1")]
    [ContractDescription("A sample NEP-17 token")]
    [ContractSourceCode("https://github.com/neo-project/neo-devpack-dotnet/tree/master/examples/")]
    [ContractPermission(Permission.Any, Method.Any)]
    [SupportedStandards(NepStandard.Nep17)]
    public class SampleNep17Token : Nep17Token
    {
        #region Owner

        private const byte PrefixOwner = 0xff;

        private static readonly UInt160 InitialOwner = "NUuJw4C4XJFzxAvSZnFTfsNoWZytmQKXQP";

        [Safe]
        public static UInt160 GetOwner()
        {
            var currentOwner = Storage.Get(new[] { PrefixOwner });

            if (currentOwner == null)
                return InitialOwner;

            return (UInt160)currentOwner;
        }

        private static bool IsOwner() => Runtime.CheckWitness(GetOwner());

        public delegate void OnSetOwnerDelegate(UInt160 newOwner);

        [DisplayName("SetOwner")]
        public static event OnSetOwnerDelegate OnSetOwner;

        public static void SetOwner(UInt160? newOwner)
        {
            if (IsOwner() == false)
                throw new InvalidOperationException("No Authorization!");
            if (newOwner != null && newOwner.IsValid)
            {
                Storage.Put(new[] { PrefixOwner }, newOwner);
                OnSetOwner(newOwner);
            }
        }

        #endregion

        #region Minter

        private const byte PrefixMinter = 0xfd;

        private static readonly UInt160 InitialMinter = "NUuJw4C4XJFzxAvSZnFTfsNoWZytmQKXQP";

        [Safe]
        public static UInt160 GetMinter()
        {
            var currentMinter = Storage.Get(new[] { PrefixMinter });

            if (currentMinter == null)
                return InitialMinter;

            return (UInt160)currentMinter;
        }

        private static bool IsMinter() => Runtime.CheckWitness(GetMinter());

        public delegate void OnSetMinterDelegate(UInt160 newMinter);

        [DisplayName("SetMinter")]
        public static event OnSetMinterDelegate OnSetMinter;

        public static void SetMinter(UInt160 newMinter)
        {
            if (IsOwner() == false)
                throw new InvalidOperationException("No Authorization!");
            if (!newMinter.IsValid) return;
            Storage.Put(new[] { PrefixMinter }, newMinter);
            OnSetMinter(newMinter);
        }

        public new static void Mint(UInt160 to, BigInteger amount)
        {
            if (IsOwner() == false && IsMinter() == false)
                throw new InvalidOperationException("No Authorization!");
            Nep17Token.Mint(to, amount);
        }

        #endregion

        #region Example.SmartContract.NEP17

        public override string Symbol { [Safe] get => "SampleNep17Token"; }
        public override byte Decimals { [Safe] get => 8; }

        public new static void Burn(UInt160 account, BigInteger amount)
        {
            if (IsOwner() == false && IsMinter() == false)
                throw new InvalidOperationException("No Authorization!");
            Nep17Token.Burn(account, amount);
        }

        #endregion

        #region Basic

        [Safe]
        public static bool Verify() => IsOwner();

        public static bool Update(ByteString nefFile, string manifest)
        {
            if (IsOwner() == false)
                throw new InvalidOperationException("No Authorization!");
            ContractManagement.Update(nefFile, manifest);
            return true;
        }

        #endregion
    }
}
```

## Key Updates in NEP-17

This section summaries key updates and enhancements in NEP-17 compared to the previous NEP-5 protocol.  

### onNEP17Payment

The `onNEP17Payment` method is a callback method that processes NEP-17 asset transfers in Neo smart contracts. 

#### Implementation example

The following is an example implementation (refer to the source code [here](https://github.com/neo-project/neo-devpack-dotnet/blob/master/examples/Example.SmartContract.ContractCall/ContractCall.cs)).

```csharp
public class SampleContractCall : SmartContract
{
    // Define the target contract hash for external calls.
    [Hash160("0x13a83e059c2eedd5157b766d3357bc826810905e")]
    private static readonly UInt160 DummyTarget;

    // The onNEP17Payment method handles incoming NEP-17 payments.
    public static void onNEP17Payment(UInt160 from, BigInteger amount, BigInteger data)
    {
        // Validate the input data; only proceed if it equals 123.
        if (!data.Equals(123)) return;

        // Get the current contract's hash and the caller's (token contract) hash.
        UInt160 @this = Runtime.ExecutingScriptHash;
        UInt160 tokenHash = Runtime.CallingScriptHash;

        // Query the token contract to get the balance of the current contract.
        BigInteger balanceOf = (BigInteger)Contract.Call(tokenHash, "balanceOf", CallFlags.All, @this);

        // Call the target contract with the required parameters.
        Contract.Call(DummyTarget, "dummyMethod", CallFlags.All, @this, tokenHash, balanceOf);
    }
}
```

Explanation

- DummyTarget:
   - Represents a predefined target contract hash.
   - In this example, it's set to 0x13a83e059c2eedd5157b766d3357bc826810905e.

- onNEP17Payment Parameters:

   - **from**: The address of the sender initiating the transfer.
   - **amount**: The amount of NEP-17 tokens transferred.
   - **data**: Additional data passed along with the transfer, used for custom business logic.

- Key Steps in the Method:

   - Validate data: Only process the transfer if data equals 123.
   - Fetch the balance: Query the token contract using the `balanceOf` method to retrieve the current token balance of the contract.
   - External call: Invoke the dummyMethod of the target contract (DummyTarget) with parameters including the current contract hash, token hash, and the retrieved balance.

- Use Case:
   - This method enables contracts to handle incoming NEP-17 payments and perform further actions such as notifying other contracts or executing specific business logic.

:::Note

- Ensure proper validation of incoming data to avoid unintended behavior.
- Use `Contract.Call` responsibly to avoid invoking malicious contracts.
- Implement additional security measures to validate `from`, `amount`, and `tokenHash` if needed.

- The Transfer method should determine if the recipient is the deployed contract, and if so, call its `onNEP17Payment` method.
- The FungibleToken (NeoToken, GasToken) of the native contract calls the `onNEP17Tokens` method when transferring assets. The NonfungibleToken calls the `onNEP11Tokens` method when transferring assets.
- The TokenSale contract should implement the `onNEP17Payment` method to receive assets and modify the Manifest file to trust the received asset contract.

:::

### Name method

The name method is moved to the manifest file, and you need to add `[DisplayName("Token Name")]` when writing the contract.

```cs
[DisplayName("Token Name")]
[ContractAuthor("core-dev", "dev@neo.org")]
[ContractEmail("dev@neo.org")]
[ContractDescription("This is a NEP17 example")]
[SupportedStandards(NepStandard.Nep17)]
public class NEP17 : Nep17Token
{
    public override string Symbol { [Safe] get => "EXAMPLE"; }

    public override byte Decimals { [Safe] get => 8; }
}
```

### Transfer event

The `transfer` event is changed to `Transfer` event (first letter capitalized).

### IsPayable

In Neo Legacy, you should check the IsPayable checkbox when deploying contracts to receive NEP-5 assets.

In Neo N3.x, the payable check has been removed and the corresponding logic has been placed in the `onNEP17Payment` method.

The ability of the contract to receive assets has been changed from a fixed constant to the code logic within the contract.

### Compatibility check

Compatibility checks will be activated for any contract that includes the `[SupportedStandards(NepStandard.Nep17)]`, `[SupportedStandards(NepStandard.Nep11)]` or `[SupportedStandards(NepStandard.Nep24)]` attribute.
The Compatibility Check reviews method names, parameters, return values, events, and similar elements to ensure they comply with the standard, and alerts about any failures in the check.

