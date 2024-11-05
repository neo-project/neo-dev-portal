# Policy.GetFeePerByte Method

Gets the transaction network fee per byte.

Namespace: [Neo.SmartContract.Framework.Native](../index.md)

Assembly: Neo.SmartContract.Framework

## Syntax

```cs
public static extern long GetFeePerByte();
```

Return:

- Transaction network fee per byte

## Example

```cs
public static void Test()
{
    var feePerByte = Policy.GetFeePerByte();
}
```

[Back](index.md)
