# Policy.GetExecFeeFactor方法

获取vm执行费率。

命名空间：[Neo.SmartContract.Framework.Native](../../native/index.md)

程序集：Neo.SmartContract.Framework

## 语法

```cs
public static extern uint GetExecFeeFactor();
```

返回值：

- vm执行费率

## 示例

```cs
public static void Test()
{
    var factor = Policy.GetExecFeeFactor();
}
```
[返回上级](index.md)

