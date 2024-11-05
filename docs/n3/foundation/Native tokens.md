---
sidebar_label: 'Native tokens'
sidebar_position: 2
---

# NEO Token Models

## Native Token

There are 2 kinds of native tokens defined in the Neo system: NEO and NeoGas (GAS).

NEO is the Governing Token. Neo holders can participate in Neo network management, including voting for consensus nodes, network parameter modification, etc. The total amount of NEO is 100 million. Its minimum unit is 1 and can not be divided. It's registered in Genesis block, and stored in standby validators' muti-signature addresses.

GAS is the fuel token for the realization of Neo network resource control, with a smallest unit of 0.00000001, also known as a Datoshi. Users can obtain GAS either through a claim or purchase. When using the Neo network, they need to pay a certain amount of GAS as network fees, such as transfer, registering assets, publishing assets, running DApps, etc.

To further elaborate, the smallest unit of GAS is Datoshi, where 1 Datoshi = 1e-8 GAS. Larger units of GAS can also be expressed in Datoshi. For instance, 1 Kdatoshi (thousand Datoshi) = 1e-5 GAS and 1 Mdatoshi (million Datoshi) = 1e-2 GAS. In other words, 100,000,000 Datoshi = 100,000 Kdatoshi = 100 Mdatoshi = 1 GAS. This system of measurement allows for precise calculations and transactions on the Neo network.

The Neo N3 Genesis block will mint the exact amount of GAS token needed to account for all GAS token circulating on the NEO Legacy chain at the time of Genesis block.

To read more about GAS generation rate and distribution refer to the [Governance and Incentives](./governance.md).


## NEP17 Assets (Tokens)

NEP17 tokens need to be issued and managed through smart contract. Their information is stored in a smart contract's storage. Account model is used. For detailed information, refer to [NEP-17](../develop/write/nep17.md).

