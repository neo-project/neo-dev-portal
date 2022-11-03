# roots

Returns all the top-level domains.



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
  "params": [ "0x152fa9ceeb2c83f40e3d3d6da6c1f8898dd4891a", "roots",
                         [],
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
		"script": "wh8MBXJvb3RzDBQaidSNifjBpm09PQ70gyzrzqkvFUFifVtS",
		"state": "HALT",
		"gasconsumed": "228888",
		"exception": null,
		"stack": [
			{
				"type": "InteropInterface",
				"iterator": [
					{
						"type": "ByteString",
						"value": "bmVv"
					}
				],
				"truncated": false
			}
		]
	}
}
```
