import type { IAgentDto } from "~types/AgentTypes";
import apiClient from "~utils/apiClient";

export const getAgentInfo = async (): Promise<IAgentDto> => {
  return apiClient.get<IAgentDto>("bo/agents/current");
};

export default {
  getAgentInfo,
};
