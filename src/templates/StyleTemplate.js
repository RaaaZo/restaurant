import React, { useContext } from 'react'
import styled, { css, ThemeProvider } from 'styled-components'
import GlobalStyle from '../theme/GlobalStyles'
import { MainTheme } from '../theme/MainTheme'
import ArrowUp from 'components/atoms/ArrowUp'
import { ModeContext } from 'contexts/ModeContext'

const PagesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.backgroundLight};

  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: ${({ theme }) => theme.backgroundDark};
    `}
`

// const Background = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: ${({ theme }) => theme.backgroundLight};
//   z-index: -1;

//   ${({ darkMode }) =>
//     darkMode &&
//     css`
//       background-color: ${({ theme }) => theme.backgroundDark};
//     `}
// `

const StyleTemplate = ({ children }) => {
  const { darkMode } = useContext(ModeContext)

  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      <PagesWrapper darkMode={darkMode} data-testid='theme-provider'>
        <ArrowUp />
        {children}
      </PagesWrapper>
    </ThemeProvider>
  )
}

export default StyleTemplate
