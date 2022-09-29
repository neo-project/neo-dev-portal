# getRecord

Gets the record of a second-level domain or its subdomains with the specific type. 



### Parameters

| Name | Type   | Description                                                  | Required |
| :--- | ------ | ------------------------------------------------------------ | -------- |
| name | String | The second-level domain name, e.g. "test.neo", or the subdomain "pay.test.neo" | Required |
| type | Byte   | Available types are:<br/>1 - IPV4 address record<br/>5 - Canonical name record<br/>16 - Text record<br/>28 - IPV6 address record | Required |

### Example

##### Example #1 Get the IPV4 address record

Request body #1

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getRecord",
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
        "script": "EQwTc3ViMS5mbGFtaW5jb21lLm5lbxLAHwwJZ2V0UmVjb3JkDBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",
        "state": "HALT",
        "gasconsumed": "1756494",
        "exception": null,
        "stack": [
            {
                "type": "ByteString",
                "value": "MTY1LjIzLjM0LjU0"
            }
        ]
    }
}
```

##### Example #2 Get the Canonical name record

Request body #2

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getRecord",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             },{"type":"Integer","value":"5"}
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
        "script": "FQwOZmxhbWluY29tZS5uZW8SwB8MCWdldFJlY29yZAwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "1654128",
        "exception": null,
        "stack": [
            {
                "type": "ByteString",
                "value": "YWxpYXMubmVv"
            }
        ]
    }
}
```

##### Example #3 Get the Text record

Request body #3

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getRecord",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             },{"type":"Integer","value":"16"}
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
        "script": "IAwOZmxhbWluY29tZS5uZW8SwB8MCWdldFJlY29yZAwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "1654128",
        "exception": null,
        "stack": [
            {
                "type": "ByteString",
                "value": "TlFKS1NOZFRnTlgzd25vOVFQWXB3TmhmVVRnNERuRXM2UA=="
            }
        ]
    }
}
```

##### Example #4 Get the IPV6 record

Request body #4

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getRecord",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             },{"type":"Integer","value":"28"}
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

Response body #4

```json5
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "script": "ABwMDmZsYW1pbmNvbWUubmVvEsAfDAlnZXRSZWNvcmQMFLbLwLkAmZsTjKCyoF2KU3a3VYNTQWJ9W1I=",
        "state": "HALT",
        "gasconsumed": "1654128",
        "exception": null,
        "stack": [
            {
                "type": "ByteString",
                "value": "MjAwMToxZGI4OjA6Og=="
            }
        ]
    }
}
```

##### Example #5 Get the record of expired domains

Request body #5 

```json5
curl --request POST \
  --url http://localhost:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "getRecord",
                         [
                             {
                                 "type":"String","value":"expired.neo"
                             },{"type":"Integer","value":"16"}
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

Response body #5

```json5
{
	"jsonrpc": "2.0",
	"id": 1,
	"result": {
		"script": "IAwLZXhwaXJlZC5uZW8SwB8MCWdldFJlY29yZAwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",
		"state": "FAULT",
		"gasconsumed": "1083138",
		"exception": "An unhandled exception was thrown. The name has expired.",
		"stack": []
	}
}
```
