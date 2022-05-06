import React from "react";
import { useNavigate } from "react-router-dom";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';

export const SignInPageBottomMenu = () => {
  const navigate = useNavigate();
  return (
    <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2">
          Forgot password?
        </Link>
      </Grid>
      <Grid item>
        <Link
          variant="body2"
          component="button"
          onClick={() => navigate("/signup")}
        >
          {"Don't have an account? Sign Up"}
        </Link>
      </Grid>
    </Grid>
  );
};
