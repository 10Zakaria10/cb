import {
  StyledRole,
  StyledUserInformationContainer,
  StyledUsername,
} from "./UserInformation.style";

import type { FC } from "react";

interface IUserInformationProps {
  name: string;
  roleDescription: string;
}

const UserInformation: FC<IUserInformationProps> = ({
  name,
  roleDescription,
}) => {
  return (
    <StyledUserInformationContainer>
      <StyledUsername>{name}</StyledUsername>
      <StyledRole>{roleDescription}</StyledRole>
    </StyledUserInformationContainer>
  );
};

export default UserInformation;
