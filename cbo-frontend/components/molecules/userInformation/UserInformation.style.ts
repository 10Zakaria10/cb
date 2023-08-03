import {
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

import styled from "styled-components";

export const StyledUserInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-inline-start: ${getSpacing(6)};
`;

export const StyledUsername = styled.p`
  margin: 0;
  font-weight: ${fontWeight.basic};
  font-size: ${fontSize.small};
`;

export const StyledRole = styled.p`
  margin: 0;
  font-size: ${fontSize.XSmall};
  color: ${colorPalette.boulder};
`;
