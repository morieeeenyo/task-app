import React, { useContext } from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import { AuthContext } from "../../cognito/AuthContext";
import { Loading } from "../Loading";

const ProtectedRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  return (
    <Routes>
      <Route
        {...rest}
        render={(props: any) => {
          if (isLoading) return <Loading />;
          if (isAuthenticated) {
            return (
              <Layout>
                <Component {...props} />
              </Layout>
            );
          }
          return (
            <Navigate
              to={{ pathname: "/login"}}
              state={{from: props.location}}
            />
          );
        }}
      />
    </Routes>
  );
};

export default ProtectedRoute;
