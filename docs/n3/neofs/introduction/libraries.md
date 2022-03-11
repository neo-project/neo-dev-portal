---
title: "Libraries"
date: 2022-01-18T18:14:25Z
---

# Code Libraries

The Go SDK is the basis of all the functionality that is available to you as a developer with regards to NeoFS.

the Neo-Go package offers all the functionalities that you will require to interact with the Neo blockchain and wallets

## SDK

The SDK is responsible for providing functionality to interact with NeoFS itself via gRPC requests. You will need the SDK for such things as:

* creating, retrieving, deleting containers
* creating, updating, retrieving, deleting objects
* creating basic and extended ACL rules for containers

##### [find it here](github.com/nspcc-dev/neofs-sdk-go)

## Neo-Go library

General interaction with NeoFS doesn't require Neo-Go however invariably you will need to manage wallets or use cryptographic functions that are required while setting permissions throughout the NeoFS system.

##### [find it here](github.com/nspcc-dev/neo-go)

### Helpers

Sometimes there will be throughout the tutorials the need to reuse functions from elsewhere. These are stored in the Helpers tutorial and will be useful functions to have available within your projects

{{% notice note %}}
See Helpers, whenever you see `helper.` in a code sample
{{% /notice %}}

### Neo FS local environment

You can clone the repository so that you can start NeoFS locally, this may be beneficial for education reasons or perhaps to run integration tests against a local NeoFS

https://github.com/nspcc-dev/neofs-dev-env/

### Resources

- Javascript interaction with NeoFS - https://github.com/CityOfZion/neofs-demo/blob/461466ab5450f4defa75c12e81a095b2b1411e0d/src/neofs.js#L167
- Smart contract interaction in Go - https://github.com/nspcc-dev/neo-go/blob/f9e8dcbed8c9325983403f25a1a37e764523ff62/cli/smartcontract/smart_contract.go#L574
- Transaction documentation in Go - https://pkg.go.dev/github.com/nspcc-dev/neo-go@v0.94.1-pre/pkg/core/transaction
- neo-go low level docs - https://github.com/nspcc-dev/neo-go/tree/master/docs
- gRPC neofs docs - https://github.com/nspcc-dev/neofs-api/tree/master/proto-docs
- storage/placement policy low level docs - https://github.com/nspcc-dev/neofs-spec/blob/master/01-arch/02-policy.md
- ACL low level docs - https://github.com/nspcc-dev/neofs-spec/blob/master/01-arch/07-acl.md
