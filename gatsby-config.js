module.exports = {
  siteMetadata: {
    title: `Have We Got A Fucking Trade Deal Yet?`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    `gatsby-plugin-glamor`,
    `gatsby-transformer-csv`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: `data`,
      },
    },
    {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-79395723-2",
    },
  },
    `gatsby-plugin-netlify`, // make sure this is last in the array
  ],
}
