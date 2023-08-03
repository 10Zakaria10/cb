import {
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

import styled from "styled-components";

export const StyledPinOtpContent = styled.div`
  padding: ${getSpacing(77, 111)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledPinOtpText = styled.div`
  font-weight: ${fontWeight.basic};
  font-size: ${fontSize.medium};
  color: ${colorPalette.shark};
  & span {
    color: ${colorPalette.endeavour};
  }
`;

export const StyledPinExpirationText = styled.div`
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.small};
  color: #292d32;
  margin-top: ${getSpacing(45)};
`;

export const StyledPinButtonsContainer = styled.div`
  margin-top: ${getSpacing(100)};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${getSpacing(23)};
  & button {
    min-width: ${getSpacing(150)};
  }
`;
