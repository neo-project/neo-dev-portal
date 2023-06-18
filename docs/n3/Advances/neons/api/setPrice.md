# setPrice

Sets the registration price for each second-level domain length (for Neo Committee only). 

The committee multi-signature address is required to generate a new transaction. 



### Parameters

| Name      | Type       | Description                           | Required |
| :-------- | ---------- | ------------------------------------- | -------- |
| priceList | Long Array | The price list for each domain length | Required |

:::note

- The first value of the array stands for the default price. 
- The price should not be greater than 10000 GAS. 
:::

### Example

In this example, the price for each domain length is set as follows:

- 1 or 2-length domains: unavailable
- 3-length domains: 200 GAS
- 4-length domains: 60 GAS
- 5+ length domains: 8 GAS

Therefore, the domain name "alice.neo" costs 8 GAS, "test.neo" costs 60 GAS, and "pay.neo" costs 200GAS.

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
        "setPrice",
        [
            {
                "type": "Array",
                "value": [
                    {
                        "type": "Integer",
                        "value": "800000000"
                    },
                    {
                        "type": "Integer",
                        "value": "-1"
                    },
                    {
                        "type": "Integer",
                        "value": "-1"
                    },
                    {
                        "type": "Integer",
                        "value": "20000000000"
                    },
                    {
                        "type": "Integer",
                        "value": "6000000000"
                    }
                ]
            }
        ],
        [
            {
                "account": "NbbBtdAbiCdvCaAhdT5dCgrZsAn1ZaUdot",
                "scopes": "Global"
            }
        ]
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
        "script": "AwC8oGUBAAAAAwDIF6gEAAAADw8CAAivLxXAEcAfDAhzZXRQcmljZQwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "418093",
        "exception": null,
        "stack": [
            {
                "type": "Any"
            }
        ]
    }
}
```
