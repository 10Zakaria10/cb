import {
  StyledPagination,
  StyledPaginationContainer,
} from "./Pagination.style";

import type { FC } from "react";

interface IPaginationProps {
  page: number;
  setPage: (page: number) => void;
  totalPages: number;
}

/* eslint-disable @typescript-eslint/no-unused-vars */
const Pagination: FC<IPaginationProps> = ({ page, setPage, totalPages }) => {
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <StyledPaginationContainer>
      <StyledPagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        page={page}
        onChange={handleChange}
      />
    </StyledPaginationContainer>
  );
};

export default Pagination;
