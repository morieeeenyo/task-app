import React from "react";
import { useAuth } from "../../cognito/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button'

export default function SignUpButton(props: any) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  if (isAuthenticated) return null;

  const handleClick = () => {
    navigate("/signup");
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleClick} {...props}>
        SIGN UP
      </Button>
    </div>
  );
}
