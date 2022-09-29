# balanceOf

Gets the number of second-level domain names of the given address. 

If the domain has expired, it counts still.



### Parameters

| Name  | Type    | Description                      | Required |
| ----- | ------- | -------------------------------- | -------- |
| owner | Address | The address of the domain owner. | Required |

### Example

Request body

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "balanceOf",
                         [
                             {
                                 "type":"Hash160","value":"0x713c5666c9710bf6933572cf134a2a8f518f1a30"
                             }
                         ],
    [
      {
        "account": "NMzaUBM56iumJ8pHfjjCuKsAepKxENkUqN",
        "scopes": "CalledByEntry"
      }
    ]
],
  "id": 1
}
'
```

Response body

```json5
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "script": "DBQwGo9RjypKE89yNZP2C3HJZlY8cRHAHwwJYmFsYW5jZU9mDBQaidSNifjBpm09PQ70gyzrzqkvFUFifVtS",
        "state": "HALT",
        "gasconsumed": "265986",
        "exception": null,
        "stack": [
            {
                "type": "Integer",
                "value": "4"
            }
        ]
    }
}
```
