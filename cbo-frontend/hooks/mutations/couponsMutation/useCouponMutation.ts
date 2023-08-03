import { couponsDetailsQueryKey } from "~hooks/queries/couponsQuery/keys";
import couponsService from "~services/CouponsTable/couponsManagement.service";

import { useMutation } from "react-query";
import { queryClient } from "~utils/queryClient";

function useCouponMutation(remoteUserId: string) {
  const {
    mutateAsync,
    isLoading: loading,
    error,
  } = useMutation(couponsService.deleteCoupon, {
    onSuccess: async () =>
      queryClient.invalidateQueries(couponsDetailsQueryKey(remoteUserId)),
  });
  return { mutateAsync, loading, error };
}

export default useCouponMutation;
