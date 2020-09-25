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
    padding:40px;
    display:flex;
    color: white;
    background:#232323;
    .logo {
      flex: 1;
      display: flex;
      flex-direction: column;
      .image-wrapper{
        width: 30%;  
        margin-bottom: 20px; 
      }
      .company-name {
        font-size: 1.25rem;
        margin-bottom: 0;
       
      }
      .company-desc {
        font-size: 1rem;
        width: 90%;
      }
    }
    .links {
      flex: 1;
      display: flex;
      .menuItems {
        display: flex;
        flex-direction: column;
        flex: 1;
        .group-title {
          font-weight: bold;
          font-size: 1rem;
          margin-bottom: 5px
        }
        .menuLink {          
          color: white;
          padding: 5px 0 5px 0;
          font-size: 0.75rem;
        }
      }
    }
    .contactUs {
      flex: 1;
      display: flex;
      justify-content: center;
      font-size: 0.75rem;
      h1 {
        color: white;
        font-size: 1rem;
        font-weight: bold;
        margin-bottom: 5px
      }
      .green {
        color: #18bf18;
      }
      
    }
  }
  .copy {
    padding: 10px 30px;
     background: #171717;
   // background:#232323;
    // text-align: right;
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
         <p className="company-name">Scoppettone Building</p>
         <p className="company-desc">General Contractor & Project Management</p>
         
        </div>
        <div className="links">
            <div className="menuItems">
              <p className="group-title">Explore</p>
              <Link to={`/`} className="menuLink">Home</Link>
              <Link to={`/services/`} className="menuLink">Services</Link>
              <Link to={`/portfolio/`} className="menuLink">Portfolio</Link>
              <Link to={`/contact/`} className="menuLink">Contact</Link>
            </div>
            <div className="menuItems">
              <p className="group-title">Projects</p>
              <Link to={`/portfolio/Spa-Bathroom`} className="menuLink">Spa-Bathroom</Link>
              <Link to={`/portfolio/Bathroom-Remodeling-Los-Gatos`} className="menuLink">Bathroom Remodeling</Link>

            </div>
        </div>
     
      <div className="contactUs">
          
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
        
       </div>


      
      <div className="copy">
        © {new Date().getFullYear()}, Built by <a href="https://www.byronwade.com">Byron Wade's Web Development and Design</a>, Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and <a href="https://www.gatsbyjs.org">React</a>
      </div>
    </FooterSection>
  )

}

export default Footer
