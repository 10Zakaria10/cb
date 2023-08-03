import {
  StyledBoldCardItemValue,
  StyledCardItemTitle,
  StyledCardItemValue,
  StyledReceiptCardItemContainer,
} from "./ReceiptCardItem.style";

import type { FC } from "react";

interface IReceiptCardItem {
  title: string;
  value: string;
  bold?: boolean;
}
const ReceiptCardItem: FC<IReceiptCardItem> = ({ title, value, bold }) => {
  return (
    <StyledReceiptCardItemContainer>
      <StyledCardItemTitle>{title}</StyledCardItemTitle>
      {bold ? (
        <StyledBoldCardItemValue>{value}</StyledBoldCardItemValue>
      ) : (
        <StyledCardItemValue>{value}</StyledCardItemValue>
      )}
    </StyledReceiptCardItemContainer>
  );
};

export default ReceiptCardItem;
