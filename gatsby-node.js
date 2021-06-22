const path = require("path");

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(
    `
      {
        allGoogleDocs(
          filter: { template: { eq: "post" } }
          sort: { fields: date, order: DESC }
        ) {
          nodes {
            childMdx {
              excerpt
              timeToRead
            }
            id
            modifiedTime(fromNow: true)
            name
            slug
            cover {
              image {
                childImageSharp {
                  gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                }
              }
            }
            tags
          }
        }
      }
    `
  );
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create blog-list pages
  const posts = result.data.allGoogleDocs.nodes;
  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);
  console.log(posts.length);
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/blog-index.js"),
      context: {
        totalPosts: posts.length,
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });
};
