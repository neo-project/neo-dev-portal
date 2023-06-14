# getPrice

Gets the register price for each second-level domain length. 



### Parameters

| Name   | Type    | Description                    | Required |
| :----- | ------- | ------------------------------ | -------- |
| length | Integer | The second-level domain length | Required |

### Example

Request body

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
    "jsonrpc": "2.0",
    "method": "invokefunction",
    "params": [
        "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a",
        "getPrice",
        [
            {
                "type": "Integer",
                "value": "3"
            }
        ],
        []
    ],
    "id": 1
}'
```

Response body

```json5
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "script": "ExHAHwwIZ2V0UHJpY2UMFBqJ1I2J+MGmbT09DvSDLOvOqS8VQWJ9W1I=",
        "state": "HALT",
        "gasconsumed": "375489",
        "exception": null,
        "stack": [
            {
                "type": "Integer",
                "value": "20000000000"
            }
        ]
    }
}
```
