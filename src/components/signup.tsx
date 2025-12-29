import { Link, useNavigate } from 'react-router-dom'
import supabase from '@/config/supabaseClient'
import { useState } from 'react'
import GoogleLogo from '@/assets/google-logo.svg'
import toast from 'react-hot-toast'


const Signup = () => {


  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const [message, setMessage] = useState("")
  const [error, setError] = useState({
    email: "",
    password: "",
    firstName: "",
  })
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setError(null);
    setLoading(true)

    const newErrors = {email, password, firstName};
    if (!email) {
      newErrors.email = "Email is required"
    }

    if (!password) {
      newErrors.password = "Password is required"
    }

    if (password.length < 6) {
      newErrors.password = "Password is too short"
    }

    if (!firstName) {
      newErrors.password = "FirstName is required"
    }

    setError(newErrors);

    if (Object.keys(newErrors).length > 0) {
    toast.error("Please fix the highlighted fields");
    return;
  }


    const { data, error } = await supabase.auth.signUp({
      email: email.toLowerCase(),
      password: password,
      options: {
    data: {
      first_name: firstName,
      avatar_url: "/default-avatar.png",
    },
  },

    });

    if (error) {
      toast(error.message)
      return;
    }

    if (data?.user) {
      
    toast("User account created!");
    navigate ("/signin")

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
            {error.firstName && <p className=''>{error.firstName}</p>}

            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name='email'
              type='email'
              id='email'
              placeholder='Email'
              className="px-3 py-2 mt-4 border border-[#1a1a1a] rounded-sm"
            />
            {error.email && <p className=''>{error.email}</p>}

            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              name='password'
              type='password'
              id='password'
              placeholder='Password'
              className="px-3 py-2 mt-4 border border-[#1a1a1a] rounded-sm" />
              {error.password && <p className=''>{error.password}</p>}

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
                {loading ? "Loading" : "Sign Up with Google"}
              </div>

            </button>
          </div>

        </form>
      </main>
    </>

  )
}

export default Signup