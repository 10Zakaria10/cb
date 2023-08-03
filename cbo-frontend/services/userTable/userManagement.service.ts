import type { ISendOtpQuery } from "~types/OtpTypes";
import type { IReceiptDetailsData, IReceiptsDto } from "~types/ReceiptTypes";
import type {
  IUpdateBalanceCommand,
  IUpdateBalanceParams,
  IUpdateUserParams,
  IUserFormFields,
} from "~types/UserFormTypes";
import type { IUserDetailsDto, IUserDto } from "~types/UserTypes";
import apiClient from "~utils/apiClient";

export const getUsers = async (
  page: number,
  searchQuery: string,
): Promise<IUserDto> => {
  const users = await apiClient.get<IUserDto>(
    `/bo/clients?page=${page - 1}&q=${searchQuery}`,
  );
  return users;
};

export const getUser = async (id: string): Promise<IUserDetailsDto> => {
  const userDetails = await apiClient.get<IUserDetailsDto>(`/bo/clients/${id}`);
  return userDetails;
};

export const updateUser = async (params: IUpdateUserParams): Promise<void> => {
  await apiClient.patch<IUserDetailsDto, IUserFormFields>(
    `/bo/clients/${params.id}`,
    {
      data: params.data,
    },
  );
};

export const updateBalance = async (
  params: IUpdateBalanceParams,
): Promise<void> => {
  await apiClient.patch<IUserDetailsDto, IUpdateBalanceCommand>(
    `/bo/clients/${params.id}/update-balance`,
    {
      data: params.data,
    },
  );
};

export const getReceipts = async (
  size: number,
  searchQuery: string,
  id: string,
): Promise<IReceiptsDto> => {
  const receipts = await apiClient.get<IReceiptsDto>(
    `/bo/clients/${id}/receipts?page=0&size=${size}&q=${searchQuery}`,
  );
  return receipts;
};

const getReceiptById = async (id: string) => {
  return apiClient.get<IReceiptDetailsData>(`/bo/clients/receipts/${id}`);
};

export const resendOtp = async (phoneNumber: string): Promise<void> => {
  const otpDto: ISendOtpQuery = {
    phoneNumber,
  };
  return apiClient.post<undefined, ISendOtpQuery>("/bo/clients/send-otp", {
    data: otpDto,
  });
};

export const disableUser = async (phoneNumber: string): Promise<void> => {
  await apiClient.patch<undefined, undefined>(
    `/bo/clients/${phoneNumber}/disable`,
  );
};

export const enableUser = async (phoneNumber: string): Promise<void> => {
  await apiClient.patch<undefined, undefined>(
    `/bo/clients/${phoneNumber}/enable`,
  );
};

export default {
  getUsers,
  getUser,
  updateUser,
  updateBalance,
  getReceipts,
  getReceiptById,
  resendOtp,
  disableUser,
  enableUser,
};
