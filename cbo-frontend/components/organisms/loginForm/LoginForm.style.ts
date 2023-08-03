import { getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(16)};

  .MuiOutlinedInput-root {
    background: white;
  }
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(2)};
`;

export const StyledButtonWrapper = styled.div`
  margin-top: ${getSpacing(40)};
  & > button {
    width: 100%;
  }
`;
