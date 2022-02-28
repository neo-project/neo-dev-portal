---
title: 'Interfacing with smart contracts using Neon.js'
description: "When building an application which interfaces with the Neo blockchain, it is imperative to have the ability to communicate
with smart contracts. This is especially important in N3 since the NEO and GAS tokens are represented as native NEP-17
formatted smart contracts instead of the UTXO-based native implementation of Neo Legacy. In this article, we will be
providing an overview of the different types of contract invocations, as well as how to execute them both to read and publish
data to the blockchain using the Neon.js TypeScript SDK."
author: Tyler Adams
tags: ["NEONJS", "SMART CONTRACT","BOA"]
skill: beginner
image: ./assets/cover.png
sidebar: true
---



When building an application which interfaces with the Neo blockchain, it is imperative to have the ability to communicate
with smart contracts. In this article, we will be
providing an overview of the different types of contract invocations, as well as how to execute them both to read and publish
data to the blockchain using the Neon.js TypeScript SDK.

## Requirements

This article builds on the content from a number of other articles and may occasionally reference them.  For a complete list of the
referenced articles, check the `related articles` link in the navigation bar.

## Our Environment

In this article, we will using the following for our development environment:
  * [.NET 6.0](https://dotnet.microsoft.com/en-us/download/dotnet/6.0)
  * [Node.js v14.17.0](https://nodejs.org/en/download/)
  * [Neo-Express](https://github.com/neo-project/neo-express)
  * [Neo3-boa](https://github.com/CityOfZion/neo3-boa/)
  * [Neon.js-next](https://github.com/CityOfZion/neon-js/)


# 2. Types of Invocations
In N3, we use the term **invocation** to describe the remote execution of a method on a smart contract.  These invocations are
conventionally broken down into two different types:

## Test Invocations
Test invocations are generally classified as **read** operations which do not modify the state of the blockchain. It is also used to calculate the required amount of GAS to persist a transaction.  As a result, these invocations do not result in a transaction being published to the network and are free.  This unique property can be
leveraged when optimizing smart contracts to reduce transaction fees as well as performance since state changes require block minting. 

**For example:** The *balanceOf* method in our NEP-17 smart contract example can be invoked without changing the contract state. Because we aren't
  changing the state, we can invoke this method without publishing a transaction, resulting in the opportunity for a free contract interaction.

```python
@public
def balanceOf(account: UInt160) -> int:
    """
    Get the current balance of an address

    :param account: the account address to retrieve the balance for

    :return: the accounts balance
    """
    assert len(account) == 20
    return get(account).to_int()
```



## Publish Invocations
Publish invocations are defined by the publishing of a transaction to the blockchain. As a result, there are fees associated
with the handling of the transaction as well as the network state change.  When designing a project which uses smart contracts,
it is recommended that the number of publish invocations are minimized to reduce cost and improve application performance.  Published transactions
must be minted into a block and persisted to the network before any state changes are realized, resulting in asynchronous needs in project architectures.

```python
@public
def mint(account: UInt160, amount: int):
    """
    Mints tokens.

    :param account: the address of the account that is sending cryptocurrency to this contract
    :param amount: the amount of gas to be refunded
    :raise AssertionError: raised if amount is less than than 0 or the check_witness using ADMIN goes wrong
    """

    # !!!NOTE!!! This method is insecure and anyone can freely mint tokens.  Secure this method to meet your needs prior
    # to release.

    #assert amount >= 0 and check_witness(ADMIN)
    assert amount >= 0

    current_total_supply = totalSupply()
    account_balance = balanceOf(account)

    put(TOTAL_SUPPLY, current_total_supply + amount) # <-- updates state
    put(account, account_balance + amount)           # <--

    on_transfer(None, account, amount)
    post_transfer(None, account, amount, None)
```

An example of a contract method which introduces a state change is the mint method in our NEP-17 example.  Notice that we have multiple **put** calls
which update the scoped storage of the smart contract.

# 3. Transaction Fees
Neo uses two distinct fee types to define its transaction cost.  These fees are variable and can be controlled by the consensus
nodes through a set of scalars. All transaction fees are paid in **GAS**.
  * **Network Fees:** This fee is a function of the transaction payload and is a flat rate based on the transaction size. It is paid to the consensus
  nodes for minting the transaction into a block.
  * **System Fees:** This fee is a function of the operation that is contained within the transaction. For example, basic
  addition is cheaper than storing a 4k copy of `The Matrix` into scoped contract storage.

For a breakdown of system fees, refer to the opcode costs [here](https://docs.neo.org/docs/en-us/reference/fees.html#fees-for-instructions).
Neon.js will determine these fees automatically and attempt to attach them to **publish invocations** from the issuing account.

# 4. Our Smart Contract
In this example, we will be using the simplified NEP-17 smart contract defined below.  Refer to the [Introduction to Contract Development](./hello_world_dapp)
article for an overview of how to configure the development environment as well as how to compile and deploy the smart contract to neo-express.

```python
from typing import Any, Union

from boa3.builtin import NeoMetadata, metadata, public
from boa3.builtin.contract import Nep17TransferEvent, abort
from boa3.builtin.interop.blockchain import get_contract
from boa3.builtin.interop.contract import call_contract
from boa3.builtin.interop.runtime import calling_script_hash, check_witness
from boa3.builtin.interop.storage import delete, get, put
from boa3.builtin.type import UInt160


# ---------------------------------
# CONTRACT HEADER
# ---------------------------------


CONTRACT_NAME = 'COZ NEP-17 Example A'
CONTRACT_VERSION = 'v0.0.1'
AUTHOR = 'COZ'
EMAIL = 'contact@coz.io'
DESCRIPTION = 'This smart contract represents an example NEP-17 token.'
DESCRIPTION_EXTENDED = ''

@metadata
def manifest_metadata() -> NeoMetadata:
    meta = NeoMetadata()
    meta.author = 'COZ'
    meta.email = 'contact@coz.io'
    meta.description = 'This smart contract represents an example NEP-17 token.'
    meta.version = "v0.0.1"
    return meta


# ---------------------------------
# CONTRACT GLOBALS
# ---------------------------------


ACCOUNT_PREFIX = b'a'
#ADMIN = UInt160(b'\x8cfQ\x01Rb2\x0f\xc6Ez\xebzP\xe9\xa5\xa1\xa4\xa1\xdd')
TOKEN_DECIMALS = 0
TOKEN_PREFIX = b't'
TOKEN_SYMBOL = 'COZA'
TOTAL_SUPPLY = b's'


# ---------------------------------
# EVENTS
# ---------------------------------


on_transfer = Nep17TransferEvent


# ---------------------------------
# Methods
# ---------------------------------


@public
def symbol() -> str:
    """
    Gets the symbols of the token.

    :return: a short string representing symbol of the token managed in this contract.
    """
    return TOKEN_SYMBOL


@public
def decimals() -> int:
    """
    Gets the amount of decimals used by the token.

    :return: the number of decimals used by the token.
    """
    return TOKEN_DECIMALS


@public
def totalSupply() -> int:
    """
    Gets the total token supply deployed in the system.

    :return: the total token supply in the system.
    """
    return get(TOTAL_SUPPLY).to_int()


@public
def balanceOf(account: UInt160) -> int:
    """
    Get the current balance of an address

    :param account: the account address to retrieve the balance for

    :return: the accounts balance
    """
    assert len(account) == 20
    return get(account).to_int()


@public
def transfer(from_address: UInt160, to_address: UInt160, amount: int, data: Any) -> bool:
    """
    Transfers an amount of tokens from one account to another

    If the method succeeds, it must fire the `Transfer` event and must return true, even if the amount is 0,
    or from and to are the same address.

    :param from_address: the address to transfer from
    :param to_address: the address to transfer to
    :param amount: the amount of NEP-17 tokens to transfer
    :param data: whatever data is pertinent to the onPayment method

    :return: whether the transfer was successful
    :raise AssertionError: raised if `from_address` or `to_address` length is not 20 or if `amount` is less than zero.
    """
    # the parameters from and to should be 20-byte addresses. If not, this method should throw an exception.
    assert len(from_address) == 20 and len(to_address) == 20
    # the parameter amount must be greater than or equal to 0. If not, this method should throw an exception.
    assert amount >= 0

    # The function MUST return false if the from account balance does not have enough tokens to spend.
    from_balance = get(from_address).to_int()
    if from_balance < amount:
        return False

    # The function should check whether the from address equals the caller contract hash.
    # If so, the transfer should be processed;
    # If not, the function should use the check_witness to verify the transfer.
    if from_address != calling_script_hash:
        if not check_witness(from_address):
            return False

    # skip balance changes if transferring to yourself or transferring 0 tokens
    if from_address != to_address and amount != 0:
        if from_balance == amount:
            delete(from_address)
        else:
            put(from_address, from_balance - amount)

        to_balance = get(to_address).to_int()
        put(to_address, to_balance + amount)

    # if the method succeeds, it must fire the transfer event
    on_transfer(from_address, to_address, amount)
    # if the to_address is a smart contract, it must call the contracts onPayment
    post_transfer(from_address, to_address, amount, data)
    # and then it must return true
    return True


def post_transfer(from_address: Union[UInt160, None], to_address: Union[UInt160, None], amount: int, data: Any):
    """
    Checks if the to_address receiving tokens is a smart contract and if it's one the onPayment method will be called

    :param from_address: the address of the sender
    :param to_address: the address of the receiver
    :param amount: the amount of cryptocurrency that is being sent
    :param data: any pertinent data that might validate the transaction
    """
    if not isinstance(to_address, None):
        contract = get_contract(to_address)
        if not isinstance(contract, None):
            call_contract(to_address, 'onNEP17Payment', [from_address, amount, data])

@public
def mint(account: UInt160, amount: int):
    """
    Mints tokens.

    :param account: the address of the account that is sending cryptocurrency to this contract
    :param amount: the amount of gas to be refunded
    :raise AssertionError: raised if amount is less than than 0 or the check_witness using ADMIN goes wrong
    """

    # !!!NOTE!!! This method is insecure and anyone can freely mint tokens.  Secure this method to meet your needs prior
    # to release.

    #assert amount >= 0 and check_witness(ADMIN)
    assert amount >= 0

    current_total_supply = totalSupply()
    account_balance = balanceOf(account)

    put(TOTAL_SUPPLY, current_total_supply + amount)
    put(account, account_balance + amount)

    on_transfer(None, account, amount)
    post_transfer(None, account, amount, None)


@public
def burn(account: UInt160, amount: int):
    """
    Burns tokens.

    :param account: the address of the account that is sending cryptocurrency to this contract
    :param amount: the amount of gas to be refunded
    :raise AssertionError: raised if amount is less than than 0 or the check_witness using ADMIN goes wrong
    """

    # !!!NOTE!!! This method is insecure and anyone can freely mint tokens.  Secure this method to meet your needs prior
    # to release.

    #assert amount >= 0 and check_witness(ADMIN)
    assert amount >= 0

    current_total_supply = totalSupply()
    account_balance = balanceOf(account)

    assert account_balance >= amount
    put(TOTAL_SUPPLY, current_total_supply - amount)

    if account_balance == amount:
        delete(account)
    else:
        put(account, account_balance - amount)

    on_transfer(account, None, amount)
    post_transfer(account, None, amount, None)


@public
def onNEP17Payment(from_address: UInt160, amount: int, data: Any):
    """
    This contract is currently not accepting any transfers.

    :param from_address: the address of the one who is trying to send cryptocurrency to this smart contract
    :param amount: the amount of cryptocurrency that is being sent to the this smart contract
    :param data: any pertinent data that might validate the transaction
    """
    abort()
```

# 5. Invoking Smart Contracts
There are a number of different ways to invoke smart contracts on Neo.  In this article, we'll be using neon.js helper methods(`testInvoke` and `invoke`)
to provide and create a set of interface functions with our smart contracts.

## Helper Methods

In the TypeScript functions defined below, we see that the declarations are almost identical. The primary difference between
a **testInvoke** and a **publishInvoke** in this tutorial is the fee and response type.

For a **testInvoke**, we are retrieving a response from a method like **balanceOf** or **name**.  This is returned as part of the response stack
 as we will observe shortly.

```ts
  import Neon from '@cityofzion/neon-js'
  import StackItemJson from '@cityofzion/neon-core'

  static async testInvoke(rpcAddress: string, networkMagic: number, scriptHash: string, operation: string, args: any[]): Promise< StackItemJson.sc.StackItemJson[] | undefined> {
    const contract = new Neon.experimental.SmartContract(
      Neon.u.HexString.fromHex(scriptHash),
      {
        networkMagic,
        rpcAddress,
      }
    );
    let res = await contract.testInvoke(operation, args)

    return res.stack
  }
```


In the case of the **publishInvoke**, we have an additional **account** field which is required both to sign the
 transaction and attach the system and network fees.  The expected response is a **transaction ID**.
```ts
  import Neon from '@cityofzion/neon-js'
  import { wallet } from '@cityofzion/neon-core'

  static async publishInvoke(rpcAddress: string, networkMagic: number, scriptHash: string, operation: string, args: any[], account: wallet.Account): Promise< string | undefined> {
    const contract = new Neon.experimental.SmartContract(
      Neon.u.HexString.fromHex(scriptHash),
      {
        networkMagic,
        rpcAddress,
        account,
      }
    );

    let result
    try {
      result = await contract.invoke(operation, args)
    } catch (e) {
      console.log(e)
    }

    return result
  }
```

## Our SDK

Below you will find an example TypeScript interface for our NEP-17 contract above as well as an example of their response.  Make sure
to take notice of the response encoding.

```ts

import Neon, { sc } from "@cityofzion/neon-js";
import {wallet} from "@cityofzion/neon-core";

 /**
   * gets the symbol of the NEP-17 token
   * @param node the rpc endpoint to target
   * @param networkMagic the network magic for the network
   * @param contractHash the scriptHash of the target smart contract
   */
  static async symbol(node: string, networkMagic: number, contractHash: string): Promise<string> {
    const method = "symbol"

    const res = await NeoInterface.testInvoke(node, networkMagic, contractHash, method, [] )
    if (res === undefined || res.length === 0) {
      throw new Error("unrecognized response")
    }
    return Neon.u.HexString.fromBase64(res[0].value as string).toAscii()
  }

  /**
   * gets the decimals of the NEP-17 token
   * @param node the rpc endpoint to target
   * @param networkMagic the network magic for the network
   * @param contractHash the scriptHash of the target smart contract
   */
  static async decimals(node: string, networkMagic: number, contractHash: string): Promise<number> {
    const method = "decimals"

    const res = await NeoInterface.testInvoke(node, networkMagic, contractHash, method, [] )
    if (res === undefined || res.length === 0) {
      throw new Error("unrecognized response")
    }
    return parseInt(res[0].value as string)
  }

  /**
   * gets the total supply of the NEP17 token
   * @param node the rpc endpoint to target
   * @param networkMagic the network magic for the network
   * @param contractHash the scriptHash of the target smart contract
   */
  static async totalSupply(node: string, networkMagic: number, contractHash: string): Promise<number> {
    const method = "totalSupply"

    const res = await NeoInterface.testInvoke(node, networkMagic, contractHash, method, [] )
    if (res === undefined || res.length === 0) {
      throw new Error("unrecognized response")
    }
    return parseInt(res[0].value as string)
  }

  /**
   * gets the balance of of the NEP17 token
   * @param node the rpc endpoint to target
   * @param networkMagic the network magic for the network
   * @param contractHash the scriptHash of the target smart contract
   * @param address the address to retrive the balance of
   */
  static async balanceOf(node: string, networkMagic: number, contractHash: string, address: string): Promise<any> {
    const method = "balanceOf"
    const params = [
      sc.ContractParam.hash160(address)
    ]

    const res = await NeoInterface.testInvoke(node, networkMagic, contractHash, method, params )
    if (res === undefined || res.length === 0) {
      throw new Error("unrecognized response")
    }
    return parseInt(res[0].value as string)
  }

  /**
   * transfers NEP-17 tokens from one address to another
   * @param node the rpc endpoint to target
   * @param networkMagic the network magic for the network
   * @param contractHash the scriptHash of the target smart contract
   * @param fromAddress the address to transfer from
   * @param toAddress the address to transfer to
   * @param amount the amount of tokens to transfer
   * @param account the signing wallet account (must be the parent of 'fromAddress')
   * @param data an optional data payload for handling in-contract
   */
  static async transfer(node: string, networkMagic: number, contractHash: string, fromAddress: string, toAddress: string, amount: number, account: wallet.Account, data?: any): Promise<any> {
    const method = "transfer"
    const params = [
      sc.ContractParam.hash160(fromAddress),
      sc.ContractParam.hash160(toAddress),
      amount,
      data
    ]

    return await NeoInterface.publishInvoke(node, networkMagic, contractHash, method, params, account )
  }

  /**
   * mints tokens to an address
   * @param node the rpc endpoint to target
   * @param networkMagic the network magic for the network
   * @param contractHash the scriptHash of the target smart contract
   * @param address the address to mint tokens to
   * @param amount the amount of tokens to mint to 'address'
   * @param account the signing account (must be the *ADMIN* account in the contract if these lines are uncommented)
   */
  static async mint(node: string, networkMagic: number, contractHash: string, address: string, amount: number, account: wallet.Account): Promise<any> {
    const method = "mint"

    const params = [
      sc.ContractParam.hash160(address),
      amount
    ]
    return await NeoInterface.publishInvoke(node, networkMagic, contractHash, method, params, account )
  }

  /**
   * burns tokens that are held by an account
   * @param node the rpc endpoint to target
   * @param networkMagic the network magic for the network
   * @param contractHash the scriptHash of the target smart contract
   * @param address the address whose tokens will be burned
   * @param amount the number of tokens to be burned
   * @param account the signing account (must be the *ADMIN* account in the contract if these lines are uncommented)
   */
  static async burn(node: string, networkMagic: number, contractHash: string, address: string, amount: number, account: wallet.Account): Promise<any> {
    const method = "burn"
    const params = [
      sc.ContractParam.hash160(address),
      amount
    ]

    return await NeoInterface.publishInvoke(node, networkMagic, contractHash, method, params, account )
  }

  /**
   * invokes the special "onNEP17Payment" method
   * @param node the rpc endpoint to target
   * @param networkMagic the network magic for the network
   * @param contractHash the scriptHash of the target smart contract
   * @param address the transfer address
   * @param amount the amount of tokens transfered
   * @param data the optional data payload for additional upstream handling
   * @param account the signing account
   */
  static async onNEP17Payment(node: string, networkMagic: number, contractHash: string, address: string, amount: number, data: any, account: wallet.Account): Promise<any> {
    const method = "onNEP17Payment"
    const params = [
      sc.ContractParam.hash160(address),
      amount,
      data
    ]

    return await NeoInterface.publishInvoke(node, networkMagic, contractHash, method, params, account )
  }
```


## Invoking our Smart Contract
Using the SDK above, we can test the contract interface (using a different format for illustrative purposes) as follows:

```javascript
const neon = require("@cityofzion/neon-js")

const scriptHash = "0x8b74762c487cea1963e488e1920d20f7aff16da4"
const testAccountA = new neon.wallet.Account("0799e612c9ee2bc8a7eab43ba5154caf5a26f27ded2525719a7c31e6d3f13ce0")
const testAccountB = new neon.wallet.Account("46f20119aae10ad7eb6d4a8e057fca25cfaf2223ac7ed5b1358c56de7b88e314")
const NODE = "http://localhost:50012"
const NETWORK_MAGIC = 827601742

let res = await symbol(NODE, NETWORK_MAGIC, scriptHash)
console.log("symbol: ", res) // --> COZA

res = await decimals(NODE, NETWORK_MAGIC, scriptHash)
console.log("decimals: ", res) // --> 0

res = await totalSupply(NODE, NETWORK_MAGIC, scriptHash)
console.log("total supply: ", res) // -> 0 (This will increase after invoking the mint method)

res = await balanceOf(NODE, NETWORK_MAGIC, scriptHash, testAccountA.address)
console.log("balanceOf: ", res) // -> 0 (This will increase after invoking the mint method)

res = await mint(NODE, NETWORK_MAGIC, scriptHash, testAccountA.address, 100, testAccountA)
console.log("mint: ", res) // --> {{TXID}} (A reference transaction ID)

res = await transfer(NODE, NETWORK_MAGIC, scriptHash, testAccountA.address, testAccountB.address, 100, testAccountA)
console.log("transfer: ", res) // --> {{TXID}} (A reference transaction ID)

res = await burn(NODE, NETWORK_MAGIC, scriptHash, testAccountA.address, 100, testAccountA)
console.log("burn: ", res) // --> {{TXID}} (A reference transaction ID)

```

>> **Note:** If you are encountering errors when invoking smart contracts, It is good practice to verify both your **rpcAddress** and **networkMagic**
>> inputs, as well as your GAS balance if you are publishing transactions.

>> **Note:** Recall that **publish invocations** must have their transactions minted to a block before any state changes introduced by the invocation
>> (like minted or transferred tokens) are realized by the contract state and considered in other invocations.
