# Invoking Smart Contracts

After you deployed a smart contract on the blockchain, you can then invoke it by its script hash, which is the unique identity of a smart contract. Any script changes in the contract will result in a different script hash.

## Querying the contract details

You can query a contract details using Neo-CLI or Neo-GUI, such as the contract general information, methods, notifications, etc. 

### Querying using Neo-CLI

Use the RPC API [getcontractstate method](../../reference/rpc/latest-version/api/getcontractstate.md) to query the contract information.

### Querying using Neo-GUI

1. In Neo-GUI click `Contract` ->`Search Contract`
2. Enter the contract script hash, click  `Search`.

The detailed contract information is displayed in Neo-GUI. You can also view the manifest and nef files.

## Invoking a contract with Neo Node Clients

### Invoking a contract using Neo-CLI

You can choose one of the following ways to invoke the contract using Neo-CLI:

- Use the command invoke, which syntax is:

   ```
   invoke <scriptHash> <operation> [contractParameters=null] [sender=null] [signerAccounts=null] [maxGas=20]
   ```

   For more information refer to [invoke](../../node/cli/cli.md#invoke).

- Use the RPC API [invokefunction](../../reference/rpc/latest-version/api/invokefunction.md) or [invokescript](../../reference/rpc/latest-version/api/invokescript.md). The former is recommended. 

### Invoking a contract using Neo-GUI

1. In Neo-GUI click `Contract `->`Invoke Contract`。

2. Enter the contract script hash and click `Search`.

   The methods and parameter list in the current contract are displayed.

3. Select the desired method, fill in the parameters and click `trial test`.

   The trial run at this step does not affect the blockchain as it is just create a NeoVM on your local computer to simulate the invocation.

4.  If the trial run goes smoothly and you want to invoke it on the blockchain, click `Invoke`.

## Cosignature

Some contracts require multiple signatures when invoked, one of which is the signature of the transaction initiator to support the fee, and the rest are cosignatures.

When writing a contract, we usually use `Runtime.CheckWitness (owner)` to authenticate the caller  address, where `owner` is the address allowed to be invoked, and the parameter type is `ByteArray`. Invoking the contract with an unspecified address will fail. For example, when updating a contract, the owner here is the contract administrator. When transferring assets, the owner here is the sender (payer).

When `Runtime.CheckWitness (owner)` is written in the contract, the owner's signature must be passed in as a cosignature when you invoke the contract. 

In Neo-CLI, you can attach a signature using the invoke command.

```
invoke <scriptHash> <operation> [contractParameters=null] [sender=null]  [signerAccounts=null] [maxGas=20]
```

When invoking a contract in Neo-GUI, you can click `Cosignature` at the bottom of the page, choose `Public key`, and then click `Sign` to add the signature.  

:::note
 When you invoke the transfer method of the NEP-17 contract using the transfer command, the wallet will automatically appends the signature to the from field. You don't need to add it manually.
:::

## Invoking between contracts

In Neo N3, all contracts can be invoked dynamically, and writing a contract is much easier.

```cs
public class Contract1 : SmartContract
    {
        delegate object Dyncall(string method, object[] args);

        //Use ByteArray for little endian
        //[InitialValue("694425c17f1ebb7c65de3026c831eb4c49d6d7be", ContractParameterType.ByteArray)]
        //private static readonly UInt160 ScriptHash;

        //Use Hash160 for big endian
        [InitialValue("0xbed7d6494ceb31c82630de657cbb1e7fc1254469", ContractParameterType.Hash160)]
        public static UInt160 ScriptHash;

        public static object Main(string operation, object[] args)
        {
            if (operation == "name")
            {
                return Contract.Call(ScriptHash, "name", CallFlags.ReadOnly, new object[0]);
            }
            if (operation == "totalSupply")
            {
                return Contract.Call(ScriptHash, "totalSupply", CallFlags.ReadOnly, new object[0]);
            }
            return true;
        }
    }
```

The key statement is `Contract.Call(scriptHash, method, flags, params)`, where:

- `scriptHash` is the script hash of the contract invoked. It is ByteArray type and little endian.
- `method` is the method of the contract invoked, such as  `name`, `balanceOf`, or `transfer`. String type.
- `flags` defines special behaviors allowed when invoking smart contracts. See [CallFlags Enumerator](../../reference/scapi/framework/services/CallFlags.md) for details.
- `params` is the parameter list of the method of the invoked contract. Array type.

### Invocation permission

Three fields related to the contract invocation permission are defined in the contract manifest file, as shown in the following table. The wallet decides whether to give a security warning to the user based on the setting in the Groups and Trusts fields. Permissions and signature scopes determine whether contracts can be called by each other. For more information about signature scopes, refer to parameters description in [invokefunction method](../../reference/rpc/latest-version/api/invokefunction.md).

| Fields        | Type                          | Description                                                  |
| ------------- | ----------------------------- | ------------------------------------------------------------ |
| `Groups`      | `ContractGroup[]`             | Defines a group of trusted contracts, consisting of a public key and a signature of contract hash. |
| `Permissions` | `ContractPermission[]`        | This field is an array containing a permission object, which defines other contracts and methods that the contract wants to call. The contract can be ScriptHash, Group, or wildcard *. The method is the method name or wildcard *. Contracts or methods not declared in the manifest cannot be called by the contract. |
| `Trusts`      | `WildcardContainer<UInt160>` | Defines other contracts trusted by the contract. The contract can be ScriptHash, Group, or wildcard *. If a contract is trusted, the user will not receive any warning message when the contract is called. |

Assuming that the contract A calls the contract B, the following table details the invoking behavior and wallet behavior of the contract in various setting scenarios.

| Scenario                                                     | Wallet Prompt                                                | Wallet sets signature scope to...                            | Can contract B  be invoked? |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | --------------------------- |
| Permissions of contract A do not include contract B          | None                                                         | Default                                                      | No                          |
| Permissions of contract A include contract B<br/>Contract A and contract B are in the same groups and the groups signature is verified. | None                                                         | Default and adds CustomGroups                                | Yes                         |
| Permissions of contract A  include contract B<br/>Trusts of contract B include contract A | None                                                         | Default and adds CustomContract                              | Yes                         |
| Permissions of contract A  include contract B<br/>Trusts of contract B do not include contract A | Prompts that contract A will call contract B, and asks whether to authorize the signature to contract B. | Default and adds CustomContract        according to the user's decision | Determined by the user      |
| Permissions of contract A include a Groups B                 | Prompts that contract A will call any contract in group B and asks whether to authorize the signature to group B. | Default and adds CustomGroups according to the user's decision | Determined by the user      |
| The contract defined in the Permissions of contract A is wildcard * and the method is m<br/>{"contract":"\*", "method": "m"} | Prompts that contract A will call the method m of any contract and asks whether to authorize the signature to contract B. | Default or Global according to the user's decision           | Determined by the user      |
| The contract defined in the Permissions of contract A is wildcard * and the method is wildcard \*<br/>{"contract":"\*", "method": "\*"} | Prompts that contract A will call any method of any contract and asks whether to set the signature to Global. | Default or Global according to the user's decision           | Determined by the user      |

## Invoking a contract with wallets/dAPIs

You can use browser wallets to invoke a smart contract, which is helpful for creating a front-end interface on Neo.

### Available Wallets

Below is a list of several wallets that allow users to invoke smart contracts on front-end interfaces across different platforms. While additional wallets may also be available, the ones listed here operate with slight variations in invocation. 

- [Neoline](https://neoline.io/en/)
  - [Neoline Dapi Doc](https://neoline.io/dapi/N3.html)

#### Desktop

- [Neon](https://neon.coz.io/)
  - [WalletConnect SDK](https://github.com/CityOfZion/wallet-connect-sdk)
  - [WalletConnect SDK Guide](https://github.com/CityOfZion/wallet-connect-sdk/blob/main/README.md)
- [O3 Wallet](https://o3.network/#/wallet)

#### Mobile

- [OneGate](https://onegate.space/)
- [Neoline Mobile](https://neoline.io/en/)

OneGate & Neoline Mobile support the [Neo Dapi](https://github.com/neo-ngd/neo-dapi-monorepo). Here you can learn more about [Neo dapi demo](https://github.com/neo-ngd/neo-dapi-demo).

### Usage Example

Here is an [example](https://neo-dapp-demo.vercel.app/) that is applicable to all of the wallets listed above. In this example, you can learn how to connect to a wallet and call methods supported by these wallets. Corresponding source code can be found at [dAPP Demo](https://github.com/ShaySong99/neo-dapp-demo).

