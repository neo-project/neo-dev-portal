# isAvailable

Check if the second-level domain is available. The expired domain names can be re-registered.  If the root does not exist, an error message is thrown.



### Parameters

| Name | Type   | Description                              | Required |
| :--- | ------ | ---------------------------------------- | -------- |
| name | String | The second-level domain, e.g. "test.neo" | Required |

### Example

Request body #1

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "isAvailable",
                         [{"type":"String","value":"t5.neo"}]
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
        "script": "DAZ0NS5uZW8RwB8MC2lzQXZhaWxhYmxlDBQaidSNifjBpm09PQ70gyzrzqkvFUFifVtS",
        "state": "HALT",
        "gasconsumed": "875181",
        "exception": null,
        "stack": [
            {
                "type": "Boolean",
                "value": false
            }
        ]
    }
}
```

Request body #2

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "isAvailable",
                         [{"type":"String","value":"test.neo"}]
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
        "script": "DAh0ZXN0Lm5lbxHAHwwLaXNBdmFpbGFibGUMFBqJ1I2J+MGmbT09DvSDLOvOqS8VQWJ9W1I=",
        "state": "HALT",
        "gasconsumed": "1228476",
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

Request body #3

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "isAvailable",
                         [{"type":"String","value":"neo.test"}]
],
  "id": 1
}
'
```

Response body #3

```json5
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "script": "DAhuZW8udGVzdBHAHwwLaXNBdmFpbGFibGUMFBqJ1I2J+MGmbT09DvSDLOvOqS8VQWJ9W1I=",
        "state": "FAULT",
        "gasconsumed": "629298",
        "exception": "An unhandled exception was thrown. The root does not exist.",
        "stack": []
    }
}
```
