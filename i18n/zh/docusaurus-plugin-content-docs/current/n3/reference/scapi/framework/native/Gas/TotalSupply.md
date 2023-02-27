# GAS.TotalSupply 方法

获取GAS总发行量。

命名空间：[Neo.SmartContract.Framework.Native](../../native.md)

程序集：Neo.SmartContract.Framework

## 语法

```cs
public static extern BigInteger TotalSupply();
```

## 示例

```cs
public class Contract1 : SmartContract.Framework.SmartContract
{
    public static object Test()
    {
        BigInteger result = GAS.TotalSupply();
        return result;
    }
}
```

[返回上级](../Gas.md)