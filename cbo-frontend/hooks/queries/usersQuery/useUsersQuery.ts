import userService from "~services/userTable/userManagement.service";
import type { ApiError } from "~types/apiError";
import type { IUserDto } from "~types/UserTypes";

import { usersQueryKey } from "./keys";

import { useQuery } from "react-query";

function useUsersQuery(page: number, searchQuery: string) {
  const {
    isLoading: loading,
    data: usersList,
    error,
  } = useQuery<IUserDto, ApiError>(usersQueryKey(page, searchQuery), async () =>
    userService.getUsers(page, searchQuery),
  );

  return { usersList, loading, error };
}

export default useUsersQuery;
