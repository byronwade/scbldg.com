//Import for code parts of react and gatsby
import React, {useState} from "react" //react core
//import Img from "gatsby-image" //gatsbys image API
import styled from "styled-components"

//Link import to check if internal or external link
import Link from "./utils/link" //custom link

const Menu = styled.header`
  display: flex;
  padding: 10px;
  justify-content: flex-end;
  position:fixed;
  top:0;
  left:0;
  width: 100%;
  color: #fff;
  z-index: 100;
  transition: all 200ms linear;
  a {
    padding:10px 10px;
    color: #fff;
  };
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
      <Link to={`/`}>Home</Link>
      <Link to={`/services/`}>Services</Link>
      <Link to={`/portfolio/`}>Portfolio</Link>
      <Link to={`/contact/`}>Contact</Link>
    </Menu>
  )

}

export default Header
