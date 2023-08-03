import { getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledUserTableContainer = styled.div`
  margin-top: ${getSpacing(45)};
  & th:nth-child(4) {
    flex: 2;
  }
  & td:nth-child(4) {
    flex: 2;
  }
`;
