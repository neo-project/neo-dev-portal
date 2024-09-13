---
title: "Overview"
date: 2022-01-18T21:13:48Z
---

This chapter outlines the [concepts](/docs/n3/neofs/introduction/concepts) and top level points required to understand and enjoy building on neo & NeoFS

### Starting out

The topics here are primarily in Go, however where we have code snippets for other languages we will endeavour to add them.

You will need:

1. Go language installed and running
2. [NeoFS SDK - Go](https://github.com/nspcc-dev/neofs-sdk-go)
3. [Neo Go library](https://github.com/nspcc-dev/neo-go)
4. Read the [wallets](/docs/n3/neofs/topics/wallets/) page as it will outline the basis of working with Neo and NeoFS - a wallet. 
5. Neo/Gas in your wallet. You can get these from the [testnet faucet here](https://neowish.ngd.network/#/)
6. These libraries will assume you are using the testnet throughout. All urls referenced can be retrieved from NeoFS or from Dora the explorer.

These tutorials are primarily in Go, however where we have code snippets for other languages we will endeavour to add them.

:::note
This documentation is not a tutorial, it is a reference to using the SDK, however in general when writing an application you will require:
:::

1. a private key
2. with this, you can instantiate a wallet and an account held by the wallet.
3. the wallet allows you to instantiate a NeoFS client.
4. Once you have a client, you can interact with NeoFS
5. To do so however, you will need a session token (or a bearer token but start with a session token). The session token contains a signature that validates your wallet against NeoFS.
6. You might create a container, put an object in a container, or delete an object.

### Libraries

[Libraries](/docs/n3/neofs/introduction/libraries) covers the packages and libraries that are required to interact with Neo and NeoFS in Go

### References

* [neofs-spec](https://nspcc.ru/upload/neofs-spec-latest.pdf#13)

### With Thanks To

* [NSPCC team](https://github.com/nspcc-dev/) - team behind NeoFS, the [neo-go-sdk](https://github.com/nspcc-dev/neofs-sdk-go) and the [neo-go](github.com/nspcc-dev/neo-go) packages
