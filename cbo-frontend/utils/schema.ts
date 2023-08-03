import { userFields } from "~types/UserFormTypes";

import * as yup from "yup";

const getMaxDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 18);
  return date;
};

const schemaStaticShape = () => ({
  [userFields.FIRST_NAME]: yup.string().min(3).required("Nom obligatoire"),
  [userFields.LAST_NAME]: yup.string().min(3).required("Prénom obligatoire"),
  [userFields.BIRTH_DATE]: yup
    .date()
    .nullable()
    .max(getMaxDate(), "-18 ans erreur"),
  [userFields.EMAIL]: yup
    .string()
    .nullable()
    .notRequired()
    .email("Email invalid"),
});

/* eslint-disable @typescript-eslint/explicit-module-boundary-types*/
export const buildSchema = () => {
  return yup.object().shape({
    ...schemaStaticShape(),
  });
};
