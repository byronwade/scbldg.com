import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
//import ReactHtmlParser from 'react-html-parser'; //parse html
import Image from "../components/utils/imageRelativePath"; //search for existing images and display it based onf ile name
//import StyledBackgroundSection from "../components/utils/imageBackground"; //search for existing images and display it based onf ile name

import Layout from "../components/layout"
import Link from "../components/utils/link" //custom links

import Container from 'react-bootstrap/Container';

const ProjectContainer = styled.div`
    h1 {
        color: green;
    }
`

const PortfolioProject = ({ title, date, description, featuredImage }) => (
        <Layout>
      <Container>
      <ProjectContainer>
        <div className="blog-post">
          <h1>{title}</h1>
          <h2>{date}</h2>
          <Image filename={featuredImage} alt={'backgroung image'}/>
          <p>{description}</p>
          {/* <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          /> */}
        </div>
      </ProjectContainer>
      </Container>
    </Layout>
)

export default function Template(props) {
  //const { markdownRemark } = data // data.markdownRemark holds your post data
  //const { frontmatter, html } = markdownRemark
//   return (
//     <Layout>
//       <Container>
//       <div className="blog-post-container">
//         <div className="blog-post">
//           <h1>{frontmatter.title}</h1>
//           <h2>{frontmatter.date}</h2>
//           {/* <div
//             className="blog-post-content"
//             dangerouslySetInnerHTML={{ __html: html }}
//           /> */}
//         </div>
//       </div>
//       </Container>
//     </Layout>
//   )
return (
    <StaticQuery
        query={
            graphql`
                query {
                    allMdx {
                        edges {
                            node {
                                frontmatter {
                                    title
                                    date(formatString: "MMMM DD, YYYY")
                                    description
                                    featuredImage
                                }
                            }
                        }
                    }
                }
            `
        }
        render={data => {
            const searchTitle = props.title
            console.log(data)
            //console.log(data);
            const projectsList = data.allMdx.edges
            //console.log(projectsList[0].node)
            const project = projectsList.find(currentProject => currentProject.node.frontmatter.title === searchTitle)
            //console.log(project.node.frontmatter)
            return <PortfolioProject {...project.node.frontmatter} />

            //return <p>Hi</p>
        }}
    />
)
}


// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         date(formatString: "MMMM DD, YYYY")
//         slug
//         title
//       }
//     }
//   }
// `