exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions

  // Data can come from anywhere, but for now create it manually
  const pageData = {
    site: {
      siteTitle: `Scopetonee Builders`,
      siteURL: `http://www.scbldg.com/`,
      sitePhoneNumber: `8314306011`,
      siteAuthor: {
        name: `Byron Wade`,
        summary: `who lives and works in San Francisco building useful things.`,
      },
      siteDescription: `A starter blog demonstrating what Gatsby can do.`,
      siteSocial: {
        twitter: `byronwade18`,
      },
    },
    pages: {
      home: {
        name: 'home',
        slug: 'home',
        description: 'Main Home Page'
      },
      services: {
        name: 'services',
        slug: 'services',
        description: 'Main services Page'
      },
      portfolio: {
        name: 'portfolio',
        slug: 'portfolio',
        description: 'Main portfolio Page'
      },
      contact: {
        name: 'contact',
        slug: 'contact',
        description: 'Main contact Page'
      }
    }
  }

  const nodeContent = JSON.stringify(pageData)

  const nodeMeta = {
    id: createNodeId(Math.random()),
    internal: {
      type: `WebsiteData`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(pageData)
    }
  }

  const node = Object.assign({}, pageData, nodeMeta)
  createNode(node)
}
