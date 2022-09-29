# transfer

Transfers a domain from the owner's address to another address. The signature of the owner is required. The expired domains cannot be transferred. 

After transfered, all subdomains and records are reserved, and the admin is re-set as null. 



### Parameters

| Name   | Type    | Description                              | Required |
| :----- | ------- | ---------------------------------------- | -------- |
| to     | Address | The target address to transfer to        | Required |
| domain | String  | The domain to be transferred             | Required |
| data   | objec   | The data information used after transfer | Required |

### Example

Request body

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "transfer",
                         [ {"type":"Hash160","value":"0x713c5666c9710bf6933572cf134a2a8f518f1a30"},
                             {
                                 "type":"String","value":"t1.neo"
                             },
                            {"type":"String","value":"test"}
                         ],
    [
      {
        "account": "NQJKSNdTgNX3wno9QPYpwNhfUTg4DnEs6P",
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
        "script": "DAR0ZXN0DAZ0MS5uZW8MFDAaj1GPKkoTz3I1k/YLcclmVjxxE8AfDAh0cmFuc2ZlcgwUGonUjYn4waZtPT0O9IMs686pLxVBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "1075683",
        "exception": null,
        "stack": [
            {
                "type": "Boolean",
                "value": true
            }
        ]
    }
}
```
