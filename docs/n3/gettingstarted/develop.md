---
sidebar_label: 'Developing a contract'
sidebar_position: 3
---
# Developing a contract

We have completed setting up the private chain and configuring the node. In this section we will walk you through configuring the environment, writing, and compiling an NEP17 contract using C#.

The following steps are applicable to multiple system platforms, such as Windows, macOS, and Ubuntu.

## Installing tools

1. Download and install [Visual Studio Code](https://code.visualstudio.com/Download)

2. Download and install [.NET 8.0 SDK](https://dotnet.microsoft.com/download)

3. Run the command line and enter the following command to check if you have installed SDK successfully. 

   ```powershell
   dotnet --list-sdks
   ```

   If there is no issue the SDK version number is displayed.

## Installing contract template

[Neo.SmartContract.Template](https://www.nuget.org/packages/Neo.SmartContract.Template) is a project template used when developing Neo smart contracts. After installing the template, you can create a Neo smart contract project using either the Terminal or Visual Studio.

### Install the template

```
dotnet new install Neo.SmartContract.Template
```

### List all dotnet templates

```
dotnet new list
```

 These default templates are available after installing [Neo.SmartContract.Template](https://www.nuget.org/packages/Neo.SmartContract.Template): 

- neocontractowner - Standard contract template with the Owner, including the GetOwner and SetOwner methods.

- neocontractoracle - A contract template using OracleRequest.

- neocontractnep17 - NEP-17 contract template, including the Mint and Burn methods.

:::note

The `neocontract` template previously used has been renamed to `neocontractowner`.

:::

### Create a project using templates with Terminal

```
dotnet new neocontractnep17 
```

The project name defaults to the name of the current directory. You can also specify the project name with `-n, --name <name>`, e.g. `dotnet new neocontractnep17 -n MyFirstContract`.

## Neo.Compiler.CSharp

Neo.Compiler.CSharp (nccs) is the Neo smart contract compiler that compiles the C# language into NeoVM executable OpCodes.

### Install the compiler

```
dotnet tool install --global Neo.Compiler.CSharp
```

### Compiling contract file

In the Terminal interface, go to the project path and run the following command to build your contract：

```
dotnet build
```

or

```
nccs
```
Related contract files are outputted under `bin\sc` path in the contract project directory.

## See also

For more information about writing contracts, refer to [Basics](../develop/write/basics.md).

For information about differences between Neo N3 and Neo Legacy contracts, refer to [Differences than Neo Legacy](../develop/write/difference.md)

