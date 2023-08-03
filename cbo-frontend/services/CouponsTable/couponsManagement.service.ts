import type { ICouponData } from "~types/CouponTypes";
import apiClient from "~utils/apiClient";

export const getCoupons = async (
  remoteUserId: string,
): Promise<ICouponData[]> => {
  return apiClient.get<ICouponData[]>(`/bo/coupons/${remoteUserId}`);
};
export const deleteCoupon = async (ean: string): Promise<void> => {
  await apiClient.patch<undefined, undefined>(`/bo/coupons/${ean}/cancel`);
};

export default {
  getCoupons,
  deleteCoupon,
};
