import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../cognito/AuthContext";
import { Loading } from "../Loading";

const ProtectedRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);
  if (isLoading) return  <Loading />;
  if (isAuthenticated) {
    return (
      <Layout>
        <Component />
      </Layout>
    );
  }
  return (
    <Navigate
      to={{ pathname: "/login"}}
    />
  );
};

export default ProtectedRoute;
