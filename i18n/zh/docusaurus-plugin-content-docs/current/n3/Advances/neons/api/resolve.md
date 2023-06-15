# resolve

Resolves the record of a second-level domain with the specific type. The maximum resolving depth is 2. 

For example, when you resolve a domain "test.neo" with the IPV4 type:

- if the domain has a IPV4 record, then the record is returned directly 
- if the domain has a canonical name record "alias.neo", which involves a IPV4 record, then the IPV4 record is returned. 



### Parameters

| Name | Type    | Description                                                  | Required |
| :--- | ------- | ------------------------------------------------------------ | -------- |
| name | String  | The second-level domain, e.g. "test.neo"                     | Required |
| type | Integer | Available types are:<br/>1 - IPV4 address record<br/>5 - Canonical name record<br/>16 - Text record<br/>28 - IPV6 address record |          |

### Example

Request body #1

In this example, suppose "test1.neo" has no text record, but it has the cname record "test2.neo"; "test2.neo" has no text record, but it has the cname record "test3.neo"; "test3.neo" has a text record "test3". Then resolving "test1.neo" with the text record will return test3.

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "resolve",
                         [
                             {
                                 "type":"String","value":"test1.neo"
                             },
                             {
                                 "type":"Integer","value":"16"
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
        "script": "IAwJdGVzdDEubmVvEsAfDAdyZXNvbHZlDBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",
        "state": "HALT",
        "gasconsumed": "4410468",
        "exception": null,
        "stack": [
            {
                "type": "ByteString",
                "value": "dGVzdDM="
            }
        ]
    }
}
```

Request body #2

In this example, the depth is greater than 2 and no record is found.

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "resolve",
                         [
                             {
                                 "type":"String","value":"test1.neo"
                             },
                             {
                                 "type":"Integer","value":"16"
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
        "script": "IAwJdGVzdDEubmVvEsAfDAdyZXNvbHZlDBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",
        "state": "FAULT",
        "gasconsumed": "4512384",
        "exception": "An unhandled exception was thrown. Too many redirections.",
        "stack": []
    }
}
```
