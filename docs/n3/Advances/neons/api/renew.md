# renew

Extends the validity period of the second-level domain names. Anyone can renew other users' domains. The default renewal period is one year, or you can specify the years.

:::note
Renewal for over 10 years from the current date is not allowed.  

Renewal for expired domains is not allowed.
:::

This API returns the new expiration date.



### Parameters

| Name  | Type   | Description                                   | Required |
| :---- | ------ | --------------------------------------------- | -------- |
| name  | String | The second-level domain name, e.g. "test.neo" | Required |
| years | Byte   | Years to renew                                | Required |

### Example

Request body #1

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "renew",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             }
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
        "script": "DA5mbGFtaW5jb21lLm5lbxHAHwwFcmVuZXcMFLbLwLkAmZsTjKCyoF2KU3a3VYNTQWJ9W1I=",
        "state": "HALT",
        "gasconsumed": "801739239",
        "exception": null,
        "stack": [
            {
                "type": "Integer",
                "value": "1655369469752"
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
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "renew",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             },
                             {
                                 "type":"Integer","value":"2"
                             }
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
        "script": "EgwOZmxhbWluY29tZS5uZW8SwB8MBXJlbmV3DBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",
        "state": "HALT",
        "gasconsumed": "1601737499",
        "exception": null,
        "stack": [
            {
                "type": "Integer",
                "value": "1655370669752"
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
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "renew",
                         [
                             {
                                 "type":"String","value":"crosschain1.neo"
                             }
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

Response body #3

```json5
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "script": "DA9jcm9zc2NoYWluMS5uZW8RwB8MBXJlbmV3DBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",
        "state": "FAULT",
        "gasconsumed": "801394985",
        "exception": "An unhandled exception was thrown. The name has expired.",
        "stack": []
    }
}
```
