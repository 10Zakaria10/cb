import Button from "~components/atoms/button";
import { ButtonStyle } from "~components/atoms/button/Button";

import type { ICouponData } from "../../types/CouponTypes";

import styled from "@emotion/styled";
import type { UseMutateAsyncFunction } from "react-query";
import type { Column } from "react-table";

const StyledButtonContainer = styled.div`
  & .danger {
    min-height: unset;
  }
`;
const getFormattedDate = (date: string) => {
  const newDate = new Date(date);
  return `${newDate.getDate()}/${
    newDate.getMonth() + 1
  }/${newDate.getFullYear()}`;
};
export const getCouponsTableColumn = (
  deleteCoupon: UseMutateAsyncFunction<void, unknown, string>,
): Array<Column<ICouponData>> => {
  const handleButtonClick = (ean: string) => {
    return async () => {
      await deleteCoupon(ean);
    };
  };
  return [
    {
      Header: "N° bon d'achat",
      accessor: "ean",
      disableSortBy: true,
    },
    {
      Header: "valeur",
      accessor: ({ amount }) => {
        return <div>{amount} Dhs</div>;
      },
      disableSortBy: true,
    },
    {
      Header: "Date",
      accessor: ({ expiredAt }) => {
        return <div>{getFormattedDate(expiredAt)}</div>;
      },
      disableSortBy: true,
    },
    {
      Header: "Action",
      accessor: ({ ean }) => {
        return (
          <StyledButtonContainer>
            <Button
              text="Supprimer"
              buttonStyle={ButtonStyle.DANGER}
              onClick={handleButtonClick(ean)}
            />
          </StyledButtonContainer>
        );
      },
      disableSortBy: true,
    },
  ];
};
