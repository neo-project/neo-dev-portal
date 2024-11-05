---
sidebar_label: 'Fees'
---

# Fees

Participants in Neo ecosystem need to pay network fees and system fees with GAS when using the Neo network.

System fees are the cost of resources consumed by the transaction execution in NeoVM. The execution of smart contracts, including the execution of its own scripts and the invocation of other contracts, requires system fees.

Network fee is the fee to pack transactions into a block. Transactions that deploy and invoke smart contracts on the blockchain and execute the Verify method requires network fees. 

Therefore, a smart contract invocation transaction requires both system fee and network fee. The sysfee is burned for each transaction and the netfee is rewarded to the consensus address that packed the current block.

Fees in Neo3 can be dynamically changed. In this document we only introduce the basic fees. 

## System fees

System fees include:

- Instruction fee (OpCode)
- SysCall fee
- CPU processing fee for native contracts
- Storage fee

### Instruction fee

| Fee（Datoshi） | OpCode                                                       |
| ---------- | ------------------------------------------------------------ |
| 32768 | CALLT                                                        |
| 8192 | VALUES, APPEND, SETITEM, REVERSEITEMS, CONVERT               |
| 4096 | PUSHDATA4                                                    |
| 2048 | MEMCPY, CAT, SUBSTR, LEFT, RIGHT, MODPOW, PACKMAP, PACKSTRUCT, PACK, UNPACK |
| 512 | PUSHDATA2, CALL, CALL_L, CALLA, THROW, NEWARRAY, NEWARRAY_T, NEWSTRUCT |
| 256 | NEWBUFFER                                                    |
| 64 | INITSLOT, POW, SQRT, HASKEY, PICKITEM                        |
| 32 | EQUAL, NOTEQUAL, MODMUL                                      |
| 16 | XDROP, CLEAR, ROLL, REVERSEN, INITSSLOT, NEWARRAY0, NEWSTRUCT0, KEYS, REMOVE, CLEARITEMS, POPITEM |
| 8 | PUSHDATA1, AND, OR, XOR, ADD, SUB, MUL, DIV, MOD, SHL, SHR, BOOLAND, BOOLOR, NUMEQUAL, NUMNOTEQUAL, LT, LE, GT, GE, MIN, MAX, WITHIN, NEWMAP |
| 4 | PUSHINT128, PUSHINT256, PUSHA, TRY, TRY_L, ENDTRY, ENDTRY_L, ENDFINALLY, INVERT, SIGN, ABS, NEGATE, INC, DEC, NOT, NZ, SIZE |
| 2 | JMP, JMP_L, JMPIF, JMPIF_L, JMPIFNOT, JMPIFNOT_L, JMPEQ, JMPEQ_L, JMPNE, JMPNE_L, JMPGT, JMPGT_L, JMPGE, JMPGE_L, JMPLT, JMPLT_L, JMPLE, JMPLE_L, DEPTH, DROP, NIP, DUP, OVER, PICK, TUCK, SWAP, ROT, REVERSE3, REVERSE4, LDSFLD0, LDSFLD1, LDSFLD2, LDSFLD3, LDSFLD4, LDSFLD5, LDSFLD6, LDSFLD, STSFLD0, STSFLD1, STSFLD2, STSFLD3, STSFLD4, STSFLD5, STSFLD6, STSFLD, LDLOC0, LDLOC1, LDLOC2, LDLOC3, LDLOC4, LDLOC5, LDLOC6, LDLOC, STLOC0, STLOC1, STLOC2, STLOC3, STLOC4, STLOC5, STLOC6, STLOC, LDARG0, LDARG1, LDARG2, LDARG3, LDARG4, LDARG5, LDARG6, LDARG, STARG0, STARG1, STARG2, STARG3, STARG4, STARG5, STARG6, STARG, ISNULL, ISTYPE |
| 1 | PUSHINT8, PUSHINT16, PUSHINT32, PUSHINT64, PUSHT, PUSHF, PUSHNULL, PUSHM1, PUSH0, PUSH1, PUSH2, PUSH3, PUSH4, PUSH5, PUSH6, PUSH7, PUSH8, PUSH9, PUSH10, PUSH11, PUSH12, PUSH13, PUSH14, PUSH15, PUSH16, NOP, ASSERT, ASSERTMSG |
| 0          | ABORT, ABORTMSG, RET, SYSCALL                                          |

Reference: [ApplicationEngine.OpCodePrices.cs](https://github.com/neo-project/neo/blob/master/src/Neo/SmartContract/ApplicationEngine.OpCodePrices.cs)

### System call fee

| **Interop Service**                   | Fee（GAS）                                               |
| ------------------------------------- | -------------------------------------------------------- |
| System.Contract.Call                  | 32768                                               |
| System.Contract.CallNative            | Refer to native contract fee                             |
| System.Contract.IsStandard            | 1024                                               |
| System.Contract.GetCallFlags          | 1024                                               |
| System.Contract.CreateStandardAccount | 256                                               |
| System.Contract.CreateMultisigAccount | 256                                               |
| Neo.Crypto.CheckSig                   | 32768                                               |
| Neo.Crypto.CheckMultisig              | Dynamically calculated based on the number of signatures |
| System.Iterator.Create                | 16                                               |
| System.Iterator.Next                  | 32768                                               |
| System.Iterator.Value                 | 16                                               |
| System.Runtime.Platform               | 8                                               |
| System.Runtime.GetTrigger             | 8                                               |
| System.Runtime.GetTime                | 8                                               |
| System.Runtime.GetScriptContainer     | 8                                               |
| System.Runtime.GetExecutingScriptHash | 16                                               |
| System.Runtime.GetCallingScriptHash   | 16                                               |
| System.Runtime.GetEntryScriptHash     | 16                                               |
| System.Runtime.CheckWitness           | 1024                                               |
| System.Runtime.GetInvocationCounter   | 16                                               |
| System.Runtime.Log                    | 32768                                               |
| System.Runtime.Notify                 | 32768                                               |
| System.Runtime.GetNotifications       | 256                                               |
| System.Runtime.GasLeft                | 16                                               |

Reference:

[ApplicationEngine.Contract.cs](https://github.com/neo-project/neo/blob/master/src/Neo/SmartContract/ApplicationEngine.Contract.cs)

[ApplicationEngine.Crypto.cs](https://github.com/neo-project/neo/blob/master/src/Neo/SmartContract/ApplicationEngine.Crypto.cs)

[ApplicationEngine.Contract.cs](https://github.com/neo-project/neo/blob/master/src/Neo/SmartContract/ApplicationEngine.Contract.cs)

[ApplicationEngine.Iterator.cs](https://github.com/neo-project/neo/blob/master/src/Neo/SmartContract/ApplicationEngine.Iterator.cs)

[ApplicationEngine.Runtime.cs](https://github.com/neo-project/neo/blob/master/src/Neo/SmartContract/ApplicationEngine.Runtime.cs)

[ApplicationEngine.Storage.cs](https://github.com/neo-project/neo/blob/master/src/Neo/SmartContract/ApplicationEngine.Storage.cs)

### Native contract execution fee

| Native Contract    | Method                  | Fee（GAS）                                                   |
| ------------------ | ----------------------- | ------------------------------------------------------------ |
| ContractManagement | Deploy                  | Refer to storage fee. Minimum is  10 GAS.                    |
| ContractManagement | Update                  | Refer to storage fee                                         |
| LedgerContract     | GetTransactionFromBlock | 65536                                                   |
| NeoToken           | UnclaimedGas            | 131072                                                   |
| NeoToken           | RegisterCandidate       | Calculated dynamically. Default is 1000 GAS                  |
| NeoToken           | UnregisterCandidate     | 65536                                                   |
| NeoToken           | Vote                    | 65536                                                   |
| NeoToken           | GetCandidates           | 4194304                                                   |
| NeoToken           | GetCommittee            | 4194304                                                   |
| NeoToken           | GetNextBlockValidators  | 4194304                                                   |
| NeoToken、GasToken | Transfer                | 131072                                                   |
| OracleContract     | Request                 | Calculated dynamically. The user specifies the fee when invoking. |
| StdLib             | Deserialize             | 8192                                                   |
| StdLib             | JsonDeserialize         | 8192                                                   |
| StdLib             | Other                   | 2048                                                   |

The fee for other native contract methods not listed is 32768 Datoshi.

Reference: [neo/SmartContract/Native](https://github.com/neo-project/neo/tree/master/src/Neo/SmartContract/Native)

### Storage fee

The storage fee is charged according to the written byte. The default unit price is 0.001 GAS / Byte. Committee members can dynamically adjust the fee, and the upper limit is 1 GAS / Byte.

For the key data written to the storage, the fee charged for the first time write-in and the subsequent write-in are different. See the following table for details.

| Scenarios                                          | Charging Rule                                                | Example                                                      | Fee<br/>(Based on unit price 0.001)   |
| -------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------- |
| First-time write in                                | (key.Length + value.Length) × unit price                     | key = `key`, value= `hello world`, totally 14 bytes          | **0.014** GAS                         |
| Subsequent write in. New data size ≤ Old data size | No fee for key. The first byte of the value is normally charged, and the remaining bytes are charged at a 75% discount | The value modified as `hello neo3`, totally 10 bytes         | (1+(10-1)/4 )×0.001 = **0.003** GAS   |
| Subsequent write in. New data size > Old data size | The previous fee plus the new data byte fee (i.e. new data byte × unit price) | The value modified as `hello neo3.0`, totally 12 bytes       | 0.003 + (12-10)×0.001 = **0.005** GAS |
| Subsequent write in. New data size > Old data size | The same as above line                                       | The value modified as `hello neo3.0 preview5`, totally 21 bytes | 0.005 + (21-12)×0.001 = **0.014** GAS |
| The value removed                                  | 0                                                            | The value removed                                            | **0** GAS                             |

Reference: [ApplicationEngine.Storage.cs](https://github.com/neo-project/neo/blob/master/src/Neo/SmartContract/ApplicationEngine.Storage.cs)

## Network fee

The network fee includes:

- Network byte fee
- Script verification fee

### Network byte fee

By default the network byte fee is 0.00001 GAS / Byte. Committee members can dynamically adjust the fee.

Reference: 

[PolicyContract.cs](https://github.com/neo-project/neo/blob/master/src/Neo/SmartContract/Native/PolicyContract.cs)

[Transaction.cs#L302](https://github.com/neo-project/neo/blob/master/src/Neo/Network/P2P/Payloads/Transaction.cs#L302)

### Script verification fee

The script verification fee is limit to 0.5 GAS. Its formula is:

`Script verification fee`= `Execution fee of script verification` * `multiple`

Where,

`Execution fee of script verification` = `OpCode execution fee` + `SysCall fee` + `CPU processing fee for native contracts` + `Storage fee`

The multiple for script verification fee defaults to 30, which can be dynamically adjusted by committee with the upper limit of 1000.

Developers can use the API `InvokeContractVerify` to evaluate the fee for script verification.

For example:

The script verification fee for a standard address is (OpCode.PUSHDATA1 + OpCode.PUSHDATA1 + OpCode.SYSCALL + Neo.Crypto.CheckSig) ×30 = **0.0098352** GAS.

Reference: 

[PolicyContract.cs](https://github.com/neo-project/neo/blob/master/src/Neo/SmartContract/Native/PolicyContract.cs)

[Transaction.cs#L302](https://github.com/neo-project/neo/blob/master/src/Neo/Network/P2P/Payloads/Transaction.cs#L302)

