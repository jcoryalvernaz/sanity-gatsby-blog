import React from 'react'

import styled from 'styled-components'
import customMedia from '../styles/customMedia'

const ContainerStyles = styled.div`
  box-sizing: border-box;
  max-width: 960px;
  padding: 1.5em;
  margin: 0 auto;

  @media ${customMedia.minSmall} {
    padding: 2em;
  }
`

const Container = ({children}) => {
  return <ContainerStyles>{children}</ContainerStyles>
}

export default Container
