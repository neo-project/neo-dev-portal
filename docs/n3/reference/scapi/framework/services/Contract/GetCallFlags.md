# Contract.GetCallFlags Method

Gets the call privilege of the contract.

Namespace: [Neo.SmartContract.Framework.Services](../index.md)

Assembly: Neo.SmartContract.Framework

## Syntax

```cs
public static extern byte GetCallFlags();
```

## Example

```cs
public class Contract1 : SmartContract.Framework.SmartContract
{
        public static int GetCallFlags()
        {
            return Contract.GetCallFlags();
        }
}
```


