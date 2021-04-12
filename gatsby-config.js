module.exports = {
  siteMetadata: {
    title: `gatsby-starter-jvh`,
    description: `gatsby-starter-jvh.`,
    author: `@jvhellemondt`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-jvh`,
        short_name: `gatsby-starter-jvh`,
        start_url: `/`,
        background_color: `#FEFEFE`,
        theme_color: `#FF9933`,
        display: `minimal-ui`,
        // @TODO: remove once there is a favicon
        include_favicon: false,
        icon: `./src/assets/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    // @TODO: enable PWA - https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    `gatsby-plugin-typescript`
  ]
}
