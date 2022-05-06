import React from "react";
import { Header } from "../Header";
import { Links } from "../../Links";
import { Container } from "@mui/material";

export const DashboardLayout = ({ children }: any) => {
  return (
    <Container maxWidth="lg">
      <Header />

      <Container maxWidth="xl">
        <Links />
      </Container>

      <Container maxWidth="xl">
        <div>{children}</div>
      </Container>
    </Container>
  );
};
export const NormalLayout = ({ children }: any) => (
  <Container maxWidth="lg">
    <Header />
    {children}
  </Container>
);
