import {
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

import styled from "styled-components";

export const StyledTicketContainer = styled.div`
  background-color: white;
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.08);
  border-radius: ${getSpacing(6)};
`;

export const StyledTicketHeading = styled.h4`
  padding: ${getSpacing(29, 0, 0, 0)};
  display: flex;
  justify-content: center;
  font-weight: 500;
  font-size: ${getSpacing(20)};
`;

export const StyledReceiptDetailsContainer = styled.div`
  margin: ${getSpacing(0, 35, 40, 30)};
  box-shadow: 0px 0px 17px rgba(0, 0, 0, 0.08);
`;

export const StyledBackContainer = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: ${getSpacing(5)};
  margin-inline-start: ${getSpacing(35)};
  padding-bottom: ${getSpacing(30)};
  font-weight: ${fontWeight.basic};
  font-size: ${fontSize.small};
  color: ${colorPalette.endeavour};
`;
