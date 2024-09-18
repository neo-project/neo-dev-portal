# Neo Class

Provides a series of attributes and methods of the native contract NeoToken, which contract hash is `0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5`.

NeoToken is also an NEP-17 contract that inherits all NEP-17 specific attributes and methods.

Namespace：[Neo.SmartContract.Framework.Native](index.md)

Assembly: Neo.SmartContract.Framework

## Syntax

```cs
public class NEO
```

## Attributes

| Name          | Description                                              |
| ----------------- | ------------------------------------------------------------ |
| Name              | Gets the name, NEO   |
| Symbol           | Gets the symbol, neo |
| Decimals          | Gets decimals                      |

## Methods

| Name                                                         | Description                                     |
| ------------------------------------------------------------ | ----------------------------------------------- |
| [TotalSupply()](TotalSupply.md)                          | Gets the total supply of NEO                    |
| [BalanceOf(UInt160 account)](BalanceOf.md)               | Gets the balance                                |
| [Transfer(UInt160 from, UInt160 to, BigInteger amount, object data = null)](Transfer.md) | Transfers NEO                                   |
| [GetGasPerBlock()](GetGasPerBlock.md)                    | Gets the number of GAS generated for each block |
| [UnclaimedGas(UInt160 account, uint end)](UnclaimedGas.md) | Gets the number of unclaimed GAS                |
| [RegisterCandidate(ECPoint pubkey)](RegisterCandidate.md) | Registers as a candidate                        |
| [UnRegisterCandidate(ECPoint pubkey)](UnRegisterCandidate.md) | Unregisters as a candidate                      |
| [Vote(UInt160 account, ECPoint voteTo)](Vote.md)         | Votes for candidates                            |
| [GetCandidates()](GetCandidates.md)                      | Gets candidates list                            |
| [GetCommittee()](GetCommittee.md)                        | Gets committee members list                     |
| [GetNextBlockValidators()](GetNextBlockValidators.md)    | Gets validators list for the next block         |
| [GetAccountState(DataCache snapshot, UInt160 account)](GetAccountState.md) | Gets the latest votes of the specified  account |
