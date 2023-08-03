import agentService from "~services/agent/agent.service";
import type { IAgentDto } from "~types/AgentTypes";
import type { ApiError } from "~types/apiError";

import { agentQueryKey } from "./keys";

import { useQuery } from "react-query";

function useAgentQuery() {
  const {
    isLoading: loading,
    data: agentInfo,
    error,
  } = useQuery<IAgentDto, ApiError>(agentQueryKey(), async () =>
    agentService.getAgentInfo(),
  );

  return { agentInfo, loading, error };
}

export default useAgentQuery;
