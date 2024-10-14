---
title: "Clients"
date: 2022-01-18T21:13:48Z 
---

# Clients

There are two types of client to be aware of and as they are both clients it can get confusing. You have a wallet client and an NeoFS client.
Interactions with NeoFS will require a NeoFS client, whereas wallet actions will require a wallet client. Note they do not reside in the same package

## Wallet Client

When using a wallet client you will need to import

```go
import (
    "github.com/nspcc-dev/neo-go/pkg/rpc/client"
    "github.com/nspcc-dev/neo-go/pkg/wallet"	
)
```

To create a wallet client

```go
ctx := context.Background()
// use endpoint addresses of public RPC nodes, e.g. from https://dora.coz.io/monitor
cli, err := client.New(ctx, "http://seed1t4.neo.org:20332", client.Options{})
if err != nil {
    return fmt.Errorf("can't create client: %w", err)
}
```

## NeoFS Client

The client wraps around the raw API requests to NeoFS.
Once you have a client requests to NeoFS can be made so you will need to make this early on from the wallet/private key.

When using the NeoFS client you will import

```go
import (
    "github.com/nspcc-dev/neofs-sdk-go/client"
)
```

Creating a client can be done like so

```go
cli, err := client.New(
  // provide private key associated with request owner
  client.WithDefaultPrivateKey(privateKey),
  // find endpoints in https://testcdn.fs.neo.org/doc/integrations/endpoints/
  client.WithURIAddress(TESTNET, nil),
  // check client errors in go compatible way
  client.WithNeoFSErrorParsing(),
)
if err != nil {
	return fmt.Errorf("can't create client: %w", err)
}
```

* Private key can be retrieved from a [wallet](wallets.md) - its type is `*ecdsa.PrivateKey`
* The network is a string, for now you can use 

```go
TESTNET string = "grpcs://st01.testnet.fs.neo.org:8082"
MAINNET = "grpcs://st01.testnet.fs.neo.org:8082"
```
