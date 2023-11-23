# register

Registers a second-level domain. It requires the owner's signature. By default it registers a domain for one year.



### Parameters

| Name  | Type    | Description                                   | Required |
| :---- | ------- | --------------------------------------------- | -------- |
| name  | String  | The second-level domain name, e.g. "test.neo" | Required |
| owner | Address | The owner to register the second-level domain | Required |

### Example

Request body #1

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "register",
                         [
                             {
                                 "type":"String","value":"aa1a3.neo"
                             },{"type":"Hash160","value":"0x713c5666c9710bf6933572cf134a2a8f518f1a30"}
                         ],
    [
      {
        "account": "NQJKSNdTgNX3wno9QPYpwNhfUTg4DnEs6P",
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
        "script": "DBQwGo9RjypKE89yNZP2C3HJZlY8cQwJYWExYTMubmVvEsAfDAhyZWdpc3RlcgwUGonUjYn4waZtPT0O9IMs686pLxVBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "803798261",
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

Request body #2

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "register",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             },
{"type":"Hash160","value":"0x713c5666c9710bf6933572cf134a2a8f518f1a30"}
                         ],
    [
      {
        "account": "NQJKSNdTgNX3wno9QPYpwNhfUTg4DnEs6P",
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
        "script": "DBRjyd6XR7EomMVu9h9fAkJJigfqxQwOZmxhbWluY29tZS5uZW8SwB8MCHJlZ2lzdGVyDBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",
        "state": "HALT",
        "gasconsumed": "801592460",
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

Request body #3

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "register",
                         [
                             {
                                 "type":"String","value":"pay.test"
                             },
{"type":"Hash160","value":"0x713c5666c9710bf6933572cf134a2a8f518f1a30"}
                         ],
    [
      {
        "account": "NQJKSNdTgNX3wno9QPYpwNhfUTg4DnEs6P",
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
        "script": "DBQwGo9RjypKE89yNZP2C3HJZlY8cQwIcGF5LnRlc3QSwB8MCHJlZ2lzdGVyDBQaidSNifjBpm09PQ70gyzrzqkvFUFifVtS",
        "state": "FAULT",
        "gasconsumed": "692382",
        "exception": "An unhandled exception was thrown. The root does not exist.",
        "stack": []
    }
}
```
