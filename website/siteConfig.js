const siteConfig = {
  title: 'GitPaint',
  tagline: ' ',
  url: 'https://gitpaint.github.io',
  baseUrl: '/',
  projectName: 'gitpaint',
  organizationName: 'morrys',
  headerLinks: [
    { doc: 'gitpaint', label: 'Docs' },
    {
      href: 'https://github.com/gitpaint/gitpaint',
      label: 'GitHub',
    },
    { languages: false },
  ],

  /* path to images for header/footer */
  headerIcon: 'img/favicon.ico',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/favicon.ico',
  colors: {
    primaryColor: '#008ed8',
    secondaryColor: '#17afff',
  },

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Lorenzo Di Giacomo`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
  enableUpdateTime: true,
  enableUpdateBy: true,
  // docsSideNavCollapsible: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  twitterUsername: "m0rrys",

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/gitpaint/gitpaint',
};

module.exports = siteConfig;