import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
//import ReactHtmlParser from 'react-html-parser'; //parse html
import Image from "../components/utils/imageRelativePath"; //search for existing images and display it based onf ile name
//import StyledBackgroundSection from "../components/utils/imageBackground"; //search for existing images and display it based onf ile name

import Layout from "../components/layout"
import Link from "../components/utils/link" //custom links

import Container from 'react-bootstrap/Container';
import Lightbox from "react-image-lightbox";
import 'react-image-lightbox/style.css';

const ProjectContainer = styled.div`
    margin-bottom: 3rem;
    .title {
        font-size: 3rem;
        font-weight: 200;
    }
    .date {
        font-size: 1.25rem;
        font-weight: 100;
    }
    .featuredImage {
        border-radius: 10px;
        overflow: hidden;
    }
    .ImageWrapper {
        width: 100%;
        height: 400px;
        overflow: hidden;
        border-radius: 10px;
    }

    .project-showcase-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        &:hover {
            cursor: pointer;
        }
    }
    @media(max-width: 567px) {
        .title {
            font-size: 1.75rem;
            padding: 0 15px 0 0;
        }
        .date {
            font-size: 1rem;
        }
    }
`

const PortfolioProject = ({ title, date, featuredImage, imageShowcase }) => {
    const [images, setImages] = useState(imageShowcase)
    const [currentImageIndex, setCurrentImageIndex] = useState(null)

    return (
            <Layout>
        <Container>
        <ProjectContainer>
            <div className="my-3">
            <h1 className="text-white mt-3 mb-0 title">{title}</h1>
            <h2 className="text-white mb-3 date">{date}</h2>
            <div className="my-3">
                <div className="featuredImage">
                    <Image filename={featuredImage} alt={'backgroung image'} /></div>
                </div>
            </div>
            <div className="row">
                {
                    images.map((currentImage, index) => 
                        <div key={index} className="col-sm-6 col-md-4 my-3 ">
                            <div className="ImageWrapper">
                                <img src={currentImage} alt={'showcase-image'} className="project-showcase-img" onClick={() => setCurrentImageIndex(index)}/>
                            </div>
                        </div>
                    )
                }
            </div>
            
            { images !== undefined && typeof(currentImageIndex) === 'number' &&
                <Lightbox
                    mainSrc={images[currentImageIndex]}
                    onCloseRequest={() => setCurrentImageIndex(null)}
                />
            }
        </ProjectContainer>
        </Container>
        </Layout>
    )
}

export default function Template(props) {
return (
    <StaticQuery
        query={
            graphql`
                query {
                    allMdx {
                        edges {
                            node {
                                frontmatter {
                                    id
                                    title
                                    date(formatString: "MMMM DD, YYYY")
                                    featuredImage
                                }
                            }
                        }
                    }
                }
            `
        }
        render={data => {
            const searchId = props.id
            const projectsList = data.allMdx.edges
            const project = projectsList.find(currentProject => currentProject.node.frontmatter.id === searchId)
            return <PortfolioProject {...project.node.frontmatter} imageShowcase={props.imageShowcase} />
        }}
    />
)
}
