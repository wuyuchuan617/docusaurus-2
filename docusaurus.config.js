// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
const math = require("remark-math");
const katex = require("rehype-katex");
const lightCodeTheme = require("prism-react-renderer/themes/vsDark");
const darkCodeTheme = require("prism-react-renderer/themes/vsDark");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Anytype",
  tagline: "Hi",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.jpg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".s
  i18n: {
    defaultLocale: "zh-Hant",
    locales: ["zh-Hant"], //"en",
    localeConfigs: {
      en: {
        htmlLang: "en-GB",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "docs",
          path: "docs",
          sidebarPath: require.resolve("./sidebars.js"),
          lastVersion: "current",
          onlyIncludeVersions: ["current"],
          remarkPlugins: [math],
          rehypePlugins: [katex, { strict: false }],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "explore",
        path: "explore",
        routeBasePath: "explore",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "blockchain",
        path: "blockchain",
        routeBasePath: "blockchain",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: "e2c84e8bf4988c8a36ed94744a94aa5b",
        indexName: "anytype",
        appId: "EU5HM46PN4",
      },
      navbar: {
        title: "Anytype",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.jpg",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Notes",
          // },
          // {
          //   to: "/explore/intro", // ./docs-api/Intro.md
          //   label: "explore",
          //   position: "left",
          //   activeBaseRegex: `/explore/`,
          // },
          {
            to: "/blockchain/category/blockchain-program", // ./docs-api/Intro.md
            label: "Blockchain",
            position: "left",
            activeBaseRegex: `/blockchain/`,
          },
          // { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/wuyuchuan617",
            label: "GitHub",
            position: "right",
          },
          {
            type: "localeDropdown",
            position: "left",
          },
        ],
      },
      footer: {
        // style: "light",
        links: [
          {
            title: "Note",
            items: [
              {
                label: "Blockchain",
                to: "/blockchain/category/blockchain-program",
              },
            ],
          },
          {
            title: "Community",
            items: [
              // {
              //   label: "Website",
              //   href: "https://spaceyu.com/",
              // },
              // {
              //   label: "Stack Overflow",
              //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
              // },
              {
                label: "Linkedin",
                href: "https://www.linkedin.com/in/yu-chuan-wu/",
              },
            ],
          },
          {
            title: "More",
            items: [
              // {
              //   label: "Blog",
              //   to: "/blog",
              // },
              {
                label: "GitHub",
                href: "https://github.com/wuyuchuan617",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}  Anytype. `,
      },
      prism: {
        additionalLanguages: ["solidity"],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
