# Policy.GetStoragePrice Method

Gets data storage fee per byte.

Namespace: [Neo.SmartContract.Framework.Native](../index.md)

Assembly: Neo.SmartContract.Framework

## Syntax

```cs
public static extern uint GetStoragePrice();
```

Return:

- Data storage fee per byte

## Example

```cs
public static void Test()
{
    var price = Policy.GetStoragePrice();
}
```

[Back](index.md)

