//Import for code parts of react and gatsby
import React from "react" //react core
//import Img from "gatsby-image" //gatsbys image API
import styled from "styled-components"

//Link import to check if internal or external link
//import Link from "./utils/link" //custom links

const FooterSection = styled.footer`
  width: 100%;
  padding: 30px;
  background: #171717;
  text-align: center;
`;

const Footer = () => {

  return (
    <FooterSection>
      <div className="copy">
        © {new Date().getFullYear()}, Built by <a href="https://www.byronwade.com">Byron Wade's Web Development and Design</a>, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://www.gatsbyjs.org">React</a>
      </div>
    </FooterSection>
  )

}

export default Footer
