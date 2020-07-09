import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//import ReactHtmlParser from 'react-html-parser'; //parse html
//import Image from "../components/utils/imageRelativePath"; //search for existing images and display it based onf ile name

import Layout from "../components/layout"
import SEO from "../components/seo"

//import Link from "../components/utils/link" //custom links


//const BackgroundImage = styled(Image)``;


const PageTemplate = ({ data }) => {

  console.log(data)
  const { site, pages } = data.websiteData //site data and page specific data
  const { siteURL, siteTitle, siteDescription } = site
  const { portfolio } = pages

  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} url={siteURL} pageData={portfolio} />
      <h1>Website Title: {siteTitle}</h1>
      <h1>Website Page: {portfolio.name}</h1>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query {
    websiteData {
      pages {
        portfolio {
          description
          name
          slug
        }
      }
      site {
        siteTitle
        siteURL
        sitePhoneNumber
        siteDescription
      }
    }
  }
`
