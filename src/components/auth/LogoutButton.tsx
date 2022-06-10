import React from "react";
import { useAuth } from "../../cognito/AuthContext";
import { Tooltip, IconButton } from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

export default function LogoutButton(props: any) {
  const { isAuthenticated, signOut } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <Tooltip title="Logout">
      <IconButton onClick={() => signOut()} {...props}>
        <ExitToAppIcon />
      </IconButton>
    </Tooltip>
  );
}
