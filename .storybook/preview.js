import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import StyleTemplate from '../src/templates/StyleTemplate';

export const parameters = {
         actions: { argTypesRegex: "^on[A-Z].*" },
         layout: "fullscreen",
       };



export const decorators = [
  (Story) => (
    <>
      <BrowserRouter>
        <StyleTemplate>
          <Story />
        </StyleTemplate>
      </BrowserRouter>
    </>
  ),
];
