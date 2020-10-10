import React, { useContext } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyles";
import { MainTheme } from "../theme/MainTheme";
import { ModeContext } from "contexts/ModeContext";

const PagesWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.backgroundLight};

  ${({ darkMode }) =>
    darkMode &&
    css`
      background-color: ${({ theme }) => theme.backgroundDark};
    `}
`;

const StyleTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      <PagesWrapper darkMode={false} data-testid="theme-provider">
        <Background />
        {children}
      </PagesWrapper>
    </ThemeProvider>
  );
};

export default StyleTemplate;
