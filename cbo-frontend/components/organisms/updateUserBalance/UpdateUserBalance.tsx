import { useState } from "react";

import Button from "~components/atoms/button";
import { ButtonStyle } from "~components/atoms/button/Button";
import TitleHeading from "~components/atoms/titleHeading";
import TextField from "~components/molecules/textField";
import { useBalanceMutation } from "~hooks/mutations/balanceMutation";
import notistackRef from "~utils/notistackRef";

import {
  StyledPointsFieldContainer,
  StyledPointsPreview,
} from "./UpdateUserBalance.style";

import type { FC } from "react";

interface IUpdateUserBalanceProps {
  id: string;
  editable: boolean;
  balance: number;
}

const UpdateUserBalance: FC<IUpdateUserBalanceProps> = ({
  editable,
  balance,
  id,
}) => {
  const [points, setPoints] = useState<number>(balance);
  const handleBalanceChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setPoints(Number(event.target.value));
  };

  const { mutateAsync: updateBalance, loading } = useBalanceMutation(id);
  const handleUpdateBalance = async () => {
    await updateBalance({ id, data: { balance: points } });
    notistackRef.current?.enqueueSnackbar(
      "balance a été modifié avec succéss",
      { variant: "success" },
    );
  };

  return (
    <div>
      <TitleHeading title="Cagnotte" />
      <StyledPointsFieldContainer editable={editable}>
        {editable && (
          <TextField
            type="number"
            value={points}
            onChange={handleBalanceChange}
            label="points"
          />
        )}
        <StyledPointsPreview editable={editable}>
          {balance} <span>Points</span>
        </StyledPointsPreview>
        {editable && (
          <Button
            text="Modifier"
            loading={loading}
            onClick={handleUpdateBalance}
          />
        )}
        <Button buttonStyle={ButtonStyle.CANCEL} text="Envoyer PIN Cagnotte" />
      </StyledPointsFieldContainer>
    </div>
  );
};

export default UpdateUserBalance;
