# addRoot

Registers the top-level domain, which can be added by the Neo Committee only. You need to input the committee multi-signature address signature to generate a new transaction.

:::note
Currently only ".neo" is supported. 
:::


### Parameters

| Name | Type   | Description                | Required |
| :--- | ------ | -------------------------- | -------- |
| root | String | The top-level domain name. | Required |

### Example

Request body

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "addRoot",
                         [{"type":"String","value":"test"}],
    [
      {
        "account": "Nfm8y1ZQMmiMwBQhzYqS9cfu3sX4ESAT5g",
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
        "script": "DAR0ZXN0EcAfDAdhZGRSb290DBQaidSNifjBpm09PQ70gyzrzqkvFUFifVtS",
        "state": "HALT",
        "gasconsumed": "524180",
        "exception": null,
        "stack": [
            {
                "type": "Any"
            }
        ]
    }
}
```
