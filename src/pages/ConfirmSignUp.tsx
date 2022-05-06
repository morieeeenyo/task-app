import React from "react";
import {
  Button,
  TextField,
  InputAdornment,
  makeStyles,
  Container,
  Box,
} from "@material-ui/core";
import { useForm, Controller } from "react-hook-form";
import { MobileFriendly } from "@material-ui/icons";
import { Copyright } from "../components/Copyright";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../cognito/AuthContext";
import { SignInIconWithText } from "../components/IconWithText";

type Inputs = {
  username: string;
  code: string;
  submit: string;
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function ConfirmSignUpPage() {
  const classes = useStyles();

  const { handleSubmit, control, setError, formState: { errors } } = useForm<Inputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const { isAuthenticated, confirmSignUp, error, user } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  React.useEffect(() => {
    if (error) {
      setError("code", { message: error.message, type: error.name });
    }
    if (isAuthenticated) {
      const { from }: any = location.state || { from: { pathname: "/" } };
      navigate(from, {replace: true});
    }
  }, [error, isAuthenticated, setError, location, navigate]);

  const onSubmit = async (data: Inputs) => {
    await confirmSignUp({
      username: user?.getUsername(),
      code: data.code,
    });
  };

  if (isAuthenticated) return null;
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <SignInIconWithText text="Enter the verification code" />
        <form className={classes.form}>
          <Controller
            render={() => (
              <TextField
                label="verification code"
                error={!!errors.code}
                variant="outlined"
                margin="normal" // or dense
                fullWidth
                required
                helperText={errors.code?.message || ""}
                autoComplete="current-code"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MobileFriendly />
                    </InputAdornment>
                  ),
                }}
              />
             )
            }
            name="code"
            control={control}
            defaultValue=""
            rules={{ required: "必須です。" }}
          />
          <Controller
            render={() => (
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={handleSubmit(onSubmit)}
              >
                Verify
              </Button>
            )}
            name="submit"
            control={control}
            defaultValue=""
          />
        </form>{" "}
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
