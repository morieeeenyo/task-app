import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toClickable } from "../components/toClickable";
import { Copyright } from "../components/Copyright";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../cognito/AuthContext";
import { SignInIconWithText } from "../components/IconWithText";
import { SignInPageBottomMenu } from "./SignInPageBottomMenu";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

type Inputs = {
  username: string;
  password: string;
  submit: string;
};

export function SignInPage() {
  const { isAuthenticated, signIn, error } = useAuth();

  const [visiblePassword, setPasswordVisible] = useState(false);
  const handleClick = () => setPasswordVisible(!visiblePassword);

  const { handleSubmit, control, setError, formState: { errors } } = useForm<Inputs>({
    mode: "onBlur",
    reValidateMode: "onChange",
  });

  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    if (error) {
      setError("username", { message: error.message, type: error.name });
      setError("password", { message: error.message, type: error.name });
    }
    if (isAuthenticated) {
      const { from }: any = location.state || { from: { pathname: "/" } };
      navigate(from, {replace: true});
    }
  }, [error, isAuthenticated, setError, location, navigate]);

  const onSubmit = (data: Inputs) => {
    signIn({
      username: data.username,
      password: data.password,
    });
  };

  if (isAuthenticated) {
    return null;
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <SignInIconWithText text="Sign In" />
        <form>
          <Controller
            render={() => (
              <TextField
                label="ユーザ名"
                error={!!errors.username}
                variant="outlined"
                margin="normal"
                fullWidth
                required
                helperText={errors.username?.message || ""}
                autoComplete="username"
              />
            )
            }
            name="username"
            control={control}
            defaultValue=""
            rules={{ required: "必須です。" }}
          />
          <Controller
            render={() => (

              <TextField
                label="パスワード"
                error={!!errors.password}
                variant="outlined"
                margin="normal" // or dense
                fullWidth
                required
                helperText={errors.password?.message || ""}
                type={visiblePassword ? "default" : "password"}
                autoComplete="current-password"
              />
            )
            }
            name="password"
            control={control}
            // Reactのフォームコンポーネントは、
            // 割り当てられているStateの値がnullかundefinedになると、uncontrolledになってしまうので注意
            // https://github.com/react-hook-form/react-hook-form-website/issues/133
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
                Sign In
              </Button>
            )
            }
            name="submit"
            control={control}
            defaultValue=""
          />
        </form>{" "}
        <SignInPageBottomMenu />
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
