/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `duhstin.com`,
    siteUrl: `https://duhstin.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Duhstin.com`,
        short_name: `Duhstin.com`,
        start_url: `/`,
        background_color: `#5bbad5`,
        theme_color: `#da532c`,
        display: `standalone`,
        icon: `src/favicon/favicon.png`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
  ],
}
