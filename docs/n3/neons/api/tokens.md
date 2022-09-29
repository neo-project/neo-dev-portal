# tokens

Gets all second-level domain names including expired ones. 



### Parameters

N/A 

### Example

Request body

```json5
curl --request POST \
  --url http://seed1t4.neo.org:20332/ \
  --header 'Content-Type: application/json' \
  --data '{
  "jsonrpc": "2.0",
  "method": "invokefunction",
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "tokens",[],
    []
],
  "id": 1
}
'
```

Response body

```json5
{
    "jsonrpc": "2.0",
    "id": 1,
    "result": {
        "script": "wh8MBnRva2VucwwUGonUjYn4waZtPT0O9IMs686pLxVBYn1bUg==",
        "state": "HALT",
        "gasconsumed": "228888",
        "exception": null,
        "stack": [
            {
                "type": "InteropInterface",
                "iterator": [
                    {
                        "type": "ByteString",
                        "value": "Y3Jvc3NjaGFpbi5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "ZGlkLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "d2FuZy5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "dDMubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "ZnVuLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "YXZlLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "ZmxhbWluZ28ubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "a2trLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "cmV0Lm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "ZHlsYW4ubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "ZGVkZWJ1Zy5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "b2tyLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "Y2xvdWQubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "b2tqLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "aGhoLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "d3FlZWFzd3d3d3d4eHh3d2FzZGFzZGFzYXNkYXNkc2Fkc2Fhc3NhZHNhZHNhc2FzYWFzYXNkc2FkYXMubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "bm5zLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "bmVvLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "ZWRnZS5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "dDQubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "dGVzbGEubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "dGVzdDIubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "b25lZ2F0ZS5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "c3cubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "YXBwLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "MTIubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "YXByaWwubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "bXkubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "YS5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "d210Lm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "MTIzNC5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "amQubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "amFuZS5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "c3d4Lm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "cXdlLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "YWFuZy5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "YXNkc2RhZC5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "b2thLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "YWxpYmFiYS5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "c2FtLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "b2submVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "ZmxhbWluY29tZS5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "dDUubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "dnVlLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "dDIubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "ZXJyci5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "dDEubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "bm55by5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "d293Lm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "ZGVhZHBvb2wubmVv"
                    },
                    {
                        "type": "ByteString",
                        "value": "cHJpY2VzLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "bmdkLm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "amVzc2ljYS5uZW8="
                    },
                    {
                        "type": "ByteString",
                        "value": "bm50Lm5lbw=="
                    },
                    {
                        "type": "ByteString",
                        "value": "bWF5Lm5lbw=="
                    }
                ],
                "truncated": false
            }
        ]
    }
}
```
