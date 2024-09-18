# NEO.GetGasPerBlock Method ()

Gets the number of GAS generated in each block.

Namespace: [Neo.SmartContract.Framework.Native](../index.md)

Assembly: Neo.SmartContract.Framework

## Syntax

```cs
public static extern BigInteger GetGasPerBlock();
```

## Example

```cs
public class Contract1 : SmartContract.Framework.SmartContract
{
    public static object Test()
    {
        BigInteger result = NEO.GetGasPerBlock();
        return result;
    }
}
```

Response body:

```json
{
    "Type":"Integer",
    "value":"100000000"
}
```

Response description:

- Integer type: the number of GAS generated in each block

- Others: failed

[Back](index.md)
