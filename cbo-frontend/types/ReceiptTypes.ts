export enum StoreTypeEnum {
  CARREFOUR_GOURMET = "CARREFOUR_GOURMET",
  CARREFOUR = "CARREFOUR",
  CARREFOUR_MARKET = "CARREFOUR_MARKET",
  CARREFOUR_EXPRESS = "CARREFOUR_EXPRESS",
}

export interface IStoreDto {
  id: string;
  name: string;
  type: StoreTypeEnum;
}
export interface IReceiptsData {
  id: string;
  totalAmountTTC: number;
  balance: number;
  createdAt: Date;
  remoteId: string;
  store: IStoreDto;
}

export interface IReceiptsDto {
  totalElements: number;
  totalPages: number;
  elements: IReceiptsData[];
}

export interface IReceiptLine {
  label: string;
  unitPriceTTC: number;
  quantity: number;
  category: string;
}
export interface IReceiptDetailsData {
  store: IStoreDto;
  createdAt: Date;
  remoteId: string;
  totalAmountTTC: number;
  newBalance: number;
  oldBalance: number;
  totalDiscount: number;
  receiptLines: IReceiptLine[];
  paymentTypes: string[];
}

export interface GroupedReceiptLine {
  category: string;
  items: IReceiptLine[];
}
