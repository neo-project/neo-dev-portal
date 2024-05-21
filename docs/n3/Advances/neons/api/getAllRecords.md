# getAllRecords

Gets all records of the second-level domain and its subdomains. 



### Parameters

| Name | Type   | Description                                   | Required |
| :--- | ------ | --------------------------------------------- | -------- |
| name | String | The second-level domain name, e.g. "test.neo" | Required |

### Example

Request body #1

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getAllRecords",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             }
                         ],
    []
],
  "id": 1
}
'
```

Response body #1

```json5
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "script": "DA5mbGFtaW5jb21lLm5lbxHAHwwNZ2V0QWxsUmVjb3JkcwwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "725394",
        "exception": null,
        "stack": [
            {
                "type": "InteropInterface",
                "iterator": [
                    {
                        "type": "Array",
                        "value": [
                            {
                                "type": "ByteString",
                                "value": "c3ViMS5mbGFtaW5jb21lLm5lbw=="
                            },
                            {
                                "type": "Integer",
                                "value": "1"
                            },
                            {
                                "type": "ByteString",
                                "value": "MTY1LjIzLjM0LjU0"
                            }
                        ]
                    },
                    {
                        "type": "Array",
                        "value": [
                            {
                                "type": "ByteString",
                                "value": "ZmxhbWluY29tZS5uZW8="
                            },
                            {
                                "type": "Integer",
                                "value": "5"
                            },
                            {
                                "type": "ByteString",
                                "value": "YWxpYXMubmVv"
                            }
                        ]
                    },
                    {
                        "type": "Array",
                        "value": [
                            {
                                "type": "ByteString",
                                "value": "ZmxhbWluY29tZS5uZW8="
                            },
                            {
                                "type": "Integer",
                                "value": "16"
                            },
                            {
                                "type": "ByteString",
                                "value": "TlpIZjFOSnZ6MXR2RUxHTFdaamhwYjNOcVpKRkZVWXB4VA=="
                            }
                        ]
                    },
                    {
                        "type": "Array",
                        "value": [
                            {
                                "type": "ByteString",
                                "value": "ZmxhbWluY29tZS5uZW8="
                            },
                            {
                                "type": "Integer",
                                "value": "28"
                            },
                            {
                                "type": "ByteString",
                                "value": "MjAwMToxZGI4OjA6Og=="
                            }
                        ]
                    }
                ],
                "truncated": false
            }
        ]
    }
}
```

Request body #2

Gets all records of the expired domain:

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getAllRecords",
                         [
                             {
                                 "type":"String","value":"expired.neo"
                             }
                         ],
    []
],
  "id": 1
}
'
```

Response body #2

```json5
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "script": "DAtleHBpcmVkLm5lbxHAHwwNZ2V0QWxsUmVjb3JkcwwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",
        "state": "FAULT",
        "gasconsumed": "622077",
        "exception": "An unhandled exception was thrown. The name has expired.",
        "stack": []
    }
}
```
