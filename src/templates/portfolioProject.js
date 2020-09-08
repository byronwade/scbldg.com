import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
//import ReactHtmlParser from 'react-html-parser'; //parse html
import Image from "../components/utils/imageRelativePath"; //search for existing images and display it based onf ile name
//import StyledBackgroundSection from "../components/utils/imageBackground"; //search for existing images and display it based onf ile name

import Layout from "../components/layout"
import Link from "../components/utils/link" //custom links

import Container from 'react-bootstrap/Container';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Container>
      <div className="blog-post-container">
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <h2>{frontmatter.date}</h2>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`