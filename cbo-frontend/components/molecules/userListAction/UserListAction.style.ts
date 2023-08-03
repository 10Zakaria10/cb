import { getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledActionContainer = styled.div`
  & button {
    width: 100%;
    min-height: initial !important;
    height: ${getSpacing(30)};
  }
`;
