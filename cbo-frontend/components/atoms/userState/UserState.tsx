import { StyledDateText, StyledStateText } from "./UserState.style";

import type { FC } from "react";

interface IUserListStateProps {
  activationDate?: Date;
}

const UserState: FC<IUserListStateProps> = ({ activationDate }) => {
  return activationDate ? (
    <StyledDateText>
      {new Date(activationDate).toLocaleDateString()}
    </StyledDateText>
  ) : (
    <StyledStateText>Non activé</StyledStateText>
  );
};

export default UserState;
