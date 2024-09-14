---
sidebar_label: 'Interoperable service'
sidebar_position: 1
---
# Interoperable service

This article lists the interoperable service in Neo N3. 

The Interoperable service is the underlying API of the system. For more information on how to use the framework to easily call APIs in high-level languages, see [Smart Contracts Framework](framework/index.md).

**Contract**:

| API                                                          | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [System.Contract.Call](framework/services/Contract/Call.md)  | Use it to call another contract dynamically.                 |
| [System.Contract.GetCallFlags](framework/services/Contract/CallEx.md) | Gets the CallFlags for the current context                   |
| [System.Contract.CreateStandardAccount](framework/services/Contract/CreateStandardAccount.md) | Calculates corresponding account scripthash for the given public key |
| System.Contract.CreateMultisigAccount                        | Creates the script hash of multi-signed account using public key. |

**Crypto**:

| API                         | Description                                            |
| --------------------------- | ------------------------------------------------------ |
| System.Crypto.CheckSig      | Checks the signature for the current script container  |
| System.Crypto.CheckMultisig | Checks the signatures for the current script container |

**Iterator**:

| API                                                          | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [System.Iterator.Next](framework/services/Iterator/Next.md)  | Advances the iterator to the next element of the collection  |
| [System.Iterator.Values](framework/services/Iterator/Value.md) | Gets the element in the collection at the current position of the iterator |

**Runtime**:

| API                                                          | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| System.Runtime.Platform                                      | Gets the name of the current platform                        |
| [System.Runtime.GetTrigger](framework/services/Runtime/Trigger.md) | Gets the trigger of the execution                            |
| [System.Runtime.GetTime](framework/services/Runtime/Time.md) | Gets the timestamp of the current block                      |
| System.Runtime.GetScriptContainer                            | Gets the current script container                            |
| System.Runtime.GetExecutingScriptHash                        | Gets the script hash of the current context                  |
| System.Runtime.GetCallingScriptHash                          | Gets the script hash of the calling contract                 |
| System.Runtime.GetEntryScriptHash                            | Gets the script hash of the entry context                    |
| [System.Runtime.CheckWitness](framework/services/Runtime/CheckWitness.md) | Determines whether the specified account has witnessed the current transaction |
| System.Runtime.GetInvocationCounter                          | Gets the number of times the current contract has been called during the execution |
| [System.Runtime.Log](framework/services/Runtime/Log.md)      | Writes a log                                                 |
| [System.Runtime.GetNotifications](framework/services/Runtime/GetNotifications.md) | Gets the notifications sent by the specified contract during the execution |
| System.Runtime.GasLeft                                       | Gets the remaining GAS that can be spent in order to complete the execution |
| System.Runtime.BurnGas                                       | Burning GAS to benefit the Neo ecosystem                     |
| System.Runtime.GetNetwork                                    | Gets the current network number                              |
| System.Runtime.GetRandom                                     | Gets random number                                           |

**Storage**:

| API                                                          | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [System.Storage.GetContext](framework/services/Storage/CurrentContext.md) | Gets the storage context for the current contract            |
| System.Storage.GetReadOnlyContext                            | Gets the read-only storage context for the current contract  |
| System.StorageContext.AsReadOnly                             | Converts the specified storage context to a new read-only storage context |
| [System.Storage.Get](framework/services/Storage/Get.md)      | Gets the entry with the specified key from the storage       |
| [System.Storage.Find](framework/services/Storage/Find.md)    | Finds the entries from the storage                           |
| [System.Storage.Put](framework/services/Storage/Put.md)      | Puts a new entry into the storage                            |
| [System.Storage.Delete](framework/services/Storage/Delete.md) | Deletes an entry from the storage                            |

