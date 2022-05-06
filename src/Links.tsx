import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from '@mui/material/Button';

const LinkButton = ({ linkTo, text }: any) => {
  const navigate = useNavigate();
  const location = useLocation();

  const addStyle =
    location.pathname === linkTo ? { borderBottom: "1px solid #3f51b5" } : {};
  return (
    <div>
      <Button
        onClick={() => {
          navigate(linkTo);
        }}
        style={addStyle}
      >
        {text}
      </Button>
    </div>
  );
};

export const Links = () => {
  return (
    <div style={{ borderBottom: "1px solid #e1e4e8" }}>
      <LinkButton linkTo="/" text="Overview" />
      <LinkButton linkTo="/profile" text="Profile" />
      <LinkButton linkTo="/settings" text="Settings" />
    </div>
  );
};
