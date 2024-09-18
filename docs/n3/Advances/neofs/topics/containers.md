# Containers

Containers manage the permissions/access of a group of objects that are being stored. Before being able to store an object, you need to create a container.

## Libraries

```go
	"github.com/nspcc-dev/neofs-sdk-go/container"
	"github.com/nspcc-dev/neofs-sdk-go/container/id"
```
## Creating a container

Before being able to create a container, you will need to 

- create a [policy](/docs/n3/neofs/topics/policies) (`placementPolicy`)
- have access to a private key. This is retrieved from a json file using the [helper function](/docs/n3/neofs/topics/helpers/#get-credentials-from-path) `helper.GetCredentialsFromPath` (`key`)
- Decide on a set of permissions, (`permissions`)
-  Have created a [NeoFS client](/docs/n3/neofs/topics/clients) (`cli`)

### Owner ID

Before continuing, you will need to get the owner ID from the wallet private key. The owner ID is not the same as the wallet ID or public key. A straight forward way to do this is


```go
//see key retrieval generation for how to get a key
w, err := owner.NEO3WalletFromPublicKey(&key.PublicKey)
if err != nil {
    return fmt.Errorf("invalid private key")
}
ownerID := owner.NewIDFromPublicKey(key.PublicKey)
```

### Creating a container

Now we can get on with creating a container.

You will need

- A container placement policy (`placementPolicy`)
- A set of Basic ACL permissions (`permissions`)

```go
containerPolicy, err := policy.Parse(placementPolicy)
if err != nil {
  return fmt.Errorf("can't parse placement policy: %w", err)
}

cnr := container.New(
  // container policy defines the way objects will be
  // placed among storage nodes from the network map
  container.WithPolicy(containerPolicy),
  // container owner can set BasicACL and remove container
  container.WithOwnerID(ownerID),
  // read more about basic ACL in specification:
  // https://github.com/nspcc-dev/neofs-spec/blob/master/01-arch/07-acl.md
  container.WithCustomBasicACL(permissions),
)
//if you want to set attributes
cnr.SetAttributes(attributes)
```

Finally we can `put` the container on NeoFS. We will receive a response that contains the container's ID.

```go
var prmContainerPut client.PrmContainerPut
prmContainerPut.SetContainer(*cnr)

cnrResponse, err := cli.ContainerPut(ctx, prmContainerPut)
if err != nil {
    return err
}
containerID := cnrResponse.ID()
```

## Listing Containers

You can list all the containers owned by a wallet. This will return an array of container IDs

```go
ownerID, err := wallet.OwnerIDFromPrivateKey(key)
l := client.PrmContainerList{}
l.SetAccount(*ownerID)
response, err := cli.ContainerList(ctx, l)
if err != nil {
    return nil, fmt.Errorf("can't list container: %w", err)
}
containerList := response.Containers()
	
```

## Retrieve a Container

You can retrieve a container once you have the ID

```go
get := client.PrmContainerGet{}
get.SetContainer(containerID)
response, err := cli.ContainerGet(ctx, get)
if err != nil {
    return nil, fmt.Errorf("can't get container %s: %w", containerID, err)
}
contianeer := response.Container()
```

From a container, you can find out storage policies, owners and any other meta information about the container itself

## Deleting Containers

Once you have created a container, you will receive the ID of the container as part of the response (see above). Using this ID you can now delete the container with ease 

```go
containerDelete := client.PrmContainerDelete{}
containerDelete.SetContainer(containerID)
if sessionToken == nil {
    return &client.ResContainerDelete{}, errors.New("deleting requires a session token")
}
containerDelete.SetSessionToken(*sessionToken)
cli.ContainerDelete(ctx, containerDelete)
response, err := cli.ContainerDelete(ctx, containerDelete)
if err != nil {
    return nil, fmt.Errorf("can't get container %s: %w", containerID, err)
}
fmt.Printf("deletion response %+v\r\n", response)
```

## Questions about containers

* if you delete a container what happens to all the objects within a container
* using multisig wallets, could two or more people share ownership of a container - no.
* status - what information do I receive from a status - error on failure.
