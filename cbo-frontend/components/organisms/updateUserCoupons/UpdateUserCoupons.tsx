import TitleHeading from "~components/atoms/titleHeading";
import CouponsList from "~components/organisms/couponsList";
import { useCouponMutation } from "~hooks/mutations/couponsMutation";
import { useCouponQuery } from "~hooks/queries/couponsQuery";

import type { FC } from "react";

interface IUpdateUserCoupons {
  remoteId: string;
}
const UpdateUserCoupons: FC<IUpdateUserCoupons> = ({ remoteId }) => {
  const { couponDetails } = useCouponQuery(remoteId);
  const { mutateAsync: deleteCoupon } = useCouponMutation(remoteId);
  return (
    <>
      <TitleHeading title="Bon d'achat" />
      <CouponsList data={couponDetails} deleteCoupon={deleteCoupon} />
    </>
  );
};

export default UpdateUserCoupons;
