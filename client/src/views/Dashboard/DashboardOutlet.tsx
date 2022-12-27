import { DashboardLayout } from "@/layouts/DashboardLayout";
import { DndProvider } from "react-dnd/dist/core";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Link, Outlet } from "react-router-dom";

export default function DashboardOutlet() {
  return (
    <DashboardLayout>
      <DndProvider backend= {HTML5Backend}>
      <DndProvider ></DndProvider>
      Dashboard Layout
      <Link to={"/"}> Home</Link>
      <Link to={"/dashboard/start"}> DashboardLayout</Link>
      <Link to={"/auth/login"}> Login</Link>
      <Outlet />
      </DndProvider>
    </DashboardLayout>
  );
}
