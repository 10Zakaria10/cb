import {
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

import styled from "styled-components";

export const StyledReceiptCardContainer = styled.div`
  margin-top: ${getSpacing(12)};
  border-radius: ${getSpacing(6)};
  background-color: white;
  padding: ${getSpacing(12, 0, 15, 0)};
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.08);
`;

export const StyledReceiptHistoryCardMarketContainer = styled.div`
  margin-inline-start: ${getSpacing(11)};
  display: flex;
  align-items: center;
`;

export const StyledReceiptCardMarket = styled.span`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.small};
  margin-inline-start: ${getSpacing(8)};
  color: #2e2e2e;
`;

export const StyledReceiptCardIdContainer = styled.div`
  margin-top: ${getSpacing(15)};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledReceiptCardIdTitle = styled.span`
  font-weight: ${fontWeight.bold};
  font-size: ${fontSize.small};
  color: #2e2e2e;
`;

export const StyledReceiptCardIdValue = styled.span`
  margin-inline-start: ${getSpacing(5)};
  font-size: ${fontSize.small};
  color: #2e2e2e;
`;

export const StyledReceiptCardInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${getSpacing(43)};
  margin: ${getSpacing(13, 40, 0, 30)};
`;

export const StyledReceiptCardDetailButtonContainer = styled.div`
  cursor: pointer;
  margin-top: ${getSpacing(23)};
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    margin-inline-start: ${getSpacing(8)};
    font-size: ${fontSize.small};
    color: ${colorPalette.endeavour};
  }
  & svg {
    color: ${colorPalette.endeavour};
  }
`;
