import {
  borderRadius,
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

import styled from "styled-components";

export const StyledTitleHeading = styled.h4`
  margin: 0;
  display: inline-block;
  padding: ${getSpacing(7, 36, 7, 28)};
  background-color: ${colorPalette.endeavour}24;
  font-weight: ${fontWeight.basic};
  font-size: ${fontSize.small};
  color: ${colorPalette.endeavour};
  border: 1px solid ${colorPalette.endeavour}24;
  border-radius: ${borderRadius.medium};
`;
