const RECEIPTS = "receipts";

export const receiptsQueryKey = (size: number, searchQuery: string) => {
  return [RECEIPTS, size, searchQuery];
};
