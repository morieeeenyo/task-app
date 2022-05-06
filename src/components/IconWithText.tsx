import React from "react";
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

export const SignInIconWithText = ({ text }: { text: string }) => {

  return (
    <>
      <Avatar>
      </Avatar>
      <Typography component="h1" variant="h5">
        {text}
      </Typography>
    </>
  );
};
