import { colorPalette, fontSize, fontWeight } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledDateText = styled.p`
  margin: 0;
  font-weight: ${fontWeight.basic};
  font-size: ${fontSize.small};
  color: ${colorPalette.endeavour};
`;

export const StyledStateText = styled.p`
  margin: 0;
  font-weight: ${fontWeight.basic};
  font-size: ${fontSize.small};
  color: ${colorPalette.red};
`;
