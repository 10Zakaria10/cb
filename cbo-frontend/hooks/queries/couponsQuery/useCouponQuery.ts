import couponsService from "~services/CouponsTable/couponsManagement.service";
import type { ApiError } from "~types/apiError";
import type { ICouponData } from "~types/CouponTypes";

import { couponsDetailsQueryKey } from "./keys";

import { useQuery } from "react-query";

function useCouponQuery(remoteUserId: string) {
  const getCoupons = async () => couponsService.getCoupons(remoteUserId);
  const { data: couponDetails } = useQuery<ICouponData[], ApiError>(
    couponsDetailsQueryKey(remoteUserId),
    getCoupons,
  );
  return { couponDetails };
}

export default useCouponQuery;
