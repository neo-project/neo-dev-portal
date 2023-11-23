# Runtime.Time 属性

获得当前区块的时间戳。

命名空间：[Neo.SmartContract.Framework.Services](../../services.md)

程序集：Neo.SmartContract.Framework

## 语法

```cs
public static extern uint Time
```

属性值：unix 时间戳，无符号整型。

## 示例

```cs
public static bool Main()
{
    if (Runtime.Time >= 1587959138)
    {
        // do something;
    }
}
```



[返回上级](../Runtime.md)