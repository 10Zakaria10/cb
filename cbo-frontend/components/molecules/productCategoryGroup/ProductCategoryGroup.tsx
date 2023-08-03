import type { GroupedReceiptLine } from "~types/ReceiptTypes";

import {
  StyledCategoryGroupContainer,
  StyledCategoryName,
  StyledPrice,
  StyledProductDetails,
  StyledProductDetailsContainer,
  StyledProductName,
} from "./ProductCategoryGroup.style";

import type { FC } from "react";

interface IProductCategoryGroup {
  receiptLines: GroupedReceiptLine[];
}

const ProductCategoryGroup: FC<IProductCategoryGroup> = ({ receiptLines }) => {
  return (
    <StyledCategoryGroupContainer>
      {receiptLines.map(({ category, items }) => (
        <div>
          <StyledCategoryName>{category}</StyledCategoryName>
          <StyledProductDetailsContainer>
            {items.map((receiptLine) => (
              <StyledProductDetails>
                <StyledProductName>
                  <span>{receiptLine.quantity}</span>
                  {receiptLine.label}
                </StyledProductName>
                <StyledPrice>
                  {receiptLine.unitPriceTTC * receiptLine.quantity}
                </StyledPrice>
              </StyledProductDetails>
            ))}
          </StyledProductDetailsContainer>
        </div>
      ))}
    </StyledCategoryGroupContainer>
  );
};

export default ProductCategoryGroup;
