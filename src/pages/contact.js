import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//import ReactHtmlParser from 'react-html-parser'; //parse html
//import Image from "../components/utils/imageRelativePath"; //search for existing images and display it based onf ile name

import Layout from "../components/layout"
import SEO from "../components/seo"

//import Link from "../components/utils/link" //custom links
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import "./styles/contact.scss";


const Contact = styled.div`

  .contactInfoWrapper {
    padding:30px 20px 0 0;
    .green {
      color: #18bf18;
      font-weight: bold;
    }
  }
  .formWrapper {
    padding:30px 0;
    .formCard {
      //padding:50px;
      background: #292829;
      border-radius: 5px;
    }
    button {
      color: #333;
      background-color: #F9E192;
      border: none;
      transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
      &:hover {
        background-color:#ffcc23;
      }
    }
  }
`;


const PageTemplate = ({ data }) => {

  console.log(data)
  const { site, pages } = data.websiteData //site data and page specific data
  const { siteURL, siteTitle, siteDescription } = site
  const { contact } = pages

  const siteTitleUnique = 'Contact Page' // Contact Page | Scoppettone Builders
  const siteDescriptionUnique = 'Contact Scoppettone Building. Call us at (831)430-6011. Open M-F 8:00am - 5:00pm. Closed Saturday and Sunday. General Contractor & Project Management. Santa Cruz County.'

  return (
    <Layout>
      <SEO title={siteTitleUnique} description={siteDescriptionUnique} url={siteURL} pageData={contact} />
      <div className="container">
        <Contact>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <div className="contactInfoWrapper">
              <div className="pb-5">
                <h1 className="text-white">Ready to contact us?</h1>
                <p>Turn your dream home into reality with Scopetonee Builders; Santa Cruz County’s most trusted design build contractor.</p>
              </div>
              <div className="pb-5">
                <h1 className="text-white">Or call us!</h1>
                <p>We would love to chat with you over the phone about your upcoming project. Give us a call to get started!</p>
                <button className="btn btn-primary">831-430-6011</button>
              </div>
              <div className="pb-5">
                <h1 className="text-white">Our Hours</h1>
                <div className="pb-1"><span className="green">Monday</span>: 8:00 am – 5:00 pm</div>
                <div className="pb-1"><span className="green">Tuesday</span>: 8:00 am – 5:00 pm</div>
                <div className="pb-1"><span className="green">Wednesday</span>: 8:00 am – 5:00 pm</div>
                <div className="pb-1"><span className="green">Thursday</span>: 8:00 am – 5:00 pm</div>
                <div className="pb-1"><span className="green">Friday</span>: 8:00 am – 5:00 pm</div>
                <div className="pb-1"><i>Closed Saturday and Sunday</i></div>
              </div>
            </div>
            </div>

            <div className="col-sm-12 col-md-6">
            <div className="formWrapper">
              <div className="formCard">
                <Form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="bot-field" />
                  <input type="hidden" name="form-name" value="contact" />

                  <Form.Group controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicPhoneNumber">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" placeholder="Enter your phone number" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="exampleForm.Message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>

                </Form>
              </div>
            </div>
          </div>
          </div>
          
        </Contact>
      </div>
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query {
    websiteData {
      pages {
        contact {
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
