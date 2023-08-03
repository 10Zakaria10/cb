import { useMemo } from "react";

import Table from "~components/molecules/table";

import { getUsersTableColumn } from "../../../services/userTable/usersTableColumnDefinition";
import type { IUserData } from "../../../types/UserTypes";

import { StyledUserTableContainer } from "./UserTable.style";

import type { FC } from "react";

interface IUsersTableProps {
  data: IUserData[];
}

const UsersTable: FC<IUsersTableProps> = ({ data }) => {
  const columns = useMemo(() => getUsersTableColumn(), []);

  return (
    <StyledUserTableContainer>
      <Table data={data} columns={columns} placeholder={"No data"} />
    </StyledUserTableContainer>
  );
};

export default UsersTable;
