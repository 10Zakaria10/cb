/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  StyledPlaceHolder,
  StyledTable,
  StyledTableContainer,
  TableBodyCell,
  TableHeadCell,
  TableRow,
} from "./Table.style";

import type { FC } from "react";
import type { Column } from "react-table";
import { useExpanded, useSortBy, useTable } from "react-table";

interface IExposureTableProps {
  data?: any[];
  columns: Array<Column<any>>;
  placeholder: string;
}

const ExposureTable: FC<IExposureTableProps> = ({
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
          {rows.map((row) => {
            prepareRow(row);
            return (
              <TableRow {...row.getRowProps()} key={row.id}>
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

export default ExposureTable;
