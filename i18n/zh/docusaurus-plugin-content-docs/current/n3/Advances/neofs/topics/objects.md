---
title: "Objects"
date: 2022-01-18T21:13:48Z
---

# Objects

Objects represent items stored within a [container](containers.md). These are subject to the permissions of the container being the most relaxed possible permissions that can be applied to an object. It is possible using [Session/Bearer Tokens](tokens.md) to restrict permissions further on objects within a container however

Please note actions on objects are restricted by the permissions on the container AND the permissions of the token used to access the functions. 

## Uploading Objects 

### you will need

- A [session token](tokens.md)
- A [container](containers.md) ID to upload the object to, with the correct permissions
- An [object](objects.md) to upload (`filepath`)
- Have created a [NeoFS client](clients.md) (`cli`)

### Attributes

Attributes are key value pairs (string:string) that are attached to the metadata of objects. You can specify anything as an attribute, however there are a couple of reserved ones

```go
var attributes []*object.Attribute

timeStampAttr := new(object.Attribute)
timeStampAttr.SetKey(object.AttributeTimestamp) // AttributeTimestamp key is like a 'created at' attribute
timeStampAttr.SetValue(strconv.FormatInt(time.Now().Unix(), 10))

fileNameAttr := new(object.Attribute)
fileNameAttr.SetKey(object.AttributeFileName) // AttributeFileName key is the filename to be associated with the object. 
fileNameAttr.SetValue(path.Base(filepath)) //path.Base(filepath) returns the last element of a file path (usually the filename)

expirationEpochAttr := new(object.Attribute)
expirationEpochAttr.SetKey("__NEOFS__EXPIRATION_EPOCH") // Reserved case for when the life of the object should expire 
expirationEpochAttr.SetValue(strconv.Itoa(epoch))) //The epoch at which the object will expire

attributes = append(attributes, []*object.Attribute{timeStampAttr, fileNameAttr, expirationEpochAttr}...)

```

:::note
If you have set the FileName attribute, you can also refer to the object by its filename, i.e
https://http.testnet.fs.neo.org/CONTAINER_ID/upload.png when its uploaded, (see [acl permissions](acl-permissions.md))
:::

### Session Token
See [tokens](tokens.md) for how to create a session token

## Upload 

This example demonstrates how to upload binary data using an `io.Reader` defined by the developer

```go
var objectID oid.ID
o := object.New()
o.SetContainerID(&containerID)
o.SetOwnerID(ownerID)
o.SetAttributes(attr...)

objWriter, err := cli.ObjectPutInit(ctx, client.PrmObjectPutInit{})
//you probably have either a session or bearer token depending on your permissions. If the container is yours, use a session token
if sessionToken != nil {
    objWriter.WithinSession(*sessionToken)
}
if bearerToken != nil {
    objWriter.WithBearerToken(*bearerToken)
}
if !objWriter.WriteHeader(*o) {
    return objectID, errors.New("could not write object header")
}
buf := make([]byte, 1024*1024) // 1 MiB
for {
    // update progress bar
    _, err := (*reader).Read(buf) //could be a file reader for instance .. reader *io.Reader
    if !objWriter.WritePayloadChunk(buf) {
        break
    }
    if errors.Is(err, io.EOF) {
        break
    }
}
res, err := objWriter.Close()
if err != nil {
    return objectID, err
}
	res.ReadStoredObjectID(&objectID)
}
//the object ID is stored in response.ID()
```

Depending on your container's permissions you should now be able to view the file you uploaded at:

https://http.testnet.fs.neo.org/CONTAINER_ID/OBJECT_ID

## Listing the content of a container

Once you have uploaded objects to a container, you will want to list them out. Listing is a special case of searching within a container.
To search for specific objects, you add filters to the search. By setting the only filter as a root filter, it will list everything within the container

```go
var filters = object.SearchFilters{}
filters.AddRootFilter()
search := client.PrmObjectSearch{}
if sessionToken != nil {
    search.WithinSession(*sessionToken)
}
if bearerToken != nil {
    search.WithBearerToken(*bearerToken)
}
search.SetFilters(filters)
search.InContainer(containerID)

var list []oid.ID
searchInit, err := cli.ObjectSearchInit(ctx,search)
if err != nil {
    return list, err
}

err = searchInit.Iterate(func(id oid.ID) bool {
    list = append(list, id)
    return true
})
fmt.Printf("list objects %+v\n", list)
```

## Retrieve an Object

Once you have the ID of an object, you can download it.

### You will need
- an io.Writer to write the data to a file such as a file writer
-  an object address, which is made up of a container ID and an object ID

To generate an object address from the string forms of a containerID and an objectID:

```go
contID := cid.New()
contID.Parse(containerID)
objID := obj.NewID()
objID.Parse(objectID)
```

Then use an io.Writer to save the content back to somewhere such as a local file
```go
dstObject := &object.Object{}
getParms := client.PrmObjectGet{}
getParms.ByID(objID)
getParms.FromContainer(contID)
if sessionToken != nil {
    getParms.WithinSession(*sessionToken)
}
if bearerToken != nil {
    getParms.WithBearerToken(*bearerToken)
}
objReader, err := cli.ObjectGetInit(ctx, getParms)
if err != nil {
    return dstObject, err
}
if !objReader.ReadHeader(dstObject) {
    _, err = objReader.Close()
    return dstObject, err
}
buf := make([]byte, 1024) // 1 MiB
for {
    if _, writerErr := (*writer).Write(buf); writerErr != nil {
        return nil, errors.New("error writing to buffer: " + writerErr.Error())
    }
    if _, ok := objReader.ReadChunk(buf); !ok {
        break
    }
    fmt.Printf("* %v\r\n", string(buf))
    // get total size from object header and update progress bar based on n bytes received
    if errors.Is(err, io.EOF) {
        break
    }
}
return dstObject, err
```

## Retrieving an objects HEAD/metadata

Sometimes you want information about an object, without actually downloading the entire object, for instance the size of an object

From a container, you can find out storage policies, owners and any other meta information about the container itself. This is very similar to retrieving the object

```go
h := client.PrmObjectHead{}
h.ByID(objectID)
if sessionToken != nil {
    h.WithinSession(*sessionToken)
}
if bearerToken != nil {
    h.WithBearerToken(*bearerToken)
}
h.FromContainer(containerID)
var o = &object.Object{}
head, err := cli.ObjectHead(ctx, h)
if err != nil {
    return o, err
}
response := head.ReadHeader(o)
if !response {
    return o, errors.New("could not read the object header. Did not exist")
}
return o, nil
```

## Deleting Objects

You may wish to delete an object for a container  

```go
del := client.PrmObjectDelete{}
if sessionToken != nil {
    del.WithinSession(*sessionToken)
}
if bearerToken != nil {
    del.WithBearerToken(*bearerToken)
}
del.ByID(objectID)
del.FromContainer(containerID)
deleteResponse, err := cli.ObjectDelete(ctx, del)
return deleteResponse, err
```

## Questions about objects

* Can you update the attributes of an existing object
* Can you determine the original uploader of an object
