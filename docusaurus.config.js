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
  organizationName: 'https://github.com/neo-project', // Usually your GitHub org/user name.
  projectName: 'neo-dev-portal', // Usually your repo name.
  onBrokenLinks: 'ignore', //this is here only for TESTING
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        label: 'English',
      },
      ja: {
        label: '中文',
      },
    },
  },
  plugins: [
    './src/plugins/custom-tags-list-plugin.js',
  ],
  scripts: [
    '/js/clarity.js',
    'https://www.googletagmanager.com/gtag/js?id=G-5M9291B1QD',
    '/js/ga.js',
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
          routeBasePath: "docs",
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/neo-project/neo-dev-portal//blob/master',
          showLastUpdateAuthor: true,
          showLastUpdateTime: false,
        },
        blog: {
          routeBasePath: "tutorials",
          path: "tutorials",
          blogTitle: 'NEO Development Tutorials!',
          blogDescription: 'Find a comprehensive collection of tools and resources to help you build outstanding applications on the Neo blockchain.',
          postsPerPage: 12,
          blogSidebarTitle: "Recent tutorials",
          blogSidebarCount:0,
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()}.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/tailwind.output.css'),
          // customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'G-5M9291B1QD',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      algolia: {
        appId: '9XZWQJ9630',
        apiKey: '977b10ae6a7dbd92c6f26e6ba138e20a',
        indexName: 'developers-neo',
        debug: false
      },
      prism: {
        additionalLanguages: ['csharp','go',],
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
          // {
          //   type: 'doc',
          //   docId: 'recipes/readme',
          //   position: 'right',
          //   label: 'Recipes',
          // },
          {to: '/tutorials', label: 'Tutorials', position: 'right'},
          {to: '/resources', label: 'Resources & Tooling', position: 'right'},
          {to: '/converter', label: 'Converter', position: 'right'},
          {
            type: 'doc',
            docId: 'faq/basic',
            position: 'right',
            label: 'FAQ',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
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
        copyright: `Copyright © Neo Team 2014-2023`,
      },
      prism: {
        theme: lightCodeTheme,
        additionalLanguages: ['java']
      },
    }),
});
