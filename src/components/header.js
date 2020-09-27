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
  .brandingz {
    max-width: 73px;
  }
  .contactInfoz {
    text-align: right;
    padding-bottom:5px;
    span {
      padding: 0px 2px;
      font-size: 13px;
      color: #F9E192;
    }
  }
  .menuItemz {
    margin-top: -15px;
    margin-bottom: 10px;
    text-align: right;
    a {
      color: #fff;
      padding: 10px 10px;
      font-size: 0.75rem;
    }
  }
  @media(max-width: 424px) {
    .contactInfoz {
      span {
        font-size: 11px;
      }
    }
    .menuItemz {
   
      a {
        font-size: 0.5rem;
        padding: 8px 8px;
      }
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
          <div className="brandingz">
          <Image filename="scoppettone-building.png" alt={`backgroung image`}  />
          </div>
          </div>
          <div className="col-9">
            <div className="contactInfoz">
              <span>bcw1995@gmail.com</span>
              <span>|</span>
              <span>831.430.6011</span>
            </div>
          </div>
        </div>
        <div className="menuItemz">
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
