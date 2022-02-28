---
title: 'Writing a NEP-17 Token in Python'
description: "Smart contracts are certainly amongst the most vital and innovative components of the ongoing revolution surrounding blockchain technology. Following the path opened by Ethereum, as the next big step after Bitcoin, Neo excels as a platform optimized for decentralized trustless automated transactions powered by the code contained in these contracts.
If the rhythmic generation of blocks is the pumping heart of the network, transactions the blood that carries information back and forth, then smart contracts play the role of veins and arteries, structuring the circulatory system for the next generation of the internet: decentralized autonomous applications."
author: Link, the Operator
tags: ["PYTHON", "SMART CONTRACT", "NEP17"]
skill: beginner
image: ./assets/cover.png
sidebar: true
---


## Python Smart Contracts

This tutorial will cover the basics of contract development with **boa**, a full fledged Python compiler for Neo.

To showcase Boa's general usage, syntax and some of its basic features, we'll be creating a crypto currency (token), compliant to the NEP-17 standard. In this sense, the present document might be of interest not only to Python enthusiasts, but to anyone trying to grasp blockchain basics, token design-patterns, and smart contract general structure in Neo.

# 1. Requirements

- Minimum Python3 knowledge to create the smart contract's logic;
- Python 3.9;
- Having the latest version of [boa](./neo3/boa/getting-started.html) installed to build and compile the smart contract;


# 2. Tokens in Neo

With the N3 update, Neo is adopting an account model for all tokens in the network, including it's native tokens: **NEO** and **GAS**.

Simply put, this means that every token is represented by a deployed smart contract. The contract keeps a ledger with the balance of each and every account that holds any amount of it. The smart contract also defines the characteristics of the token, like its symbol and total supply, and manages every transfer of that token between addresses.

## NEP-17 Standard

To ensure interoperability, every token contract must follow existing token standards. These standards define a set of methods and behaviors that allow platforms, like exchanges, dApps, and other contracts, to easily interface with.

In Neo, the common blueprint for Fungible Tokens is defined in the **[NEP-17 Token Standard](https://docs.neo.org/docs/en-us/develop/write/nep17.html)***, and this is what we'll be implementing.

One can check the deployed contracts' methods for Neo's native assets, and verify that they too are NEP-17 compliant smart contracts:

* [NEO Contract](https://dora.coz.io/contract/neo3/mainnet/0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5)
* [GAS Contract](https://dora.coz.io/contract/neo3/mainnet/0xd2a4cff31913016155e38e474a2c06d08be276cf)

> `*` **NEP** stands for **Neo Enhancement Proposal**. Every proposal is submitted, debated, tinkered, voted and approved (or not) by Neo's development community.

# 3. Creating our Token

As can be seen in the native assets contracts linked in the previous section, fungible tokens MUST implement all of the methods established by the NEP-17, but can also implement any set of complimentary methods. It's even necessary to implement other methods, like the ones that will actually issue token amounts to some address.

In this section, we'll give a brief overview of the methods we're going to implement later. Right after, we'll showcase the full code of our token. We'll then proceed to cover the code bit by bit throughout the rest of the tutorial.

## 4. Testing a Neo smart-contract

There are currently 2 ways to test a smart-contract on the Neo platform. Both depend on the [Neo Blockchain Toolkit](https://github.com/neo-project/neo-blockchain-toolkit). We recommend you install it using their VS Code extension.

* Deploy and invoke it using [Neo Express](https://github.com/neo-project/neo-express)
* Use the blockchain-toolkit [Test Runner](https://github.com/ngdenterprise/neo-test/pull/17)

Be sure to update the Owner Address of the token with your testing wallet's address and recompile before deployment, so the tokens will be issued to the chosen address.

## Nep-17 Methods

These are the mandatory methods for a Fungible Token in the Neo Blockchain. Please refer to the original **[NEP-17](https://docs.neo.org/docs/en-us/develop/write/nep17.html)** page for the official implementation guidelines for each one of them.

* **`symbol() -> str`**

> *Must return our token's symbol, which acts as it's name. This value must never change.*

* **`decimals() -> int`**

> *Must return the number of decimal places that's used by our token. This value must never change.*

* **`totalSupply() -> int`**

> *Must return the total amount of our token that currently exists in the network.*

* **`balanceOf(account) -> int`**

> *Must return the balance of our token that's held by a specified account.*

* **`transfer(from_address, to_address, amount, data) -> bool`**

> *Must transfer an amount of our token from one address to another, but only after checking whether or not the transfer is valid. If the transfer succeeds this function must return True, otherwise it should return False. Every transfer must also trigger the **`Transfer` event**, and in case the recipient of the transfer is another deployed contract, it should also trigger the `onNEP17Payment()` method of such contract.*

* **`Transfer`** event

> *Events are a way to communicate changes in the state of a contract as notifications to the network. We'll see how we implement this event in the next section.*

## Other Methods

* **`_deploy(data, update) -> bool`**

> *This is an optional method that is automatically executed when a contract is deployed to the network. We're going to use it to create the total amount of tokens and issue them to our own address.*

* **`onNEP17Payment(from_address, amount, data) -> bool`**

> *Also an optional method, this one is called when a **`transfer()`** from another NEP-17 token tries to send tokens to our contract. This step exists to give the other contract a chance to somehow respond to a transfer attempt. In our case we'll simply use it to state that our contract doesn't accept any transfers.*

* **`manifest_metadata() -> NeoMetadata`**

> *Another optional method, that we'll use to compliment the `manifest.json` file generated after compilation with some metadata of our own. This method has no effect in the smart contract's logic*

# 5. Token Contract

**Notes to the Python Developer:**

Boa compiles our `.py` into NeoVM byte code, and to do so it requires some adaptation in Python's standards and conventions, which might be worth highlighting:

* the need to declare types on each method's input and output parameters, in order to properly compile;
* the usage of camelCase in method naming, to keep consistency with Neo's C#-bred ecossystem;
* you'll notice the `@public` and `@manifest` decorators before some functions, these are specific to boa and are used during compilation. Their meaning and usage are detailed in section 5.

``` python
from typing import Any
from boa3.builtin import public, metadata, NeoMetadata
from boa3.builtin.type import UInt160
from boa3.builtin.contract import Nep17TransferEvent, abort
from boa3.builtin.interop import storage
from boa3.builtin.interop.runtime import calling_script_hash, check_witness
from boa3.builtin.interop.contract import call_contract
from boa3.builtin.interop.blockchain import get_contract

# -------------------------------------------
# CONSTANTS
# -------------------------------------------

OWNER = UInt160("CONTRACT_OWNER_S_ADDRESS".to_script_hash())
TOKEN_SYMBOL = 'TOKEN'
SUPPLY_KEY = 'totalSupply'
TOKEN_DECIMALS = 8
TOKEN_TOTAL_SUPPLY = 10_000_000 * 10 ** TOKEN_DECIMALS

# -------------------------------------------
# Events
# -------------------------------------------

on_transfer = Nep17TransferEvent

# -------------------------------------------
# NEP-17 Methods
# -------------------------------------------

@public
def symbol() -> str:
    return TOKEN_SYMBOL

@public
def decimals() -> int:
    return TOKEN_DECIMALS

@public
def totalSupply() -> int:
    return storage.get(SUPPLY_KEY).to_int()

@public
def balanceOf(account: UInt160) -> int:
    assert len(account) == 20, 'invalid address'
    
    return storage.get(account).to_int()

@public
def transfer(from_address: UInt160, to_address: UInt160, amount: int, data: Any) -> bool:
    assert len(from_address) == 20 and len(to_address) == 20, 'invalid address'
    assert amount >= 0, 'invalid amount'
    
    from_balance = storage.get(from_address).to_int()
    if from_balance < amount:
        return False
        
    if from_address != calling_script_hash:
        if not check_witness(from_address):
            return False

    if from_address != to_address and amount != 0:
        if from_balance == amount:
            storage.delete(from_address)
        else:
            storage.put(from_address, from_balance - amount)

        to_balance = storage.get(to_address).to_int()
        storage.put(to_address, to_balance + amount)

    on_transfer(from_address, to_address, amount)

    contract = get_contract(to_address)
    if not isinstance(contract, None):
        call_contract(to_address, 'onNEP17Payment', [from_address, amount, data])

    return True

# -------------------------------------------
# Other Methods
# -------------------------------------------

@public
def _deploy(data: Any, update: bool):
    if update:
        return
    
    if storage.get(SUPPLY_KEY).to_int() > 0:
        return

    storage.put(SUPPLY_KEY, TOKEN_TOTAL_SUPPLY)
    storage.put(OWNER, TOKEN_TOTAL_SUPPLY)

    on_transfer(None, OWNER, TOKEN_TOTAL_SUPPLY)

@public
def onNEP17Payment(from_address: UInt160, amount: int, data: Any):
    abort()

# -------------------------------------------
# Manifest method with Contract's metadata
# -------------------------------------------

@metadata
def manifest_metadata() -> NeoMetadata:
    meta = NeoMetadata()
    meta.author = "CoZ"
    meta.description = "NEP-17 Example"
    meta.email = "contact@coz.io"
    meta.version = "0.33"
    meta.extras = {'Date of creation': '08/03/2021',
                   'Last update': '12/03/2021'
                   }
    return meta
```

# 5. Contract Breakdown

## Imports

For this example we are only importing a small subset of boa's packages, based on our contract's needs. We're also importing the type `Any` directly from Python

```python
from typing import Any
from boa3.builtin import public, metadata, NeoMetadata
from boa3.builtin.type import UInt160
from boa3.builtin.contract import Nep17TransferEvent, abort
from boa3.builtin.interop import storage
from boa3.builtin.interop.runtime import calling_script_hash, check_witness
from boa3.builtin.interop.contract import call_contract
from boa3.builtin.interop.blockchain import get_contract
```

For a complete reference of boa's supported features, please head to the [Package Reference](./neo3/boa/package-reference.html) section of the documentation.

## Constants

We're declaring some constants in the beginning of our code. This is a design choice that keeps some key aspects of our Token at hand for quick configuration and reference. These constants are later used throughout our implemented methods.

```python
OWNER = UInt160("CONTRACT_OWNER_S_ADDRESS".to_script_hash())
```

`OWNER` stores the address of the Token Owner. It's usually stored in `UInt160` format. The name stands for an *Unsigned Integer* with *160* bits (or 20 bytes), and it's Neo's native type for script hashes.

Data type conversion is a tricky topic when first approaching blockchain development. So it's worth giving a brief overview of the translations happening here.

* **`UInt160()`**
    
> Boa's constructor method for `UInt160` type. It accepts either `bytes` or `int` as parameters, and returns the correspondent `UInt160` value.

* **`"CONTRACT_OWNER_S_ADDRESS"`**

> The most user friendly and sharable type for blockchain addresses is usually a `string`, so we'll need to convert it to `bytes` format before we can feed it to our `UInt160()` constructor.

* **`"to_script_hash()"`**

> A simple method to convert our previous `string` to `bytes` format.

By properly storing this address in our `OWNER` constant we avoid having to deal with all these type conversions inside our methods.

```python
TOKEN_SYMBOL = 'TOKEN'
```

`TOKEN_SYMBOL` is simply a constant that will store our Token's symbol. Following the NEP-17 guidelines, the symbol needs to be in uppercase, only letters from the latin alphabet are allowed, and it should be short (3-8 characters).

```python
SUPPLY_KEY = 'totalSupply' 
```

`SUPPLY_KEY` is a constant that we'll use as key to our storage, holding the value of the total supply of our tokens. It can have any value, the shorter the better, as it will save storage space in our smart contract, consequently making it a little cheaper to deploy and interact with. 

In our case we'll use the `SUPPLY_KEY` constant first to store this information, and later to retrieve it whenever asked for it. In more complex scenarios, it would also be used to change the amount of tokens that exist in the network.

More about the usage of the storage in the Methods section.

```python
TOKEN_DECIMALS = 8
TOKEN_TOTAL_SUPPLY = 10_000_000 * 10 ** TOKEN_DECIMALS
```

`TOKEN_DECIMALS` states the number of decimal places that we'll want our token to have, and `TOKEN_TOTAL_SUPPLY` will hold the total amount of our tokens that exist in the network. In our case, since there will be no changes to it we can store it in a constant. Notice that the total supply is 10 million multiplied by the decimals we've configured just above.

## Events

Events are notifications sent to the network when something specific happens in a contract. They are a way for other actors to acknowledge and react to state changes in smart contracts without having to query or send transactions to the blockchain.

The NEP-17 standard states that we must trigger the `Transfer` event after every transfer. Boa has an native features to facilitate this, and we're assigning it to the constant `on_transfer` so we can easily use it later in our `transfer()` method.

```python
on_transfer = Nep17TransferEvent
```

But events can also be constructed according to the different needs and use cases of different smart contracts. Bellow is a quick example of the very same `Transfer` event implemented in a manual fashion.

```python
from typing import Union
from boa3.builtin import CreateNewEvent
from boa3.builtin.type import UInt160

on_transfer = CreateNewEvent(
    [
        ('from_addr', Union[UInt160, None]),
        ('to_addr', Union[UInt160, None]),
        ('amount', int)
    ],
    'Transfer'
)
```

Future articles will further approach this topic.

## Methods

Before covering each method we implemented, a few general aspects common to them all are worth noticing:

* **`storage`**

> Our smart contract logic orbits around storage interactions. Every smart contract has it's own scoped storage, which uses a key-value model; a simple, yet powerful mechanism, paramount to the workings of decentralized applications. In our token we're using three storage methods: `storage.put` assigns a value to a given key, `storage.get` retrieves a value with a given key, and `storage.delete` removes a key-value pair from the storage.

* **`@public` decorator**

> As the name suggests, it's used to flag functions that can be accessed from outside the contract itself. Functions decorated with `@public` will be included in the manifest's ABI during compilation, and after deployment can be called by external addresses. Functions not flagged with it are internal ones, and can only be called from within the contract itself.

* **`@metadata` decorator**

> Can only be used once, and the function flagged with it must have `NeoMetadata` as output. The function flagged with this decorator won't affect the contract's logic, serving only to add different kinds of metadata to the contract's manifest during compilation. 

### NEP-17 Methods

The first two methods will simply return values that we have previously assigned to our constants. Notice again the very unpythonic type declaration that's mandatory for our contracts to compile.

```python
@public
def symbol() -> str:
    return TOKEN_SYMBOL

@public
def decimals() -> int:
    return TOKEN_DECIMALS
```

Then we have a few methods that deal with simple `storage` interactions.

```python
@public
def totalSupply() -> int:
    return storage.get(SUPPLY_KEY).to_int()
```

We're using our `SUPPLY_KEY` to retrieve the total supply of tokens from the storage. This value will be put there using this same key by the `_deploy` method that's automatically called on contract deployment. Notice the usage of `to_int()`, necessary to convert `bytes` values that are retrieved from the storage by default.

```python
@public
def balanceOf(account: UInt160) -> int:
    assert len(account) == 20, 'invalid address'
    
    return storage.get(account).to_int()
```
This function checks the balance of an account. Accounts are added as keys to the storage whenever they receive tokens, and the amount of tokens that they own is added as values to the storage. This is done first by the aforementioned `_deploy` method, and then by the `transfer` method whenever tokens are transfered.
In this case, we're also checking whether the passed parameter is a valid account format, before making the call to the storage. If it's not, we throw an exception.

The transfer function is by far the most complex one of our Token's contract. It takes as parameters two addresses (a sender and a receiver) the amount of tokens to transfer, and also a fourth `data` parameter.
This last one can take data of any type, which can be used for more complex transfer-triggered interactions between smart contracts.

```python
@public
def transfer(from_address: UInt160, to_address: UInt160, amount: int, data: Any) -> bool:
```

First we make sure the parameters passed to the function are valid ones. If not, we throw exceptions.

```python    
    assert len(from_address) == 20 and len(to_address) == 20, 'invalid address'
    assert amount >= 0, 'invalid amount'
```

Then we check if the sender has enough balance to make the transfer it intends to.

```python 
    from_balance = storage.get(from_address).to_int()
    if from_balance < amount:
        return False
```

Then we need to check if the one calling the function is actually authorized to do so.

```python 
    if from_address != calling_script_hash:
        if not check_witness(from_address):
            return False
```

`calling_script_hash` will return us the script hash that called the function. If it's not the same as the address passed down as the sender, we need to further check whether the sender signed the transaction. We do this using `check_witness`, and if the sender's signature is also not in the transaction, then we must interrupt our transfer and return false.

If all previous tests are successful, we proceed to transfer the funds. In here we're doing some further checks that might save needless storage computation, or save storage space.

```python
    if from_address != to_address and amount != 0:
        if from_balance == amount:
            storage.delete(from_address)
        else:
            storage.put(from_address, from_balance - amount)

        to_balance = storage.get(to_address).to_int()
        storage.put(to_address, to_balance + amount)
```

First we completely skip balance changes if sender and receiver are the same address, or if the amount being transferred equals 0. Then we check whether the sender is sending all of it's funds, and if he is, we delete his entry in the storage, instead of keeping an entry with value zero. This is done to save precious space in the blockchain, since every node in the network holds a complete copy of every single contract's storage. After all of this, we proceed to the balance changes that configure the actual transfer.

At last, with our transfer done, we can call the `Transfer` event.

```python
    on_transfer(from_address, to_address, amount)
```

NEP-17 also states that the transfer method must check whether the receiver of a transfer is a contract. If so, it must call the contract's `onNEP17Payment` method before finishing the transfer.

```python
    contract = get_contract(to_address)
    if not isinstance(contract, None):
        call_contract(to_address, 'onNEP17Payment', [from_address, amount, data])

    return True
```

This is done so the contract gets a chance to react to this payment, as we'll see in the next section.

### Other Methods

The `_deploy` method is executed automatically when the contract is deployed to the network. We'll use it to issue our tokens, putting our total supply to the storage using our `SUPPLY_KEY` constant as key, and transferring all of the issued tokens to the contract's owner.

```python
@public
def _deploy(data: Any, update: bool):
    if update:
        return
    
    if storage.get(SUPPLY_KEY).to_int() > 0:
        return

    storage.put(SUPPLY_KEY, TOKEN_TOTAL_SUPPLY)
    storage.put(OWNER, TOKEN_TOTAL_SUPPLY)

    on_transfer(None, OWNER, TOKEN_TOTAL_SUPPLY)
```

Notice there are two checks before executing the deployment operations. 

First we check if this is an `update` of the smart contract, by asking the second parameter of the function. If it is we do nothing. 

Next we check if the `SUPPLY_KEY` is already used as key to the storage. If it is, it means that the contract was already deployed, and someone is trying to call it again. So we also do nothing, for our tokens are already issued.

At last, we trigger the `Transfer` event, since we are actually transferring tokens to the contract's owner. Notice the transfer event is triggered with `None` being passed as the `from` parameter. This means that these tokens are being `minted`, or created, and therefore no one is actually sending them.

Future tutorials will cover such topics as the `minting` and `burning` of tokens, as well as the `update` method, that can be used to make changes to an already deployed contract.

Last but not least, we have the final method of our contract's logic.

```python
@public
def onNEP17Payment(from_address: UInt160, amount: int, data: Any):
    abort()
```

As we've seen in the `transfer` method, this method is called whenever another contract tries to send tokens to our contract. In our case, we'll simply refuse the transfer by calling `abort()`

And as we've stated in the beginning of this section, we have our function flagged with the `@metadata` decorator, which isn't part of the contract's logic. It serves the purpose of appending extra metadata to the compiled `manifest.json` file. The most important thing here is the need for this function to return a `NeoMetadata` object. Bellow is an example of how to create one such object, with custom metadata fields.

```python
@metadata
def manifest_metadata() -> NeoMetadata:
    meta = NeoMetadata()
    meta.author = "CoZ"
    meta.description = "NEP-17 Example"
    meta.email = "contact@coz.io"
    meta.version = "0.33"
    meta.extras = {'Date of creation': '06/17/2021',
                   'Last update': '06/17/2021'
                   }
    return meta
```

# 6. Compiling the Contract

Compiling our contract with boa is very straightforward. Copy the complete code to a blank `Token.py` file and save it in a folder of your choice. We recommend creating a dedicated folder for this, since compiled files will be saved to the same location as our original `.py`.

Then, on a terminal window, activate the Python Virtual Environment where you installed neo3-boa, and simply run the command:

```shell
$ neo3-boa path/to/your/file.py
```

The code we provided should compile without errors, and three new files should be created on our chosen folder:

* **`Token.nef`**

> *The contract file to be deployed to the Neo Blockchain*

* **`Token.manifest`**

> *Also needed for deployment, contains the public interfacing data of our contract.*

* **`Token.nefdbgnfo`**

> *A file that's used by the debugger.*

If for some reason you stumble upon compilation errors, with this contract or your next ones, it is recommended to resolve the first reported error and try to compile again. An error can have a cascading effect and throw more errors all caused by the first.

# 7. Invoking your contract

We recommend you deploy it to a local blockchain using Neo Express. If you want to invoke your smart-contract from the browser or from your server, please check one of the articles below:


* [An Introduction to Contract Development on Neo](FIXME).
* [Interfacing with smart contracts using Neon.js](FIXME)

Be sure to update the Owner Address of the token with your testing wallet's address and recompile before deployment, so the tokens will be issued to the chosen address.