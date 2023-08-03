import { getSpacing } from "~styles/styleSheet";

import styled from "styled-components";
export const StyledLoader = styled.div`
  @keyframes logoLoader {
    from {
      width: ${getSpacing(0)};
    }
    to {
      width: ${getSpacing(171)};
    }
  }
  background: url("/images/Logo.svg");
  height: ${getSpacing(54)};
  animation-name: logoLoader;
  animation-duration: 2s;
  max-width: ${getSpacing(171)};
  animation-iteration-count: infinite;
  display: inline-block;
  margin: auto;
`;
