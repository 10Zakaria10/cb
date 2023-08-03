import notistackRef from "~utils/notistackRef";

import Button, { ButtonStyle } from "../button/Button";

import {
  StyledPinButtonsContainer,
  StyledPinExpirationText,
  StyledPinOtpContent,
  StyledPinOtpText,
} from "./OtpModal.style";

import type { FC } from "react";
import type { UseMutateAsyncFunction } from "react-query";

interface IOtpModalProps {
  phoneNumber: string;
  handleClose: () => void;
  handleSendOtp: UseMutateAsyncFunction<void, unknown, string>;
}
const OtpModal: FC<IOtpModalProps> = ({
  phoneNumber,
  handleClose,
  handleSendOtp,
}) => {
  const onSendOtp = async () => {
    await handleSendOtp(phoneNumber);
    notistackRef.current?.enqueueSnackbar("Otp a été envoyé avec succéss", {
      variant: "success",
    });
  };
  return (
    <StyledPinOtpContent>
      <StyledPinOtpText>
        Voulez vous envoyer le code PIN a <span>{phoneNumber}</span>
      </StyledPinOtpText>
      <StyledPinExpirationText>
        Temps d’expiration 5 minutes
      </StyledPinExpirationText>
      <StyledPinButtonsContainer>
        <Button
          text="Annuler"
          buttonStyle={ButtonStyle.CANCEL}
          onClick={handleClose}
        />
        <Button
          text="Envoyer"
          buttonStyle={ButtonStyle.PRIMARY}
          onClick={onSendOtp}
        />
      </StyledPinButtonsContainer>
    </StyledPinOtpContent>
  );
};

export default OtpModal;
