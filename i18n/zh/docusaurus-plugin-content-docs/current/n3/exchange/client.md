---
sidebar_label: '使用 Neo-CLI'
sidebar_position: 2
---

# 使用 Neo-CLI 客户端

Neo-CLI 作为客户端，在 P2P 网络中充当一个节点，同时，该程序也是一个跨平台的钱包，处理各种资产的相关交易。

## Neo-CLI 安全策略

:::caution 
交易所必须使用白名单或防火墙以屏蔽外部服务器请求，否则会有重大安全隐患。
::: 

Neo-CLI 本身不提供远程开关钱包功能，打开钱包时也没有验证过程。因此，安全策略由交易所根据自身情况制定。由于钱包要一直保持打开状态以便处理用户的提现请求，因此，从安全角度考虑，钱包必须运行在独立的服务器上，并参考下表配置好端口防火墙。

|                    | Mainnet | Testnet |
| ------------------ | ------- | ------- |
| JSON-RPC via HTTPS | 10331   | 20331   |
| JSON-RPC via HTTP  | 10332   | 20332   |
| P2P                | 10333   | 20333   |
| websocket          | 10334   | 20334   |


## 关于 Neo-CLI

Neo-CLI 是为开发者提供的命令行客户端，开发者可以通过两种方式与之交互：

- 使用 CLI（命令行界面）的命令，如创建钱包，创建地址等。
- 通过程序的 RPC 请求，如向指定地址转账，获得指定高度的区块信息，获得指定的交易等。

Neo-CLI 提供以下功能：

- 作为命令行钱包，管理资产。

  要启动钱包，在 neo-cli 程序目录下输入以下命令：

  ```
  dotnet neo-cli.dll
  ```

  要查看所有命令，在 neo-cli 程序目录下输入以下命令：

  ```
  help
  ```

  更多信息，请参阅 [CLI 命令参考](../node/cli/cli.md)。

- 结合 RpcServer 插件提供一系列 RPC API 接口，用于从节点获取区块链数据。接口通过 [JSON-RPC](http://www.jsonrpc.org/specification) 的方式提供，底层使用 HTTP/HTTPS 协议进行通讯。

  如果想启动节点的同时开启 RPC API，务必在部署节点时正确安装 RpcServer 插件。

  要查看更多 API 信息，请参阅 [API 参考](../reference/rpc/api.md)。

- 提供 NEP17 资产的交易信息。

## 创建钱包

交易所需要创建一个在线钱包管理用户充值地址。钱包用来存储账户（包含公钥和私钥）、合约地址等信息，是用户持有资产的最重要的凭证，一定要保管好钱包文件和钱包密码，不要丢失或泄露。 交易所不需要为每个地址创建一个钱包文件，通常一个钱包文件可以存储用户所有充值地址。也可以使用一个冷钱包（离线钱包）作为更安全的存储方式。

:::note
Neo-CLI 钱包支持两种格式的钱包， sqlite 钱包（格式为.db3）和 [NEP6 标准](https://github.com/neo-project/proposals/blob/master/nep-6.mediawiki) 钱包（格式为.json），建议交易所使用 sqlite 钱包。
:::
请按照以下步骤创建钱包：

1. 输入命令 `create wallet <path>` 。

   其中 \<path\> 为钱包路径及名称，扩展名根据所使用的钱包种类来设定，可以是 .db3 也可以是 .json（如无扩展名，则钱包格式为 NEP6 钱包），如 create wallet /home/mywallet.db3。

2. 设置钱包密码。

## 生成充值地址

一个钱包可以存储多个地址，交易所需要为每个用户生成一个充值地址。

充值地址有两种生成方式：

- 用户第一次充值（NEO/GAS）时，程序动态创建 NEO 地址，优点：无需人工定期创建地址；缺点：不方便备份钱包。

  要动态创建地址，可以使用 RpcServer API 的 [getnewaddress 方法](../reference/rpc/getnewaddress.md) 实现。程序会返回创建的地址。

- 交易所提前创建一批 NEO 地址，并在用户第一次充值（NEO/GAS）时，给用户分配一个 NEO 地址。优点：方便备份钱包；缺点：当地址不足时需要人工创建 NEO 地址。

  要批量创建地址，执行 NEO- CLI 的 create address [n] 命令，地址会自动导出到 address.txt 文件。
  方括号为可选参数，默认值为 1。例如要一次创建 100 个地址，输入 `create address 100`。


:::note
无论采用哪种方式，交易所需要将生成的地址导入到数据库中，作为充值地址分配给用户。一般建议交易所采用第二种方式，这样可以减少外界对钱包的操作，有利于钱包的稳定运行。
:::

