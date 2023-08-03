import { fontFamily } from "./styleSheet";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    font-family: ${fontFamily.main};
    box-sizing: border-box !important;
  }

  .snackBarClassRoot {
    width: 100% !important;
    .MuiCollapse-root {
      width: 40% !important ;
    }
  }
`;

export default GlobalStyle;
