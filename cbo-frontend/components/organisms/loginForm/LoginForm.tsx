import { useState } from "react";

import Button from "~components/atoms/button";
import TextInputLabel from "~components/atoms/textInputLabel";
import TextInput from "~components/molecules/textInput";
import { useLoginMutation } from "~hooks/mutations/loginMutation";
import { Routes } from "~utils/routes";

import {
  FormWrapper,
  InputWrapper,
  StyledButtonWrapper,
} from "./LoginForm.style";

import Router from "next/router";
import type { FC } from "react";

const LoginForm: FC = () => {
  const { mutateAsync: signIn, loading } = useLoginMutation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async () => {
    await signIn({ username: email, password });
    Router.push(Routes.users);
  };
  return (
    <FormWrapper>
      <InputWrapper>
        <TextInputLabel label="Email" />
        <TextInput required onChange={handleEmailChange} />
      </InputWrapper>
      <InputWrapper>
        <TextInputLabel label="Mot de passe" />
        <TextInput type="password" onChange={handlePasswordChange} required />
      </InputWrapper>
      <StyledButtonWrapper>
        <Button loading={loading} text="Se connecter" onClick={handleSubmit} />
      </StyledButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;
