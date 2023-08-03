import SearchInput from "~components/molecules/searchInput";

import {
  StyledHeading,
  StyledSubTitle,
  StyledUserListHeaderContainer,
  StyledUserListHeadingContainer,
} from "./UserListHeader.style";

import type { FC } from "react";

interface IUserListHeaderProps {
  setSearchQuery: (searchQuery: string) => void;
}

const UserListHeader: FC<IUserListHeaderProps> = ({ setSearchQuery }) => {
  return (
    <StyledUserListHeaderContainer>
      <StyledUserListHeadingContainer>
        <StyledHeading>Tous les utilisateurs</StyledHeading>
        <StyledSubTitle>Active et inactive memebres</StyledSubTitle>
      </StyledUserListHeadingContainer>
      <SearchInput setSearchQuery={setSearchQuery} />
    </StyledUserListHeaderContainer>
  );
};

export default UserListHeader;
