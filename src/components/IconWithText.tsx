import React from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

const FormAvatar = styled(Avatar)(({ theme }) => ({
  margin: theme.spacing(2),
  width: theme.spacing(7),
  height: theme.spacing(7),
  backgroundColor: theme.palette.primary.main,
}));
export const SignInIconWithText = ({ text }: { text: string }) => {
  return (
    <>
      <FormAvatar></FormAvatar>
      <Typography component="h1" variant="h5">
        {text}
      </Typography>
    </>
  );
};
