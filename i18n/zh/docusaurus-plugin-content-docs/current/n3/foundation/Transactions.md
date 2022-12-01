---
sidebar_label: '交易'
sidebar_position: 5
---

# 交易

Neo区块去掉区块头部分就是一串交易构成的区块主体，因而交易是整个Neo系统的基础部件。钱包、智能合约、账户和交易相互作用但最终都转化成交易被记入区块链中。在Neo的P2P网络传输中，信息被打包成`InvPayload`信息包来传送（Inv即Inventory）。不同信息包有自己需要的特定数据，`InventoryType.Tx` 用于标识网络中的InvPayload信息包内装的是交易数据。

## 数据结构

在Neo网络中，交易的数据结构如下所示：

| 字段        | 类型    | 说明                              |
|--------------|---------|------------------------------------------|
| `version`    | byte   | 交易版本号，目前为0                    |
| `nonce`    | uint   | 随机数                   |
| `sysfee`    | long   | 支付给网络的资源费用     |
| `netfee`    | long   | 支付给验证人打包交易的费用    |
| `validUntilBlock`    | uint   |  交易的有效期                |
| `signers`    | Signer[]   | 发送方以及限制签名的作用范围           |
| `attributes` | TransactionAttribute[]   | 交易所具备的额外特性  |
| `script`     | byte[]   | 交易的合约脚本 |
| `witnesses`  | Witness[]   | 用于验证交易的脚本列表    |

### version
version属性允许对交易结构进行更新，使其具有向后兼容性。 目前版本为0。
### signers
signers中的第一个字段为交易发起账户的地址哈希。由于Neo N3弃用了UTXO模型，仅保留有账户余额模型，原生资产NEO和GAS的转账交易统一为NEP-17资产操作方式，因此交易结构中不再记录inputs和outputs字段，通过signers字段来跟踪交易的发送方。

signers中余下的字段定义了签名的作用范围。当 checkwitness 用于交易验证时，除交易发送者 sender 外，其他的 signers 都需要定义其签名的作用范围。详情请参见 [签名作用域](#signature-scope)。

| 字段 | 说明|  类型|
|--------------|------------------| --|
| `Account`   | 账户脚本哈希  |  `UInt160` |
| `Scopes` | 指定签名的作用范围   |  `WitnessScope` |
| `AllowedContracts`  |  签名可验证的合约脚本数组   | `UInt160[]` |
| `AllowedGroups` | 签名可验证的合约组公钥 | `ECPoint[]` |
| `Rules` | 当 `scopes` 设置为`WitnessRules` 时，填写签名规则数组 | `WitnessRules[]` |

### sysfee
系统费用取决于交易脚本的大小，数量和NeoVM指令类型。每一个指令所对应的费用，请参考[opcode 费用](../虚拟机#费用)。Neo N3取消了每笔交易10 GAS的免费额度，系统费用总额受合约脚本的指令数量和指令类型影响。计算公式如下所示：

![](images/transaction/system_fee.png)

其中，*OpcodeSet* 为指令集，𝑂𝑝𝑐𝑜𝑑𝑒𝑃𝑟𝑖𝑐𝑒<sub>𝑖</sub>为第 *i* 种指令的费用，𝑛<sub>𝑖</sub>为第 *i* 种指令在合约脚本中的执行次数。
### netfee
网络费是用户向Neo网络提交交易时支付的费用，作为共识节点的出块奖励。每笔交易的网络费存在一个基础值，用户支付的网络费需要大于或等于此基础值，否则交易无法通过验证。基础网络费计算公式如下所示：

![network fee](images/transaction/network_fee.png)

其中，*VerificationCost*为虚拟机验证交易签名执行的指令相对应的费用，*tx.Length*为交易数据的字节长度，*FeePerByte*为交易每字节的费用，目前为0.00001GAS。

### attributes
根据具体的交易类型允许向交易添加额外的属性。 对于每个属性，必须指定使用类型，以及外部数据和外部数据的大小。

每个交易最多可以添加16个属性。

### script
在NeoVM上执行的脚本，决定了交易的效果。
### witnesses
witnesses属性用于验证交易的有效性和完整性。Witness即“见证人”， 包含两个属性。

| 字段 | 说明|
|--------------|------------------|
| `InvocationScript`   | 执行脚本，向验证脚本传递参数      |
| `VerificationScript` |验证脚本   |

可以为每个交易添加多个见证人，也可以使用具有多方签名的见证人。

#### 执行脚本

执行脚本可以通过

`0x0C(PUSHDATA1) + 0x40(数据长度为64字节) + 签名`

添加签名。重复此步，可以为多方签名合约推送多个签名。

#### 验证脚本

验证脚本，常见为地址脚本，包括普通地址脚本和多签地址脚本，该地址脚本可以从钱包账户中直接获取，其构造方式，请参考[钱包-地址](Wallets.md#地址)；

也可以为自定义的鉴权合约脚本。

## 交易序列化

除IP地址和端口号外，Neo中所有变长的整数类型都使用小端序存储。交易序列化时将按以下字段顺序执行序列化操作：

| 字段| 说明|
|----------|------------|
| `version`  | - |
| `nonce`   | - |
| `systemFee`   | - |
| `networkFee`   | -|
| `validUntilBlock`   | - |
| `signers`   | 需先序列化数组长度`WriteVarInt(length)`，之后再分别序列化数组各个元素 |
| `attributes`   |需先序列化数组长度`WriteVarInt(length)`，之后再分别序列化数组各个元素 |
| `script`   | 需先序列化数组长度`WriteVarInt(length)`，之后再序列化字节数组 |
| `witnesses`   | 需先序列化数组长度`WriteVarInt(length)`之后再分别序列化数组各个元素 |


:::note
 WriteVarInt(value) 是根据value的值，存储非定长类型, 根据取值范围决定存储大小。
:::

| Value 值范围 | 存储类型 |
|--------------------|--------------|
| value < 0xFD | byte(value) |
| value <= 0xFFFF | 0xFD + ushort(value) |
| value <= 0xFFFFFFFF | 0xFE + uint(value) |
| value > 0xFFFFFFFF | 0xFF + value |

## 交易签名
交易签名是对交易本身的数据（不包含签名数据，即witnesses部分）进行ECDSA方法签名，然后填入交易体中的`witnesses`。

交易JSON格式示例，其中script与witnesses字段使用Base64替代原有的Hexstring编码：

```Json
{
  "hash": "0xd2b24b57ea05821766877241a51e17eae06ed66a6c72adb5727f8ba701d995be",
  "size": 265,
  "version": 0,
  "nonce": 739807055,
  "sender": "NMDf1XCbioM7ZrPZAdQKQt8nnx3fWr1wdr",
  "sys_fee": "9007810",
  "net_fee": "1264390",
  "valid_until_block": 2102402,
  "signers": [{
    "account": "0xdf93ea5a0283c01e8cdfae891ff700faad70500e",
    "scopes": "FeeOnly"
  },
  {
    "account": "0xdf93ea5a0283c01e8cdfae891ff700faad70500e",
    "scopes": "CalledByEntry"
  }],
  "attributes": [],
  "script": "EQwUDlBwrfoA9x+Jrt+MHsCDAlrqk98MFA5QcK36APcfia7fjB7AgwJa6pPfE8AMCHRyYW5zZmVyDBSJdyDYzXb08Aq/o3wO3YicII/em0FifVtSOA==",
  "witnesses": [{
    "invocation": "DEDy/g4Lt+FTMBHHF84TSVXG9aSNODOjj0aPaJq8uOc6eMzqr8rARqpB4gWGXNfzLyh9qKvE++6f6XoZeaEoUPeH",
    "verification": "DCECCJr46zTvjDE0jA5v5jrry4Wi8Wm7Agjf6zGH/7/1EVELQQqQatQ="
  }]
}
```

## 签名作用域

在 Neo Legacy 中，交易签名是全局有效的，所有合约均可使用用户签名。为了让用户能更细粒度地控制签名的作用范围，Neo N3 新增了签名作用域（WitnessScope），对交易结构中的 signers 字段进行了变更，可实现签名只限于验证指定合约的功能，防止未经授权的合约随意使用用户签名。

### Scopes

在构造交易时，需要指定 `signers` 参数中的 `scopes` 字段，其定义了签名的作用范围，包含的类型如下表所示。

| 值   | 名称              | 说明                                                         |
| ---- | ----------------- | ------------------------------------------------------------ |
| 0x00 | `None`            | 仅对交易签名，不允许任何合约使用该签名                       |
| 0x01 | `CalledByEntry`   | 签名只限于由 Entry 脚本调用的合约脚本，建议作为钱包的默认签名作用。 |
| 0x10 | `CustomContracts` | 自定义合约，在指定的合约中可以使用该签名。可与 CalledByEntry 配合使用。 |
| 0x20 | `CustomGroups`    | 自定义合约组，在指定的合约组中可以使用该签名。可与 CalledByEntry 配合使用。 |
| 0x80 | `Global`          | 签名全局有效，所有合约均可使用签名。风险极高，合约有可能会转移地址中的所有资产，仅在极其信任该合约时选择。 |
| 0x40 | `WitnessRules`    | 用户自己指定验签规则和范围，参见下节说明。                   |

为了更好地说明各类型，我们假设一条合约调用链为： **[entry]->[合约A]->[合约B]->[合约C]...->[Target]**

Target 合约调用 CheckWitness 验签，且用户赋予了签名。当 scopes 分别设置为以下值时，验签情况如下：

- `None` - **Target** 合约位于任何位置时都不允许验签通过
- `Global` - **Target** 合约位于任何位置时都允许验签通过
- `CallByEntry` - **Target** 合约位于 **entry**  或 **合约A** 时才允许验签通过
- `CustomContracts` - 此时用户需要额外指定一个合约列表 **CustomContracts**，仅当 **Target** 合约属于 **CustomContracts** 中时允许验签通过
- `CustomGroups` - 此时用户需要额外指定一个 Group 公钥列表 **CustomGroups**，仅当 **Target** 合约带有 **CustomGroups** 中任意一个公钥认证时，允许验签通过

### WitnessRule

Action(Allow|Deny) 和 Condition (判断条件)

执行逻辑：先执行判断条件，如果符合，则返回Action，返回Allow代表验签成功，Deny代表验签失败。

#### WitnessCondition 判断条件

- Boolean：true|false

  “expression” = `<bool>`

  ```
  // 等价于 WitnessScope.Global
  {
      "account": "NdUL5oDPD159KeFpD5A9zw5xNF1xLX6nLT",
      "scopes": "WitnessRules",
      "rules": [{
              "action": "Allow",
              "condition": {
                  "type": "Boolean",
                  "expression": true
              }
          }
      ]
  }
  ```

- Not: 逻辑非，对其它条件求反

  “expression”=`<Condition>`

  ```
  // 只有当前合约不是 0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5 才允许使用签名
  {
      "account": "NdUL5oDPD159KeFpD5A9zw5xNF1xLX6nLT",
      "scopes": "WitnessRules",
      "rules": [{
              "action": "Allow",
              "condition": {
                  "type": "Not",
                  "expression": {
                      "type": "ScriptHash",
                      "hash": "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"
                  }
              }
          }
      ]
  }
  
  ```

- And：逻辑与，连接其它条件求与

  “expressions”=<Condition[]>

  ```
  // 只有当前合约是 0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5 且在入口处调用时才允许使用签名
  {
      "account": "NdUL5oDPD159KeFpD5A9zw5xNF1xLX6nLT",
      "scopes": "WitnessRules",
      "rules": [{
              "action": "Allow",
              "condition": {
                  "type": "And",
                  "expressions": [{
                          "type": "ScriptHash",
                          "hash": "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"
                      }, {
                          "type": "CalledByEntry"
                      }
                  ]
              }
          }
      ]
  }
  ```

- Or：逻辑或，连接其它条件求或

  “expressions”=`<Condition[]>`

  ```
  // 只有当前合约是 0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5 或在入口处调用时才允许使用签名
  {
      "account": "NdUL5oDPD159KeFpD5A9zw5xNF1xLX6nLT",
      "scopes": "WitnessRules",
      "rules": [{
              "action": "Allow",
              "condition": {
                  "type": "Or",
                  "expressions": [{
                          "type": "ScriptHash",
                          "hash": "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"
                      }, {
                          "type": "CalledByEntry"
                      }
                  ]
              }
          }
      ]
  }
  ```

- ScriptHash：验证当前合约hash是否匹配，相当于 CustomContracts

  “hash”= `<UInt160>`

  ```
  // 只允许合约 0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5 使用签名
  {
      "account": "NdUL5oDPD159KeFpD5A9zw5xNF1xLX6nLT",
      "scopes": "WitnessRules",
      "rules": [{
              "action": "Allow",
              "condition": {
                  "type": "ScriptHash",
                  "hash": "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"
              }
          }
      ]
  }
  ```

- Group：验证当前合约的公钥是否匹配，相当于 CustomGroups

  “group”=`<ECPoint>`

  ```
  // 只允许经过公钥 021821807f923a3da004fb73871509d7635bcc05f41edef2a3ca5c941d8bbc1231认证的合约使用签名
  {
      "account": "NdUL5oDPD159KeFpD5A9zw5xNF1xLX6nLT",
      "scopes": "WitnessRules",
      "rules": [{
              "action": "Allow",
              "condition": {
                  "type": "Group",
                  "group": "021821807f923a3da004fb73871509d7635bcc05f41edef2a3ca5c941d8bbc1231"
              }
          }
      ]
  }
  ```

- CalledByEntry：验证当前合约是否为entry调用，相当于 CallByEntry

  ```
  // 等价于 WitnessScope.CallByEntry
  {
      "account": "NdUL5oDPD159KeFpD5A9zw5xNF1xLX6nLT",
      "scopes": "WitnessRules",
      "rules": [{
              "action": "Allow",
              "condition": {
                  "type": "CalledByEntry"
              }
          }
      ]
  }
  ```

- CalledByContract：验证当前合约的上一级合约hash是否匹配

  “hash”=`<UInt160>`

  ```
  // 只允许上级合约是 0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5 时使用签名
  {
      "account": "NdUL5oDPD159KeFpD5A9zw5xNF1xLX6nLT",
      "scopes": "WitnessRules",
      "rules": [{
              "action": "Allow",
              "condition": {
                  "type": "CalledByContract",
                  "hash": "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"
              }
          }
      ]
  }
  ```

- CalledByGroup：验证当前合约的上一级合约公钥是否匹配

  “group”=`<UInt160>`

  ```
  // 只允许上级合约是公钥 021821807f923a3da004fb73871509d7635bcc05f41edef2a3ca5c941d8bbc1231 认证过的合约时使用签名
  {
      "account": "NdUL5oDPD159KeFpD5A9zw5xNF1xLX6nLT",
      "scopes": "WitnessRules",
      "rules": [{
              "action": "Allow",
              "condition": {
                  "type": "CalledByGroup",
                  "group": "021821807f923a3da004fb73871509d7635bcc05f41edef2a3ca5c941d8bbc1231"
              }
          }
      ]
  } 
  ```

### 示例

该字段目前只能通过SDK构造交易时定义。为了帮助理解，可参考 JSON 格式的代码示例：

```json
{
    "account": "NdUL5oDPD159KeFpD5A9zw5xNF1xLX6nLT",
    "scopes": "WitnessRules",
    "rules": [{
            "action": "Allow",
            "condition": {
                "type": "Not",
                "expression": {
                    "type": "And",
                    "expressions": [{
                            "type": "ScriptHash",
                            "hash": "0xef4073a0f2b305a38ec4050e4d3d28bc40ea63f5"
                        }, {
                            "type": "CalledByEntry"
                        }
                    ]
                }
            }
        }
    ]
}
```

