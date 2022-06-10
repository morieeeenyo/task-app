import React from "react";
import { useAuth } from "../../cognito/AuthContext";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material";

const AvartIcon = styled(Avatar)(({ theme, ...rest }: any) => ({
  width: theme.spacing(5),
  height: theme.spacing(5),
}));

export const UserProfileButton = (props: any) => {
  const { user, isAuthenticated } = useAuth();

  const navigate = useNavigate();

  if (!isAuthenticated) return null;
  return (
    <IconButton
      color="inherit"
      onClick={() => {
        navigate("/profile");
      }}
      {...props}
    >
      <AvartIcon
        alt={user + "ProfileImage"}
        src={
          "https://lh3.googleusercontent.com/ogw/ADGmqu_xwvqPaarEc_Q0405X0zJLWw8nZcdVul-0gdGl=s83-c-mo"
        }
      />
    </IconButton>
  );
};
