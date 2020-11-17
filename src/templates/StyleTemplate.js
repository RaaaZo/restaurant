import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/GlobalStyles'
import { MainTheme } from '../theme/MainTheme'
import ArrowUp from 'components/atoms/ArrowUp'

const PagesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundLight};
`

const StyleTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      <PagesWrapper>
        <ArrowUp />
        {children}
      </PagesWrapper>
    </ThemeProvider>
  )
}

export default StyleTemplate
