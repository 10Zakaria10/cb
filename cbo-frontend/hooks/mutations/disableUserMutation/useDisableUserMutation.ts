import { userDetailsQueryKey } from "~hooks/queries/userDetailsQuery/keys";
import userManagementService from "~services/userTable/userManagement.service";
import { queryClient } from "~utils/queryClient";

import { useMutation } from "react-query";

function useDisableUserMutation(id: string) {
  const {
    mutateAsync,
    isLoading: loading,
    data,
    error,
  } = useMutation(userManagementService.disableUser, {
    onSuccess: async () =>
      queryClient.invalidateQueries(userDetailsQueryKey(id)),
  });
  return { mutateAsync, loading, error, data };
}

export default useDisableUserMutation;
