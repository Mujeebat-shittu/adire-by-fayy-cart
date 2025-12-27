import { useState, useEffect } from "react";
import supabase from "@/config/supabaseClient";
import { Session } from '@supabase/supabase-js'




function Wrapper() {
    const [session, setSession] = useState<Session | null>(null)

    useEffect(() => {
        supabase.auth.getSession().then(({ data: {session} }) => {
            setSession(session);
        });

    const {
        data: {subscription},
    } = supabase.auth.onAuthStateChange(( _event, session) => {
        setSession(session)
    })
    return () => subscription.unsubscribe()
        
    }, []);

    if (!session) {
    return (
      <>
        {/* <button onClick={signUp}>Sign in with Google</button> */}
      </>
    );
  } else {
    return (
      <div>
        {/* <h2>Welcome, {session?.user?.email}</h2> */}
        {/* <button onClick={signOut}>Sign out</button> */}
      </div>
    );
    }
}




export default Wrapper