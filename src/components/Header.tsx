import React from "react";
import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'

import LogoutButton from "./auth/LogoutButton";
import SignInButton from "./auth/SignInButton";
import SignUpButton from "./auth/SignUpButton";
import { UserProfileButton } from "./header/UserProfileButton";

export const Header = () => {
  return (
    <div>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Typography variant="h6">
            Tasks App
          </Typography>
          <SignInButton color="primary" />
          <SignUpButton color="primary" />
          <UserProfileButton />
          <LogoutButton color="primary" />
        </Toolbar>
      </AppBar>
    </div>
  );
};
