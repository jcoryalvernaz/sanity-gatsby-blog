import styled from 'styled-components'
import customMedia from './customMedia'

const HeaderStyles = styled.div`
  position: relative;
  z-index: 100;
  .wrapper {
    margin: 0 auto;
    max-width: 960px;
    padding: 1em;
    display: flex;
    @media ${customMedia.minSmall} {
      padding: 1.5em 1.5em;
    }
  }
  .branding {
    flex: 1;
    a {
      display: inline-block;
      padding: 0.5em;
      color: inherit;
      text-decoration: none;
      @media (hover: hover) {
        &:hover {
          color: var(--color-accent);
        }
      }
    }
  }
  .toggleNavButton {
    appearance: none;
    border: none;
    background: none;
    margin: 0;
    padding: calc(14 / 17 / 2 * 1rem);
    outline: none;
    color: inherit;
    svg {
      display: block;
      fill: inherit;
    }
    @media ${customMedia.minSmall} {
      display: none;
    }
  }
  .nav {
    display: none;
    ul {
      margin: 0;
      padding: 0;
    }
    ul li a {
      display: block;
      color: inherit;
      text-decoration: none;
    }
    @media (hover: hover) {
      ul li a:hover {
        color: var(--color-accent);
      }
    }
    @media ${customMedia.maxSmall} {
      position: absolute;
      background: var(--color-white);
      color: var(--color-black);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
      left: 0;
      right: 0;
      top: 4.3rem;
      ul {
        padding: 1rem 0;
      }
      ul li a {
        padding: 0.5rem 1.5rem;
      }
    }
    @media ${customMedia.minSmall} {
      display: block;
      ul {
        list-style: none;
        display: flex;
        justify-content: flex-end;
      }
      ul li a {
        padding: 0.5rem;
      }
    }
  }
  .showNav {
    display: block;
  }
`

export default HeaderStyles
