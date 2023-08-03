import { getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledSideMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${getSpacing(40, 0)};
  height: -webkit-fill-available;
`;
export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledNavMenuContainer = styled.div`
  margin-top: ${getSpacing(52)};
`;

export const StyledUserSettingContainer = styled.div`
  padding: ${getSpacing(0, 20)};
  height: 100%;
  display: flex;
  align-items: flex-end;
`;
