const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'NEO Developer Resource',
  tagline: 'Find a comprehensive collection of tools and resources to help you build outstanding applications on the Neo blockchain.',
  url: 'https://neo.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon-32x32.png',
  organizationName: 'neo.org', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  onBrokenLinks: 'ignore', //this is here only for TESTING
  plugins: [
    './src/plugins/custom-tags-list-plugin.js',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/neo-project/neo-dev-portal//blob/master',
        },
        blog: {
          routeBasePath: "tutorials",
          path: "tutorials",
          blogTitle: 'NEO Development Tutorials!',
          blogDescription: 'Find a comprehensive collection of tools and resources to help you build outstanding applications on the Neo blockchain.',
          postsPerPage: 12,
          blogSidebarTitle: "Recent tutorials",
          blogSidebarCount:0,
        },
        theme: {
          customCss: require.resolve('./src/css/tailwind.output.css'),
          // customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'TR8VWJ8YS7',
        apiKey: 'f1f30e0d9ee66fa7a8c760cf5750e085',
        indexName: 'neo-dev-portal'
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true
      },
      navbar: {
        title: '',
        logo: {
          alt: 'Neo Developer',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'n3/overview',
            position: 'right',
            label: 'Docs',
          },
          // {
          //   type: 'doc',
          //   docId: 'neofs/neofs',
          //   position: 'right',
          //   label: 'NeoFS',
          // },
          {to: '/tutorials', label: 'Tutorials', position: 'right'},
          {to: '/resources', label: 'Resources & Tooling', position: 'right'},
          {
            type: 'doc',
            docId: 'faq/basic',
            position: 'right',
            label: 'FAQ',
          },
          // {to: '/walletconnect', label: 'WalletConnect', position: 'right'},
         
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/tutorials',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/NEO/',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/rvZFQ5382k',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/neo_blockchain',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/neo-project',
              },
            ],
          },
        ],
        copyright: `Copyright © Neo Team 2014-2021`,
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
});
