import {
  colorPalette,
  fontSize,
  fontWeight,
  lineHeight,
} from "~styles/styleSheet";

import styled from "styled-components";

export const StyledErrorLabel = styled.span`
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.normal};
  color: ${colorPalette.red};
  line-height: ${lineHeight.medium};
`;
