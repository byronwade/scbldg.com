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
   
    
    color: white;
    background:#232323;
    .logo {
      flex: 1;
      display: flex;
      align-items: center;
      .image-wrapper{
        width: 30%;  
        margin: 0 auto;
      }
     
    }
    .links {
      flex: 1;

      .menuItems {
        height: 100%;
        display: flex;
        flex-direction: column;
        .menuLink {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          
        }
      }
    }
    .contactUs {
      flex: 1;
      position: relative;
      text-align: center;
      button {
        color: white;
        background: none;
        border: none;
      }
      h1 {
        color: white;
      }
      
    }
  }
  .copy {
    padding: 10px 30px;
    background: #171717;
    text-align: right;
    color: #f4f4f4;
    font-size: 0.75rem
  }
`;

const Footer = () => {

  return (

    <FooterSection>

      <div className="footerWithLinksAndLogo">
      <div className="logo">
         <div className="image-wrapper">
          <Image filename="scoppettone-building.png" alt={`backgroung image`} />
         </div>
        </div>
     
      <div className="contactUs">
          <button>(831 430-6011)</button>
          <div className="pb-2">
            <h1>Our Hours</h1>
            <div className="pb-1"><span className="green">Monday</span>: 8:00 am – 5:00 pm</div>
            <div className="pb-1"><span className="green">Tuesday</span>: 8:00 am – 5:00 pm</div>
            <div className="pb-1"><span className="green">Wednesday</span>: 8:00 am – 5:00 pm</div>
            <div className="pb-1"><span className="green">Thursday</span>: 8:00 am – 5:00 pm</div>
            <div className="pb-1"><span className="green">Friday</span>: 8:00 am – 5:00 pm</div>
            <div className="pb-1"><i>Closed Saturday and Sunday</i></div>
          </div>
        </div>

        <div className="links">
            <div className="menuItems">
              <Link to={`/`} className="menuLink">Home</Link>
              <Link to={`/services/`} className="menuLink">Services</Link>
              <Link to={`/portfolio/`} className="menuLink">Portfolio</Link>
              <Link to={`/contact/`} className="menuLink">Contact</Link>
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
