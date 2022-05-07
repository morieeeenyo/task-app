import React from "react";
import { Route, Routes } from "react-router-dom";
export const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) =>  {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}
