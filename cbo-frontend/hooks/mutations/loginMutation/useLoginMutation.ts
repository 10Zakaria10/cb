import authService from "~services/authentication/auth.service";

import { useMutation } from "react-query";

function useLoginMutation() {
  const {
    mutateAsync,
    isLoading: loading,
    data,
    error,
  } = useMutation(authService.login);
  return { mutateAsync, loading, error, data };
}

export default useLoginMutation;
