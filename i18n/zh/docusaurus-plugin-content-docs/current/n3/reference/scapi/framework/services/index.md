# Neo.SmartContract.Framework.Services

## 类

| 类                                                           | 说明                                          |
| ------------------------------------------------------------ | --------------------------------------------- |
| [Block](Block.md)       | 表示区块的类，提供了一系列区块相关的属性      |
| [Contract](Contract/index.md) | 表示合约的类                                  |
| [Crypto](Crypto.md)     | 提供了ECDsa 验证签名的方法。                  |
| [Iterator](Iterator/index.md) | 智能合约中的自定义迭代器                      |
| [Notification](Notification.md) | 表示合约执行发送的通知                        |
| [Runtime](Runtime/index.md)   | 提供智能合约运行时的一些方法                  |
| [Storage](Storage/index.md)   | 提供了持久化存储区的插入、查询、删除的方法    |
| [StorageContext](StorageContext.md) | 用来表示私有存储区存储上下文的类              |
| [StorageMap](StorageMap.md) | 表示给定存储上下文中指定前缀的key-value存储区 |
| [Transaction](Transaction.md) | 用来表示交易的基类                            |

## 枚举

| 枚举                                   | 说明                                                 |
| -------------------------------------- | ---------------------------------------------------- |
| [CallFlags](CallFlags.md)     | 定义调用合约方法时的模式                             |
| [FindOptions](FindOptions.md) | 定义搜索存储区时的搜索选项，用在 Storage.Find 方法中 |
| [TriggerType](TriggerType.md) | 定义了智能合约触发器类型                             |

