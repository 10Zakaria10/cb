import { fontSize, fontWeight, getSpacing } from "~styles/styleSheet";

import styled from "styled-components";

export const StyledReceiptCardItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${getSpacing(8)};
`;

export const StyledCardItemTitle = styled.span`
  font-size: ${fontSize.XSmall};
  text-align: center;
  color: #737373;
`;

export const StyledCardItemValue = styled.span`
  font-size: ${fontSize.small};
  color: #2e2e2e;
  text-align: center;
`;

export const StyledBoldCardItemValue = styled.span`
  font-size: ${fontSize.small};
  font-weight: ${fontWeight.bold};
  text-align: center;
  color: #00a8e1;
`;
