# setAdmin

Sets the administrator for a second-level domain. Owners and administrators control the domains and subdomains. A second-level domain owner can specify an administrator to manage domains. Invoking this  API emits the setAdmin event. 

This API requires both the owner and administrator's signatures. If the admin is not specified, the admin record will be cleaned. If the domain has expired, it's not allowed to set admin.



### Parameters

| Name  | Type    | Description                                | Required |
| :---- | ------- | ------------------------------------------ | -------- |
| name  | String  | The second-level domain, e.g. "test.neo"   | Required |
| admin | Address | The administrator that the owner specifies | Required |

### Example

##### Example #1 Set the admin record

Request body #1

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "setAdmin",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             },
                             {
                                 "type":"Hash160","value":"0xc6b7765ce19d382b1af0894c226eee133713fa96"
                             }
                         ],
    [
      {
        "account": "NV1butKWMZSpWhBGU7PyP5Qe81Wq3zDkHP",
        "scopes": "CalledByEntry"
      },
      {
        "account": "NZgG83sFer1ciTy2LCjft4A4fiDuWg4XaB",
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
        "script": "DBSW+hM3E+5uIkyJ8BorOJ3hXHa3xgwOZmxhbWluY29tZS5uZW8SwB8MCHNldEFkbWluDBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",
        "state": "HALT",
        "gasconsumed": "1348018",
        "exception": null,
        "stack": [
            {
                "type": "Any"
            }
        ]
    }
}
```

##### Example #2 Clear the admin record

Request body #2

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "setAdmin",
                         [
                             {
                                 "type":"String","value":"flamincome.neo"
                             },
                             {
                                 "type":"Hash160","value":null
                             }
                         ],
    [
      {
        "account": "NV1butKWMZSpWhBGU7PyP5Qe81Wq3zDkHP",
        "scopes": "CalledByEntry"
      },
        {
              "account": "NZgG83sFer1ciTy2LCjft4A4fiDuWg4XaB",
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
        "script": "CwwOZmxhbWluY29tZS5uZW8SwB8MCHNldEFkbWluDBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",
        "state": "HALT",
        "gasconsumed": "1159492",
        "exception": null,
        "stack": [
            {
                "type": "Any"
            }
        ]
    }
}
```

##### Example #3 Set admin for expired domain

Request body #3 

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x538355b776538a5da0b2a08c139b9900b9c0cbb6", "setAdmin",
                         [
                             {
                                 "type":"String","value":"expired.neo"
                             },
                             {
                                 "type":"Hash160","value":"0xc6b7765ce19d382b1af0894c226eee133713fa96"
                             }
                         ],
    [
      {
        "account": "NV1butKWMZSpWhBGU7PyP5Qe81Wq3zDkHP",
        "scopes": "CalledByEntry"
      },
        {
              "account": "NZgG83sFer1ciTy2LCjft4A4fiDuWg4XaB",
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
        "script": "DBSW+hM3E+5uIkyJ8BorOJ3hXHa3xgwLZXhwaXJlZC5uZW8SwB8MCHNldEFkbWluDBS2y8C5AJmbE4ygsqBdilN2t1WDU0FifVtS",
        "state": "FAULT",
        "gasconsumed": "593841",
        "exception": "An unhandled exception was thrown. The name has expired.",
        "stack": []
    }
}
```
