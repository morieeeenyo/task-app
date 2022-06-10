import React from "react";

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
