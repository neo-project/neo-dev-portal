# Ledger.GetTransactionHeight 方法

通过交易哈希 ，查找交易所在的区块。

命名空间：[Neo.SmartContract.Framework.Native](../../native/index.md)

程序集：Neo.SmartContract.Framework

## 语法

```cs
public static extern int GetTransactionHeight(UInt256 hash);
```

参数：

- hash: 所查询交易的哈希

## 示例

```cs
public class Contract1 : SmartContract.Framework.SmartContract
{
    public static int Test(UInt256 txHash)
    {
        return Ledger.GetTransactionHeight(txHash);
    }
}
```
[返回上级](index.md)