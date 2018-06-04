import { css, injectGlobal } from 'styled-components'
import reset from 'styled-reset'

export const breakpoints = {
  xs: 0,
  sm2: 524 / 16,
  sm: 576 / 16,
  md: 768 / 16,
  lg: 992 / 16,
  xl: 1200 / 16,
  xxl: 1400 / 16,
}

export const media = Object.keys(breakpoints).reduce((acc, label) => {
  acc[label] = (...args: any) => css`
    @media (min-width: ${breakpoints[label]}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const spacer = {
  base: 0.625,
  article: 1.875,
  section: 3.75,
  body: 2.25,
}

export const color = {
  seaWeed: '#5fb9aa',
  seaWeedRGB: '95, 185, 170',
  seaWeedDark: '#283c3b',
  seaWeedDarkRGB: '40,60,59,',
  teal: '#83c8bc',
  coral: '#ff5959',
  coralLight: '#F1EEEB',
  coralDark: '#ba4345',
  white: '#ffffff',
  black: '#141618',
  gray: '#303133',
  grayRPG: '48, 49, 51',
  gray777: '#777',
  gray777RGB: '119, 119, 119',
}

export const fontFamily = {
  monospace: "'Source Code Pro', monospace",
  sansSerif: "'Poppins', sans-serif",
}

export const fontSize = {
  base: 1.25,
  h1: 3.125,
  h2: 1.875,
  h3: 1.875,
  h4: 1.5,
  h5: 1,
  h6: 0.6875,
  ui: 0.9375,
}

export const headerHeight = {
  mobile: 6.56625,
  desktop: 5.93625,
}

export const theme = {
  flexboxgrid: {
    // Defaults
    gridSize: 12, // rem
    gutterWidth: 1, // rem
    outerMargin: 2.25, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76, // rem
    },
    breakpoints,
  },
  breakpoints,
  media,
  spacer,
  color,
  fontSize,
  fontFamily,
  headerHeight,
}

injectGlobal`
  ${reset}
  * { box-sizing: border-box; }

  #root,
  #app,
  #body { min-height: 100vh; }

  #body {
    position: relative; 
  }

  body {
    color: ${color.gray};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    transition: color 0.3s ease;
    color: ${color.gray};
    text-decoration: underline;

    &:hover,
    &:focus {
      text-decoration: underline;
      color: ${color.coral}
    }
  }

  h1, h2, h3, h4, h5, h6 {
    line-height: 1.2;
    font-weight: 700;
  }

  h1,
  h2 { text-align: center; }

  h1 {
    font-size: ${fontSize.h1}rem
  }

  h2 {
    font-size: ${fontSize.h2}rem
  }

  h3 {
    font-size: ${fontSize.h3}rem
  }

  h4 {
    font-size: ${fontSize.h4}rem
  }

  h5 {
    font-size: ${fontSize.h5}rem
  }

  h6 {
    font-size: ${fontSize.h6}rem
  }

  hr {
    border: 0;
    border-color: ${color.coral};
    border-top-width: 2px;
    border-style: solid;
    margin-left: auto;
    margin-right: auto;
    width: 90px;
    margin-top: 27px;
    margin-bottom: 36px;
  }

  h1 + hr,
  h2 + hr,
  h3 + hr { margin-bottom: 54px; }

  ::selection {
    background: ${color.coral};
    color: ${color.white} !important;
  }

`
