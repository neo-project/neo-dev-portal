---
slug: neo-fairy-test
title: 'Fairy, your super tester & debugger for smart contracts'
description: "The last tool you need for repeatable, lightning fast, remote, fully automatic smart contract testing & debugging, in all networks & all programming languages!"
author: Hecate2
tags: [ "NEO FAIRY TEST", "SMART CONTRACT", "C#", "PYTHON" ]
skill: intermediate
source: https://github.com/Hecate2/neo-fairy-test/
sidebar: true
---


## 1. Introduction

In many situations, you may really enjoy testing and debugging your neo3 smart contract using [neo-express](https://github.com/neo-project/neo-express). However, you may have met some frustrating exceptions raised deep from your contracts, others' contracts, or even the source code of Neo that you have no idea how to fix them. Or sometimes you fail to get enough testnet GAS. In those cases, [neo-fairy-test](https://github.com/Hecate2/neo-fairy-test) and [neo-fairy-client](https://github.com/Hecate2/neo-fairy-client) are ready for you, and for your next legendary contract to simulate all the executions in mainnet, testnet or your private net. 

## 2. Setup 

### Get a full Neo.CLI with Fairy plugin installed

- [Simpler but not recommended] Just head to [the latest releases of Neo](https://github.com/neo-project/neo/releases) and download the latest neo-cli executable zip files for your operating system.
- **[Recommended]** Alternatively, visit [how-to-debug-neo](https://github.com/Hecate2/how-to-debug-neo/), compile and run Neo.CLI with every piece of Neo source code. You will be able to debug your compiled codes.
- [Configure](https://developers.neo.org/docs/n3/node/cli/config#connecting-the-node-to-network) your Neo.CLI to mainnet, testnet or private net. **I would recommend mainnet, for you to write zero config and access all the mainnet environments.**
- [Simpler but not recommended] [Install neo-fairy-test from the latest releases](https://github.com/Hecate2/neo-fairy-test/releases) (version **>=3.7.5.17** for this tutorial). Unzip the downloaded release and place it at `Plugins/Fairy/{Fairy.dll + config.json + fairy.json + RpcServer.json}`. `Plugins` is a directory placed beside `neo-cli.exe`.
- **[Recommended]** Alternatively you may compile [the source codes of Fairy](https://github.com/Hecate2/neo-fairy-test) by yourself. 
- Config Fairy in `Plugins/Fairy/RpcServer.json`. Fairy is just an extended RpcServer on localhost of both IPv4 and IPv6, and on port 16868. If you are on mainnet, the initial config from my release should be good for you. For testnet T5, just change all the `Network` to `894710606` and all the `Port` to `26868`.
- Run neo-cli.exe. If things go well, Fairy should print blue text like `★ Fairy server running at 0.0.0.0:16868` on your neo-cli.

### Get a neo-fairy-client (Python required)

Using command line, `pip install --upgrade neo-fairy-client`. This is a Neo RPC client that supports fairy features. Use version **>=3.7.5.16** for this tutorial. Python >=3.8 required.

You may also send HTTP requests to neo-fairy-test with any tool you like, but neo-fairy-client is recommended for being good at handling Neo stuff. 

## 3. Test your contracts on the mainnet!

All the Fairy executions are based on the current synchronized environment of neo-cli. If you want to access other contracts and their storage on the mainnet, you have to wait until neo-cli is fully synced to the latest block (run `show state` in neo-cli to see the progress; use the offline pack at https://sync.ngd.network/ to accelerate). If you start without full block synchronization, you would test in a past mainnet state.

### Deploying your contract virtually

```python
from neo_fairy_client import FairyClient

target_url = 'http://127.0.0.1:16868'
client = FairyClient(target_url, fairy_session='Hello world! Your first contact with Fairy')
scripthash = client.virutal_deploy_from_path('./bin/sc/YourContract.nef')
print(scripthash)
```

### Testing your contract

```python
result = client.invokefunction('main')
print(result)
```

If your invocation writes to smart contract storage, it will be memorized in the fairy session name chosen by you. Keep using the same session (without setting another session for your `FairyClient client`) for continuous invocations. Also you may call other contracts on the mainnet, and they will also virtually take effect in your fairy session.

```python
from neo_fairy_client.utils import NeoAddress
client.set_neo_balance(1_000_000_000)
print(f"Your NEO balance: {client.invokefunction_of_any_contract(NeoAddress, 'balanceOf', [wallet_scripthash])}")
client.invokefunction_of_any_contract(NeoAddress, 'transfer', [wallet_scripthash, Hash160Str.zero(), 1_000_000_000, None])
print(f"NEO balance of zero address: {client.invokefunction_of_any_contract(NeoAddress, 'balanceOf', [Hash160Str.zero()])}")
```

### Setting witness scope

```python
from neo_fairy_client.utils import Signer, WitnessScope
signer = Signer(0xb1983fa2479a0c8e2beae032d2df564b5451b7a5, scopes=WitnessScope.Global)
client.invokefunction_of_any_contract(..., signers=signer)  # or a list of signers
```

Read https://developers.neo.org/docs/n3/foundation/Transactions#signature-scope about what a witness scope is. Fairy also supports complex `WitnessRules` if you need it.

```python
from neo_fairy_client.utils.WitnessRule import *
signer = [Signer(account=wallet_scripthash, scopes=WitnessScope.WitnessRules, rules=Allow(Or(And(CalledByEntry(), ScriptHash(your_called_contract)), And(CalledByContract(your_called_contract), ScriptHash(underlying_contract)))))]
# Your wallet_scripthash signature is valid if you are calling your_called_contract from entry, or your_called_contract is calling underlying_contract
```

### Creating another fairy session from existing

Imagine that you have deployed a new fungible token contract and minted billions for yourself. Now you want to test whether you can send all of them to another, and whether you can trade them in an exchange. You hope both of the test starts from the state where you hold the billions of minted tokens. This is easy with `copy_snapshot`. Just specify the old name and the new name of fairy sessions. 

```python
client.copy_snapshot('minted billion tokens', 'test trade')
```

Then, always execute your fairy transactions in the new fairy session `test trade`. You can either change the fairy session used in the client, by explicitly setting it:

```python
client.fairy_session = 'test trade'
client.invokefunction_of_any_contract(DEX_contract, 'trade', [amountIn, amountOut, ...])
```

or temporarily set the session for a single invokefunction:

```python
client.invokefunction_of_any_contract(..., fairy_session='test trade')
```

Similarly, there is a `contract_scripthash` property in `FairyClient`. Set it explicitly to let your client keep calling the contract for all `invokefunction`.

## 4. Debug your contracts on the mainnet!

### Compile your contract in debug mode to get `.nefdbgnfo` file

In `neo-devpack-dotnet` just add the flag `--debug`.

### Install [DumpNef](https://github.com/Hecate2/DumpNef)

This is a tool that prints your source code along with its compiled Neo VM assembly. If you are using `neo-devpack-dotnet` in its latest source code commit, you can also invoke with flag: `nccs YourContract.csproj --debug --assembly` to dumpnef automatically. But it is still recommended to have a standalone dumpnef in your computer.

### Set debug info for your contract

If there is `YourContract.nefdbgnfo` file placed beside `YourContract.nef` file, and if `dumpnef` is available on your computer, your FairyClient should automatically generate `YourContract.nef.txt` and set the debug info in the `virutal_deploy_from_path` called when your contract was deployed. But let's still see how to set debug info manually:

```python
with open(r'bin/sc/YourContract.nefdbgnfo', 'rb') as f:
    nefdbgnfo = f.read()
with open(r'bin/sc/YourContract.nef.txt', 'r') as f:
    dumpnef = f.read()
client.set_debug_info(nefdbgnfo, dumpnef)
```

`nefdbgnfo` and `dumpnef` allows you to debug with source codes.

### Set breakpoints for your contract

You may set source code breakpoints for any contract with debug info, or set assembly breakpoints for any contract on mainnet or in your fairy session.

```python
# you may want to delete breakpoints from previous run
client.delete_source_code_breakpoints()
print(client.set_assembly_breakpoints(0))
print(client.set_assembly_breakpoints(3))
print(client.set_source_code_breakpoint('YourContract.cs', 88))
```

### Execute in debug mode

```python
print(rpc_breakpoint := client.debug_function_with_session('methodName', [args, ...]))
print(rpc_breakpoint := client.debug_step_into())
print(rpc_breakpoint := client.debug_step_out())
print(rpc_breakpoint := client.debug_step_over())
print(client.get_local_variables())
print(client.get_arguments())
print(client.get_static_fields())
print(client.get_evaluation_stack())
print(client.get_instruction_pointer())
print(client.get_variable_value_by_name("yourVariableName"))
print(client.get_variable_names_and_values())
...
```

## 5. Interact with the blockchain!

Fairy is still an RpcServer, and is able to relay transactions. Beside, Fairy has even more features like websocket, `AwaitConfirmedTransaction` (in server and client) and `replay_transaction` (in client). Although there is no standalone document for Fairy, you can explore the source codes of neo-fairy-test/client for a pleasant journey!

