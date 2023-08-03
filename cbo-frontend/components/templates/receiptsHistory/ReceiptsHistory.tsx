import ReceiptHistoryCard from "~components/organisms/receiptHistoryCard";
import type { IReceiptsData } from "~types/ReceiptTypes";

import type { FC } from "react";

interface IReceiptHistoryProps {
  receipts?: IReceiptsData[];
  handleShowDetails: (id?: string) => void;
}

const ReceiptsHistory: FC<IReceiptHistoryProps> = ({
  receipts,
  handleShowDetails,
}) => {
  return (
    <>
      {receipts?.map(
        ({ balance, createdAt, totalAmountTTC, store, id, remoteId }) => (
          <ReceiptHistoryCard
            handleShowDetails={handleShowDetails}
            key={id}
            id={id}
            balance={balance}
            total={totalAmountTTC}
            ticketNumber={remoteId}
            createdAt={createdAt}
            store={store}
          />
        ),
      )}
    </>
  );
};

export default ReceiptsHistory;
