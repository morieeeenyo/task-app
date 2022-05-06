import React from "react";
import { Route, Routes } from "react-router-dom";
export const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) => (
  <Routes>
    <Route
      {...rest}
      render={(props: any) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  </Routes>
);
