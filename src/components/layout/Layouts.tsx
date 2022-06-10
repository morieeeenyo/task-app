import React from "react";
import { Header } from "../Header";
import { Links } from "../../Links";
import { Container, styled } from "@mui/material";


const MainContent = styled('div')(() => ({
  paddingTop: "20px",
}))

export const DashboardLayout = ({ children }: any) => {
  return (
    <Container maxWidth="lg">
      <Header />

      <Container maxWidth="xl">
        <Links />
      </Container>

      <Container maxWidth="xl">
        <MainContent>{children}</MainContent>
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
