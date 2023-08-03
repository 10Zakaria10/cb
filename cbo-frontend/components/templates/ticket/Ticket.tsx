import ReceiptDetails from "~components/organisms/receiptDetails";
import { useReceiptDetailsQuery } from "~hooks/queries/useReceiptDetailsQuery";

import {
  StyledBackContainer,
  StyledReceiptDetailsContainer,
  StyledTicketContainer,
  StyledTicketHeading,
} from "./Ticket.style";

import { ArrowBack } from "@mui/icons-material";
import type { FC } from "react";

interface ITicketProps {
  id: string;
  handleShowDetails: (id?: string) => void;
}
const Ticket: FC<ITicketProps> = ({ id, handleShowDetails }) => {
  const { receipt } = useReceiptDetailsQuery(id);

  return (
    <StyledTicketContainer>
      <StyledTicketHeading>Ticket de caisse </StyledTicketHeading>
      <StyledReceiptDetailsContainer>
        <ReceiptDetails receipt={receipt} />
      </StyledReceiptDetailsContainer>
      <StyledBackContainer
        onClick={() => {
          handleShowDetails();
        }}
      >
        <ArrowBack />
        Retour
      </StyledBackContainer>
    </StyledTicketContainer>
  );
};

export default Ticket;
