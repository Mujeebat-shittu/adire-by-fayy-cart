import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context-and-reducer/AuthContext";

export default function ProtectedRoute() {
  const { session, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (!session) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}
