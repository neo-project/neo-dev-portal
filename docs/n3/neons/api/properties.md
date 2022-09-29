# properties

Gets the properties of a domain such as name, expiration, and admin. 



### Parameters

| Name        | Type   | Description                      | Required |
| ----------- | ------ | -------------------------------- | -------- |
| domain name | String | A domain string, e.g. "edge.neo" | Required |

### Example

Request body

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "properties",
                         [
                             {
                                 "type":"String","value":"edge.neo"
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
        "script": "DAhlZGdlLm5lbxHAHwwKcHJvcGVydGllcwwUGonUjYn4waZtPT0O9IMs686pLxVBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "663480",
        "exception": null,
        "stack": [
            {
                "type": "Map",
                "value": [
                    {
                        "key": {
                            "type": "ByteString",
                            "value": "bmFtZQ=="
                        },
                        "value": {
                            "type": "ByteString",
                            "value": "ZWRnZS5uZW8="
                        }
                    },
                    {
                        "key": {
                            "type": "ByteString",
                            "value": "ZXhwaXJhdGlvbg=="
                        },
                        "value": {
                            "type": "Integer",
                            "value": "1731267713921"
                        }
                    },
                    {
                        "key": {
                            "type": "ByteString",
                            "value": "YWRtaW4="
                        },
                        "value": {
                            "type": "Any"
                        }
                    }
                ]
            }
        ]
    }
}
```

If the domain has expired, an error message is returned instead of the properties.

The expiration is set in milliseconds. If no admin is set, a null is returned.
