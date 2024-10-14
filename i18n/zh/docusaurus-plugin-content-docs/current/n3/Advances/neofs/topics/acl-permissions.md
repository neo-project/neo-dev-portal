---
title: "ACL Permissions"
date: 2022-01-18T21:13:48Z
---

# ACL Permissions


NeoFS has an awesome set of permissions you can give to containers. 

ACL stands for access control list - its a list, or table really, of rules. They are checked top to bottom to any incoming request. The first permission entry in the table that the request passes, will end the checks. To that end it is important that all `DENY` permissions come after any `ALLOW` permissions.

## Types of permission

### Basic ACL Permisisons
These can only be applied to containers. They are the top most priority in terms of permissions, they cannot be changed, and they cannot be overruled. If the basic permissions of a container says that no one can read from the container, then no further permission can overrule this.

## Extended ACL Permissions
These can be applied to a container at any time and can "extend" the permissions. For instance, you may have a container that is private, however you may want to give a specific wallet access to the container. Like a shared container (except the container owner pays for the container).
These however, can also be given temporarily, instead of changing the permissions on the container as a whole. This way the permissions can be allowed to expire and remove any privileges that they offered. To do this, a Bearer Token is issued, and sent to the wallet that should gain these new access rights.

### Basic ACL Permissions

When creating a container, you are going to need to create a permission. There are multiple preset permissions you can see in the table further down

```go
permissions := acl.EACLReadOnlyBasicRule
```

:::note
You can read more about ACL permissions within the NeoFS documentation however a set of available to use permissions are available. Most languages with an SDK will have constants set to these values
:::

:::info
In the following table, names that start with `EACL` (e.g `EACLPrivateBasicRule`) allow for extended policies to be used in conjunction with the basic ACL permissions
:::

| Name      | Value | Description |
| ----------- | ----------- |----------- |
| PublicBasicRule      | 0x1FBFBFFF       | PublicBasicRule is a basic ACL value for final public-read-write container for which extended ACL CANNOT be set.       |
| PrivateBasicRule      | 0x1C8C8CCC       | PrivateBasicRule is a basic ACL value for final private container for which extended ACL CANNOT be set.|
| ReadOnlyBasicRule | 0x1FBF8CFF | ReadOnlyBasicRule is a basic ACL value for final public-read container for which extended ACL CANNOT be set. |
| PublicAppendRule | 0x1FBF9FFF |  PublicAppendRule is a basic ACL value for final public-append container for which extended ACL CANNOT be set. |
| EACLPublicBasicRule | 0x0FBFBFFF |  EACLPublicBasicRule is a basic ACL value for non-final public-read-write container for which extended ACL CAN be set. |
| EACLPrivateBasicRule | 0x0C8C8CCC |  EACLPrivateBasicRule is a basic ACL value for non-final private container for which extended ACL CAN be set. |
| EACLReadOnlyBasicRule | 0x0FBF8CFF |  EACLReadOnlyBasicRule is a basic ACL value for non-final public-read container for which extended ACL CAN be set. |
| EACLPublicAppendRule | 0x0FBF9FFF |  EACLPublicAppendRule is a basic ACL value for non-final public-append container for which extended ACL CAN be set. |

:::note

**Nice to Know:** the ability for a basic ACL permission to allow for Extended ACL permissions is controlled by the highest 'bit' in the above value. So comparing two of the 
above and comparing them in binary form

| Name      | Value | Binary |
| ----------- | ----------- |----------- |
| PublicBasicRule      | 0x1FBFBFFF | `00011111101111111011111111111111`      |
| PrivateBasicRule      | 0x1C8C8CCC| `00011100100011001000110011001100` |
| EACLPublicAppendRule | 0x0FBF9FFF | `00001111101111111001111111111111`  |

we can see here that the top two start `0001` however the final one starts `0000`. When this is a `1`, only BASIC ACL is processed.

**Whats important is that if Basic ACL denies access, then Extended ACL cannot overrule.** 
:::


### Extended ACL

Extended ACL permissions, are rules that can be applied over and beyond a container's basic ACL permissions.

This is fantastically powerful as it allows a container owner to specify very strict and very specific rules to allow an account, or group of accounts to access certain objects within the container based on these _extended_ rules.

Due to the capabilities of Extended ACL, there are a few concepts to understand

#### Four Concepts

When thinking about these concepts, remember, 

_We are creating a rule for when an actor attempts to make a request to our container. These concepts are what make up that request_

1. **Operation**
   1. The operation is a check against the type of request being made, e.g `PUT, GET, HEAD, DELETE, SEARCH, RANGE, and RANGEHASH` against the container
2. **Target**
   * The target (or targets) are the accounts making the requests to our container in the first place. Using targets, we can specify different groups of accounts that this rule should apply to.
   * There are four ways to refer to groups of accounts.
     * `user` this is the container owner
     * `others` this refers to everyone else
     * `system` this refers to nodes on the NeoFS network. It's less likely you will use this target
     * Or a specific public key of an account
   * For each type of target, you can specify whether you want it to be included in the rule
3. **Filters**
   * Where these ACL rules can get really powerful is when they are combined with object attributes. Once you have read about [object attributes](objects.md) you will know that when an object is uploaded to a container, attributes can be attached to it. These attributes can be searched/filtered as part of building up an ACL rule
4. **Action**
   * And **finally** the whole point of the rule in the first place - the action decides what the rule, if a match is made, either to `ALLOW` or `DENY` the request

Once you have this, the rule, containing these four parts, (which actually is a record) is added to an EACL table.

### Implementation

We are going to create an Extended ACL rule that
* denys 'any one else', i.e all accounts that we don't otherwise specify
* allows a specific account (public key) read access to the objects 
* Requires the object to have an attribute `LetMeIn:OK`


Note, there are multiple types of attribute filter you can apply, such as filtering by object length (`AddObjectPayloadLengthFilter`) or filter by owner of the object (`AddObjectOwnerIDFilter`). Check the [eacl](https://github.com/nspcc-dev/neofs-sdk-go/blob/8d313dbd5d0abb99c33e77bfaa29c9defee32660/eacl/record.go#L134) package for functions that add filters to records
Firstly we need two records. One for the `others` and one for our privileged key

```go
import 	"github.com/nspcc-dev/neofs-sdk-go/eacl"

othersRecord := eacl.NewRecord()
privRecord := eacl.NewRecord()
```

#### Operation

Quite simple, set both records to apply to `GET` requests

```go
othersRecord.SetOperation(eacl.OperationGet)
privRecord.SetOperation(eacl.OperationGet)
```

#### Targets

First we create a group that applies to the `others` target group - the rule that will block anyone we don't want accessing our container. Then add it to the record

```go
othersTarget := eacl.NewTarget()
othersTarget.SetRole(eacl.RoleOthers) // set the role to 'others` 

```

now create a target for a specific public key

```go
// demo public key - 33-byte hex encoded public key from N3 wallet
const pubKeyStr = "03ab362a4eda62d22505ffe5a5e5422f1322317e8088afedb7c5029801e1ece806"
pub := keys.NewPublicKeyFromString(pubKeyStr)
privTarget := eacl.NewTarget()
eacl.SetTargetECDSAKeys(privTarget, pub)
```

Now we can add our targets to our record

```go
othersRecord.SetTargets(othersTarget)
privRecord.SetTargets(privTarget)
```

#### Filters

Now we can use search capabilities against attributes on objects to filter even more specifically. In this case we are going to check that the object matches a specifc key, value pair

```go
othersRecord.AddObjectAttributeFilter(eacl.MatchStringEqual, "LetMeIn", "OK")
privRecord.AddObjectAttributeFilter(eacl.MatchStringEqual, "LetMeIn", "OK")
```

Now both records state that for anyone, even the privileged key, to `GET` a file, the attribute must match.

#### Action

Now we specify what each record should do if any part of the rule matches. The first match will result in that request being allowed or denied depending on what record matched

```go
othersRecord.SetAction(eacl.ActionDeny)
privRecord.SetAction(eacl.ActionAllow)
```

### EACL Table

To use these records now, they need to go into a table that references the container that they should be applied to

:::note
Remember to add the records `ALLOW` followed by `DENY` otherise all requests will match the first record (`DENY`) and no account will be able to access the container
:::

```go
table := eacl.NewTable()
table.SetCID(someContainerID)
table.AddRecord(privRecord)
table.AddRecord(othersRecord)
```

#### Notes

* Container EACL can have a latest version (an update) but cannot be altered in anyway. A new table must be created superseding the previous
It may seem that the `DENY` rules in this case are redundant or that the default would result in the `others` group being blocked automatically. On the other hand it may seem just to easy to miss a rule and accidentally let an acount through.

You can read more about EACL rule ordering and execution here in the [NeoFS spec](https://nspcc.ru/upload/neofs-spec-latest.pdf#16) however a high level overview:


### Setting the EACL 

#### Container

The first thing you can do is specify this against the whole container. This maybe something you would do if you were wanting to share the container's contents with someone.

You will need
1. a [NeoFS client](clients.md)


```go
	setEACL := client.PrmContainerSetEACL{}
	setEACL.SetTable(table)
	_, err := cli.ContainerSetEACL(ctx, setEACL)
	if err != nil {
		return fmt.Errorf("can't set extended ACL: %w", err)
	}
```

at this point setting the EACL against the container can take some time. Waiting is necessary to get a response. 

```go
	// wait for 15-30 seconds for eACL to be created
	for i := 0; i <= 30; i++ {
		if i == 30 {
			return errors.New("timeout, extended ACL was not persisted in side chain")
		}
		time.Sleep(time.Second)
		containerEACL := client.PrmContainerEACL{}
		containerEACL.SetContainer(containerID)
		resp, err := cli.ContainerEACL(ctx, containerEACL)
		if err == nil {
			// there is no equal method for records yet, so we have to
			// implement it manually
			if eacl2.EqualRecords(resp.Table().Records(), table.Records()) {
				break
			}
		}
	}
```
Of course this can be handled better with channels

#### Bearer Token

There is more on [Bearer Tokens here](tokens.md), however you can add these Extended ACL rules to them so that the account that is issued with the token, can access objects within the container based on the Extended ACL rules.

To create a bearer token, you will need the private key of the container owner (`containerOwnerKey`). 

This is further explained in [Bearer Tokens](tokens.md)

```go
btoken := token.NewBearerToken()
btoken.SetOwner(tokenReceiver)

btoken.SetLifetime(100, 10, 1) // exp, nbf, iat arguments just like in JWT tokens. You can calculate the expiry using the current epoch and a number of epochs into the future
btoken.SetEACLTable(table) //table from earlier

err := btoken.SignToken(containerOwnerKey)
if err != nil {
    return fmt.Errorf("error signing token: %w", err)
}

tokenBytes, err := btoken.Marshal()
if err != nil {
    return fmt.Errorf("error marshaling token: %w", err)
}
```
You can then issue the tokenBytes to whichever account should have it. See [Bearer Tokens](tokens.md) for more information

