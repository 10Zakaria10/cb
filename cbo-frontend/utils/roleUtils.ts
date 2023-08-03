import { AgentRoleDescriptions, AgentRoles } from "~types/AgentTypes";

export const getRoleDescription = (roles: AgentRoles[]) =>
  roles.includes(AgentRoles.AGENT_ADMIN)
    ? AgentRoleDescriptions[AgentRoles.AGENT_ADMIN]
    : AgentRoleDescriptions[AgentRoles.AGENT];

export const getRole = (roles: AgentRoles[]) =>
  roles.includes(AgentRoles.AGENT_ADMIN)
    ? AgentRoles.AGENT_ADMIN
    : AgentRoles.AGENT;
