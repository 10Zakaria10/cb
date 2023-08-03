import userService from "~services/userTable/userManagement.service";
import type { ApiError } from "~types/apiError";
import type { IUserDetailsDto } from "~types/UserTypes";

import { userDetailsQueryKey } from "./keys";

import { useQuery } from "react-query";

function useUserDetailsQuery(id: string) {
  const {
    isLoading: loading,
    data: userDetails,
    error,
  } = useQuery<IUserDetailsDto, ApiError>(userDetailsQueryKey(id), async () =>
    userService.getUser(id),
  );

  return { userDetails, loading, error };
}

export default useUserDetailsQuery;
