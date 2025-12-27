import supabase from "@/config/supabaseClient";
import { useNavigate } from "react-router-dom";


function Dashboard() {

    const navigate = useNavigate();
    const signOut = async () => {
        const {error} = await supabase.auth.signOut();
        if (error) throw error;
        navigate("/signin")
    }
  return (
    <div>
        <h1>Hello, you're logged in</h1>
        <button
              onClick={signOut}
            //   disabled={isSubmitting}
              className="mt-4 w-full p-2 rounded-md border bg-black dark:hover:bg-[#d1d9ce]/60 dark:hover:text-gray-700 text-[#d1d9ce] my-4 cursor-pointer hover:scale-[1.05] font-bold">Sign in</button>
        
    </div>
  )
}

export default Dashboard