import {createGlobalStyle} from 'styled-components'

import './custom-properties.css'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: var(--font-family-sans);
    font-size: var(--font-base-size);
    line-height: var(--font-base-line-height);
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background: var(--color-white);
    color: var(--color-black);
    margin: 0;
  }

  html,
  body,
  body > div,
  body > div > div {
    height: 100%;
  }
`

export default GlobalStyles
