const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  plugins: ['@docusaurus/theme-live-codeblock'],
  themeConfig: {
    liveCodeBlock: {
      /**
       * 实时效果显示的位置，可位于编辑器上方或下方。
       * 可为："top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
  },
  title: 'Tohsaka888的个人博客',
  tagline: 'Dinosaurs are cool',
  url: 'https://tohsaka888.github.io',
  baseUrl: '/docusauras-blog-client/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tohsaka888', // Usually your GitHub org/user name.
  projectName: 'docusauras-blog-client', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Tohsaka888的个人博客',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '文档',
        },
        {to: '/blog', label: '日记(开发中)', position: 'left'},
        {
          href: 'https://github.com/tohsaka888',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '文档',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/tohsaka888',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '日记(开发中)',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/tohsaka888',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Tohsaka888, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
