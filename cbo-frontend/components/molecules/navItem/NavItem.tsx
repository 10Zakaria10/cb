import type { Routes } from "~utils/routes";

import { StyledLink, StyledNavItem } from "./NavItem.style";

import Link from "next/link";
import type { FC } from "react";

interface INavItemProps {
  text: string;
  icon: React.ReactNode;
  path: Routes;
  active?: boolean;
}

const NavItem: FC<INavItemProps> = ({ text, icon, path, active }) => {
  return (
    <StyledNavItem active={active}>
      <Link prefetch href={path} passHref>
        <StyledLink>
          {icon} {text}
        </StyledLink>
      </Link>
    </StyledNavItem>
  );
};

export default NavItem;
