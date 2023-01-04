import HeroHome from "@/components/LandingPage/HeroHome";
import { HomeLayout } from "@/layouts/HomeLayout";
import { useAppSelector } from "@/store/hooks";
import React from "react";

type Props = {};

export default function HomeView({}: Props) {
  const configuration = useAppSelector(
    (state) => state.configuration.configuration
  );
  return (
    <HomeLayout>
      <HeroHome />
    </HomeLayout>
  );
}
