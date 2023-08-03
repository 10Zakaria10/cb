import type { ILoginForm } from "~types/loginTypes";
import apiClient from "~utils/apiClient";
import { REFRESH_TOKEN_ENDPOINT } from "~utils/apiHelper";

export const login = async (loginDto: ILoginForm): Promise<void> => {
  await apiClient.post<undefined, ILoginForm>("bo/sign-in", {
    data: loginDto,
  });
};

export const refreshToken = async (): Promise<Response> => {
  return fetch(REFRESH_TOKEN_ENDPOINT, {
    credentials: "include",
    method: "POST",
  });
};

export default {
  login,
  refreshToken,
};
