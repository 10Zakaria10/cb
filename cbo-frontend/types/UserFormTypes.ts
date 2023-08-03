export const enum userFields {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  EMAIL = "email",
  BIRTH_DATE = "birthDate",
  ADDRESS = "address",
  CITY = "city",
  PROFESSION = "profession",
  FAMILY_SITUATION = "familySituation",
  NUMBER_OF_KIDS = "numberOfKids",
}

export interface IUserFormFields {
  [userFields.FIRST_NAME]: string;
  [userFields.LAST_NAME]: string;
  [userFields.EMAIL]: string | null;
  [userFields.BIRTH_DATE]: Date | null;
  [userFields.ADDRESS]?: string;
  [userFields.CITY]?: string;
  [userFields.PROFESSION]?: string;
  [userFields.FAMILY_SITUATION]?: string;
  [userFields.NUMBER_OF_KIDS]?: number;
}

export interface IUpdateUserParams {
  id: string;
  data: IUserFormFields;
}

export type IUpdateBalanceCommand = {
  balance: number;
};

export interface IUpdateBalanceParams {
  id: string;
  data: IUpdateBalanceCommand;
}
