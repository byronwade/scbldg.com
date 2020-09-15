import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//import ReactHtmlParser from 'react-html-parser'; //parse html
//import Image from "../components/utils/imageRelativePath"; //search for existing images and display it based onf ile name

import Layout from "../components/layout"
import SEO from "../components/seo"

import Link from "../components/utils/link" //custom links

//import Link from "../components/utils/link" //custom links
import Container from 'react-bootstrap/Container';


const Zoom = styled.div`
.view {
    position: relative;
    line-height: 0;
    overflow: hidden;
    display: inline-block;
    width: 100%;
}
.view img {
    position: relative;
    display: block;
    margin:0;
    width: 100%;
}
.view .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-attachment: fixed;
}
.flex-center {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 100%;
}
.imageTitle {
  position: absolute;
  top: 0;
  left: 0;
  z-index:100;
  background: rgba(0,0,0,.5);
  padding:30px;
}

.overlay .mask {
    opacity: 0;
    -webkit-transition: all .4s ease-in-out;
    transition: all .4s ease-in-out;
}
.zoom img {
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
}
.zoom:hover img {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
.overlay:hover .mask {
    opacity: 1 !important;
    background: rgba(0,0,0,.5);
}
`;

const PageTemplate = ({ data }) => {

  console.log(data)
  const { site, pages } = data.websiteData //site data and page specific data
  const { siteURL, siteTitle, siteDescription } = site
  const { portfolio } = pages

  return (
    <Layout>
      <SEO title={siteTitle} description={siteDescription} url={siteURL} pageData={portfolio} />
      <Container>
        <div className="pt-5 pb-5">
          <h1>See our projects <br />
          We strive to provide <br />
          the highest quality <br />
          materials</h1>
        </div>
        <div className="row mb-5">
          <div className="col-md-12 mb-5">
            <Zoom>
              <Link className="button" to={`/portfolio/Spa-Bathroom`}>
                <div className="view overlay zoom">
                  <h1 className="imageTitle text-white font-weight-bold">Spa-Bathroom</h1>
                  <img src="https://secureservercdn.net/198.71.233.227/i4c.0b6.myftpupload.com/wp-content/uploads/2020/05/Spa-Bathroom.png" alt="Spa Bathroom" />
                  <div className="mask flex-center">
                      <h5 className="text-white font-weight-bold">Click to learn More about this Project</h5>
                  </div>
                </div>
              </Link>
            </Zoom>
          </div>
          <div className="col-md-12 mb-5">
            <Zoom>
              <Link className="button" to={`/portfolio/Bathroom-Remodeling-Los-Gatos`}>
                <div className="view overlay zoom">
                  <h1 className="imageTitle text-white font-weight-bold">Spa-Bathroom</h1>
                  <img src="https://secureservercdn.net/198.71.233.227/i4c.0b6.myftpupload.com/wp-content/uploads/2020/05/Bathroom-Remodeling-Los-Gatos.png" alt="Bathroom Remodeling Los Gatos" />
                  <div className="mask flex-center">
                    <h5 className="text-white font-weight-bold">Click to learn More about this Project</h5>
                  </div>
                </div>
              </Link>
            </Zoom>
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
