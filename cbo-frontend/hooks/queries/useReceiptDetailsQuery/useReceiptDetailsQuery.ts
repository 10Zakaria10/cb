import userManagementService from "~services/userTable/userManagement.service";
import type { ApiError } from "~types/apiError";
import type { IReceiptDetailsData } from "~types/ReceiptTypes";

import { receiptDetailsQueryKey } from "./keys";

import { useQuery } from "react-query";

function useReceiptQuery(id: string | undefined) {
  if (id === undefined) return { receipt: undefined };
  const getReceipt = async () => userManagementService.getReceiptById(id);
  const {
    isLoading: loading,
    data: receipt,
    error,
  } = useQuery<IReceiptDetailsData, ApiError>(
    receiptDetailsQueryKey(id),
    getReceipt,
  );

  return { loading, error, receipt };
}

export default useReceiptQuery;
