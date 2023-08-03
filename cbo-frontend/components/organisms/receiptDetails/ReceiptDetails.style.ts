import {
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

import styled from "styled-components";

export const StyledPurchaseDetailsContainer = styled.div`
  margin-top: ${getSpacing(16)};
  padding: ${getSpacing(14, 0)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${getSpacing(20)};
`;

export const StyledTicketInfoContainer = styled.div`
  padding-inline-start: ${getSpacing(16)};
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(8)};
`;

export const StyledStoreName = styled.div`
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
  color: ${colorPalette.endeavour};
`;

export const StyledTicketNumber = styled.div`
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
  & > span {
    font-size: ${fontSize.medium};
    font-weight: ${fontWeight.normal};
    margin-inline-start: ${getSpacing(5)};
  }
`;

export const StyledTicketDate = styled.div`
  color: #929292;
`;

export const StyledTicketDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(16)};
`;

export const StyledPaymentDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(8)};
  padding: ${getSpacing(8, 16, 8, 16)};
  border-bottom: 0.5px solid #f2f2f2;
`;

export const StyledPaymentDetails = styled.div`
  display: flex;
  font-size: ${fontSize.small};
  justify-content: space-between;
  & > span {
    font-weight: ${fontWeight.bold};
    color: ${colorPalette.endeavour};
  }
`;

export const StyledPaymentDetailsTotal = styled.div`
  display: flex;
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
  justify-content: space-between;
  & > span {
    color: ${colorPalette.endeavour};
  }
`;

export const StyledPaymentOperation = styled.p`
  margin: 0;
  & > span {
    font-weight: ${fontWeight.bold};
  }
`;
export const StyledPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(8)};
`;
export const StyledPaymentMethodeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(8)};
  padding: ${getSpacing(8, 16, 8, 16)};
`;
