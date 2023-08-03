import { getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledNavMenu = styled.ul`
  list-style-type: none;
  padding: ${getSpacing(0, 26)};
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: ${getSpacing(15)};
`;
