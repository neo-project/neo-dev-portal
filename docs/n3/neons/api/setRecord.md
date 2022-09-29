# setRecord

Sets record for the second-level domain or its subdomains. Both the owner and administrator can set record. 

This requires the owner or the administrator's signature, if the domain is expired, it's not allowed to set record.



### Parameters

| Name | Type    | Description                                                  | Required |
| :--- | ------- | ------------------------------------------------------------ | -------- |
| name | String  | The second-level domain, e.g. "test.neo", or subdomains, "pay.test.neo" | Required |
| type | Integer | Available types are:<br/>1 - IPV4 address record<br/>5 - Canonical name record<br/>16 - Text record<br/>28 - IPV6 address record | Required |
| data | String  | The corresponding data                                       | Required |

### Example

##### Example #1 Set IPV4 address record

The following ipv4 addresses will be rejected:

- 0.x.x.x;  10.x.x.x; 127.x.x.x; >=224.x.x.x

- 169.254.x.x

- 172.(16~31).x.x

- 192.168.x.x

- x.x.0.x; x.x.255.x

Request body #1

```json5
curl --request POST \
  --url http://localhost:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "setRecord",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             },{"type":"Integer","value":"1"},{"type":"String","value":"40.122.161.90"}
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
        "script": "DA00MC4xMjIuMTYxLjkwEQwOZmxhbWluY29tZS5uZW8TwB8MCXNldFJlY29yZAwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "3230715",
        "exception": null,
        "stack": [
            {
                "type": "Any"
            }
        ]
    }
}
```

##### Example #2 Set CNAME record

The cname string must meet the following requirements:

- The length is greater than 3, and smaller than 255
- Its format is x.x.x
- Characters are combinations of numbers and Alphabet characters.

Request body #2

```json5
curl --request POST \
  --url http://localhost:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "setRecord",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             },{"type":"Integer","value":"5"},{"type":"String","value":"alias2.neo"}
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
        "script": "DAphbGlhczIubmVvFQwOZmxhbWluY29tZS5uZW8TwB8MCXNldFJlY29yZAwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "2858562",
        "exception": null,
        "stack": [
            {
                "type": "Any"
            }
        ]
    }
}
```

##### Example #3 Set Text record

It is random text string with the length limited to 255. Normally you can set it as N3 address.

Request body #3

```json5
curl --request POST \
  --url http://localhost:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "setRecord",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             },{"type":"Integer","value":"16"},{"type":"String","value":"NZgG83sFer1ciTy2LCjft4A4fiDuWg4XaB"}
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
        "script": "DCJOWmdHODNzRmVyMWNpVHkyTENqZnQ0QTRmaUR1V2c0WGFCIAwOZmxhbWluY29tZS5uZW8TwB8MCXNldFJlY29yZAwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "2694027",
        "exception": null,
        "stack": [
            {
                "type": "Any"
            }
        ]
    }
}
```

##### Example #5 Set IPV6 record

The compressed IPV6 address is supported, such as 2001:1db8:0:: The following IPV6 addresses will be rejected:

- Start with (<0x2000)
- Start with 0x2002 or 0x3ffe
- Start with (>0x3fff)
- 0x2001:(<0x200 or 0xdb8)

Request body #4

```json5
curl --request POST \
  --url http://localhost:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "setRecord",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             },{"type":"Integer","value":"28"},{"type":"String","value":"2001:1db8:3333:4444:5555:6666:7777:8888"}
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
        "script": "DCcyMDAxOjFkYjg6MzMzMzo0NDQ0OjU1NTU6NjY2Njo3Nzc3Ojg4ODgAHAwOZmxhbWluY29tZS5uZW8TwB8MCXNldFJlY29yZAwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "3910838",
        "exception": null,
        "stack": [
            {
                "type": "Any"
            }
        ]
    }
}
```

##### Example #5 Set record for expired domains

Request body #5 

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "setRecord",
                         [
                             {
                                 "type":"String","value":"expired.neo"
                             },{"type":"Integer","value":"1"},{"type":"String","value":"40.122.161.90"}
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

Response body #5

```json5
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "script": "DA00MC4xMjIuMTYxLjkwEQwLZXhwaXJlZC5uZW8TwB8MCXNldFJlY29yZAwUtsvAuQCZmxOMoLKgXYpTdrdVg1NBYn1bUg==",
        "state": "FAULT",
        "gasconsumed": "1830252",
        "exception": "An unhandled exception was thrown. The name has expired.",
        "stack": []
    }
}
```
