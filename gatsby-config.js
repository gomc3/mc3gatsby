const path = require("path");
module.exports = {
  siteMetadata: {
    title: "Monmouth County Curriculum Consortium",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: path.resolve("./src/components/layout.js"),
        },
      },
    },
    "gatsby-plugin-sharp",
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
    "gatsby-plugin-postcss",
  ],
};
