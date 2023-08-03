import { StyledSearchInput } from "./SearchInput.style";

import { Search } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import { debounce } from "lodash";
import type { FC } from "react";

interface ISearchInputProps {
  setSearchQuery: (searchQuery: string) => void;
}

const SearchInput: FC<ISearchInputProps> = ({ setSearchQuery }) => {
  const debouncedSearch = debounce((searchQuery: string) => {
    setSearchQuery(searchQuery);
  }, 500);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(event.target.value);
  };
  return (
    <StyledSearchInput
      onChange={handleChange}
      placeholder="Search"
      startAdornment={
        <InputAdornment position="start">
          <Search />
        </InputAdornment>
      }
    />
  );
};

export default SearchInput;
