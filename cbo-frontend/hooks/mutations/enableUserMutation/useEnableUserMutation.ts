import { userDetailsQueryKey } from "~hooks/queries/userDetailsQuery/keys";
import userManagementService from "~services/userTable/userManagement.service";
import { queryClient } from "~utils/queryClient";

import { useMutation } from "react-query";

function useEnableUserMutation(id: string) {
  const {
    mutateAsync,
    isLoading: loading,
    data,
    error,
  } = useMutation(userManagementService.enableUser, {
    onSuccess: async () =>
      queryClient.invalidateQueries(userDetailsQueryKey(id)),
  });
  return { mutateAsync, loading, error, data };
}

export default useEnableUserMutation;
