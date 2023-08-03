import React from "react";

import LoadingFrame from "~components/molecules/loadingFrame";
import SideMenu from "~components/templates/sideMenu";
import { useAuthentication } from "~hooks/authentication/hooks";
import { useAgentQuery } from "~hooks/queries/agentQuery";
import { AgentRoles } from "~types/AgentTypes";
import { getRole, getRoleDescription } from "~utils/roleUtils";
import { Routes } from "~utils/routes";

import DefaultLayout from "../default";

import {
  StyledAdminSpaceContainer,
  StyledMenuContainer,
  StyledPageContainer,
} from "./AdminSpace.style";

import Router from "next/router";

export const RoleContext = React.createContext<AgentRoles>(AgentRoles.AGENT);
export const RoleContextProvider = RoleContext.Provider;

const AdminSpaceLayout: React.FC = ({ children }) => {
  const { agentInfo, loading } = useAgentQuery();
  const { isAuthenticated } = useAuthentication();

  if (!isAuthenticated) {
    Router.push(Routes.login);
    return <LoadingFrame />;
  }

  if (loading || !agentInfo) {
    return <LoadingFrame />;
  }

  return (
    <DefaultLayout>
      <StyledAdminSpaceContainer>
        <StyledMenuContainer>
          <SideMenu
            firstName={agentInfo.firstName}
            lastName={agentInfo.lastName}
            role={getRoleDescription(agentInfo.roles)}
          />
        </StyledMenuContainer>
        <RoleContextProvider value={getRole(agentInfo.roles)}>
          <StyledPageContainer> {children}</StyledPageContainer>
        </RoleContextProvider>
      </StyledAdminSpaceContainer>
    </DefaultLayout>
  );
};

export default AdminSpaceLayout;
