import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html {
  margin: 0;
  padding: 0;
  /* height: 100%; */
}
body {
  margin: 0;
  padding: 0;
  background-color: #282c34;
  color: #a1a7b2;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

#Traits {
  width: 100%;
}
`;

export default GlobalStyle;
