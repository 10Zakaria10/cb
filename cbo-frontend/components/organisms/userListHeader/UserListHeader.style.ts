import {
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

import styled from "styled-components";

export const StyledUserListHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${getSpacing(24, 18, 0, 23)};
`;

export const StyledUserListHeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(6)};
`;

export const StyledHeading = styled.h4`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.large};
  margin: 0;
`;

export const StyledSubTitle = styled.p`
  margin: 0;
  font-size: ${fontSize.small};
  color: ${colorPalette.endeavour};
`;
