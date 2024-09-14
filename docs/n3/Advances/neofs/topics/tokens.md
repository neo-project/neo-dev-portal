# Tokens

Tokens are required to act on any [objects](/docs/n3/neofs/topics/objects) within a [container](/docs/n3/neofs/topics/containers). Sessions last for limited time and are restricted by permissions. [Session tokens](/docs/n3/neofs/topics/tokens) use the private key to sign them while [bearer tokens](/examples/tokens) are issued to wallets by a container owner.

## Session Tokens

Session tokens are tokens that are generated from your private key and are required to access or interact with content inside a container. These tokens should only be used by container owners and not distributed to third parties

### Creating a session token

You will need

1. to decide how long the token should last (e.g `const DEFAULT_EXPIRATION = 140000`)
2. a context (generally you can use `context.Background()`) but this depends on your usecase
3. A [NeoFS client](/docs/n3/neofs/topics/clients)
4. have access to a private key. This is retrieved from a json file using the [helper function](/docs/n3/neofs/topics/helpers/#get-credentials-from-path) `helper.GetCredentialsFromPath` (`key`)

### Libraries

```go
	"github.com/nspcc-dev/neofs-sdk-go/session"
	"github.com/nspcc-dev/neofs-sdk-go/token"
```

```go
var prmSessionCreate client.PrmSessionCreate

prmSessionCreate.SetExp(expiry)

res, err := cli.SessionCreate(ctx, prmSessionCreate)
if err != nil {
    return &session.Token{}, err
}
addr := address.NewAddress()
addr.SetContainerID(&containerID)


cntContext := session.NewContainerContext()
cntContext.IsForDelete()
cntContext.ApplyTo(&containerID)

objectCtx := session.NewObjectContext()
objectCtx.ForPut()
objectCtx.ApplyTo(addr)

stoken := session.NewToken()
stoken.SetSessionKey(res.PublicKey())
stoken.SetID(res.ID())
stoken.SetExp(expiry)
stoken.SetOwnerID(owner)
stoken.SetContext(cntContext)

err = stoken.Sign(key)
```

Session tokens are all that is required for the owner, or the account with the private key that created the container, to access the container. The owner is the most privileged account with regards to a container so a session key should never be shared.

## Bearer Tokens

Bearer tokens allow the account that owns the container, to issue limited time access tokens to other accounts. Bearer tokens require rules to be applied to grant access and to deny access to anyone else. Read more about [EACL Tables](/docs/n3/neofs/topics/acl-permissions) to get a better understanding of what they are

Once an account has a bearer token it can pass the token along with any request to the container as it does a Session Token.

You will need

1. A [NeoFS client](/docs/n3/neofs/topics/clients)
2. A context (`context.Background` is fine in most cicumstances)
3. When you want the bearer token to expire, in epochs. See helpers for a basic estimation
4. The ownerID of the intended account (see helpers) (`tokenReceiverOwnerID`)
5. An [EACL table](/docs/n3/neofs/topics/ecl-permissions)
6. The container owner's private key (`containerOwnerPrivateKey`)

```go
btoken :=  token.NewBearerToken()
btoken.SetLifetime(expire, 0, 0)
btoken.SetOwner(tokenReceiver)
btoken.SetEACLTable(eaclTable)
err := btoken.SignToken(containerOwnerKey)
return btoken, err

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
objWriter, err := cli.ObjectPutInit(ctx, client.PrmObjectPutInit{})
if sessionToken != nil {
    objWriter.WithinSession(*sessionToken)
}
if bearerToken != nil {
    objWriter.WithBearerToken(*bearerToken)
}
```

In the examples on the objects page, there is no bearer token provided. This is because the client functions are expecting a variable length input, so just providing a Session Token is fine, you can also provide `nil` as the Bearer Token if you prefer 
