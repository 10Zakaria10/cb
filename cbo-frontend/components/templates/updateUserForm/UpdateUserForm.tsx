import { useContext } from "react";

import LoadingFrame from "~components/molecules/loadingFrame";
import UpdateUserCoupons from "~components/organisms/updateUserCoupons";
import UpdateUserInfo from "~components/organisms/updateUserInfo";
import { useUserDetailsQuery } from "~hooks/queries/userDetailsQuery";
import { RoleContext } from "~layouts/templates/adminSpace/AdminSpace";
import { AgentRoles } from "~types/AgentTypes";

import UpdateUserBalance from "../../organisms/updateUserBalance";

import {
  StyledLineSeparator,
  StyledUpdateUserFormContainer,
} from "./UpdateUserForm.style";

import { useRouter } from "next/router";
import type { FC } from "react";

const UpdateUserForm: FC = () => {
  const role = useContext(RoleContext);
  const router = useRouter();
  const { id } = router.query;
  const { userDetails, loading } = useUserDetailsQuery(id as string);
  if (loading || !userDetails) {
    return <LoadingFrame />;
  }
  return (
    <StyledUpdateUserFormContainer>
      <UpdateUserInfo
        user={userDetails}
        editable={AgentRoles.AGENT_ADMIN === role}
      />
      <StyledLineSeparator />
      <UpdateUserBalance
        id={userDetails.id}
        balance={userDetails.balance}
        editable={AgentRoles.AGENT_ADMIN === role}
      />
      <StyledLineSeparator />
      <UpdateUserCoupons remoteId={userDetails.remoteUserId} />
    </StyledUpdateUserFormContainer>
  );
};

export default UpdateUserForm;
