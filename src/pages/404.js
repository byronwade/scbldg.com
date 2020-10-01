import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ data, location }) => {

  const { site, pages } = data.websiteData //site data and page specific data
  const { siteURL, siteTitle, siteDescription } = site

  const siteTitleUnique = "404: Not Found"
  const siteDesciptionUnique = "Not Found Page Scoppettone Building"

  return (
    <Layout>
      <SEO title={siteTitleUnique} description={siteDesciptionUnique} location={location} url={siteURL} /> 
      <h1 className="mt-5 text-center text-white">Not Found</h1>
      <p className="text-center">You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    websiteData {
      site {
        siteTitle
      }
    }
  }
`
