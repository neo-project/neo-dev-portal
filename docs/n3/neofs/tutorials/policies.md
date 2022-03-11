---
title: "Policies"
date: 2022-01-18T18:58:22Z
---

Before we can create a container, we need to define the policy. A policy defines which storage nodes on NeoFS you are happy to store your data on.

The approach to do this is to use the simple policy language provided. A policy is made up of 4 components

## Overview

### Filters

Filters are used to decide which nodes meet the requirements to store an object. Think of it as 'filtering' out nodes based on some condition. All nodes have attributes that can be used to filter their capabilities and whether they meet the requirements for the policy.

A filter can check for instance if a node is situated in Europe, and the data would be stored on SSDs (solid state drives).

A filter contains

* A Key
  * The name of the attribute to filter
* A value
  * The value to compare the attribute with
* An operation
  * The way in which to make the comparison (less than, greater then, equal to etc)
  * There are 8 filters:
    * `EQ` equal to
    * `NE` not equal to
    * `GE` greater than or equal to
    * `GT` greater than
    * `LT` less than
    * `LE` less than or equal to
    * `OR` or
    * `AND` and

A filter could therefore be 

* `Country = Italy`
* `Rating > 3.5`

Filters can also have names so they can be grouped into 'meanings', for instance

```shell
Country = Finland OR Country = Iceland AS ColdCountry
```

Now you can refer to Finland and Iceland as `ColdCountry` in further/more complex filters such as

```shell
FILTER Country EQ "Finland" OR "Iceland" AS ColdCountry
FILTER ColdCountry AND StorageType = SSD AND Price < 100
FILTER SSD EQ true AS IsSSD
FILTER @IsSSD AND Country EQ "RU" AND City EQ "St.Petersburg" AS SPBSSD
FILTER 'Continent' EQ 'North America' OR Continent EQ 'South America' AS Americas
```


Note country codes come from the open [flight database](https://raw.githubusercontent.com/jpatokal/openflights/master/data/countries.dat). NeoFS uses the [code found here](https://github.com/nspcc-dev/neofs-locode-db) to manage these codes
### Selectors

Once a filter has found some nodes that adhere to the requirements, selectors can now be specified to decide which nodes end up in the container policy.

Selectors are slightly easier to understand as part of examples, but the principles of selectors are outlined here

A selector contains

* A name
  * a name that can be referred to 
* An Attribute
  * the name of the attribute that will be used to group nodes together. The nodes will be grouped into buckets based on the value of the attribute, or you however create 'random' groups of nodes.
* The count
  * The number of nodes that should be included in a bucket
* A Clause
  * The clause specifies how to interpret the count e.g
    * SAME - choose nodes that are part of the same bucket
    * DISTINCT - choose nodes that are from distinct buckets



#### Select + Filter

Its easiest to understand a placement policy when considering this combination defines minimal suitable container. `FILTER` specifies a subset of suitable nodes and `SELECT` picks exact nodes from this subset. If network map does not have enough nodes for a minimal suitable container, an error will be produced.

Some examples of `SELECT` + `FILTER`

This one is simpler, select 6 nodes from any location.
```go
SELECT 6 FROM *
```

This example states the policy should select a single node that is located in St Petersburg, Russia
```
SELECT 1 FROM SPB
FILTER Country EQ "RU" AND City EQ "St.Petersburg" AS SPB
```

(note this isn't strictly accurate but works for the example - read about Container Backup Factors)

### Replicas

Replicas define how many copies of objects should be stored within a Replica. A replica is a group of nodes where a single copy of an object is stored. 

With replicas you can decide how much redundancy you would like when it comes to a container's contents and making sure that the data isn't lost


### Container backup Factor (CBF)

The container backup factor defines the maximum number of nodes that should be included within a container's set of nodes.

You could have a placement policy that specifies there should be `10 nodes within 2 countries` with a Container Backup Factor of `2`.

In this case the CBF will attempt to have 20 nodes in 2 countries, but anything from 10-20 is good and better, but not a failure.

Note, although we have outlined CBF as a concept last here, it should come second, after `REP`

## Examples

| Placement Policy | Description |
|-------|-------|
| `REP 3` | When no select or filter is defined, the default will be just to "replicate 3 times selecting from anywhere, i.e `REP 3 SELECT 3 FROM *` . Note CBF defaults to 3, and still applies here, so replicate from 3-9 nodes if they exist |
| `REP 3 CBF 4` | As above, however CBF has been set to 4, so this will select between 3 and 12 nodes to replicate data over |
| `REP 1 IN SPB SELECT 1 IN City FROM * AS SPB` | 1 replica in every city |
| `REP 2 SELECT 6 FROM *` | Replicate objects twice, selecting minimum of 6 nodes from anywhere. With CBF it will select up to 18 nodes |

When making policies, it should be defined in the order `REP, CBF, SELECT, FILTER`

Basic example

{{< tabs >}}
{{% tab name="Go" %}}
```
const placementPolicy = `REP 2 IN X
CBF 2
SELECT 2 FROM * AS X
`
```
{{% /tab %}}
{{% tab name="Python" %}}
```python
print("please help by opening a Pull Request and filling in these code snippets!")
```
{{% /tab %}}
{{% tab name="C#" %}}
```c#
string placementPolicy  = @"REP 2 IN X
    CBF 2
    SELECT 2 FROM * AS X";
```
{{% /tab %}}
{{< /tabs >}}


### References

* Spec https://nspcc.ru/upload/neofs-spec-latest.pdf#a
* Tests/Examples https://github.com/nspcc-dev/neofs-sdk-go/blob/master/policy/query_test.go
* JSON format of policies (can help seeing complexity) https://github.com/nspcc-dev/neofs-sdk-go/blob/master/netmap/json_tests/filter_simple.json
