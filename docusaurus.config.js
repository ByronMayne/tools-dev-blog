
/**
 * Gets the variable from the environment or
 * returns the default value if not found
 */
const getVariable = (variableName, defaultValue) => {
  if(process.env[variableName]) {
    return process.env[variableName];
  }
  return defaultValue;
}

const config = {
  title: 'Tools Dev Blog',
  tagline: 'A series of blogs covering programing in various forms',
  url: 'https://byronmayne.github.io',
  baseUrl: getVariable("BASE_URL", '/'),
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ByronMayne',
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
