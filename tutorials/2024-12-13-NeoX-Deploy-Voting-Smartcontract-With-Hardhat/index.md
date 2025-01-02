---
title: '[NeoX Tutorial] Deploy Hello World Smart Contract on NeoX with Hardhat'
date: '2024-11-27'
lastmod: '2024-11-27'
tags: ['neox', 'javascript', 'solidity', 'technical']
draft: false
summary: 'In this article we will see how to create and deploy a voting Smart Contract on NeoX testnet by using Hardhat.'
authors: ['snakey_rob']
---

## Create and deploy a solidity smart contract for on chain voting on Neo X Test chain.

### Disclaimer
This tutorial is an extension on what NeoDashboard created in [NeoDashboard Hardhat-voting](https://neo-dashboard.com/blog/hardhat-voting). I repeat the introduction steps on purpose to make this a complete tutorial without external references. The contract itself and the javascripts interaction have been made specific to my use case.

if you want to see the endresult of the tutorial below you can clone https://github.com/snakeyrob/ndmeme-contracts

## Intro

If you are new to blockchain development and don’t know where to start, or if you just want to understand how to deploy and interact with smart contracts on NeoX blockchain,
this guide is for you. We will walk through creating and deploying a simple smart contract on the NeoX test network using a virtual wallet ([Metamask](https://metamask.io/)),
[Solidity](https://docs.soliditylang.org/en/v0.8.0/) and [Hardhat](https://hardhat.org/)
(don’t worry if you don’t understand what any of this means yet, we will explain it!).

## Step 1: Get you NeoX private key on Metamask
First we will need a private key to interact with NeoX testnet chain. If you are using Metamask It's really simple just do
as follow.

Go on `Account details` on our Metamask wallet.
![Metamask Wallet](images/metamask_pk.png)

Then enter your password and click on `Hold to reveal Private Key`.
![Metamask Wallet](images/metamask_pk_bis.png)


## Step 2: Use faucet to get some testnet tokens
You have 2 options to get some NeoX testnet tokens:

- You can claim It on the [NeoX faucet website](https://neoxwish.ngd.network/)
- Or you can join [NeoX Discord server](https://discord.gg/neosmarteconomy) and go to the `#dev-resources` channel to interact
with the faucet bot

You can then verify your balance by connectiong on [NeoX testnet explorer](https://xt4scan.ngd.network/)

## Step3: Initialize your project
First, we'll need to create a folder for our project. Navigate to your command line and input the following.
```
mkdir voting
cd voting
```
Now that you are inside your project folder, you will use npm init to initialize the project.

If you don’t have npm installed yet, [follow these instructions to install Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

Now you are ready to initialize your project just type `npm init` and fill information. Here is what we choose for our test:
```
package name: (voting)
version: (1.0.0)
description: My Neox voting contract
entry point: (index.js)
test command:
git repository:
keywords:
author: NeoDashboard
license: (ISC)
About to write to /home/crypto/neo/hardhat-tutorials/voting/package.json:

{
  "name": "voting",
  "version": "1.0.0",
  "description": "My Neox voting contract",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Snakeyrob",
  "license": "ISC"
}


Is this OK? (yes)
```

## Step 4: Install Hardhat
We will use Hardhat to compile, deploy, test, and debug our Neox smart contract. To install It type this command `npm install --save-dev hardhat` inside your voting project.

Once It's done we will create the Hardhat project by running this command `npx hardhat` (choose `create an empty hardhat.config.js` option for this tutorial).

This step will generate a `hardhat.config.js` file in the project. We'll use this later in the tutorial to specify the setup for our project.


## Step 5: Write the contract
We will start by creating a `contracts` folder on our projects. This is the folder that will contain our contract files.

We will now add the following `NdMemeVoting.sol` file in this contracts folder:

The requirements for the contract are:
1. Create topics with voting options:
  a topic is a question with multiple answers
1. Vote on topics:
 Vote is done on chain and voteweight is determined by number of tokens held when finalized.
1. Finalize a vote:
 Calculate the voteweight based on tokens held.
1. Retrieve votes
1. Get Topic Details:
 Retrieves the description and voting options of the topic.

```sol filename="NdMemeVoting .sol"
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
interface IERC20 {
    function balanceOf(address account) external view returns (uint256);
}
contract NdMemeVoting {
    struct Topic {
        string description;
        uint256 endTime;
        mapping(address => bool) hasVoted;
        mapping(bytes32 => uint256) votes; // optionHash => voteWeight
        bytes32[] options;
        IERC20 token; // Token used for weight calculation
    }

    mapping(uint256 => Topic) public topics;
    uint256 public topicCount;

    event TopicCreated(uint256 topicId, string description, uint256 endTime);

    event Voted(uint256 topicId, address voter, string option, uint256 weight);

    modifier onlyBeforeEnd(uint256 topicId) {
        require(block.timestamp <= topics[topicId].endTime, "Voting has ended");
        _;
    }

    modifier onlyAfterEnd(uint256 topicId) {
        require(block.timestamp > topics[topicId].endTime, "Voting is ongoing");
        _;
    }

    function createTopic(
        string memory _description,
        uint256 _endTime,
        string[] memory _options,
        address _tokenAddress
    ) external {
        require(_endTime > block.timestamp, "End time must be in the future");
        require(_options.length > 0, "At least one option is required");
        Topic storage topic = topics[topicCount];
        topic.description = _description;
        topic.endTime = _endTime;
        topic.token = IERC20(_tokenAddress);
        for (uint256 i = 0; i < _options.length; i++) {
            bytes32 optionHash = keccak256(abi.encodePacked(_options[i]));
            topic.options.push(optionHash);
        }
        emit TopicCreated(topicCount, _description, _endTime);
        topicCount++;
    }

   function vote(uint256 topicId, string memory option) external onlyBeforeEnd(topicId) {
        Topic storage topic = topics[topicId];
        require(!topic.hasVoted[msg.sender], "You have already voted");
        bytes32 optionHash = keccak256(abi.encodePacked(option));
        bool validOption = false;
        for (uint256 i = 0; i < topic.options.length; i++) {
            if (topic.options[i] == optionHash) {
                validOption = true;
                break;
            }
        }
        require(validOption, "Invalid voting option");
        topic.hasVoted[msg.sender] = true;
        emit Voted(topicId, msg.sender, option, 0); // Placeholder weight
    }
    
    function finalizeVotes(uint256 topicId) external onlyAfterEnd(topicId) {
        Topic storage topic = topics[topicId];
        for (uint256 i = 0; i < topic.options.length; i++) {
            bytes32 optionHash = topic.options[i];
            topic.votes[optionHash] += topic.token.balanceOf(msg.sender);
        }
    }
    
    function getVotes(uint256 topicId, string memory option) external view returns (uint256) {
        Topic storage topic = topics[topicId];
        bytes32 optionHash = keccak256(abi.encodePacked(option));
        return topic.votes[optionHash];
    }

    // New function to retrieve topic details and options
    function getTopicDetails(uint256 topicId) 
        external 
        view 
        returns (
            string memory description, 
            uint256 endTime, 
            string[] memory optionDescriptions
        ) 
    {
        Topic storage topic = topics[topicId];
        description = topic.description;
        endTime = topic.endTime;

        // Convert bytes32[] options to string[] for easier reading
        optionDescriptions = new string[](topic.options.length);
        for (uint256 i = 0; i < topic.options.length; i++) {
            optionDescriptions[i] = string(abi.decode(abi.encodePacked(topic.options[i]), (string)));
        }
    }
}
```

## Step 6: Complete project configuration
Every transaction sent from your wallet requires a signature using your unique private key (the one we retrieve in first step). To provide our program with this permission, we can safely store our private key in an environment file.

We will install the dotenv package in your project directory allowing to use environment variables from a `.env` file:
```
npm install dotenv --save
```
And then create our `.env` file with the private key variable named `PRIVATE_KEY`. This file will look like this
```
PRIVATE_KEY = "your-metamask-private-key"
```

Now we will install the Hardhat recommended plugin
```
npm install --save-dev @nomicfoundation/hardhat-toolbox
```
And then change our `hardhat.config.js` with the one below:
```js
require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
    solidity: {
      version: "0.8.26",
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
          details: {
            yul: false,
          },
        },
      }
    },
    networks: {
        'neox-t4': {
            url: 'https://neoxt4seed1.ngd.network',
            accounts: [`${process.env.PRIVATE_KEY}`],
            gasPrice: 40e9,
            gas: 50e6,
        },
    },
    etherscan: {
        apiKey: {
            'neox-t4': 'empty'
        },
        customChains: [
            {
                network: 'neox-t4',
                chainId: 12227332,
                urls: {
                    apiURL: 'https://xt4scan.ngd.network/api',
                    browserURL: 'https://neoxt4scan.ngd.network'
                }
            }
        ]
    }
};
```


## Step 7: Compile your contract
Now that everything is configured you just need to run this command to compile your contract `npx hardhat compile`.

You should see this message indicating everything worked as expected.
```
Compiled 1 Solidity file successfully (evm target: paris).
```

## Step 8: Deploy your contract
For deploying our contract we will need to write a script for doing It. First let's create a `scripts` folder. At this point your
Voting project should look like this:
![Metamask Wallet](images/project_structure.png)

Now we are creating a `deploy.js` file in this folder with the following code:
```js filename="deploy.js"
async function main() {
  const NdMemeVoting = await ethers.getContractFactory("NdMemeVoting")
  // Start deployment, returning a promise that resolves to a contract object
  const ndmeme_voting = await NdMemeVoting.deploy()
  console.log(ndmeme_voting)
  console.log("Contract deployed to address:", ndmeme_voting.target)
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
```
We can start the deployment by running this command
```
npx hardhat run scripts/deploy.js --network neox-t4
```
You should see this message indicating everything worked as expected.
```
Contract deployed to address: 0x2aBFb8a9551562dD6b9e41568F6898BBe79D1F54
```
You can now verify on the explorer you contract have been deployed (for [our example](https://neoxt4scan.ngd.network/address/0x2aBFb8a9551562dD6b9e41568F6898BBe79D1F54))

## Step 9: Create a topic
Our contract is now deployed to interact with the contract and create a topic we need to add a new script.

Now we are creating a `createVotingTopic.js` file in this folder with the following code (I will go in depth on what's it's doing in a different tutorial):
```js filename="createVotingTopic.js"
require('dotenv').config();
const { ethers } = require('ethers');

// Contract ABI
const contractABI = [
  "function createTopic(string memory _description, uint256 _endTime, string[] memory _options, address _tokenAddress) external",
  "event TopicCreated(uint256 topicId, string description, uint256 endTime)"
];

// Update with your deployed contract address
const contractAddress = "0x2aBFb8a9551562dD6b9e41568F6898BBe79D1F54";

console.log(process.env.INFURA_API_URL)

// Define your provider and wallet
const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_API_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);


async function createVotingTopic() {
  try {
    
    // Connect to the contract
    const contract = new ethers.Contract(contractAddress, contractABI, wallet);
  // Fetch gas fee data
  const feeData = await contract.provider.getFeeData();

    // Define topic parameters
    const description = "Vote for the best meme of the month!";
    const endTime = Math.floor(Date.now() / 1000) + 7 * 24 * 60 * 60; // 7 days from now
    const options = ["NDMEME 1", "NDMEME 2", "NDMEME 3"];
    const tokenAddress = "0x1ce16390fd09040486221e912b87551e4e44ab17"; // using wrapped gas for testing purposes.

    const estimatedGas = await contract.estimateGas.createTopic(description, endTime, options, tokenAddress);
console.log("Estimated Gas:", estimatedGas.toString());

    // Send transaction to create the topic
    const tx = await contract.createTopic(description, endTime, options, tokenAddress, {
        gasLimit: 5000000, // Adjust the gas limit as needed
        maxPriorityFeePerGas: ethers.utils.parseUnits("20", "gwei"), // Minimum miner tip
        maxFeePerGas: ethers.utils.parseUnits("150", "gwei"), // Maximum gas fee
      });
    console.log("Transaction sent. Waiting for confirmation...");
    const receipt = await tx.wait();

    // Extract event from receipt
    const event = receipt.events.find(e => e.event === "TopicCreated");
    const { topicId, description: eventDescription, endTime: eventEndTime } = event.args;

    console.log(`Topic created successfully!`);
    console.log(`Topic ID: ${topicId}`);
    console.log(`Description: ${eventDescription}`);
    console.log(`End Time: ${new Date(eventEndTime * 1000).toLocaleString()}`);
  } catch (error) {
    console.error("Error creating topic:", error);
  }
}

createVotingTopic();

```
Running the command `npx hardhat run scripts/createVotingTopic.js --network neox-t4` you should see the transaction is created.
```
Compiled 1 Solidity file successfully (evm target: paris).
https://neoxt4seed1.ngd.network
Estimated Gas: 241034
Transaction sent. Waiting for confirmation...
Topic created successfully!
Topic ID: 1
Description: Vote for the best meme of the month!
End Time: 11/12/2024, 22:25:46
```
Going on the explorer you should see an event for the [following transaction](https://neoxt4scan.ngd.network/tx/0xe790089aefb1c05ce62605875923433dd53eca858beba0edb270c8c82a5da530)

## Conclusion
Congratulations you successfully manage to deploy your NeoX Voting contract on NeoX chain. To recap you learnt how to:

- Compile a smartcontract on NeoX chain
- Deploy a smartcontract on NeoX chain
- Interact with your deployed smartcontract on NeoX

Now you're fully equiped to apply the skills from this tutorial to build out your own custom dApp project! As always if you have
any questions don't hesitate to reach out on the [NeoX Discord server](https://discord.gg/neosmarteconomy).