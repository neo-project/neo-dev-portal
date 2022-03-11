---
title: "Objects"
date: 2022-01-24T11:23:17Z
---

Objects represent items stored within a [container](/neo-docs/tutorials/containers). These are subject to the permissions of the container being the most relaxed possible permissions that can be applied to an object. It is possible using [Session/Bearer Tokens](/neo-docs/tutorials/tokens) to restrict permissions further on objects within a container however

Please note actions on objects are restricted by the permissions on the container AND the permissions of the token used to access the functions. 

## Uploading Objects 

Before uploading an object, you will need

1. A [session token](/neo-docs/tutorials/tokens)
2. A [container](/neo-docs/tutorials/containers) ID to upload the object to, with the correct permissions
3. An [object](/neo-docs/tutorials/objects) to upload (`filepath`)
4. Have created a [NeoFS client](/neo-docs/tutorials/clients) (`cli`)

### Attributes

Attributes are key value pairs (string:string) that are attached to the metadata of objects. You can specify anything as an attribute, however there are a couple of reserved ones
{{< tabs >}}
{{% tab name="Go" %}}
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
If you have set the FileName attribute, you can also refer to the object by its filename, i.e
https://http.testnet.fs.neo.org/CONTAINER_ID/upload.png when its uploaded, (see [acl permissions](/neo-docs/tutorials/acl-permissions))
{{% /notice %}}

### Session Token
See [tokens](/neo-docs/tutorials/tokens) for how to create a session token

## Upload 
{{< tabs >}}
{{% tab name="Go" %}}
```go
var obj = object.NewRaw()
obj.SetContainerID(containerID)
obj.SetOwnerID(ownerID)
obj.SetAttributes(attributes...)
	
// use an io.Reader (e.g from a file) to get the data to upload	
var putParams = new(client.PutObjectParams)
putParams.WithObject(obj.Object())
putParams.WithPayloadReader(*reader)

response, err := cli.PutObject(ctx, putParams, client.WithBearer(bearerToken), client.WithSession(sessionToken))
if err != nil {
return fmt.Errorf(err)
}
//the object ID is stored in response.ID()
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


Depending on your container's permissions you should now be able to view the file you uploaded at:

https://http.testnet.fs.neo.org/CONTAINER_ID/OBJECT_ID

## Listing the content of a container

Once you have uploaded objects to a container, you will want to list them out. Listing is a special case of searching within a container.
To search for specific objects, you add filters to the search. By setting the only filter as a root filter, it will list everything within the container
{{< tabs >}}
{{% tab name="Go" %}}
```go
var searchParams = new (client.SearchObjectParams)
var filters = object.SearchFilters{}
filters.AddRootFilter()
searchParams.WithContainerID(containerID)
searchParams.WithSearchFilters(filters)
res, err := cli.SearchObjects(ctx, searchParams, client.WithSession(sessionToken))
if err != nil {
    return fmt.Errorf(err)
}
fmt.Printf("list objects %+v\n", res.IDList())
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

## Retrieve an Object

Once you have the ID of an object, you can download it.

You will need 
1. an io.Writer to write the data to a file such as a file writer
2. an object address, which is made up of a container ID and an object ID

To generate an object address from the string forms of a containerID and an objectID:
{{< tabs >}}
{{% tab name="Go" %}}
```go
contID := cid.New()
contID.Parse(containerID)
objID := obj.NewID()
objID.Parse(objectID)
objAddress := obj.NewAddress()
objAddress.SetObjectID(objID)
objAddress.SetContainerID(contID)
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

so now you can retrieve the object
{{< tabs >}}
{{% tab name="Go" %}}
```go
var getParams = new(client.GetObjectParams)
getParams.WithAddress(objectAddress)
getParams.WithPayloadWriter(*writer)
o, err := cli.GetObject(ctx, getParams, client.WithSession(sessionToken))
if err != nil {
    return fmt.Errorf(err)
}
// payload is in bytes []bytes 
payload := o.Object().Payload()
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


## Retrieving an objects HEAD/metadata

Sometimes you want information about an object, without actually downloading the entire object, for instance the size of an object

From a container, you can find out storage policies, owners and any other meta information about the container itself. This is very similar to retrieving the object

{{< tabs >}}
{{% tab name="Go" %}}
```go
var headParams = new(client.ObjectHeaderParams)
headParams.WithAddress(objectAddress)
headObject, err := cli.HeadObject(ctx, headParams, client.WithSession(sessionToken))
if err != nil {
    return fmt.Errorf(err)
}
size := headObject.Object().PayloadSize()
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

## Deleting Objects

You may wish to delete an object for a container  
{{< tabs >}}
{{% tab name="Go" %}}
```go
var deleteParams = new (client.DeleteObjectParams)
deleteParams.WithAddress(objectAddress)
_, err := cli.DeleteObject(ctx, deleteParams, client.WithSession(sessionToken))
if err != nil {
    return fmt.Errorf(err)
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

## Questions about objects

* Can you update the attributes of an existing object
* Can you determine the original uploader of an object
