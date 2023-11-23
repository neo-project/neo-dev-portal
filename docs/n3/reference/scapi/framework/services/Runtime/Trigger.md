# Runtime.Trigger Attribute

Gets the trigger type for the smart contract. 

Namespace: [Neo.SmartContract.Framework.Services](../../services.md)

Assembly: Neo.SmartContract.Framework

## Syntax

```cs
public static extern TriggerType Trigger { get; }
```

Attribute：[TriggerType](../TriggerType.md).

## Example

```cs
public static bool Main()
{
    if (Runtime.Trigger == TriggerType.Verification)
    {
        // do something;
    }
    else if (Runtime.Trigger == TriggerType.Application)
    {
        // do something;
    }
}
```

For details, refer to [Template](https://github.com/neo-project/examples/blob/master/csharp/ICO_Template/ICO_Template.cs).



[Back](../Runtime.md)