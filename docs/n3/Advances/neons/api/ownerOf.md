# ownerOf

Gets the domain owner. If the domain has expired, an error message is returned instead of the owner.



### Parameters

| Name        | Type   | Description                    | Required |
| ----------- | ------ | ------------------------------ | -------- |
| domain name | String | A domain name, e.g. "edge.neo" | Required |

### Example

Request body

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "ownerOf",
                         [
                             {
                                 "type":"ByteArray","value":"ZWRnZS5uZW8="
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
        "script": "DAhlZGdlLm5lbxHAHwwHb3duZXJPZgwUGonUjYn4waZtPT0O9IMs686pLxVBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "589170",
        "exception": null,
        "stack": [
            {
                "type": "ByteString",
                "value": "3f9BbV5KcZwWd8ismxMpFmvXJ+g="
            }
        ]
    }
}
```
