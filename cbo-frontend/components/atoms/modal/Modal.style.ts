import { getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledPinOtpBox = styled.div`
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: ${getSpacing(10)};
`;
