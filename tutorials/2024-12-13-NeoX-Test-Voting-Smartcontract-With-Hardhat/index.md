---
title: '[NeoX Tutorial] Test voting contract using Hardhat'
date: '2024-11-27'
lastmod: '2024-11-27'
tags: ['neox', 'javascript', 'solidity', 'technical']
draft: false
summary: 'In this article we will see how to test the voting contract we created in the previous tutorial.'
authors: ['snakey_rob']
---

## Test a solidity smart contract for on chain voting on Neo X Test chain.

## Intro

For the purpose of this tutorial I'm going to assume you have followed this tutorial [Create and Deploy a smartcontract](https://medium.com/@robvtilburg2/create-and-deploy-a-solidity-smart-contract-for-on-chain-voting-on-neo-x-test-chain-72d9bc520b2c).
If you haven't please make sure to read and perform that one first or get the source from my github.

If you are new to blockchain development and don’t know where to start, or if you just want to understand how to test contracts on NeoX blockchain,
this guide is for you. We will walk through testing a voting smart contract on the NeoX test network 

## Step 1: Install additional dependencies:
In order to execute the test we will need to install additonal packages before we can continue.

```
npm install --save-dev hardhat@^2.17.0 ethers@5.7.2 @nomicfoundation/hardhat-chai-matchers@^1.0.4 chai@^4.3.7
npm install @openzeppelin/contracts
```

## Step 2: Create a ERC20Mock
Because we need to mock the contract in order to test it, we will need to a new file ERC20Mock.sol to the contracts folder.
The contents of the ERC20Mock.sol file will be:
```
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract ERC20Mock is ERC20 {
    constructor(string memory name, string memory symbol, uint256 initialSupply) ERC20(name, symbol) {
        _mint(msg.sender, initialSupply);
    }
}
```

## Step 3: Compile the mock
To use the mock we need to run hardhat compile like this:
```
npx hardhat compile
```

The response should look like this:
```
Compiled 6 Solidity files successfully (evm target: paris).
```

## Step 4: Create the test suite
We will start by creating a `test` folder in our projects. This is the folder that will contain our test files.

We will now add the following `NdMemeVoting.test.js` file in this contracts folder:

The requirements for the test are:
1. should create a new topic
1. should allow voting on a topic
1. should prevent double voting
1. should prevent voting after end time

So for that the first step is to setup the mock you do this by creating a beforeEach method.
For our voting contract it will look like this:
```
 beforeEach(async function () {
    // Deploy ERC20Mock contract
    const Token = await ethers.getContractFactory("ERC20Mock");
    token = await Token.deploy("MockToken", "MTK", ethers.utils.parseEther("1000"));
    await token.deployed();

    // Deploy NdMemeVoting contract
    const NdMemeVoting = await ethers.getContractFactory("NdMemeVoting");
    [owner, addr1, addr2] = await ethers.getSigners();
    ndMemeVoting = await NdMemeVoting.deploy();
    await ndMemeVoting.deployed();
  });
```

Then the next step is to create functions that test the contract functionality as specified.
You will need to create functions starting with it().
An example of this implementation would be:
```
it("should create a new topic", async function () {
  ...
  expect(topicDetails.description).to.equal(description);
  ...
}
```

I will skip over the exact testing logic because that is contract dependant, but when I put tests together for my contract you will get a file that looks like this.

```sol filename="NdMemeVoting.test.js"
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NdMemeVoting Contract", function () {
  let NdMemeVoting, ndMemeVoting, Token, token;
  let owner, addr1, addr2;

  beforeEach(async function () {
    // Deploy ERC20Mock contract
    const Token = await ethers.getContractFactory("ERC20Mock");
    token = await Token.deploy("MockToken", "MTK", ethers.utils.parseEther("1000"));
    await token.deployed();

    // Deploy NdMemeVoting contract
    const NdMemeVoting = await ethers.getContractFactory("NdMemeVoting");
    [owner, addr1, addr2] = await ethers.getSigners();
    ndMemeVoting = await NdMemeVoting.deploy();
    await ndMemeVoting.deployed();
  });


  it("should create a new topic", async function () {
    const description = "Best Meme of 2024";
    const endTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
    const options = ["Option1", "Option2"];

    await expect(ndMemeVoting.createTopic(description, endTime, options, token.address))
      .to.emit(ndMemeVoting, "TopicCreated")
      .withArgs(0, description, endTime);

    const topicCount = await ndMemeVoting.getTopicCount();
    expect(topicCount).to.equal(1);

    const topicDetails = await ndMemeVoting.getTopicDetails(0);
    expect(topicDetails.description).to.equal(description);
    expect(topicDetails.endTime).to.equal(endTime);
    expect(topicDetails.optionDescriptions).to.deep.equal(options);
  });

  it("should allow voting on a topic", async function () {
    const description = "Best Meme of 2024";
    const endTime = Math.floor(Date.now() / 1000) + 3600;
    const options = ["Option1", "Option2"];

    await ndMemeVoting.createTopic(description, endTime, options, token.address);

    // Addr1 votes for Option1
    await ndMemeVoting.connect(addr1).vote(0, "Option1");

    // Verify voter added to topic
    const topicDetails = await ndMemeVoting.getTopicDetails(0);
    expect(topicDetails.optionDescriptions).to.include("Option1");
    // Ensure finalizeVotes is required for weight-based counting
    const votes = await ndMemeVoting.getVotes(0, "Option1");
    expect(votes).to.equal(0); // Before finalization
  });

  it("should prevent double voting", async function () {
    const description = "Best Meme of 2024";
    const endTime = Math.floor(Date.now() / 1000) + 3600;
    const options = ["Option1", "Option2"];

    await ndMemeVoting.createTopic(description, endTime, options, token.address);

    await ndMemeVoting.connect(addr1).vote(0, "Option1");

    await expect(ndMemeVoting.connect(addr1).vote(0, "Option1")).to.be.revertedWith(
      "You have already voted on this topic"
    );
  });

  it("should prevent voting after end time", async function () {
    const description = "Best Meme of 2024";
    const endTime = Math.floor(Date.now() / 1000) + 3600; // 1 hour from now
    const options = ["Option1", "Option2"];

    // Create the topic
    await ndMemeVoting.createTopic(description, endTime, options, token.address);

    // Simulate time passing by setting the block timestamp to after the voting period
    const newTimestamp = endTime + 1; // 1 second after endTime
    await hre.network.provider.send("evm_setNextBlockTimestamp", [newTimestamp]);
    await hre.network.provider.send("evm_mine"); // Mine the next block to apply the new timestamp

    // Attempting to vote after end time should revert
    await expect(ndMemeVoting.connect(addr1).vote(0, "Option1")).to.be.revertedWith(
      "Voting has ended"
    );
  });
});

```

## Step 6: Run the test
In order to run the test you can simply run the following command:
```
npx hardhat test
```

And you will see output like this:
```
  NdMemeVoting Contract
    √ should create a new topic (67ms)
    √ should allow voting on a topic (79ms)
    √ should prevent double voting (67ms)
    √ should prevent voting after end time


  4 passing (1s)

```

## Conclusion
Congratulations you successfully manage to test your NeoX Voting contract. To recap you learnt how to:

- Create a mock that can be used to test your contract
- How to implement a test file for hardhat
- How to run tests using hardhat.

Now you're fully equiped to apply the skills from this tutorial to build out your own custom dApp project! As always if you have
any questions don't hesitate to reach out on the [NeoX Discord server](https://discord.gg/neosmarteconomy).