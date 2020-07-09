import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//import ReactHtmlParser from 'react-html-parser'; //parse html
import Image from "../components/utils/imageRelativePath"; //search for existing images and display it based onf ile name
//import StyledBackgroundSection from "../components/utils/imageBackground"; //search for existing images and display it based onf ile name

import Layout from "../components/layout"
import SEO from "../components/seo"

//import Link from "../components/utils/link" //custom links

const ImagePosition = styled.div`
  margin-top: -73px;
  width:100%;
  position: absolute;
  height: 100%;
  top:0;
  left:0;
  z-index: -1;
`;

const Hero = styled.div`
  padding:30px;
`;

const PageTemplate = ({ data }) => {
  const { site, pages } = data.websiteData //site data and page specific data
  const { siteURL, siteTitle, siteDescription } = site
  const { home } = pages

  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} url={siteURL} pageData={home} />
      <Hero>
        <h1>Website Title: {siteTitle}</h1>
        <h1>Website Page: {home.name}</h1>
        <ImagePosition>
          <Image filename="avantecture-0Vdrg5pR7NY-unsplash.png" alt={`backgroung image`} />
        </ImagePosition>
      </Hero>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query {
    websiteData {
      pages {
        home {
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
