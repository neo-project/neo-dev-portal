# Storage Class

Provides a set of methods to insert, query, and delete data in the persistent storage.

Namespace：[Neo.SmartContract.Framework.Services](index.md)

Assembly: Neo.SmartContract.Framework

## Syntax

```cs
public static class Storage
```

## Attributes

| Name                                   | Description |
| ---------------------------------------- | ---------- |
| [CurrentContext](CurrentContext.md) | Returns the current storage context |
| CurrentReadOnlyContext | Returns the read-only context of the current contract storage |

## Methods

| Name                                    | Description                    |
| ---------------------------------------- | -------------------------------- |
| [Delete](Delete.md) | Deletes the value corresponding to the key from the given storage context. This method has multiple overloads. |
| [Get](Get.md) | Gets the byte[] value corresponding to the given key from the given storage context. This method has multiple overloads. |
| [Put](Put.md) | Puts the key-value pair into the given storage context. This method has multiple overloads. |
| [Find](Find.md) | Finds the content in the given storage context. This method has multiple overloads. |

## Constructor

The Storage class is a static class and does not require a constructor.
