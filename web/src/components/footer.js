import React from 'react'

import FooterStyles from '../styles/FooterStyles'

const Footer = () => (
  <FooterStyles>
    <div className='footerWrapper'>
      <div className='siteInfo'>
        &copy; {new Date().getFullYear()}, Built with <a href='https://www.sanity.io'>Sanity</a>{' '}
        &amp;
        {` `}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </div>
    </div>
  </FooterStyles>
)

export default Footer
