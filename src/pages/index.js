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
  @media(max-width: 576px) {
    display: none;
  }
`;

const Opacity = styled.div`
  width:100%;
  position: absolute;
  height: 100%;
  top:0;
  left:0;
  z-index: -1;
  background: rgba(0, 0, 0, 0.4);
  @media(max-width: 576px) {
    display: none;
  }
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
  @media(max-width: 576px) {
    padding:103px 30px 60px 30px;
    &::before {
      content: "";
      background-image: url(${BGImage});
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.45;
    }
    h1 {
      font-size: 1.75rem;
      line-height: 2.5rem;
      position: relative;
    }
    .supTitle {
      font-size: 0.75rem;
      padding-top: 10px;
      position: relative;
    }
    .subTitle {
      font-size: 1rem;
      line-height: 1.25rem;
      padding: 15px 0;
      position: relative;
    }
    .licensed {
      position: relative;
      font-size: 0.75rem;
    }
    .licensed-number {
      position: relative;
      font-size: 0.75rem;
    }
    .estimateButton {
      position: relative;
    }
    .button {
      font-size: 0.75rem;
      padding: 10px 20px;
      margin-top: 18px;
    }
  }
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

  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} url={siteURL} pageData={home} />
      <Hero>
        <div className="container">
          <div className="supTitle">General Contractor & Project Managment</div>
          <h1 className="companyTitle">
            Scoppettone <br />
            Building
          </h1>
          <p className="subTitle">
            Your trusted local general contractor.<br />
            13 years in the making.
          </p>
          <p className="licensed">Licensed and fully insured.</p>
          <p className="licensed-number">License Number: 894348</p>
          <Link className="button btn estimateButton" to={`/contact/`}>GET A FREE ESTIMATE</Link>
        </div>
        <Opacity />
        <ImagePosition>
          <Image filename="avantecture-0Vdrg5pR7NY-unsplash.png" alt={`backgroung image`} />
        </ImagePosition>
      </Hero>
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
