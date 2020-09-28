import React from "react";
import styled, { css, ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyles";
import { MainTheme } from "../theme/MainTheme";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
      <Wrapper darkMode={true} data-testid="theme-provider">
        {children}
      </Wrapper>
    </ThemeProvider>
  );
};

export default StyleTemplate;
