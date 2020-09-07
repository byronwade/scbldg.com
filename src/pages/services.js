import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//import ReactHtmlParser from 'react-html-parser'; //parse html
//import Image from "../components/utils/imageRelativePath"; //search for existing images and display it based onf ile name

import Layout from "../components/layout"
import SEO from "../components/seo"

//import Link from "../components/utils/link" //custom links
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

//const BackgroundImage = styled(Image)``;


const PageTemplate = ({ data }) => {
  console.log(data)
  const { site, pages } = data.websiteData //site data and page specific data
  const { siteURL, siteTitle, siteDescription } = site
  const { services } = pages

  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} url={siteURL} pageData={services} />
      <Container>
      <div className="row pt-5 pb-5 text-center">

        <div className="col-md-12 col-sm-12">
            <h1>What we do</h1>
            <p>We help Brands and Businesses build communication across Web, Print and Digital Medium.</p>
        </div>

      </div>

    <div className="row">

          <div className="col-md-4 col-sm-6 pb-5">
              <div className="text-center">
                  <i className="fa fa-desktop"></i>
                  <h3>Responsive Design</h3>
                  <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
              </div>
          </div>

          <div className="col-md-4 col-sm-6 pb-5">
              <div className="text-center">
                  <i className="fa fa-code"></i>
                  <h3>Easy to Customize</h3>
                  <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
              </div>
          </div>

          <div className="col-md-4 col-sm-6 pb-5">
              <div className="text-center">
                  <i className="fa fa-html5"></i>
                  <h3>HTML5 &amp; CSS3</h3>
                  <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
              </div>
          </div>

          <div className="col-md-4 col-sm-6 pb-5">
              <div className="text-center">
                  <i className="fa fa-pencil"></i>
                  <h3>Google Fonts</h3>
                  <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
              </div>
          </div>

          <div className="col-md-4 col-sm-6 pb-5">
              <div className="text-center">
                  <i className="fa fa-flag-o"></i>
                  <h3>Fontawesome Icons</h3>
                  <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
              </div>
          </div>

          <div className="col-md-4 col-sm-6 pb-5">
              <div className="text-center">
                  <i className="fa fa-globe"></i>
                  <h3>24 Support</h3>
                  <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
              </div>
          </div>

      </div>
    </Container>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query {
    websiteData {
      pages {
        services {
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
