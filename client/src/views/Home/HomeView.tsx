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
      <div>
        <h1>HomeView</h1>
        <p>{configuration.name}</p>
        <p>Version: {configuration.version}</p>
      </div>
    </HomeLayout>
  );
}
