import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"

import "../scss/layout.scss" //reset styles

const theme = {
  dark: {
    colors: {
      text: '#EAE0D5',
      background: '#333132',
    },
  },
  light: {
    colors: {
      text: '#333132',
      background: '#fff',
    },
  }
};

const GlobalStyles = createGlobalStyle`
  body {
    color: ${props => props.theme.dark.colors.text};
    background: ${props => props.theme.dark.colors.background};
  }
  .grid {
    display: grid;
    grid-auto-columns: max-content;
    grid-auto-flow: dense;
    grid-auto-rows: minmax(100px, auto);
    grid-template-columns: repeat(3, 1fr);
    margin: 1em auto;
    .gridItem {
      grid-column: span 1;
      grid-row: span 1;
      &:nth-of-type(3n + 1) {
        grid-column: span 2;
      }
    }
  }
  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (min-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (min-width: 1200px) {
    .container {
      max-width: 1140px;
    }
  }
`
const Main = styled.main`
  padding-top: 73px;
  position: relative;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  //const rootPath = `${__PATH_PREFIX__}/`

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
        <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
