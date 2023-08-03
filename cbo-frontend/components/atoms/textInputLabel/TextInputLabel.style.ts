import { colorPalette, fontSize, fontWeight } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledInputLabel = styled.label`
  font-size: ${fontSize.small};
  color: ${colorPalette.darkBlue};
  font-weight: ${fontWeight.normal};
`;
