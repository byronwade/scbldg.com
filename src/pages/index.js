import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//import ReactHtmlParser from 'react-html-parser'; //parse html
import Image from "../components/utils/imageRelativePath"; //search for existing images and display it based onf ile name
//import StyledBackgroundSection from "../components/utils/imageBackground"; //search for existing images and display it based onf ile name

import Layout from "../components/layout"
import SEO from "../components/seo"

import Link from "../components/utils/link" //custom links

import Container from 'react-bootstrap/Container';


const ImagePosition = styled.div`
  width:100%;
  position: absolute;
  height: 100%;
  top:0;
  left:0;
  z-index: -2;
`;

const Opacity = styled.div`
  width:100%;
  position: absolute;
  height: 100%;
  top:0;
  left:0;
  z-index: -1;
  background: rgba(0, 0, 0, 0.4);
`;

const Hero = styled.div`
  padding:103px 30px 73px 30px;
  overflow: hidden;
  position: relative;
  margin-top: -73px;
  .supTitle {
    padding-top: 20px;
    font-size: 23px;
  }
  h1 {
    color: #F9E192;
    font-size:90px;
    line-height:110px;
    text-transform: uppercase;
    padding-top:0;
    margin-top:10px;
    margin-bottom:0;
  }
  .subTitle {
    font-size: 30px;
    line-height:40px;
    padding:20px 0;
  }
  p {
    font-size:20px;
    margin-bottom:0;
  }
  .licensed {
    color: #F9E192;
  }
  .button {
    padding:15px 30px;
    font-size: 20px;
    background-color:#F9E192;
    color: #333;
    border:none;
    border-radius: 5px;
    margin-top: 30px;
    font-weight: bold;
    display: block;
    width: fit-content;
    text-decoration: none;
    &:hover {
      background-color:#ffcc23;
    }
  }
`;

const PageTemplate = ({ data }) => {
  const { site, pages } = data.websiteData //site data and page specific data
  const { siteURL, siteTitle, siteDescription } = site
  const { home } = pages

  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} url={siteURL} pageData={home} />
      <Hero>
        <div className="container">
          <div className="supTitle">General Contractor & Project Managment</div>
          <h1>
            Scoppettone <br />
            Building
          </h1>
          <p className="subTitle">
            Your trusted local general contractor.<br />
            13 years in the making.
          </p>
          <p className="licensed">Licensed and fully insured.</p>
          <p>License Number: 894348</p>
          <Link className="button" to={`/contact/`}>GET A FREE ESTIMATE</Link>
        </div>
        <Opacity />
        <ImagePosition>
          <Image filename="avantecture-0Vdrg5pR7NY-unsplash.png" alt={`backgroung image`} />
        </ImagePosition>
      </Hero>
      <div className="container">
        <section>
          <h1>AREAS WE SERVE</h1>
          <p>Aptos | Capitola | Felton | Live Oak | Pasatiempo | Santa Cruz |  Scotts Valley | Soquel</p>
        </section>
      </div>
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
