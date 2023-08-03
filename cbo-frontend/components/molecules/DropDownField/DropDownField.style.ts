import { getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(2)};
  margin-bottom: ${getSpacing(14)};
`;
