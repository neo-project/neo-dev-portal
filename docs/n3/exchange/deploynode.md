---
sidebar_label: 'Deploying Neo Nodes'
sidebar_position: 1
---

# Deploying Neo Nodes on Server

## Install Neo client

1. Install [.NET Core Runtime](https://www.microsoft.com/net/download/core#/runtime) on the server, 5.0 and the later version.
2. From GitHub, download the [Neo-CLI](https://github.com/neo-project/neo/releases) program and enable the Neo node.

## Install plugins

Some additional functionalities are individually encapsulated in plug-ins for the purpose of improving node security, stability, and flexibility. For more information, refer to [Installing plugins](../node/cli/config.md#installing-plugins).

Go to [here](https://github.com/neo-project/neo-modules/releases/) to download plugins. Exchanges need to install the following plugins to get the complete functionality of transaction log API and automatic synchronization with the offline package:

- ApplicationLogs (Mandatory)
- LevelDBStore (Preloaded)
- RpcServer (Mandatory)
- RpcNep17Tracker (Recommended)

Unzip the plugin packages under the Neo-CLI root directory, as shown below, all the plugin files are extracted into the Plugins folder automatically. 

![PluginsForExchange.png](assets/PluginsForExchange.png)

You can also install plugins using CLI commands：

```
install ApplicationLogs
install LevelDBStore
install RpcServer
install RpcNep17Tracker
```

:::note

- The RpcServer plug-in must be installed before you can use the RpcNep17Tracker plug-in.
- You must install the plugins ApplicationLogs and RpcNep17Tracker before synchronizing the Neo client, otherwise the log in the blocks synchronized before will be lost.

:::

## Modifying configuration files

Before running Neo-CLI, you need to make necessary configurations in the Neo-CLI configuration files. For more information, refer to [Configuring and Starting Neo-CLI](../node/cli/config.md).

:::caution

Be cautious to enable automatic opening of wallet. Before you do that, make sure your firewall is open and safe as Password specified in the file is in clear text.
:::
