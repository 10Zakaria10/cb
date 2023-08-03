import { getCouponsTableColumn } from "~services/CouponsTable/couponsTableColumnDefinition";
import type { ICouponData } from "~types/CouponTypes";

import CouponsTable from "../couponsTable";

import type { FC } from "react";
import type { UseMutateAsyncFunction } from "react-query";

interface ICouponsListProps {
  data?: ICouponData[];
  deleteCoupon: UseMutateAsyncFunction<void, unknown, string>;
}

const CouponsList: FC<ICouponsListProps> = ({ data, deleteCoupon }) => {
  const columns = getCouponsTableColumn(deleteCoupon);
  return <CouponsTable data={data} columns={columns} placeholder={"No data"} />;
};

export default CouponsList;
