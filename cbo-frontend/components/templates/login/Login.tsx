import LoginForm from "~components/organisms/loginForm";

import {
  StyledFormContainer,
  StyledImageContainer,
  StyledLoginPageContainer,
} from "./Login.style";

import Image from "next/image";
import type { FC } from "react";

const Login: FC = () => {
  return (
    <StyledLoginPageContainer>
      <StyledImageContainer>
        <Image src="/images/Logo.svg" alt="logo" height={54} width={170} />
      </StyledImageContainer>
      <StyledFormContainer>
        <LoginForm />
      </StyledFormContainer>
    </StyledLoginPageContainer>
  );
};

export default Login;
