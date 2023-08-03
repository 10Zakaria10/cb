import { colorPalette, getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledReceiptsHistoryContainer = styled.div`
  margin-inline-end: ${getSpacing(30)};
  padding: ${getSpacing(20, 8, 0, 26)};
  width: 40%;
  height: 100vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: ${getSpacing(5)};
  }
  ::-webkit-scrollbar-track {
    background: #bbb;
  }
  ::-webkit-scrollbar-thumb {
    background: ${colorPalette.endeavour};
  }
`;

export const StyledNoData = styled.p`
  display: flex;
  width: 70%;
  justify-content: center;
  align-items: center;
`;
