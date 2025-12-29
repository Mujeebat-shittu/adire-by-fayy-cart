import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "@/config/supabaseClient";
import { Session } from "@supabase/supabase-js";

function ProtectedRoute() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="bg-linear-to-r to-white from-[#d1d9ce] dark:bg-linear-to-r dark:to-[#1a1a1a] dark:from-[#809679] text-[#1a1a1a] flex min-h-screen items-center justify-center flex-col gap-2 ">

        Checking auth…
      </div>
    )
      ;
  }

  if (!session) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;
