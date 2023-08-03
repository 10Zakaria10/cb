export enum AgentRoles {
  AGENT_ADMIN = "AGENT_ADMIN",
  AGENT = "AGENT",
}

export interface IAgentDto {
  firstName: string;
  lastName: string;
  roles: AgentRoles[];
}

export const AgentRoleDescriptions = {
  [AgentRoles.AGENT]: "Advisor",
  [AgentRoles.AGENT_ADMIN]: "Support Manager",
};
