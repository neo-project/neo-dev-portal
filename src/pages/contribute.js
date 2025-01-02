import React from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
export default function Contribute() {
    return (
        <Layout>
            <div className="twcontainer  mx-auto max-w-6xl px-4 lg:px-0 pt-20">
                
                <div className="items-center mb-12 flex flex-col">
                    <div className='bg-gray-100 rounded-full h-12 w-12 items-center justify-center flex mb-6'>
                        <svg className='' width="23" height="14" viewBox="0 0 23 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16 13L22 7L16 1" stroke="#10E6A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7 1L1 7L7 13" stroke="#10E6A0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <h1 className="text-4xl text-secondary font-bold uppercase mb-8">HELP THE COMMUNITY</h1>
                    <p className='text-secondary'>Neo documentation is a community-driven effort. Join us by contributing your knowledge to help Neo developers.</p>
                </div>
                <img src="/contribute/header.png" />
                <div className="mt-12 flex items-center justify-center">
                    <a target="_blank" className="bg-primary text-secondary px-6 py-2 font-semibold block text-center hover:text-secondary hover:no-underline" href="https://github.com/neo-project/neo-dev-portal">Contribute</a>
                </div>
                <div className="mt-12 flex flex-col gap-4 mb-12">
                    <h3>How to create a tutorial</h3>
                    <p>1. Create a new directory in <code>tutorials</code> directory using this format   <code>YYYY-MM-DD-your-tutorial-title</code>
                        <p className="">YYYY-MM-DD is the date of your tutorial. Tutorials are sort by date in descending order.</p>
                    </p>
                    <p>2. Create <code>index.md</code> inside the directory.</p>
                    <p>3. If your tutorial contains images, you can create a new directory at same level as the <code>index.md</code> file and put your images in there so you can refer to them in your markdown file like the following   <code>![img](./assets/walletconnect-diagram.png)</code></p>
                    <p>4. In your <code>index.md</code> you can use following front-matter tags. Frontmatter must be in the very first line of your Markdown file.</p>
                    <pre className="language-markdown whitespace-pre-wrap">
                        <p>---</p>
                        <p>title: 'An Introduction to Contract Development on Neo'</p>
                        <p>description: "Short description of your tutorials. A few lines is ideal. We have a line clamp css to limit it to onlye 3 lines"</p>
                        <p>author: CoZ.io</p>
                        <p>tags: ["BEGINNER", "NEONJS", "NEOEXPRESS","BOA","SMART CONTRACT"]</p>
                        <p>sidebar: true</p>
                        <p>skill: BEGINNER</p>
                        <p>image: ./tutorial_local_dir/image.png</p>
                        <p>---</p>
                    </pre>
                </div>
            </div>
        </Layout>
    )
}
