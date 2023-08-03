export interface IUserData {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  validatedAt?: Date;
}

export interface IUserDto {
  totalElements: number;
  totalPages: number;
  elements: IUserData[];
}

export const familySituationElements = {
  MARRIED: "Marié(e)",
  SINGLE: "Célibataire",
  DIVORCED: "Divorcé(e)",
  WIDOW: "Veuve",
};
export interface IUserDetailsDto {
  id: string;
  remoteUserId: string;
  firstName: string;
  phoneNumber: string;
  lastName: string;
  address: string;
  birthDate: Date;
  city: string;
  email: string;
  profession: string;
  familySituation: keyof typeof familySituationElements;
  numberOfKids: number;
  balance: number;
  enabled: boolean;
}
