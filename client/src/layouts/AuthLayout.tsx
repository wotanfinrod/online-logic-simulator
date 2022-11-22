import React from "react";
import styled from "styled-components";
import Footer from "../components/Footer";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
  width: 100%;
  height: 100%;
`;

export function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <>
      <AuthWrapper>{children}</AuthWrapper>
      <Footer></Footer>
    </>
  );
}
