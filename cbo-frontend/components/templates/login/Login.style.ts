import { colorPalette, getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledLoginPageContainer = styled.div`
  margin: auto;
  padding: ${getSpacing(60)};
  width: 45%;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledFormContainer = styled.div`
  padding: ${getSpacing(80)};
  margin-top: ${getSpacing(80)};
  background: ${colorPalette.lightBlue};
`;
