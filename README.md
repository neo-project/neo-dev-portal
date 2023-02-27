# Neo Dev Portal

Welcome to Neo Developer Portal Repository.
This is an open-source community effort, so feel free to suggest new topics, add new content, and provide examples wherever you think it might be helpful. All documentation can be edited via GitHub.

**How to contribute**  
Neo Developer Portal is built using [Docusaurus](https://docusaurus.io/) v2.


1. Fork the repo
    1. Setting up your local environment — This is optional.
2. Make some changes
3. Submit a PR to `dev` branch
    1. Use pull_to_request template
    2. Netlify will pick up a PR and generate a publicly accessible preview fo you.
    3. Check the preview and confirm that it looks and function as expected
4. Wait for a review
    1. Neo developer portal team will review your PR
    2. Acceptable PRs will be approved and merged into `dev` branch
5. Release
    1. Neo developer portal team will periodically merge `dev` into `main` branch and it will automatically deploy to [docs.neo.org](http://docs.neo.org) 
    2. View history of releases on Github


**How to create a tutorial**

1. Create a new directory in `tutorials` Using this format `YYYY-MM-DD-your-tutorial-title` 
2. Create `[index.md](http://index.md)` inside the directory.
3. If your tutorial contains images, You can create a new directory at same level as the `[index.md](http://index.md)` file and put your images in there so you can refer to them in your markdown file like the following `![img](assets/walletconnect-diagram.png)`
4. In your `index.md` you can use following **front-matter** tags

```jsx
---
title: 'An Introduction to Contract Development on Neo'
description: "This tutorial will cover the basic structure of a decentralized application running on the Neo blockchain. It’s designed to be a brief survey of all aspects of development including architecture, contract development, backend logic, and front-end."
author: Link, the Operator
tags: ["BEGINNER", "NEONJS", "NEOEXPRESS","BOA","SMART CONTRACT"]
sidebar: true
image: ./assets/images/walletconnect-diagram.png
skill: BEGINNER
---
```
