import { useEffect, useState } from "react";

import SeeMore from "~components/molecules/seeMore";
import ReceiptsHistoryListHeader from "~components/organisms/receiptsHistoryListHeader";
import ReceiptsHistory from "~components/templates/receiptsHistory";
import { useReceiptsQuery } from "~hooks/queries/useReceiptsQuery";

import Ticket from "../ticket";

import {
  StyledNoData,
  StyledReceiptsHistoryContainer,
} from "./ReceiptsHistoryList.style";

import type { FC } from "react";

interface IReceiptHistoryListProps {
  id: string;
}
const ReceiptsHistoryList: FC<IReceiptHistoryListProps> = ({ id }) => {
  const [size, setSize] = useState<number>(3);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [ticketId, setSelectedTicketId] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { receipts } = useReceiptsQuery(size, searchQuery, id);

  const handleSeeMoreClick = () => {
    setSize(size + 3);
  };

  const handleShowDetails = (receiptId?: string) => {
    if (receiptId) {
      setSelectedTicketId(receiptId);
    }
    setShowDetails(!showDetails);
  };

  useEffect(() => {
    setSize(3);
  }, [searchQuery]);

  return (
    <StyledReceiptsHistoryContainer>
      <ReceiptsHistoryListHeader
        showDetails={showDetails}
        setSearchQuery={setSearchQuery}
      />
      {showDetails ? (
        <Ticket id={ticketId} handleShowDetails={handleShowDetails} />
      ) : receipts && receipts.elements.length > 0 ? (
        <>
          <ReceiptsHistory
            receipts={receipts.elements}
            handleShowDetails={handleShowDetails}
          />
          <SeeMore
            totalElements={receipts.totalElements}
            size={size}
            onSeeMoreClick={handleSeeMoreClick}
          />
        </>
      ) : (
        <StyledNoData>Cet utilisateur n'a aucun ticket</StyledNoData>
      )}
    </StyledReceiptsHistoryContainer>
  );
};

export default ReceiptsHistoryList;
