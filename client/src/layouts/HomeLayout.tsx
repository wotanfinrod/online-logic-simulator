import React, { Fragment } from "react";
import styled from "styled-components";
import JelyLabs from "@/assets/Jely-Labs-logo.png";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

interface HomeLayoutProps {
  children: React.ReactNode;
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  & .navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;

export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <HomeWrapper>
        <div className="navigation">
          <Link to={"/dashboard/start"}> Dashboard</Link>
          <Link to={"/auth/login"}> Login </Link>
        </div>
        <div>{children}</div>  
      </HomeWrapper>
    </>
  );
}
