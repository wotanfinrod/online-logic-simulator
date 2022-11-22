import { AuthLayout } from "@/layouts/AuthLayout";
import { Link, Outlet } from "react-router-dom";

export default function AuthOutlet() {
  return (
    <AuthLayout>
      Auth Layout
      <Link to={"/"}> Home</Link>
      <Link to={"/auth"}> AuthLayout</Link>
      <Link to={"/auth/login"}> Login</Link>
      <Outlet />
    </AuthLayout>
  );
}
