import { getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const InputWrapper = styled.div<{ fullWidth?: boolean }>`
  display: flex;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  flex-direction: column;
  gap: ${getSpacing(2)};
  margin-bottom: ${getSpacing(14)};
`;
