import { Carousel } from 'antd';
import { graphql } from "gatsby";
import React from "react";
import Container from 'react-bootstrap/Container';
import styled from "styled-components";
//import StyledBackgroundSection from "../components/utils/imageBackground"; //search for existing images and display it based onf ile name
import Layout from "../components/layout";
import SEO from "../components/seo";
//import ReactHtmlParser from 'react-html-parser'; //parse html
import Image from "../components/utils/imageRelativePath"; //search for existing images and display it based onf ile name
import Link from "../components/utils/link"; //custom links
import BGImage from "./images/avantecture-0Vdrg5pR7NY-unsplash.png";

import "./styles/index.scss";


const contentStyle = {
  height: '400px',
  color: '#fff',
  lineHeight: '400px',
  textAlign: 'center',
  background: '#364d79',
};

const ImagePosition = styled.div`
  width:100%;
  position: absolute;
  height: 100%;
  top:0;
  left:0;
  z-index: -2;
  // @media(max-width: 576px) {
  //   display: none;
  // }
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

const ConentContainer = styled.div`

.serviceArea {
    padding: 50px;
    background: #232323;
    text-align: center;
    span {
      padding:0 15px;
      font-weight: bold;
      font-size: 1rem;
    }
  }
  .carouselContainer {
    margin:40px 0;

    h1 {
      color: white;
      text-align: center;
    }
    .carouselElement {
      padding: 30px 0;
    }
  }
  @media(max-width: 576px) {
    .serviceArea {
      padding: 30px;
      span {
        font-size: 1rem;
        padding: 0 8px;
      }
    }

    .carouselContainer {
      h1 {
        font-size 1.25rem;
      }
  
      .carouselElement {
        padding: 15px 0;
      }
    }
  }
`;

const PageTemplate = ({ data }) => {
  const { site, pages } = data.websiteData //site data and page specific data
  const { siteURL, siteTitle, siteDescription } = site
  const { home } = pages

  const siteTitleUnique = 'Home Page' // Home Page | Scoppettone Builders
  const siteDescriptionUnique = 'Scoppettone Building. General Contractor & Project Management. Your trusted local general contractor. 13 years in the making. Santa Cruz County.'

  return (
    <Layout>
      <SEO title={siteTitleUnique} description={siteDescriptionUnique} url={siteURL} pageData={home} />
      <div className="image-backdrop">
            <div className="container">
                  <div className="hero">
                    <div className="supTitle">General Contractor & Project Managment</div>
                    <h1 className="companyTitle">
                      Scoppettone Inc.
                    </h1>
                    <p className="subTitle">
                      Your trusted local general contractor.<br />
                      Working since 1989.
                    </p>
                    <p className="licensed">Licensed and fully insured.</p>
                    <p className="licensed-number">License Number: 894348</p>
                    <Link className="button btn estimateButton" to={`/contact/`}>GET A FREE ESTIMATE</Link>
                    {/* div.hero */}
                  </div> 
                  {/* <Opacity />
                <ImagePosition>
                  <Image filename="avantecture-0Vdrg5pR7NY-unsplash.png" alt={`backgroung image`} />
                </ImagePosition> */}
            </div>
            
      </div>
         

      <ConentContainer>
        <section className="serviceArea">
          <div><span>Aptos</span> <span>Capitola</span> <span>Felton</span> <span>Live Oak</span> <span>Pasatiempo</span> <span>Santa Cruz</span> <span>Scotts Valley</span> <span>Soquel</span></div>
        </section>
        <Container>
          <div>

          </div>
          <section className="carouselContainer">
            <h1>Best of Scoppettone Building</h1>
            <div className="carouselElement">
              <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>
          </section>
        </Container>
      </ConentContainer>
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
