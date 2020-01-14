import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import HeaderStyles from '../styles/HeaderStyles'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <HeaderStyles>
    <div className='wrapper'>
      <div className='branding'>
        <Link to='/'>{siteTitle}</Link>
      </div>

      <button className='toggleNavButton' onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn('nav', showNav && 'showNav')}>
        <ul>
          <li>
            <Link to='/archive/'>Archive</Link>
          </li>
        </ul>
      </nav>
    </div>
  </HeaderStyles>
)

export default Header
