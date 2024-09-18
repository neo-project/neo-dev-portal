# ContractManagement Class

Provides a series of methods for the native contract `ContractManagement`, which contract hash is `0xfffdc93764dbaddd97c48f252a53ea4643faa3fd`.

Namespace: [Neo.SmartContract.Framework.Native](index.md)

Assembly: Neo.SmartContract.Framework

## Syntax

```cs
public class ContractManagement
```

## Properties

| Name | Description   |
| ---- | ------------- |
| Hash | Contract hash |

## Methods

| Name                                                         | Description                                          |
| ------------------------------------------------------------ | ---------------------------------------------------- |
| [GetMinimumDeploymentFee()](GetMinimumDeploymentFee) | Gets the minimum fee of contract deployment          |
| [GetContract(UInt160 hash)](GetContract.md) | Gets the contract based on the given contract hash   |
| [GetContractById(int id)](GetContractById.md) | Maps the specified ID to the deployed contract       |
| [GetContractHashes()](GetContractHashes.md) | Gets the hashes of all non-native deployed contracts |
| [Deploy(byte[] nefFile, string manifest)](Deploy.md) | Deploys the contract                                 |
| [Update(byte[] nefFile, string manifest)](Update.md) | Updates the contract                                 |
| [Destroy()](Destroy.md)                   | Destroys the contract                                |
