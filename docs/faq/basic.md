---
sidebar_label: 'General FAQ'
sidebar_position: 0
---
# General

## What is Neo?

Neo is a distributed network which utilizes blockchain technology and digital identity to digitize assets and automate the management of digital assets using smart contracts. Neo network has two tokens, NEO, representing the right to manage Neo blockchain and GAS, representing the right to use the Neo Blockchain.

## What developer communities does Neo have?

Neo has a large number of worldwide developer communities that have been contributing to Neo development and ecosystem growth for several years. Following are some representative communities:


- **COZ** (Global) - Main projects: [Neon Wallet](https://github.com/CityOfZion/neon-wallet), [Neon.js](https://github.com/CityOfZion/neon-js), [Dora](https://github.com/CityOfZion/dora), [Mamba](https://github.com/CityOfZion/neo-mamba), [Boa](https://github.com/CityOfZion/neo3-boa)
- **NeoResearch** (Brazil) - Main projects: Core development, [NeoCompiler Eco](https://github.com/NeoResearch/neocompiler-eco), [neo-cpp-core](https://github.com/NeoResearch/neo-cpp-core)
- **NSPCC** (Russia) - Main projects: [NeoFS](https://fs.neo.org/), [NeoGo](https://github.com/nspcc-dev/neo-go)
- **AxLabs** (Switzerland) - Main projects: [neow3j](https://github.com/neow3j/neow3j), [GrantShares](https://grantshares.io/)
- **NEXT** (China) - Main projects: [NeoLine](https://github.com/NeoNEXT/neoline), [NeoTube](https://neo3.neotube.io/)
- **NEO Tracker** (US) - Main projects: [NEO Tracker](https://n3.neotracker.io/), [NEO·ONE](https://n3.neo-one.io/)
- **Red4Sec** (Spain) - Main projects: Core development, cybersecurity/auditing (https://red4sec.com/en)
- **Neo News Today** (Global) - Main projects: [Neo News](https://neonewstoday.com/), [nDapp](https://ndapp.org/), [GasBot](https://neonewstoday.com/gasbot/)

## What is GAS？How do I acquire GAS？

GAS represents the right to use the Neo Blockchain. The Neo network charges GAS for all transactions, including smart contract deployment, contract invocations, Council candidate registration, and usage of NeoFS or the native oracle service.

Fees on Neo N3 are split into two types: system fees and network fees. System fees include native platform fees (e.g. contract deployment or council registration) alongside any costs related to smart contract execution. All GAS spent on system fees is burned, removing the GAS from the total token supply.

Network fees consist of the cost of transaction verification plus the transaction size multiplied by the fee per byte (a value set by the Neo Council). Users can also provide extra GAS in the network fee portion to receive transaction processing priority. These fees are paid to consensus nodes as a reward for including transactions in blocks.

52M GAS tokens were in circulation at the time of the N3 launch, matching the supply on Neo Legacy in order to allow asset migration to the new network. New GAS tokens are minted in each block; the number of tokens minted is controlled by the Neo Council, elected by NEO token holders.

NEO holders receive a small amount of GAS for simply holding the token; no staking or lockup is required. A larger share of GAS can be received by voting for a Neo Council member. More information can be found [here](https://neo.org/neogas#tokens).

GAS is claimed automatically whenever the native NEO token contract is invoked, for example when transferring/receiving NEO or performing a vote in Neo's governance mechanism.

More information can be found in the official [Neo docs](https://docs.neo.org/docs/).

## What consensus algorithms does Neo use？

Neo uses delegated Byzantine Fault Tolerance (dBFT) algorithm which provides a  𝑓 = ⌊ (𝑛−1) / 3 ⌋  fault tolerance to a consensus system that comprises n nodes.

There are several types of nodes in this mechanism, such as the ordinary nodes, the candidate nodes, the committee nodes, and the consensus nodes.

Producing a block requires consensus; a speaker (primary) node is selected to lead the consensus round, proposing a new block, which other consensus nodes will validate and sign agreement to. In accordance with the dBFT algorithm, if more than 2/3 of nodes agree to the proposal, the consensus is reached and the block is committed to the network; otherwise, a new speaker is selected and the process is repeated.

Since each new block is require to pass majority consensus, forks may not occur. This provides full finality to new blocks and transactions contained within, giving assurance to users that transactions will never be dropped or reversed.

## How do I become a Neo council member or consensus node? Are there any incentives?

Neo consensus nodes are elected by NEO holders. The network itself is permissionless; anyone may register as a candidate or cast a vote for a candidate. Candidates with a sufficient share of the total number of votes are elected as Neo Council members. The top 7 of these 21 Council members are the network's consensus (validator) nodes.

For more information, visit the following [link](https://docs.neo.org/docs/en-us/basic/consensus/vote_validator.html).

## How do I check the status of my transaction?

You can check any confirmed transaction on any blockchain explorer that is compatible with Neo N3.

## What browsers are available for Neo blockchain?

A full list of explorers for Neo N3 can be found on the [Neo website](https://developers.neo.org/resources).

## Is there an equivalent of the ERC-20 standard for Neo?

Yes. NEP-17, the replacement of the standard NEP-5, is the Neo N3 token standard which outlines the specifications to be followed by contracts deployed on the Neo blockchain. It strongly resembles ERC-20, however one key difference is that the `approve/transferFrom` flow is not used on Neo. Instead, smart contracts can react to incoming payments directly and execute custom logic using the `onNep17Payment` functionality.

## Is there a transfer fee between Neo wallets?

Yes. On Neo N3, any transaction requires a small amount of GAS.

## If I keep my NEO on an exchange, can I still get my GAS?

This depends on the exchange; some (such as [Binance](https://www.binance.com/)) have chosen to distribute users their GAS when leaving NEO on the exchange, while others (like [Bittrex](https://www.bittrex.com/)) keep the GAS for themselves. If you want to make sure you receive your GAS, you should move your NEO to a wallet that only you control.

## I have transferred my NEO balance from the exchange and the exchange kept 0.9750 NEO. However, I cannot send this anywhere because you need at least 1 NEO to be able to send. Can this amount be topped up, held, or sold?

You can keep it there to be sold later, or you can buy additional NEO on the exchange so that your amount is more than 1 NEO. You can also exchange NEO to a divisible token, such as GAS.

If you already have NEO in your wallet and wish to trade less than 1 full NEO, the balance can be wrapped to bNEO using the NeoBurger service. bNEO is divisible to 8 decimal places, the same as GAS. Although this removes the ability for the user to vote in governance directly, however NeoBurger operates its own optimized voting strategy and allows the earned GAS to be claimed by bNEO holders. More information can be found on the [NeoBurger](https://neoburger.io/home) website.
