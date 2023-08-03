/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */

import Button from "~components/atoms/button";
import { ButtonType } from "~components/atoms/button/Button";
import TitleHeading from "~components/atoms/titleHeading";
import DropDownField from "~components/molecules/DropDownField";
import Switch from "~components/molecules/switch";
import TextField from "~components/molecules/textField";
import { useUserMutation } from "~hooks/mutations/userMutation";
import type { IUserFormFields } from "~types/UserFormTypes";
import { userFields } from "~types/UserFormTypes";
import type { IUserDetailsDto } from "~types/UserTypes";
import { familySituationElements } from "~types/UserTypes";
import notistackRef from "~utils/notistackRef";
import { buildSchema } from "~utils/schema";

import {
  StyledHeaderContainer,
  StyledUpdateButtonContainer,
  StyledUserDetailsInputsContainer,
} from "./UpdateUserInfo.style";

import { yupResolver } from "@hookform/resolvers/yup";
import { MenuItem } from "@mui/material";
import type { FC } from "react";
import { useForm } from "react-hook-form";

interface IUpdateUserInfoProps {
  user: IUserDetailsDto;
  editable: boolean;
}
const UpdateUserInfo: FC<IUpdateUserInfoProps> = ({
  editable,
  user: {
    id,
    address,
    birthDate,
    phoneNumber,
    city,
    email,
    familySituation,
    lastName,
    numberOfKids,
    firstName,
    enabled,
    profession,
  },
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IUserFormFields>({
    mode: "onChange",
    resolver: yupResolver(buildSchema()),
    defaultValues: {
      email,
      address,
      birthDate,
      city,
      familySituation,
      lastName,
      numberOfKids,
      firstName,
      profession,
    },
  });

  const { mutateAsync: updateUser, loading } = useUserMutation(id);
  const submitForm = async (params: IUserFormFields) => {
    await updateUser({ id, data: params });
    notistackRef.current?.enqueueSnackbar("Utilisateur modifié avec succéss", {
      variant: "success",
    });
  };

  return (
    <>
      <StyledHeaderContainer>
        <TitleHeading title="Informations personnelles" />
        <Switch phoneNumber={phoneNumber} id={id} enabled={enabled} />
      </StyledHeaderContainer>
      <StyledUserDetailsInputsContainer onSubmit={handleSubmit(submitForm)}>
        <TextField
          register={register(userFields.LAST_NAME)}
          error={Boolean(errors[userFields.LAST_NAME]?.message)}
          errorMessage={errors.lastName?.message}
          editable={editable}
          label="Prénom"
        />
        <TextField
          register={register(userFields.FIRST_NAME)}
          error={Boolean(errors[userFields.FIRST_NAME]?.message)}
          errorMessage={errors.firstName?.message}
          editable={editable}
          label="Nom"
        />
        <TextField
          register={register(userFields.EMAIL)}
          error={Boolean(errors[userFields.EMAIL]?.message)}
          errorMessage={errors.email?.message}
          editable={editable}
          label="Email"
        />
        <TextField
          control={control}
          inputType="date"
          error={Boolean(errors[userFields.BIRTH_DATE]?.message)}
          errorMessage={errors.birthDate?.message}
          editable={editable}
          label="Date de naissance"
        />
        <TextField
          register={register(userFields.ADDRESS)}
          error={Boolean(errors[userFields.ADDRESS]?.message)}
          errorMessage={errors.address?.message}
          editable={editable}
          label="Adresse"
          fullWidth
        />
        <TextField
          register={register(userFields.CITY)}
          error={Boolean(errors[userFields.CITY]?.message)}
          errorMessage={errors.city?.message}
          editable={editable}
          label="Ville"
        />
        <TextField
          register={register(userFields.PROFESSION)}
          error={Boolean(errors[userFields.PROFESSION]?.message)}
          errorMessage={errors.profession?.message}
          editable={editable}
          label="Profession"
        />
        <DropDownField
          control={control}
          name={userFields.FAMILY_SITUATION}
          editable={editable}
          label="Statut marital"
        >
          {Object.keys(familySituationElements).map((familySituationKey) => (
            <MenuItem key={familySituationKey} value={familySituationKey}>
              {(familySituationElements as any)[familySituationKey]}
            </MenuItem>
          ))}
        </DropDownField>
        <TextField
          register={register(userFields.NUMBER_OF_KIDS)}
          error={Boolean(errors[userFields.NUMBER_OF_KIDS]?.message)}
          errorMessage={errors.numberOfKids?.message}
          editable={editable}
          type="number"
          label="Nombre d'enfant a charge"
        />
        {editable && (
          <StyledUpdateButtonContainer>
            <Button
              text="Modifier"
              loading={loading}
              buttonType={ButtonType.SUBMIT}
            />
          </StyledUpdateButtonContainer>
        )}
      </StyledUserDetailsInputsContainer>
    </>
  );
};

export default UpdateUserInfo;
