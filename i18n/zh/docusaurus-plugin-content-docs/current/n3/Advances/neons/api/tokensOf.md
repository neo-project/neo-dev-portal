# tokensOf

Gets all second-level domains owned by the given address including expired ones. 



### Parameters

| Name  | Type    | Description          | Required |
| :---- | ------- | -------------------- | -------- |
| owner | Address | The owner of domains | Required |

### Example

Request body

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "tokensOf",
                         [
                             {
                                 "type":"Hash160","value":"0x713c5666c9710bf6933572cf134a2a8f518f1a30"
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
        "script": "DBQwGo9RjypKE89yNZP2C3HJZlY8cRHAHwwIdG9rZW5zT2YMFBqJ1I2J+MGmbT09DvSDLOvOqS8VQWJ9W1I=",
        "state": "HALT",
        "gasconsumed": "241395",
        "exception": null,
        "stack": [
            {
                "type": "InteropInterface",
                "iterator": [
                    {
                        "type": "ByteString",
                        "value": "MTIzNC5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "amFuZS5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "b2submVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "dDEubmVv"
                    }
                ],
                "truncated": false
            }
        ]
    }
}
```
