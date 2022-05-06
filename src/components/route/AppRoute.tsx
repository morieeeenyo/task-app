import React from "react";
import { Route } from "react-router-dom";
export const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) => (
  <Route
    {...rest}
    render={(props: any) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);
