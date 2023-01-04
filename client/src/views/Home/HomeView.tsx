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
        <span className="text-red-400 text-3xl bg-black dark:bg-red-400">
          HO
        </span>
        <p>{configuration.name}</p>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
      </div>
    </HomeLayout>
  );
}
