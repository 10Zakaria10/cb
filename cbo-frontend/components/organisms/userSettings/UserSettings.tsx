import Avatar from "~components/atoms/avatar";
import UserInformation from "~components/molecules/userInformation";

import {
  StyledUserInfoContainer,
  StyledUserSettingsContainer,
} from "./UserSettings.style";

import { KeyboardArrowDown } from "@mui/icons-material";
import type { FC } from "react";

interface IUserSettingsProps {
  firstName: string;
  lastName: string;
  role: string;
}
const UserSettings: FC<IUserSettingsProps> = ({
  firstName,
  lastName,
  role,
}) => {
  return (
    <StyledUserSettingsContainer>
      <StyledUserInfoContainer>
        <Avatar />
        <UserInformation
          name={`${firstName} ${lastName}`}
          roleDescription={role}
        />
      </StyledUserInfoContainer>
      <KeyboardArrowDown />
    </StyledUserSettingsContainer>
  );
};

export default UserSettings;
