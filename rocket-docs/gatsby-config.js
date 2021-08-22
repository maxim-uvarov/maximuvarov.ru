module.exports = {
  siteMetadata: {
    siteTitle: `Сайт Максима Уварова`,
    defaultTitle: `Сайт Максима Уварова`,
    siteTitleShort: `Maxim Uvarov's site`,
    siteDescription: `Мысли на тему аналитики, медитации и другого`,
    siteUrl: `https://maximuvarov.ru`,
    siteAuthor: `@40_02`,
    siteImage: `/banner.png`,
    siteLanguage: `ru`,
    themeColor: `#8257E6`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/maxim-uvarov/maximuvarov.ru`,
        baseDir: `rocket-docs`,
      },
    },    
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Source Code Pro', 'PT Mono']
    //     }
    //   }
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.svg`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://maximuvarov.ru`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
