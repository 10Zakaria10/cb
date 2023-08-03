import { StyledPinOtpBox } from "./Modal.style";

import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import { default as MuiModal } from "@mui/material/Modal";
import type { FC } from "react";
interface IModalProps {
  open: boolean;
  handleClose: () => void;
}

const Modal: FC<IModalProps> = ({ open, handleClose, children }) => {
  return (
    <div>
      <MuiModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <StyledPinOtpBox>{children}</StyledPinOtpBox>
        </Fade>
      </MuiModal>
    </div>
  );
};
export default Modal;
