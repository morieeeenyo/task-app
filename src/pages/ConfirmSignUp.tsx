import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Copyright } from "../components/Copyright";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../cognito/AuthContext";
import { SignInIconWithText } from "../components/IconWithText";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

type Inputs = {
  username: string;
  code: string;
  submit: string;
};

export function ConfirmSignUpPage() {

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
      <div>
        <SignInIconWithText text="Enter the verification code" />
        <form>
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
