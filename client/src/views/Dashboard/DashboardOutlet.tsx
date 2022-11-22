import { DashboardLayout } from "@/layouts/DashboardLayout";
import { Link, Outlet } from "react-router-dom";

export default function DashboardOutlet() {
  return (
    <DashboardLayout>
      Dashboard Layout
      <Link to={"/"}> Home</Link>
      <Link to={"/dashboard/start"}> DashboardLayout</Link>
      <Link to={"/auth/login"}> Login</Link>
      <Outlet />
    </DashboardLayout>
  );
}
