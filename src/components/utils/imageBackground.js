import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid(quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      const imageFluid = image.node.childImageSharp.fluid
    return <BackgroundImage Tag={`section`} alt={props.alt} fluid={imageFluid}>{props.children}</BackgroundImage>
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection