import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../../cognito/AuthContext";
import { Loading } from "../Loading";

const ProtectedRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  return (
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
  );
};

export default ProtectedRoute;
