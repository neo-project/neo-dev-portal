---
title: "Tokens"
date: 2022-01-24T11:23:17Z
---

Tokens are requried to act on any [objects](/neo-docs/tutorials/objects) within a [container](/neo-docs/tutorials/containers). Sessions last for limited time and are restricted by permissions. [Session tokens](/neo-docs/tutorials/tokens) use the private key to sign them while [bearer tokens](/examples/tokens) are issued to wallets by a container owner.

## Session Tokens

Session tokens are tokens that are generated from your private key and are required to access or interact with content inside a container. These tokens should only be used by container owners and not distributed to third parties

### Creating a session token

You will need

1. to decide how long the token should last (e.g `const DEFAULT_EXPIRATION = 140000`)
2. a context (generally you can use `context.Background()`) but this depends on your usecase
3. A [NeoFS client](/neo-docs/tutorials/clients)
4. have access to a private key. This is retrieved from a json file using the [helper function](/neo-docs/tutorials/helpers/#get-credentials-from-path) `helper.GetCredentialsFromPath` (`key`)

{{< tabs >}}
{{% tab name="Go" %}}
```go
sessionResponse, err := cli.CreateSession(ctx, DEFAULT_EXPIRATION)
if err != nil {
    return fmt.Errorf("can't create session: %w", err)
}
st := session.NewToken()
id, err := wallet.OwnerIDFromPrivateKey(key)
if err != nil {
    return fmt.Errorf("can't get owner ID: %w", err)
}
st.SetOwnerID(id)
st.SetID(sessionResponse.ID())
st.SetSessionKey(sessionResponse.SessionKey())
//st is your new session token

```
{{% /tab %}}
{{% tab name="Python" %}}
```python
print("please help by opening a Pull Request and filling in these code snippets!")
```
{{% /tab %}}
{{% tab name="C#" %}}
```c#
using var client = new Client(key, host); // key is ECDsa object and host is a string
using var cancellationTokenSource = new CancellationTokenSource();
cancellationTokenSource.CancelAfter(10000);
var sessionToken = await client.CreateSession(ulong.MaxValue, 
	options: new CallOptions(), 
	context: cancellationTokenSource.Token); // options and context aren't mandatory
```
{{% /tab %}}
{{< /tabs >}}

Session tokens are all that is required for the owner, or the account with the private key that created the container, to access the container. The owner is the most privileged account with regards to a container so a session key should never be shared.

## Bearer Tokens

Bearer tokens allow the account that owns the container, to issue limited time access tokens to other accounts. Bearer tokens require rules to be applied to grant access and to deny access to anyone else. Read more about [EACL Tables](/neo-docs/tutorials/acl-permissions) to get a better understanding of what they are

Once an account has a bearer token it can pass the token along with any request to the container as it does a Session Token.

You will need

1. A [NeoFS client](/neo-docs/tutorials/clients)
2. A context (`context.Background` is fine in most cicumstances)
3. When you want the bearer token to expire, in epochs. See helpers for a basic estimation
4. The ownerID of the intended account (see helpers) (`tokenReceiverOwnerID`)
5. An [EACL table](/neo-docs/tutorials/ecl-permissions)
6. The container owner's private key (`containerOwnerPrivateKey`)

```go
	info, err := GetNetworkInfo(ctx, cli) //info retrieves latest block information from the blockchain
	lt := new(acl.TokenLifetime)
	lt.SetExp(helper.CalculateEpochsForTime(info.CurrentEpoch(), duration, info.MsPerBlock())) //set the token lifetime.
	//bt.SetLifetime(lt.GetExp(), lt.GetNbf(), lt.GetIat())
	btoken := new(token.BearerToken)
	btoken.SetOwner(tokenReceiverOwnerID)
	//btoken.SetLifetime(expiry, 10, 1) // exp, nbf, iat arguments like in JWT
	btoken.SetLifetime(lt.GetExp(), lt.GetNbf(), lt.GetIat()) // exp, nbf, iat arguments like in JWT
	btoken.SetEACLTable(eaclTable)

	err = btoken.SignToken(containerOwnerPrivateKey)
	if err != nil {
		return []byte{}, err
	}

	// Marshal and provide it to bearer token user
	jsonData, err := btoken.MarshalJSON()
	return jsonData, er
```

You can then send this to the intended recipient who can then use it

### Using a Bearer Token

To use a bearer token first you must convert it back into the `BearerToken` type.

```go
	btoken := new(token.BearerToken)
	err := btoken.UnmarshalJSON(jsonData)
	if err != nil {
		return btoken, err
	}
	//this is your bearer token you can now use
	return btoken, err
```

See Objects for further examples, but you can now attach Bearer Tokens to requests to NeoFS. 

The recipient of the Bearer Token now provides both the bearer token and a generated session token as required. 
```go
object, err := cli.GetObject(ctx, getParams, client.WithBearer(btoken), client.WithSession(sessionToken))
```

In the examples on the objects page, there is no bearer token provided. This is because the client functions are expecting a variable length input, so just providing a Session Token is fine, you can also provide `nil` as the Bearer Token if you prefer 
