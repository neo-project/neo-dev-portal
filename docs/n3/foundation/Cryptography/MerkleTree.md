---
sidebar_label: 'Merkle Tree'
sidebar_position: 3
---
# Merkle Tree

A Merkle tree is a kind of binary tree: It's able to quickly check and induce massive data and verify the completeness of block transaction records. Neo uses Merkle tree to construct block model. Neo's block head stores the Merkle root of all transactions within the block. The block data area stores transaction array.  

![](../images/blockchain/MerkleTree01.png)

Attribute of Merkle tree：

1. Merkle tree is basicly a binary tree, with all features of tree structure.
2. Merkle tree's leaf nodes' value is unit data of data set, or unit data HASH.
3. The value of a non-leaf node is based on all the leaf node values below it, and then calculated with hash method.

Transaction verification principle:

Transaction001's validity can be verified by comparing original Top Hash value with the value computed from Transaction001, Transaction002 and Hash1(The direct child of Top Hash on the right side).

## Usage Scenarios

- Builds a Merkle tree root when constructing a block header
- Verifies the block data using SPV wallets.
- As a data structure, generates a stateRoot for Neo blocks. This is used in cross-chain and light node scenarios for quickly verifying the validity of blocks.
