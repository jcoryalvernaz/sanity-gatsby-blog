import {createGlobalStyle} from 'styled-components'

import './custom-properties.css'

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
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
