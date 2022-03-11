---
title: "Wallets"
date: 2022-01-18T18:57:09Z
---

Almost everything you may want to do with NeoFS will require access to a wallet. Here are a few handy ways to get a wallet


## Imports

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

#### Retrieve from a NEP-6 file (json format)

{{< tabs >}}
{{% tab name="Go" %}}
```go
w, err := wallet.NewWalletFromFile(path)
if err != nil {
  return fmt.Errorf("can't read the wallet: %w", err)
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

## Create a new wallet

This wallet has no password but is the simplest form of wallet that you can generate

{{< tabs >}}
{{% tab name="Go" %}}
```go
acc, err := wallet.NewAccount() //generates a new private key
if err != nil {
    return &wallet.Wallet{}, err
}
w, err := wallet.NewWallet(path)
if err != nil {
	return fmt.Errorf("can't create the wallet: %w", err)
}
w.AddAccount(acc)
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

#### A slighty more secure wallet... with a password 

{{< tabs >}}
{{% tab name="Go" %}}
```go
w, err := wallet.NewWallet(path)
w.CreateAccount(name, password)
if err != nil {
    return fmt.Errorf("can't create the wallet: %w", err)
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

### Retrieving the private key from a wallet

Sometimes for specific actions you will need the private key of the wallet. If you have the password you can extract the private key

Notice this `decrypts` the wallet. At this point the wallet is considered "unlocked". Sometimes you may find you are performing an action on a walelt and the error is it is locked.
The result of decrypting is unlocking the wallet.

{{< tabs >}}
{{% tab name="Go" %}}
```go
addr := w.GetChangeAddress() //get the default wallet
acc := w.GetAccount(addr)
if acc == nil {
  return nil, fmt.Errorf("invalid wallet address %s: %w", addrStr, err)
}

if err := acc.Decrypt(password, keys.NEP2ScryptParams()); err != nil {
    return nil, errors.New("[decrypt] invalid password - " + err.Error())
}
privateKey := &acc.PrivateKey().PrivateKey
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

## Retrieving wallet balances

Often you will want to know the balances on a wallet. There is a potential minor confusion at this stage.
Neo N3 wallets store NEP-17 coins. Both Neo and Gas are NEP 17 currencies, however any currency you or someone else may make could also be a NEP-17 currency. There are other standards such as NEP-11 and the difference I will leave to you to read about.

However, NeoFS has a smart contract in which you need to transfer Gas to, so that you can pay for NeoFS storage space. This balance won't show up in your wallet balance.

To retrieve you wallet's NEP-17 balances you will need to create a wallet client. 

You will need

1. A wallet address you want to get the balances of 

{{< tabs >}}
{{% tab name="Go" %}}
```go
cli, err := client.New(ctx, "http://seed1t4.neo.org:20332", client.Options{})
if err != nil {
    return fmt.Errorf("can't create the client: %w", err)
}
err = cli.Init()
if err != nil {
    return fmt.Errorf("can't init the client: %w", err)
}
recipient, err := helper.StringToUint160(walletAddress)
if err != nil {
    return fmt.Errorf("can't convert the wallet address: %w", err)
}
balances, err := cli.GetNEP17Balances(recipient)
if err != nil {
return fmt.Errorf("can't retrieve the balances: %w", err)
}
fmt.Printf("balances %+v\r\n", balances)
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

### Transferring NEP-17 tokens

A major part of blockchain technology is to be able to transfer tokens to other wallets (including sending GAS to the NeoFS smart contract).


You will need

1. An unlocked wallet `myWallet`
2. A wallet to send Nep17 to `walletTo`
3. The amount you would like to send (as an int64 - no decimals in blockchain remember!)
4. The token you would like to send. To retrieve the token, you need the token name to get the contract hash

{{< tabs >}}
{{% tab name="Go" %}}
```go
gasToken, err := cli.GetNativeContractHash(nativenames.Gas)
if err != nil {
  log.Fatal(err)
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

then

{{< tabs >}}
{{% tab name="Go" %}}
```go
ctx := context.Background()
// use endpoint addresses of public RPC nodes, e.g. from https://dora.coz.io/monitor
cli, err := client.New(ctx, "http://seed1t4.neo.org:20332", client.Options{})
if err != nil {
  return util.Uint256{}, err
}
err = cli.Init()
if err != nil {
  return util.Uint256{}, err
}
recipient, err := helper.StringToUint160(walletTo)
if err != nil {
  return util.Uint256{}, err
}
txHash, err := cli.TransferNEP17(myWallet, recipient, gasToken, amount, 0, nil, nil)
le := txHash.StringLE()
return txHash, err
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

{{% notice note %}}
the txHash is reversed in its uint256 state. You need to reverse it so that it matches the txHashes you would find in a blockchain explorer for instance, hence the `le := txHash.StringLE()`
{{% /notice %}}

## NeoFS Balance
However this balance as I mentioned, does not include your NeoFS balance. For that you need a NeoFS client

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
```
{{% /tab %}}
{{< /tabs >}}

Once you have this, you can now retrieve your NeoFS balance

You will need

1. Private key
2. [NeoFS client](/neo-docs/tutorials/clients) (`cli`)

{{< tabs >}}
{{% tab name="Go" %}}
```go
w, err := owner.NEO3WalletFromPublicKey(&key.PublicKey)
if err != nil {
    fmt.Errorf("couldn't create wallet from public key: %w", err)
}
id := owner.NewIDFromNeo3Wallet(w)
ctx := context.Background()
neoFSBalance, err := cli.GetBalance(ctx, id)
fmt.Printf("neofs balance %+v\r\n", neoFSBalance)
```
{{% /tab %}}
{{% tab name="Python" %}}
```python
print("please help by opening a Pull Request and filling in these code snippets!")
```
{{% /tab %}}
{{% tab name="C#" %}}
```c#
var key = $"{aprivateKey}".LoadWif();
using var client = new Client(key, host);
var balance = await client.GetBalance();
```
{{% /tab %}}
{{< /tabs >}}
