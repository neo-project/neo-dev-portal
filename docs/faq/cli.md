---
sidebar_label: 'NEO-CLI FAQ'
sidebar_position: 1
---

# Neo-CLI

## When I start the neo-cli after compiling it myself, it reports an error: System.Collections.Generic.KeyNotFoundException. The given key 'LevelDBStore' was not present in the dictionary.

You need to install the [LevelDBStore plugin](https://github.com/neo-project/neo-modules/releases), as it is defined in the Neo-CLI config file as the default for storing block data.

## When I start the neo-cli and RpcServer after compiling it myself, they report an error: Unhandled exception. System.IO.FileNotFoundException: Could not load file or assembly  Microsoft.AspNetCore.ResponseCompression, Version=2.2.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60'.

To solve this issue, add the following reference to generate the Microsoft.AspNetCore.ResponseCompression.dll file before you compile neo-cli:

```
<ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.ResponseCompression" />
</ItemGroup>
```

## When I start the second node on the same computer, it reports an error: Unhandled exception. System.IO.IOException: Failed to bind to address xxx: address already in use. 

This error indicates a port conflict. Check the config files of the two nodes and the config files of their respective RpcServer plugins and make sure they are using different ports.

## When I invoke the RPC API openwallet method, it returns an error: Access denied

The openwallet method is disabled by default in the RpcServer config file for security reasons. If you need to invoke it remotely, remove the method from the DisableMethods field. Please exercise caution before allowing the wallet to be opened remotely on a node operating on MainNet by ensuring that access to the RPC service is restricted.

## How to view NEP-17 asset balances in Neo-CLI？

To view NEP-17 asset balances for a given address, invoke the RPC API [getnep17balances](../n3/reference/rpc/getnep17balances.md) or use the Neo-CLI command [balanceof](../n3/node/cli/cli.md#balanceof) .
