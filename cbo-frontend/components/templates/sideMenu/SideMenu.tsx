import NavMenu from "~components/organisms/navMenu";
import UserSettings from "~components/organisms/userSettings";

import {
  StyledImageContainer,
  StyledNavMenuContainer,
  StyledSideMenuContainer,
  StyledUserSettingContainer,
} from "./SideMenu.style";

import type { FC } from "react";

interface ISideMenuProps {
  firstName: string;
  lastName: string;
  role: string;
}

const SideMenu: FC<ISideMenuProps> = ({ firstName, lastName, role }) => {
  return (
    <StyledSideMenuContainer>
      <StyledImageContainer>
        <img src="/images/Logo.svg" alt="logo" height={39} width={120} />
      </StyledImageContainer>
      <StyledNavMenuContainer>
        <NavMenu />
      </StyledNavMenuContainer>
      <StyledUserSettingContainer>
        <UserSettings firstName={firstName} lastName={lastName} role={role} />
      </StyledUserSettingContainer>
    </StyledSideMenuContainer>
  );
};

export default SideMenu;
