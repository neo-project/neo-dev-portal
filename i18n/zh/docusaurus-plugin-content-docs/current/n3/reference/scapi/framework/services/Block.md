# Block 类

表示区块的类，提供了一系列区块相关的属性。

命名空间：[Neo.SmartContract.Framework.Services](index.md)

程序集：Neo.SmartContract.Framework

## 语法

```cs
public class Block
```

## 属性

| 名称              | 说明                                                         |
| ----------------- | ------------------------------------------------------------ |
| Hash              | 获得该区块的散列                                             |
| Version           | 获得该区块的版本号                                           |
| PrevHash          | 获得该区块前一个区块的散列                                   |
| MerkleRoot        | 获得该区块的默克尔树根                                       |
| Timestamp         | 获得该区块的时间戳                                           |
| Index             | 获得该区块的索引，索引是从 0 开始记数。<br/>区块索引 = 区块高度 = 区块数 - 1<br/>Index = Height = Count - 1 |
| PrimaryIndex      | 产生该区块的共识节点的议长编号                               |
| NextConsensus     | 获得下一个区块的共识合约（由 3 分之 2 以上共识节点组成的多方签名合约） |
| TransactionsCount | 获得该区块的交易数量                                         |

## 构造方法

通过 [Ledger.GetBlock()](../native/Ledger/GetBlock.md) 来构造 Block 对象。