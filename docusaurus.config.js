// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Tools Dev Blog',
  tagline: 'A series of blogs covering programing in various forms',
  url: 'https://byronmayne.github.io',
  baseUrl: '/',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Byron Mayne',
  projectName: 'tools-dev-blog', 
  trailingSlash: true,
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: "Tools Dev Blog",
      logo: {
        alt: 'tools dev blog logo',
        src: 'img/icon.png',
        width: 32,
        height: 32,
      },
      items: [
        {
          to: 'blog',
          activeBasePath: 'docs',
          label: 'Blog',
          position: 'left',
        },
      ],
    }
  },
  plugins: [
    ['@docusaurus/theme-classic', {}],
    ['@docusaurus/plugin-content-docs', {}],
    ['@docusaurus/plugin-content-blog', {}],
    ['@docusaurus/plugin-content-pages', {}],
    ['@docusaurus/plugin-debug', {}],
    ['@docusaurus/plugin-sitemap', {}],
  ]
};

module.exports = config;
