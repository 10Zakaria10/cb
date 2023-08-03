import ReceiptCardItem from "~components/atoms/receiptCardItem";
import type { IStoreDto } from "~types/ReceiptTypes";
import { StoreTypeEnum } from "~types/ReceiptTypes";

import {
  StyledReceiptCardContainer,
  StyledReceiptCardDetailButtonContainer,
  StyledReceiptCardIdContainer,
  StyledReceiptCardIdTitle,
  StyledReceiptCardIdValue,
  StyledReceiptCardInfoContainer,
  StyledReceiptCardMarket,
  StyledReceiptHistoryCardMarketContainer,
} from "./ReceiptHistoryCard.style";

import type { FC } from "react";

interface IReceiptHistoryCardProps {
  id: string;
  balance: number;
  createdAt: Date;
  total: number;
  store: IStoreDto;
  ticketNumber: string;
  handleShowDetails: (id?: string) => void;
}

const ReceiptHistoryCard: FC<IReceiptHistoryCardProps> = ({
  id,
  balance,
  createdAt,
  store,
  ticketNumber,
  total,
  handleShowDetails,
}) => {
  const getStoreIconPath = (storeType: StoreTypeEnum): string => {
    switch (storeType) {
      case StoreTypeEnum.CARREFOUR:
        return "/images/Carrefour-logo.svg";
      case StoreTypeEnum.CARREFOUR_EXPRESS:
        return "/images/Carrefour-Express-logo.svg";
      case StoreTypeEnum.CARREFOUR_GOURMET:
        return "/images/Carrefour-Gourmet-logo.svg";
      case StoreTypeEnum.CARREFOUR_MARKET:
        return "/images/Carrefour-Market-logo.svg";
      default:
        return "/images/Carrefour-logo.svg";
    }
  };

  return (
    <StyledReceiptCardContainer>
      <StyledReceiptHistoryCardMarketContainer>
        <img
          alt="market"
          src={getStoreIconPath(store.type)}
          width={24}
          height={14}
        />
        <StyledReceiptCardMarket>{store.name}</StyledReceiptCardMarket>
      </StyledReceiptHistoryCardMarketContainer>
      <StyledReceiptCardIdContainer>
        <StyledReceiptCardIdTitle>N° de ticket :</StyledReceiptCardIdTitle>
        <StyledReceiptCardIdValue>{ticketNumber}</StyledReceiptCardIdValue>
      </StyledReceiptCardIdContainer>
      <StyledReceiptCardInfoContainer>
        <ReceiptCardItem
          title="Date"
          value={new Date(createdAt).toLocaleDateString()}
        />
        <ReceiptCardItem title="Total" value={total.toString()} />
        <ReceiptCardItem bold title="Solde" value={balance.toString()} />
      </StyledReceiptCardInfoContainer>
      <StyledReceiptCardDetailButtonContainer
        onClick={() => {
          handleShowDetails(id);
        }}
      >
        <img src="/images/ticket.svg" alt="ticket" />
        <span>afficher le ticket de caisse</span>
      </StyledReceiptCardDetailButtonContainer>
    </StyledReceiptCardContainer>
  );
};

export default ReceiptHistoryCard;
