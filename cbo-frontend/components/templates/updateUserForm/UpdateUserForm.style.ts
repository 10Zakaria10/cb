import { getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledUpdateUserFormContainer = styled.div`
  padding: ${getSpacing(26)};
  width: 55%;
  min-height: 100%;
  background-color: white;
`;

export const StyledLineSeparator = styled.div`
  height: ${getSpacing(3)};
  background-color: #e2e8f0;
  width: 65%;
  margin: ${getSpacing(20)} auto;
`;
