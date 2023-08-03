import UpdateUserForm from "~components/templates/updateUserForm";

import ReceiptsHistoryList from "../receiptsHistoryList";

import { StyledUserDetailsContainer } from "./UserDetails.style";

import { useRouter } from "next/router";
import type { FC } from "react";

const UserDetails: FC = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <StyledUserDetailsContainer>
      <UpdateUserForm />
      <ReceiptsHistoryList id={id as string} />
    </StyledUserDetailsContainer>
  );
};

export default UserDetails;
