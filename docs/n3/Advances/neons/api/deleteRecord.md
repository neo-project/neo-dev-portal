# deleteRecord

Deletes the record of a second-level domain or its subdomains with specific type. 



### Parameters

| Name | Type    | Description                                                  | Required |
| :--- | ------- | ------------------------------------------------------------ | -------- |
| name | String  | The second-level domain name,  "test.neo"                    | Required |
| type | Integer | Available types are:<br/>1 - IPV4 address record<br/>5 - Canonical name record<br/>16 - Text record<br/>28 - IPV6 address record |          |

### Example

Request body #1

```json5
curl --request POST \
  --url http://localhost:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "deleteRecord",
                         [
                             {
                                 "type":"String","value":"sub1.flamincome.neo"
                             },{"type":"Integer","value":"1"}
                         ],
    [
      {
        "account": "NV1butKWMZSpWhBGU7PyP5Qe81Wq3zDkHP",
        "scopes": "CalledByEntry"
      }
    ]
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
        "script": "EQwTc3ViMS5mbGFtaW5jb21lLm5lbxLAHwwMZGVsZXRlUmVjb3JkDBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",
        "state": "HALT",
        "gasconsumed": "1611960",
        "exception": null,
        "stack": [
            {
                "type": "Any"
            }
        ]
    }
}
```

Request body #2

Deletes all records of the expired domain:

```json5
curl --request POST \
  --url http://localhost:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "deleteRecord",
                         [
                             {
                                 "type":"String","value":"expired.neo"
                             },{"type":"Integer","value":"1"}
                         ],
    [
      {
        "account": "NV1butKWMZSpWhBGU7PyP5Qe81Wq3zDkHP",
        "scopes": "CalledByEntry"
      }
    ]
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
