import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//import ReactHtmlParser from 'react-html-parser'; //parse html
//import Image from "../components/utils/imageRelativePath"; //search for existing images and display it based onf ile name

import Link from "../components/utils/link" //custom links

import Layout from "../components/layout"
import SEO from "../components/seo"

//import Link from "../components/utils/link" //custom links
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
//const BackgroundImage = styled(Image)``;

import Image from "../components/utils/imageRelativePath"; //search for existing images and display it based onf ile name

const ServicePageWrapper = styled.div`
  .PageTitle, .ServiceColTitle, .estimatePrompt {
    color: white;
  }
`;

const SizedServiceImg = styled.div`
  max-width: 100px;
  max-height: 100px;
  width: auto;
  height: auto;
  margin: 0 auto;
  margin-bottom: 10px;
  overflow: hidden;
  img {
    filter: invert(100%);
  }
`

const PageTemplate = ({ data }) => {
  console.log(data)
  const { site, pages } = data.websiteData //site data and page specific data
  const { siteURL, siteTitle, siteDescription } = site
  const { services } = pages

  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} url={siteURL} pageData={services} />
      <Container>
        <ServicePageWrapper>
          <div className="row pt-5 pb-5 text-center">

  <div className="col-md-12 col-sm-12">
      <h1 className="PageTitle">What we do</h1>
      <p>We help Brands and Businesses build communication across Web, Print and Digital Medium.</p>
  </div>

  </div>

  <div className="row">

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="text-center">
            <i className="fa fa-desktop"></i>
            <SizedServiceImg>
              <Image filename="pipeline.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="ServiceColTitle">Plumbing</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="text-center">
            <i className="fa fa-code"></i>
            <SizedServiceImg>
              <Image filename="drywall.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="ServiceColTitle">Drywall/Rot Damage</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="text-center">
            <i className="fa fa-html5"></i>
            <SizedServiceImg>
              <Image filename="decksicon.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="ServiceColTitle">Decks</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="text-center">
            <i className="fa fa-pencil"></i>
            <SizedServiceImg>
              <Image filename="electricWire.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="ServiceColTitle">Electrical</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="text-center">
            <i className="fa fa-flag-o"></i>
            <SizedServiceImg>
              <Image filename="foundation.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="ServiceColTitle">Foundation Work</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="text-center">
            <i className="fa fa-globe"></i>
            <SizedServiceImg>
              <Image filename="window.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="ServiceColTitle">Window and Door Replacements</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="text-center">
            <i className="fa fa-pencil"></i>
            <SizedServiceImg>
              <Image filename="plan.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="ServiceColTitle">Plans and Permits</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="text-center">
            <i className="fa fa-flag-o"></i>
            <SizedServiceImg>
              <Image filename="fence.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="ServiceColTitle">Fences and Retaining Walls</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="text-center">
            <i className="fa fa-globe"></i>
            <SizedServiceImg>
              <Image filename="remodel.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="ServiceColTitle">Remodels and Additions</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
      <Link className="btn primary estimatePrompt" to={`/contact/`}>GET A FREE ESTIMATE</Link>
    </div>

  </div>
        </ServicePageWrapper>
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
