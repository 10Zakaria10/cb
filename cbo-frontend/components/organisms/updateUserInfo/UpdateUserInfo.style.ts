import { getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledUserDetailsInputsContainer = styled.form`
  margin-top: ${getSpacing(22)};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledUpdateButtonContainer = styled.div`
  margin-top: ${getSpacing(15)};
  display: flex;
  width: 100%;
  justify-content: center;
  & > button {
    width: 25%;
  }
`;
