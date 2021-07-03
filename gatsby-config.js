const path = require("path");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    siteUrl: `https://gomc3.org`,
    title: "Monmouth County Curriculum Consortium",
    description:
      "The Monmouth County Curriculum Consortium (MC3) is a non-profit educational organization dedicated to sharing ideas and resources to improve learning and leadership in our schools.",
    twitterUsername: "@mc3network",
    siteImage: "/siteMc3Image.png",
  },
  plugins: [
    "gatsby-plugin-catch-links",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-google-docs",
      options: {
        folder: `0AJ6So4BEbH5XUk9PVA`,
        createPages: true,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-unwrap-images",
          "gatsby-remark-images",
          "gatsby-remark-gifs",
        ],
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `5c70jkxf9dev`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, `src`, `images`),
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: path.join(__dirname, `src`, `pages`),
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Monmouth County Curriculum Consortium`,
        short_name: `MC3`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#1d4ed8`,
        display: `standalone`,
        icon: `src/images/favicon-icon.png`,
      },
    },
  ],
};
