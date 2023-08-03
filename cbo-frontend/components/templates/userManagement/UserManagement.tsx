import { useEffect, useState } from "react";

import Pagination from "~components/molecules/pagination";
import UserListHeader from "~components/organisms/userListHeader";
import UsersTable from "~components/organisms/usersTable";
import { useUsersQuery } from "~hooks/queries/usersQuery";

import { StyledUserManagementContainer } from "./UserManagement.style";

import type { FC } from "react";

const UserManagement: FC = () => {
  const [page, setPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { usersList } = useUsersQuery(page, searchQuery);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  return (
    <StyledUserManagementContainer>
      <UserListHeader setSearchQuery={setSearchQuery} />
      <UsersTable data={usersList?.elements ?? []} />
      <Pagination
        page={page}
        totalPages={usersList?.totalPages ?? 0}
        setPage={setPage}
      />
    </StyledUserManagementContainer>
  );
};

export default UserManagement;
