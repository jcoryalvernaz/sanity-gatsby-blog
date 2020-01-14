import React from 'react'
import styled from 'styled-components'
import customMedia from '../styles/customMedia'
import Header from './header'
import Footer from './footer'

import GlobalStyles from '../styles/GlobalStyles'

const MainStyles = styled.main`
  background: var(--color-white);
  min-height: calc(100% - 73px - 120px);
  @media ${customMedia.minSmall} {
    min-height: calc(100% - 91px - 155px);
  }
`

const Layout = ({children, onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <GlobalStyles />
    <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} />
    <MainStyles>{children}</MainStyles>
    <Footer />
  </>
)

export default Layout
