import userService from "~services/userTable/userManagement.service";
import type { ApiError } from "~types/apiError";
import type { IReceiptsDto } from "~types/ReceiptTypes";

import { receiptsQueryKey } from "./keys";

import { useQuery } from "react-query";

function useReceiptsQuery(size: number, searchQuery: string, id: string) {
  const {
    isLoading: loading,
    data: receipts,
    error,
  } = useQuery<IReceiptsDto, ApiError>(
    receiptsQueryKey(size, searchQuery),
    async () => userService.getReceipts(size, searchQuery, id),
  );

  return { receipts, loading, error };
}

export default useReceiptsQuery;
