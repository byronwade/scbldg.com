//Import for code parts of react and gatsby
import React from "react" //react core
//import Img from "gatsby-image" //gatsbys image API
import styled from "styled-components"
import Image from "./utils/imageRelativePath"; //search for existing images and display it based onf ile name

//Link import to check if internal or external link
import Link from "./utils/link" //custom links

const FooterSection = styled.footer`
  width: 100%;
  color: #333;
  .footerWithLinksAndLogo {
    padding:30px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    color: white;
    background:#232323;
    .logo {
      width:20%;
    }
    .links {

      .menuItems {
        display: flex;
        flex-direction: column;
      }
    }
    .contactUs {

    }
  }
  .copy {
    padding: 10px 30px;
    background: #171717;
    text-align: center;
    color: #f4f4f4;
    font-size: 0.75rem
  }
`;

const Footer = () => {

  return (

    <FooterSection>

      <div className="footerWithLinksAndLogo">
       
       <div className="logo">
            <Image filename="scoppettone-building.png" alt={`backgroung image`} style={{ width: '20%', height: 'auto'}}  />
        </div>
        <div className="links">
            <div className="menuItems">
              <Link to={`/`}>Home</Link>
              <Link to={`/services/`}>Services</Link>
              <Link to={`/portfolio/`}>Portfolio</Link>
              <Link to={`/contact/`}>Contact</Link>
            </div>
        </div>
        <div className="contactUs">
          <button>(831 430-6011)</button>
          <div className="pb-5">
            <h1>Our Hours</h1>
            <div className="pb-1"><span className="green">Monday</span>: 8:00 am – 5:00 pm</div>
            <div className="pb-1"><span className="green">Tuesday</span>: 8:00 am – 5:00 pm</div>
            <div className="pb-1"><span className="green">Wednesday</span>: 8:00 am – 5:00 pm</div>
            <div className="pb-1"><span className="green">Thursday</span>: 8:00 am – 5:00 pm</div>
            <div className="pb-1"><span className="green">Friday</span>: 8:00 am – 5:00 pm</div>
            <div className="pb-1"><i>Closed Saturday and Sunday</i></div>
          </div>
        </div>
       </div>


      
      <div className="copy">
        © {new Date().getFullYear()}, Built by <a href="https://www.byronwade.com">Byron Wade's Web Development and Design</a>, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://www.gatsbyjs.org">React</a>
      </div>
    </FooterSection>
  )

}

export default Footer
