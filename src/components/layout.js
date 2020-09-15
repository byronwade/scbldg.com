import React from "react"
import styled, { ThemeProvider, createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import 'bootstrap/dist/css/bootstrap.min.css';
import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '700',
      ],
    },
    {
      name: 'Merriweather',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
    {
      name: 'Roboto',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
    {
      name: 'Lato',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  headerFontFamily: ['Lato', 'sans-serif'],
  headerGrayHue: 'slate',
  //'Lato', 'Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'
  bodyFontFamily: ['Roboto', 'serif'],
  includeNormalize: false,
})
typography.injectStyles()

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
