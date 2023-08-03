import { useState } from "react";

import { useDisableUserMutation } from "~hooks/mutations/disableUserMutation";
import useEnableUserMutation from "~hooks/mutations/enableUserMutation/useEnableUserMutation";
import notistackRef from "~utils/notistackRef";

import { FormControlLabel, Switch as MuiSwitch } from "@mui/material";
import type { FC } from "react";

interface ISwitchProps {
  enabled: boolean;
  phoneNumber: string;
  id: string;
}
const Switch: FC<ISwitchProps> = ({ enabled, phoneNumber, id }) => {
  const [active, setActive] = useState(enabled);
  const { mutateAsync: disableUser } = useDisableUserMutation(id);
  const { mutateAsync: enableUser } = useEnableUserMutation(id);
  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      await enableUser(phoneNumber);
      notistackRef.current?.enqueueSnackbar("Utilisateur activé", {
        variant: "success",
      });
      setActive(true);
    } else {
      await disableUser(phoneNumber);
      notistackRef.current?.enqueueSnackbar("Utilisateur desactivé", {
        variant: "success",
      });
      setActive(false);
    }
  };
  return (
    <FormControlLabel
      control={<MuiSwitch checked={active} onChange={handleChange} />}
      label={active ? "Suspendre" : "Reactiver"}
    />
  );
};

export default Switch;
