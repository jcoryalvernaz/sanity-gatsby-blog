import styled from 'styled-components'
import customMedia from './customMedia'

const FooterStyles = styled.footer`
  border-top: 1px solid var(--color-very-light-gray);
  a {
    color: inherit;
    text-decoration: none;
    @media (hover: hover) {
      &:hover {
        color: var(--color-accent);
      }
    }
  }
  .footerWrapper {
    box-sizing: border-box;
    max-width: 960px;
    padding: 4.5em 1.5em 1.5em;
    margin: 0 auto;
    @media ${customMedia.minSmall} {
      padding: 6em 2em 2em;
    }
  }
  .companyAddress {
    text-align: center;
    margin: 0 0 1rem;
  }
  .siteInfo {
    text-align: center;
    font-size: var(--font-small-size);
    line-height: var(--font-small-line-height);
  }
`

export default FooterStyles
