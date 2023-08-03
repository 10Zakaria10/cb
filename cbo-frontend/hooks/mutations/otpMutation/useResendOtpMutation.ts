import userManagementService from "~services/userTable/userManagement.service";

import { useMutation } from "react-query";

function useResendOtpMutation() {
  const {
    mutateAsync,
    isLoading: loading,
    error,
  } = useMutation(userManagementService.resendOtp);
  return { mutateAsync, loading, error };
}

export default useResendOtpMutation;
