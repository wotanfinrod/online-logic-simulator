import React, { Fragment } from "react";
import styled from "styled-components";
import JelyLabs from "@/assets/Jely-Labs-logo.png";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import Header from "@/components/LandingPage/Header";
import HeroHome from "@/components/LandingPage/HeroHome";

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
const HomeWrapperNew = styled.div`
  display: flex;
  flex-direction: column;

  & .navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`;
export function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <HomeWrapperNew>
      <Header />

      <div className="mt-2">{children}</div>
    </HomeWrapperNew>
  );
}
