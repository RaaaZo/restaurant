import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../theme/GlobalStyles';
import { MainTheme } from '../theme/MainTheme';

const StyleTemplate = ({ children }) => {
  return (
    <ThemeProvider theme={MainTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleTemplate;
