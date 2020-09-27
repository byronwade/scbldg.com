//Import for code parts of react and gatsby
import React, {useState} from "react" //react core
import window from 'global'
import Image from "./utils/imageRelativePath"; //search for existing images and display it based on file name
import styled from "styled-components"

//Link import to check if internal or external link
import Link from "./utils/link" //custom link

const Menu = styled.header`
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  color: #fff;
  z-index: 100;
  transition: all 200ms linear;
  padding: 10px;
  .branding {
    max-width: 50px;
  }
  .contactInfo {
    text-align: right;
    padding-bottom:5px;
    span {
      padding: 0px 2px;
      font-size: 13px;
      color: #F9E192;
    }
  }
  .menuItem {
    margin-top: 3px;
    margin-bottom: 10px;
    text-align: right;
    a {
      color: #fff;
      padding: 10px 8px;
      font-size: 1rem;
    }
  }
  @media(max-width: 390px) {
    .menuItem {
      margin-top: -15px;
    }
    .contactInfo {
      span {
        font-size: 11px;
      }
    }
    .menuItem {
      a {
        font-size: 0.5rem;
        padding: 8px 8px;
      }
    }
  }

  @media(min-width: 500px) {
    .branding {
      max-width: 73px;
    }
    .menuItem {
      margin-top: -15px;
    }
  }
  background: ${props => props.scrollPosition === true ? '#333' : null};
`;

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(false)

  window.onscroll = function(){
    var stop = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
    const scroll = stop >= 1 ? true : false
    setScrollPosition(scroll)
  };

  return (
    <Menu scrollPosition={scrollPosition}>
      <div className="container">
        <div className="row">
          <div className="col-3">
          <div className="branding">
          <Image filename="scoppettone-building.png" alt={`backgroung image`}  />
          </div>
          </div>
          <div className="col-9">
            <div className="contactInfo">
              <span>bcw1995@gmail.com</span>
              <span>|</span>
              <span>831.430.6011</span>
            </div>
          </div>
        </div>
        <div className="menuItem">
              <Link to={`/`}>Home</Link>
              <Link to={`/services/`}>Services</Link>
              <Link to={`/portfolio/`}>Portfolio</Link>
              <Link to={`/contact/`}>Contact</Link>
        </div>
        
      </div>
    </Menu>
  )

}

export default Header
