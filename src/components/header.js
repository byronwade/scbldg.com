//Import for code parts of react and gatsby
import React, {useState} from "react" //react core
import window from 'global'
import Image from "./utils/imageRelativePath"; //search for existing images and display it based onf ile name
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
  .branding {
    width: 73px;
  }
  a {
    padding:10px 10px;
    color: #fff;
  };
  .contactInfo {
    text-align: right;
    padding-bottom:5px;
    span {
      padding: 0px 5px;
      font-size:13px;
      color: #F9E192;
    }
  }
  background: ${props => props.scrollPosition === true ? '#333' : null};
`;

const InnerMenu = styled.div`
  display: flex;
  padding: 10px;
  justify-content: space-between;
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
        <InnerMenu>
          <div className="branding">
            <Image filename="scoppettone-building.png" alt={`backgroung image`}  />
          </div>
          <div className="menu">
            <div className="contactInfo">
              <span>bcw1995@gmail.com</span>
              <span>|</span>
              <span>831.430.6011</span>
            </div>
            <div className="menuItems">
              <Link to={`/`}>Home</Link>
              <Link to={`/services/`}>Services</Link>
              <Link to={`/portfolio/`}>Portfolio</Link>
              <Link to={`/contact/`}>Contact</Link>
            </div>
          </div>
        </InnerMenu>
      </div>
    </Menu>
  )

}

export default Header
