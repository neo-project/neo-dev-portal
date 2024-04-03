# ContractManagement.GetMinimumDeploymentFee Method

Gets the minimum GAS fee required for deploying a contract.

Namespace: [Neo.SmartContract.Framework.Native](../../native.md)

Assembly: Neo.SmartContract.Framework

## Syntax

```c#
public static long GetMinimumDeploymentFee();
```

Return:

GAS costs (in satoshi).

## Example

Contract:

```c#
public class Contract_1 : SmartContract
{
    public static long MyMethod()
    {
        return ContractManagement.GetMinimumDeploymentFee();
    }
}
```

Invoke from neo-cli:

```
invoke 0x8143678f5c7140219d4f430a3e650653ded5fed7 myMethod
```

Invoke from RPC:

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "invokefunction",
    "params": [
        "0x8143678f5c7140219d4f430a3e650653ded5fed7",
        "myMethod",
        []
    ]
}
```

Response body:

```json
[
    {
        "type":"Integer",
        "value":"1000000000"
    }
]
```

Response description:

According to the return value, the minimum GAS for deploying a contract is 10.00000000 GAS.

[Back](../ContractManagement.md)

