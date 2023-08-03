import TitleHeading from "~components/atoms/titleHeading";
import SearchInput from "~components/molecules/searchInput";

import {
  StyledReceiptsHistoryListHeaderContainer,
  StyledSearchContainer,
} from "./ReceiptsHistoryListHeader.style";

import type { FC } from "react";

interface IReceiptHistoryListHeaderProps {
  setSearchQuery: (searchQuery: string) => void;
  showDetails: boolean;
}
const ReceiptsHistoryListHeader: FC<IReceiptHistoryListHeaderProps> = ({
  setSearchQuery,
  showDetails,
}) => {
  return (
    <StyledReceiptsHistoryListHeaderContainer>
      <TitleHeading title="Historique" />
      <StyledSearchContainer>
        {!showDetails && <SearchInput setSearchQuery={setSearchQuery} />}
      </StyledSearchContainer>
    </StyledReceiptsHistoryListHeaderContainer>
  );
};

export default ReceiptsHistoryListHeader;
