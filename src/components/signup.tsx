import { Link } from 'react-router-dom'
import supabase from '@/config/supabaseClient'
import { useState } from 'react'
import GoogleLogo from '@/assets/google-logo.svg'


const Signup = () => {



  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");
    setLoading(true)

    const { data, error } = await supabase.auth.signUp({
      email: email.toLowerCase(),
      password: password,

    });

    if (error) {
      setMessage(error.message)
      return;
    }

    if (data?.user) {
      const { error: insertError } = await supabase.from("users").insert({
        id: data.user.id,
        first_name: firstName,
        avatar_url: "/default-avatar.png"
      });


      if (insertError) {
        setMessage(insertError.message);
        setLoading(false);
        return;
      }
      setMessage("User account created!");
    }
    setEmail("");
    setPassword("");
    setFirstName("")
    setLoading(false)
  };



  const googleSignup = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google"
    })
  };





  return (
    <>
      <main className="bg-linear-to-r to-white from-[#d1d9ce] dark:bg-linear-to-r dark:to-[#1a1a1a] dark:from-[#809679] text-[#1a1a1a] flex min-h-screen items-center justify-center flex-col gap-2 ">
      
        <form onSubmit={handleSubmit} className="flex absolute flex-col min-w-[350px] md:min-w-[500px] h-[450px] sm:h-[350px] items-center justify-center shadow-2xl bg-[hsl(104,12%,83%)] dark:bg-[#809679] text-black rounded-lg">
          <h2 className="text-lg font-bold">Sign up for an account</h2>
          <p className="">
            Already have an account? <Link to="/signin">Sign in!</Link>
          </p>
          {message && <p className=''>{message}</p>}

          <div className="flex flex-col py-4">
            <input
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              name='firstName'
              type='text'
              id='firstName'
              placeholder='First Name'
              className="px-3 py-2 mt-4 border border-[#1a1a1a] rounded-sm"
            />

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name='email'
              type='email'
              id='email'
              placeholder='Email'
              className="px-3 py-2 mt-4 border border-[#1a1a1a] rounded-sm"
            />

            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name='password'
              type='password'
              id='password'
              placeholder='Password'
              className="px-3 py-2 mt-4 border border-[#1a1a1a] rounded-sm" />

            <button
              type='submit'
              className="mt-4 w-full p-2 rounded-md border bg-black dark:hover:bg-[#d1d9ce]/60 dark:hover:text-gray-700 text-[#d1d9ce] my-4 cursor-pointer hover:scale-[1.05] font-bold">
              {loading ? "Creating" : "Sign Up"}
            </button>

            <button
              onClick={googleSignup}
              className="cursor-pointer">
              <div className="flex gap-4 items-center justify-center">
                <img src={GoogleLogo} alt="" />
                Sign Up with Google
              </div>

            </button>
          </div>

        </form>
      </main>
    </>

  )
}

export default Signup