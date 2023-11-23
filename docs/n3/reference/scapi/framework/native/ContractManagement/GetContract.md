# ContractManagement.GetContract Method

Gets the contract information.

Namespace: [Neo.SmartContract.Framework.Native](../../native.md)

Assembly: Neo.SmartContract.Framework

## Syntax

```cs
public static extern Contract GetContract(UInt160 hash);
```

Parameters:

- hash: the contract hash

## Example

```cs
public class Contract1 : SmartContract.Framework.SmartContract
{
    private static UInt160 ScriptHash = "NXsG3zwpwcfvBiA3bNMx6mWZGEro9ZqTqM".ToScriptHash();

    public static object GetContract()
    {
        Contract contract = ContractManagement.GetContract(ScriptHash);
        return contract != null;
    }
}
```

Response body:

```json
[{
    "type":"Boolean",
    "value":true
}]
```

Response description:

- Boolean type: true indicates the contract has been deployed.

- Other: failed.

[Back](../ContractManagement.md)