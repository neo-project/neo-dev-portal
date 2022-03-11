---
title: "Clients"
date: 2022-01-18T21:13:48Z
---

There are two types of client to be aware, of and as they are both clients, it can be confusing. You have a wallet client and an NeoFS client.
Interactions with NeoFS will require a NeoFS client, whereas wallet actions will require a wallet client. Note they do not reside in the same package


## Wallet Client

When using a wallet client you will need to import

{{< tabs >}}
{{% tab name="Go" %}}
```go
import (
    "github.com/nspcc-dev/neo-go/pkg/rpc/client"
    "github.com/nspcc-dev/neo-go/pkg/wallet"	
)
```
{{% /tab %}}
{{% tab name="Python" %}}
```python
print("please help by opening a Pull Request and filling in these code snippets!")
```
{{% /tab %}}
{{% tab name="C#" %}}
```c#
Console.WriteLine("please help by opening a Pull Request and filling in these code snippets!");
```
{{% /tab %}}
{{< /tabs >}}

To create a wallet client

{{< tabs >}}
{{% tab name="Go" %}}
```go
ctx := context.Background()
// use endpoint addresses of public RPC nodes, e.g. from https://dora.coz.io/monitor
cli, err := client.New(ctx, "http://seed1t4.neo.org:20332", client.Options{})
if err != nil {
    return fmt.Errorf("can't create client: %w", err)
}
```
{{% /tab %}}
{{% tab name="Python" %}}
```python
print("please help by opening a Pull Request and filling in these code snippets!")
```
{{% /tab %}}
{{% tab name="C#" %}}
```c#
Console.WriteLine("please help by opening a Pull Request and filling in these code snippets!");
```
{{% /tab %}}
{{< /tabs >}}

## NeoFS Client

The client wraps around the raw API requests to NeoFS.
Once you have a client requests to NeoFS can be made so you will need to make this early on from the wallet/private key.

When using the NeoFS client you will import

{{< tabs >}}
{{% tab name="Go" %}}
```go
import (
    "github.com/nspcc-dev/neofs-sdk-go/client"
)
```
{{% /tab %}}
{{% tab name="Python" %}}
```python
print("please help by opening a Pull Request and filling in these code snippets!")
```
{{% /tab %}}
{{% tab name="C#" %}}
```c#
using Neo.FileStorage.API.Client;
using Neo.FileStorage.API.Cryptography;
using System.Security.Cryptography;

```
{{% /tab %}}
{{< /tabs >}}

Creating a client can be done like so

{{< tabs >}}
{{% tab name="Go" %}}
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
{{% /tab %}}
{{% tab name="Python" %}}
```python
print("please help by opening a Pull Request and filling in these code snippets!")
```
{{% /tab %}}
{{% tab name="C#" %}}
```c#
var key = $"{privateKey}".LoadWif();
using var client = new Client(key, testNet);
```
{{% /tab %}}
{{< /tabs >}}

* Private key can be retrieved from a [wallet](/neo-docs/tutorials/wallets) - its type is `*ecdsa.PrivateKey`
* The network is a string, for now you can use 

{{< tabs >}}
{{% tab name="Go" %}}
```go
TESTNET string = "grpcs://st01.testnet.fs.neo.org:8082"
MAINNET = "grpcs://st01.testnet.fs.neo.org:8082"
```
{{% /tab %}}
{{% tab name="Python" %}}
```python
print("please help by opening a Pull Request and filling in these code snippets!")
```
{{% /tab %}}
{{% tab name="C#" %}}
```c#
var testNet = "http://st01.testnet.fs.neo.org:8080";
var mainNet = "https://st01.storage.fs.neo.org:8082";
```
{{% /tab %}}
{{< /tabs >}}


