import {
  colorPalette,
  fontSize,
  fontWeight,
  getSpacing,
} from "~styles/styleSheet";

import styled from "styled-components";

export const StyledCategoryGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(12)};
`;
export const StyledCategoryName = styled.p`
  margin: 0;
  padding: ${getSpacing(3, 0, 3, 16)};
  background: rgba(209, 231, 248, 0.35);
  font-size: ${fontSize.medium};
  font-weight: ${fontWeight.bold};
`;

export const StyledProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(12)};
`;
export const StyledProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${getSpacing(12)};
  padding: ${getSpacing(8, 16)};
  border-bottom: ${getSpacing(0.5)} solid ${colorPalette.lightRed};
`;
export const StyledProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const StyledProductName = styled.p`
  margin: 0;
  font-size: ${fontSize.small};

  & > span {
    font-weight: ${fontWeight.bold};
    color: ${colorPalette.endeavour};
    margin-right: ${getSpacing(5)};
  }
`;
export const StyledPrice = styled.p`
  margin: 0;
  font-size: ${fontSize.small};
`;
