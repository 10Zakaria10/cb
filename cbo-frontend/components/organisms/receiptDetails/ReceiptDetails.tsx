import ProductCategoryGroup from "~components/molecules/productCategoryGroup";
import type {
  GroupedReceiptLine,
  IReceiptDetailsData,
  IReceiptLine,
} from "~types/ReceiptTypes";

import {
  StyledPaymentContainer,
  StyledPaymentDetails,
  StyledPaymentDetailsContainer,
  StyledPaymentDetailsTotal,
  StyledPaymentMethodeContainer,
  StyledPaymentOperation,
  StyledPurchaseDetailsContainer,
  StyledStoreName,
  StyledTicketDate,
  StyledTicketDetailsContainer,
  StyledTicketInfoContainer,
  StyledTicketNumber,
} from "./ReceiptDetails.style";

import type { FC } from "react";

interface IReceiptDetailsProps {
  receipt?: IReceiptDetailsData;
}

const ReceiptDetails: FC<IReceiptDetailsProps> = ({ receipt }) => {
  const foramtReceiptDate = (date: Date): string => {
    return new Date(date).toLocaleDateString("fr", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };
  const groupeReceiptLinesByCategory = (
    recieptLines: IReceiptLine[],
  ): GroupedReceiptLine[] => {
    if (recieptLines.length === 0) return [];
    const groupedReceiptLines: GroupedReceiptLine[] = [];
    recieptLines.forEach((recieptLine) => {
      const { category } = recieptLine;
      const index = groupedReceiptLines.findIndex(
        (groupedRecieptLine) => groupedRecieptLine.category === category,
      );
      index === -1
        ? groupedReceiptLines.push({ category, items: [recieptLine] })
        : groupedReceiptLines[index].items.push(recieptLine);
    });
    return groupedReceiptLines;
  };

  return (
    <StyledPurchaseDetailsContainer>
      {receipt && (
        <>
          <StyledTicketInfoContainer>
            <StyledStoreName>{receipt.store.name}</StyledStoreName>
            <StyledTicketNumber>
              N° de ticket:
              <span>{receipt.remoteId}</span>
            </StyledTicketNumber>
            <StyledTicketDate>
              {foramtReceiptDate(receipt.createdAt)}
            </StyledTicketDate>
          </StyledTicketInfoContainer>
          <StyledTicketDetailsContainer>
            <ProductCategoryGroup
              receiptLines={groupeReceiptLinesByCategory(receipt.receiptLines)}
            />
            <StyledPaymentContainer>
              <StyledPaymentDetailsContainer>
                {receipt.totalDiscount > 0 && (
                  <StyledPaymentDetails>
                    <StyledPaymentOperation>
                      <span>Bon d'achat:</span>
                    </StyledPaymentOperation>
                    <>- {receipt.totalDiscount} Dh</>
                  </StyledPaymentDetails>
                )}
                <StyledPaymentDetailsTotal>
                  <StyledPaymentOperation>Total</StyledPaymentOperation>
                  <span>{receipt.totalAmountTTC} Dh</span>
                </StyledPaymentDetailsTotal>
                <StyledPaymentDetails>
                  <StyledPaymentOperation>Ancien solde</StyledPaymentOperation>
                  <>{receipt.oldBalance} points</>
                </StyledPaymentDetails>
                <StyledPaymentDetails>
                  <StyledPaymentOperation>Nouveau solde</StyledPaymentOperation>
                  <>{receipt.newBalance} points</>
                </StyledPaymentDetails>
              </StyledPaymentDetailsContainer>
              <StyledPaymentMethodeContainer>
                <StyledPaymentDetails>
                  <StyledPaymentOperation>
                    Nombre d'articles
                  </StyledPaymentOperation>
                  <>{receipt.receiptLines.length}</>
                </StyledPaymentDetails>
                <StyledPaymentDetails>
                  <StyledPaymentOperation>
                    Moyen de paiement
                  </StyledPaymentOperation>
                  <>{receipt.paymentTypes.join(", ")}</>
                </StyledPaymentDetails>
              </StyledPaymentMethodeContainer>
            </StyledPaymentContainer>
          </StyledTicketDetailsContainer>
        </>
      )}
    </StyledPurchaseDetailsContainer>
  );
};

export default ReceiptDetails;
