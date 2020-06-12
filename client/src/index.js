import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

import { theme } from "@chakra-ui/core";

// Let's say you want to add custom colors

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: "#00ADB5",
      800: "#000000",
      700: "#00ADB5",
      buttonBackground: "#393E46"
    },
  },
  breakpoints: ["30em", "48em", "62em", "80em"],
  fonts: {
    heading: '"Avenir Next", sans-serif',
    body: "system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
  },
};

render((
  <BrowserRouter>
    <ThemeProvider theme={customTheme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>

), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
