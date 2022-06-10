import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

import LogoutButton from "./auth/LogoutButton";
import SignInButton from "./auth/SignInButton";
import SignUpButton from "./auth/SignUpButton";
import { UserProfileButton } from "./header/UserProfileButton";
import { styled } from "@mui/material";

const HeaderContainer = styled("div")({
  flexGrow: 1,
});

const Title = styled(Typography)(({ theme, ...rest }) => ({
  flexGrow: 1,
  color: theme.palette.primary.main,
}));

export const Header = () => {
  return (
    <HeaderContainer>
      <AppBar
        position="static"
        style={{ background: "transparent", boxShadow: "none" }}
      >
        <Toolbar>
          <Title variant="h6">Tasks App</Title>
          <SignInButton color="primary" />
          <SignUpButton color="primary" />
          <UserProfileButton />
          <LogoutButton color="primary" />
        </Toolbar>
      </AppBar>
    </HeaderContainer>
  );
};
