import { createGlobalStyle } from 'styled-components';

import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: Calibri, Candara, Segoe, "Segoe UI", Optima, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #0D1117;
;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
h1,
h2,
h3,
p {
  margin-top: 0;
  margin-bottom: 0;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
button {
  margin: 0;
  padding: 0;
  font-family: inherit;
  cursor: pointer;
}

`;
