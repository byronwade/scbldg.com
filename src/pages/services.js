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

const HeaderContent = styled.div`
  @media(max-width: 567px) {
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
      padding: 0 10px;
    }
  }
`

const GridWrapper = styled.div`
  .service-tile {
    text-align: center;
  }
  @media(max-width: 567px) {
    .service-tile {
      h3 {
        font-size: 1.5rem;
      }
      p {
        font-size: 0.75rem;
        padding: 0 15px;
      }
    }
  }
`

const SizedServiceImg = styled.div`
  max-width: 100px;
  max-height: 100px;
  width: auto;
  height: auto;
  margin: 0 auto;
  margin-bottom: 15px;
  overflow: hidden;
  img {
    filter: invert(100%);
  }
  @media(max-width: 567px) {
    max-width: 75px;
    max-height: 75px;
  }
`

const ButtonRow = styled.div`
  text-align: center;
  margin-top: 1rem;
  padding-bottom: 3rem;
 .button {
    padding:15px 30px;
    font-size: 20px;
    background-color:#F9E192;
    color: #333;
    border:none;
    border-radius: 5px;
    font-weight: bold;
    width: fit-content;
    text-decoration: none;
    &:hover {
      background-color:#ffcc23;
    }
 }
 @media(max-width: 567px) {
   .button {
     padding: 10px 20px;
     font-size: 15px;
   }
 }
`

const PageTemplate = ({ data }) => {
  console.log(data)
  const { site, pages } = data.websiteData //site data and page specific data
  const { siteURL, siteTitle, siteDescription } = site
  const { services } = pages

  const siteTitleUnique = 'Services Page' // Services Page | Scoppettone Builders
  const siteDescriptionUnique = 'Services that Scoppettone Building offers.'

  return (
    <Layout>
      <SEO title={siteTitleUnique} description={siteDescriptionUnique} url={siteURL} pageData={services} />
      <Container>
          <div className="row pt-5 pb-5 text-center">

  <div className="col-md-12 col-sm-12">
      <HeaderContent>
        <h1 className="text-white">What we do</h1>
        <p>We help Brands and Businesses build communication across Web, Print and Digital Medium.</p>
      </HeaderContent>
  </div>

  </div>

  <GridWrapper>
      <div className="row">

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="service-tile">
            <i className="fa fa-desktop"></i>
            <SizedServiceImg>
              <Image filename="pipeline.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="text-white">Plumbing</h3>
            <p className="">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="service-tile">
            <i className="fa fa-code"></i>
            <SizedServiceImg>
              <Image filename="drywall.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="text-white">Drywall/Rot Damage</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="service-tile">
            <i className="fa fa-html5"></i>
            <SizedServiceImg>
              <Image filename="decksicon.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="text-white">Decks</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="service-tile">
            <i className="fa fa-pencil"></i>
            <SizedServiceImg>
              <Image filename="electricWire.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="text-white">Electrical</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="service-tile">
            <i className="fa fa-flag-o"></i>
            <SizedServiceImg>
              <Image filename="foundation.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="text-white">Foundation Work</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="service-tile">
            <i className="fa fa-globe"></i>
            <SizedServiceImg>
              <Image filename="window.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="text-white">Window and Door Replacements</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="service-tile">
            <i className="fa fa-pencil"></i>
            <SizedServiceImg>
              <Image filename="plan.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="text-white">Plans and Permits</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="service-tile">
            <i className="fa fa-flag-o"></i>
            <SizedServiceImg>
              <Image filename="fence.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="text-white">Fences and Retaining Walls</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>

    <div className="col-md-4 col-sm-6 pb-5">
        <div className="service-tile">
            <i className="fa fa-globe"></i>
            <SizedServiceImg>
              <Image filename="remodel.png" alt={`backgroung image`}  />
            </SizedServiceImg>
            <h3 className="text-white">Remodels and Additions</h3>
            <p className="small">Multipurpose HTML Template for Creative, Agencies and Corporate. Its very easy to use &amp; Customize and the best option for your next project.</p>
        </div>
    </div>
    </div>
  </GridWrapper>
 
  <ButtonRow>
      <Link className="button btn" to={`/contact/`}>GET A FREE ESTIMATE</Link>
    </ButtonRow>
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
