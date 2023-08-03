import { useState } from "react";

import Button from "~components/atoms/button";
import { ButtonStyle } from "~components/atoms/button/Button";
import Modal from "~components/atoms/modal";
import OtpModal from "~components/atoms/otpModal";
import { useResendOtpMutation } from "~hooks/mutations/otpMutation";

import { StyledActionContainer } from "./UserListAction.style";

import Link from "next/link";
import type { FC } from "react";

interface IUserListActionProps {
  activationDate?: Date;
  id: string;
  phoneNumber: string;
}

const UserListAction: FC<IUserListActionProps> = ({
  id,
  activationDate,
  phoneNumber,
}) => {
  const [open, setOpen] = useState(false);
  const { mutateAsync: resendOtp } = useResendOtpMutation();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledActionContainer>
      {activationDate ? (
        <Link href={`/users/${id}`}>
          <Button text="Detail" />
        </Link>
      ) : (
        <Button
          text="Envoyer PIN OTP"
          onClick={handleOpen}
          buttonStyle={ButtonStyle.SECONDARY}
        />
      )}
      <Modal open={open} handleClose={handleClose}>
        <OtpModal
          handleClose={handleClose}
          handleSendOtp={resendOtp}
          phoneNumber={phoneNumber}
        />
      </Modal>
    </StyledActionContainer>
  );
};

export default UserListAction;
