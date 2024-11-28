# Policy.IsBlocked方法

给定账户是否已被屏蔽。

命名空间：[Neo.SmartContract.Framework.Native](../../native/index.md)

程序集：Neo.SmartContract.Framework

## 语法

```cs
public static extern bool IsBlocked(UInt160 account);
```

参数：

- account: 给定账户

返回值：

- 该账户是否已被屏蔽

## 示例

```cs
public class Contract1 : SmartContract.Framework.SmartContract
{
    private static readonly UInt160 account = "NXsG3zwpwcfvBiA3bNMx6mWZGEro9ZqTqM".ToScriptHash();

    public static object Test()
    {
        var isBlocked= Policy.IsBlocked(account);
    }
}
```
[返回上级](index.md)

