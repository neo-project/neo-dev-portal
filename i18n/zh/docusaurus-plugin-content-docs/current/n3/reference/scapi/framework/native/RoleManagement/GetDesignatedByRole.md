# RoleManagement.GetDesignatedByRole方法

通过交易哈希 ，查找交易所在的区块。

命名空间：[Neo.SmartContract.Framework.Native](../../native/index.md)

程序集：Neo.SmartContract.Framework

## 语法

```cs
public static extern Cryptography.ECC.ECPoint[] GetDesignatedByRole(Role role, uint index);
```

参数：

- role: 角色的类型
- index: 要查询的区块的索引

返回值：

- 节点的公钥列表

## 示例

```cs
public static void Test()
{
    var nodes = RoleManagement.GetDesignatedByRole(Role.Oracle, 0);
}
```
[返回上级](index.md)

