import UserState from "~components/atoms/userState";
import UserListAction from "~components/molecules/userListAction";

import type { IUserData } from "../../types/UserTypes";

import type { Column } from "react-table";

export const getUsersTableColumn = (): Array<Column<IUserData>> => {
  return [
    {
      Header: "Prénom",
      accessor: "lastName",
      disableSortBy: true,
    },
    {
      Header: "Nom",
      accessor: "firstName",
      disableSortBy: false,
    },
    {
      Header: "N.téléphone",
      accessor: "phoneNumber",
      disableSortBy: true,
    },
    {
      Header: "Email",
      accessor: "email",
      disableSortBy: true,
    },
    {
      Header: "Etat",
      accessor: ({ validatedAt }) => {
        return <UserState activationDate={validatedAt} />;
      },
      disableSortBy: false,
    },
    {
      Header: "Action",
      accessor: ({ validatedAt, phoneNumber, id }) => {
        return (
          <UserListAction
            id={id}
            phoneNumber={phoneNumber}
            activationDate={validatedAt}
          />
        );
      },
      disableSortBy: true,
    },
  ];
};
