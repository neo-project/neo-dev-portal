---
sidebar_position: 2
---
# Neo.SmartContract.Framework.Services

## Class

| Class                                                        | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [Block](Block.md)       | A class representing a block, provides a set of block-specific properties. |
| [Contract](Contract/index.md) | A class representing a contract.                             |
| [Crypto](Crypto.md)     | Provides the ECDsa method to verify the signature.           |
| [Iterator](Iterator/index.md) | The customized iterator in the smart contract.               |
| [Notification](Notification.md) | The notification sent when the contract is executed.         |
| [Runtime](Runtime/index.md)   | Provides a set of methods during smart contract execution    |
| [Storage](Storage/index.md)   | Provides a set of methods to insert, query, or delete data of a persistent store |
| [StorageContext](StorageContext.md) | A class representing storage context of the persistent storage |
| [StorageMap](StorageMap.md) | A key-value storage for a specific prefix in the given storage context. |
| [Transaction](Transaction.md) | The base class representing the transaction                  |

## Enumeration

| Enumeration                            | Description                                                  |
| -------------------------------------- | ------------------------------------------------------------ |
| [CallFlags](CallFlags.md)     | Defines the pattern when invoking contracts                  |
| [FindOptions](FindOptions.md) | Defines search options for searching a storage. Used in the  Storage.Find method. |
| [TriggerType](TriggerType.md) | Defines the trigger types                                    |
