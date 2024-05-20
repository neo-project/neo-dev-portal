---
sidebar_label: 'NeoNS'
sidebar_position: 1
---

# Welcome to NeoNS Documentation

## What is NeoNS

The Neo Name Service (NeoNS) is a distributed open naming system based on Neo blockchain. The main goal of NeoNS is to map names like "alice.neo" to other source identifiers such as N3 addresses, NeoFS shared link, IPV4 addresses, IPV6 addresses, and other metadata. 

NNS also has dot-separated hierarchical names called domains. The owner of a domain has full control of all its subdomains. 

Top-level domains, like `.neo`, are owned by the Neo Committee. Users can only register domains with the registered top-level domains, such as `alice.neo` instead of `alice.eth` if the top-level domain `.eth` is not registered yet. Once the domain `alice.neo` registered users can register any subdomains ended with it, for example, `hello.alice.neo`, and configure it with records.

## Quick Start

NeoNS Mainnet Contract Hash:  `0x50ac1c37690cc2cfc594472833cf57505d5f46de`

NeoNS Magnet testnet Hash:  `0xd4dbd72c8965b8f12c14d37ad57ddd91ee1d98cb`

The source code can be found at [https://github.com/neo-project/non-native-contracts/tree/master/src/NameService](https://github.com/neo-project/non-native-contracts/tree/master/src/NameService).

