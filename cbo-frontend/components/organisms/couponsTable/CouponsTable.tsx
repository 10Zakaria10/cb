/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ICouponData } from "~types/CouponTypes";

import {
  StyledPlaceHolder,
  StyledTable,
  StyledTableContainer,
  TableBodyCell,
  TableHeadCell,
  TableRow,
} from "./CouponsTable.style";

import type { FC } from "react";
import type { Column } from "react-table";
import { useExpanded, useSortBy, useTable } from "react-table";

interface ICouponsTableProps {
  data?: ICouponData[];
  columns: Array<Column<any>>;
  placeholder: string;
}

const CouponsTable: FC<ICouponsTableProps> = ({
  data = [],
  columns,
  placeholder,
}) => {
  const { getTableProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    useExpanded,
  );
  return (
    <StyledTableContainer>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <TableRow
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id}
            >
              {headerGroup.headers.map((column) => (
                <TableHeadCell
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={column.id}
                >
                  <div>{column.render("Header")}</div>
                </TableHeadCell>
              ))}
            </TableRow>
          ))}
        </thead>
        <tbody>
          {rows.length === 0 && (
            <StyledPlaceHolder>{placeholder}</StyledPlaceHolder>
          )}
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <TableRow
                {...row.getRowProps()}
                key={row.id}
                className={index % 2 ? "odd" : "even"}
              >
                {row.cells.map((cell) => (
                  <TableBodyCell
                    {...cell.getCellProps()}
                    key={cell.getCellProps().key}
                  >
                    {cell.render("Cell")}
                  </TableBodyCell>
                ))}
              </TableRow>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default CouponsTable;
