---
title: "Helpers"
date: 2022-01-18T17:42:08Z
---

There are some functions that don't quite fit into another topic. They will be referenced as `helper.X` in other tutorials

## Retrieving the Owner ID

If you have the public key of a wallet you can determine the `ownerID`

{{< tabs >}}
{{% tab name="Go" %}}
```go
w, err := owner.NEO3WalletFromPublicKey(&publicKey)
if err != nil {
return fmt.Errorf("error retreiving wallet %w", err)
}

id, err := owner.NewIDFromNeo3Wallet(w)
```
{{% /tab %}}
{{% tab name="Python" %}}
```python
print("please help by opening an MR and filling in these code snippets!")
```
{{% /tab %}}
{{% tab name="C#" %}}
```c#
var key = $"{privateKey}".LoadWif();
var ownerid = OwnerID.FromScriptHash(key.PublicKey().PublicKeyToScriptHash());
```
{{% /tab %}}
{{< /tabs >}}

## Convert String to Uin160

Convert a string format Neo (3) address into a `uint160`. This is the format required for making transfers

{{< tabs >}}
{{% tab name="Go" %}}
```go
// StringToUint160 attempts to decode the given NEO address string
// into an Uint160.
const NEO3Prefix byte = 0x35
func StringToUint160(s string) (u util.Uint160, err error) {
    b, err := base58.CheckDecode(s)
    if err != nil {
        return u, err
    }
    if b[0] != NEO3Prefix {
        return u, errors.New("wrong address prefix")
    }
    return util.Uint160DecodeBytesBE(b[1:21])
}
```
{{% /tab %}}
{{% tab name="Python" %}}
```python
print("please help by opening an MR and filling in these code snippets!")
```
{{% /tab %}}
{{% tab name="C#" %}}
```c#
var key = $"{privateKey}".LoadWif();
var uint160 = key.PublicKey().PublicKeyToScriptHash();
```
{{% /tab %}}
{{< /tabs >}}

## Get credentials from path

This returns the private key, which anything can be derived from, with regards to a [wallet](/neo-docs/tutorials/wallets)
{{< tabs >}}
{{% tab name="Go" %}}
```go
// GetCredentialsFromPath retrieves the private key from a wallet file 
func GetCredentialsFromPath(path, address, password string) (*ecdsa.PrivateKey, error) {
w, err := wallet.NewWalletFromFile(path)
if err != nil {
    return nil, fmt.Errorf("can't read the wallet: %walletPath", err)
}

var (
    err  error
)
addr := w.GetChangeAddress() //default address

acc := w.GetAccount(addr)
if acc == nil {
    return nil, fmt.Errorf("invalid wallet address %s: %w", addrStr, err)
}

if err := acc.Decrypt(password, keys.NEP2ScryptParams()); err != nil {
    return nil, errors.New("[decrypt] invalid password - " + err.Error())
}

return &acc.PrivateKey().PrivateKey, nil

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

### Calculate Epochs

This is a very simple estimation of calculating the total amount of epochs at at some point in the future

```go
func CalculateEpochsForTime(currentEpoch uint64, durationInSeconds , msPerEpoch int64) uint64 {
	durationInEpochs := durationInSeconds/(msPerEpoch/1000) //in seconds
	return currentEpoch + uint64(durationInEpochs) // (estimate)
}
```
