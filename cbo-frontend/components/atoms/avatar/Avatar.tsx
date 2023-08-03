import { Person } from "@mui/icons-material";
import { default as AvatarImage } from "@mui/material/Avatar";
import type { FC } from "react";

const Avatar: FC = () => {
  return (
    <AvatarImage>
      <Person />
    </AvatarImage>
  );
};

export default Avatar;
