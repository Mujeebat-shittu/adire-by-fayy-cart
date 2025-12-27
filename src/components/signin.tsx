import { Link, useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import supabase from '@/config/supabaseClient'
import { useState } from 'react'
import GoogleLogo from '@/assets/google-logo.svg'

type FormValues = {
  email: string;
  password: string
}

const SignIn = () => {

  const {
    // register,
    // handleSubmit,
    formState: { errors, isSubmitting },
    // reset,
    // getValues - use them for password validation when you need values to match
    // setValue,
    // watch,

  } = useForm<FormValues>()

  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message)
      setEmail("");
      setPassword("");
      return;
    }

    if (data) {
      navigate("/cart");
    }

  };

  const googleSignin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
      // Optional: specify redirect URL explicitly (overrides Supabase default)
      redirectTo: window.location.origin // will use localhost in dev, Netlify in prod
    }
    })
  };



  return (
    <>
      <main className="bg-linear-to-r to-white from-[#d1d9ce] dark:bg-linear-to-r dark:to-[#1a1a1a] dark:from-[#809679] text-[#1a1a1a] flex min-h-screen items-center justify-center flex-col gap-2 ">

        <form onSubmit={handleSubmit} className="flex absolute flex-col min-w-[350px] md:min-w-[500px] h-[450px] sm:h-[350px] items-center justify-center shadow-2xl bg-[hsl(104,12%,83%)] dark:bg-[#809679] text-black rounded-lg">
          <h2 className="text-lg font-bold">Login</h2>
          {message && <p className=''>{message}</p>}
          <div className="flex flex-col py-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name='email'
              type='email'
              id='email'
              placeholder='Email'
              className="px-3 py-2 mt-4 border border-[#1a1a1a] rounded-sm"
            />
            {errors.email && (
              <p className="">{`${errors.email.message}`}</p>
            )}

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
              disabled={isSubmitting}
              className="mt-4 w-full p-2 rounded-md border bg-black dark:hover:bg-[#d1d9ce]/60 dark:hover:text-gray-700 text-[#d1d9ce] my-4 cursor-pointer hover:scale-[1.05] font-bold">
              Sign in
            </button>


            <button
              onClick={googleSignin}
              className="cursor-pointer">
              <div className="flex gap-4 items-center justify-center">
                <img src={GoogleLogo} alt="" />
                Continue with Google
              </div>

            </button>
          </div>

          <p className="">
            Don't have an account? <Link to="/signup">Sign up!</Link>
          </p>

        </form>
      </main>
    </>

  )
}

export default SignIn