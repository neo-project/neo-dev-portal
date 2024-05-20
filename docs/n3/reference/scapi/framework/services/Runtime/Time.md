# Runtime.Time Attribute

Gets the current block time stamp.

Namespace: [Neo.SmartContract.Framework.Services](../../services.md)

Assembly: Neo.SmartContract.Framework

## Syntax

```cs
public static extern uint Time
```

Attribute: unix time stamp. Unsigned Integer.

## Example

```cs
public static bool Main()
{
    if (Runtime.Time >= 1587959138)
    {
        // do something;
    }
}
```



[Back](../Runtime.md)
