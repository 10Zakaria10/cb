import { borderRadius, getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledAdminSpaceContainer = styled.div`
  background: #f5f5f5;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
`;

export const StyledMenuContainer = styled.div`
  background: white;
  width: 290px;
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  overflow-x: hidden;
`;

export const StyledPageContainer = styled.div`
  margin: ${getSpacing(22, 15, 22, 304)};
  background-color: #f6f6f6;
  width: 80%;
  border-radius: ${borderRadius.XLarge};
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: ${getSpacing(5)};
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #bbb;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
