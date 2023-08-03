import NavItem from "~components/molecules/navItem";
import { Routes } from "~utils/routes";

import { StyledNavMenu } from "./NavMenu.style";

import {
  LiveHelpOutlined,
  PersonOutlined,
  PortraitOutlined,
  TuneOutlined,
} from "@mui/icons-material";
import { useRouter } from "next/router";
import type { FC } from "react";

const NavMenu: FC = () => {
  const { pathname } = useRouter();

  return (
    <StyledNavMenu>
      <NavItem
        icon={<PortraitOutlined />}
        text="Gestion utilisateurs"
        path={Routes.users}
        active={pathname.includes(Routes.users)}
      />
      <NavItem
        icon={<PersonOutlined />}
        text="Gestion animateurs"
        path={Routes.animators}
        active={pathname.includes(Routes.animators)}
      />
      <NavItem
        icon={<LiveHelpOutlined />}
        text="Guide utilisateurs"
        path={Routes.animators}
      />
      <NavItem
        icon={<TuneOutlined />}
        text="Gestion versions"
        path={Routes.animators}
      />
    </StyledNavMenu>
  );
};

export default NavMenu;
