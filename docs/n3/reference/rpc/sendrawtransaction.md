# sendrawtransaction Method

Broadcasts transactions over the NEO network.

:::note
You must install the plugin [RpcServer](https://github.com/neo-project/neo-modules/releases) before you can invoke the method.
:::

## Parameter Description

transaction: A Base64-encoded string that has been serialized after the transaction signed in the program.

## Exception

- -500, Inventory verification failed.
- -501, Inventory already exists.
- -502, Memory pool capacity reached.
- -503, Already in pool.
- -505, Policy check failed.
- -506, Invalid transaction script.
- -507, Invalid transaction attribute.
- -508, Invalid signature.
- -509, Invalid inventory size.
- -510, Expired transaction.
- -511, Insufficient funds for fee.

Request body:

```json
{
  "jsonrpc": "2.0",
  "method": "sendrawtransaction",
  "params": ["ALmNfAb4lqIAAAAAAAZREgAAAAAA8S8AAAEKo4e1Ppa3mJpjFDGgVt0fQKBC9gEAKQwFd29ybGQRwAwDcHV0DBR9rbALvBGpMrl7cXVBdSsPOC0EmUFifVtSAUIMQACXF48H1VRmI50ievPfC042rJgj7ZQ3Y4ff27abOpeclh+6KpsL6gWfZTAUyFOwdjkA7CWLM3HsovQeDQlI0oopDCEDzqPi+B8a+TUi0p7eTySh8L7erXKTOR0ziA9Uddl4eMkLQZVEDXg="],
  "id": 1
}
```

Response body in successful cases:

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "hash": "0x13ccdb9f7eda95a24aa5a4841b24fed957fe7f1b944996cbc2e92a4fa4f1fa73"
    }
}
```

Response body in unsuccessful cases:

```json
{
    "jsonrpc": "2.0",
    "id": 1,
    "error": {
        "code": -500,
        "message": "AlreadyExists"
    }
}
```

Response Description:

When result is false, the current transaction has failed to broadcast and an exception occurs. In this example, a confirmed transaction is broadcast, which fails due to the double cost.

The following error codes can be expected:

| Error codes | Message           | Description                                                  |
| ----------- | ----------------- | ------------------------------------------------------------ |
| 500         | AlreadyExists     | Block or transaction already exists and cannot be sent repeatedly. |
|             | OutOfMemory       | The memory pool is full and no more transactions can be sent. |
|             | UnableToVerify    | The block cannot be validated.                               |
|             | Invalid           | The format or parameter is incorrect                         |
|             | Expired           | The block information is expired                             |
|             | InsufficientFunds | Insufficient funds                                           |
|             | PolicyFail        | The behavior is not allowed (such as blacklist address trading) |

