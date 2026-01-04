import { Link, useNavigate } from 'react-router-dom'
import supabase from '@/config/supabaseClient'
import { useState } from 'react'
import GoogleLogo from '@/assets/google-logo.svg'
import toast from 'react-hot-toast'
import { EyeClosed, Eye } from 'lucide-react'

type FormErrors = {
  email?: string;
  password?: string;
}
const SignIn = () => {


  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<FormErrors>({
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [disableB, setDisableB] = useState(false);

  const toggleMenu = () => {
    setShowPassword((prev) => !prev);
  };



  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    const newErrors: FormErrors = {};
    if (!email) {
      newErrors.email = "Email is required"
    }

    if (!password) {
      newErrors.password = "Password is required"
    }

    setError(newErrors);

    // stops submission if validation fails

    if (Object.keys(newErrors).length > 0) {
      toast.error("Please fix the highlighted fields");
      setLoading(false)
      return;
    }


    // supabse sign-in
    const { error } = await supabase.auth.signInWithPassword({
      email: email.toLowerCase(),
      password: password,
    });

    setLoading(false)

    // handles auth error
    if (error) {
      setPassword("");
      toast.error("Incorrect login credentials");
      toast(
        (t) => (
          <span>
            New here?{" "}
            <button
              onClick={() => {
                toast.dismiss(t.id);
                navigate("/signup");
              }}
              style={{ color: "#3b82f6", marginLeft: 4 }}
            >
              Sign up
            </button>
          </span>
        )
      );


      return;
    }

    navigate("/cart");


  };


  const googleSignin = async () => {

    setDisableB(true)

    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        //  specify redirect URL explicitly (overrides Supabase default)
        redirectTo: window.location.origin // will use localhost in dev, Netlify in prod
        //  redirectTo: "https://adire-by-fayy-cart.netlify.app"
      }
    })


  };

  //   const handleForgotPassword = async () => {
  //   if (!email) {
  //     toast.error("Please enter your email first");
  //     return;
  //   }

  //   const { error } = await supabase.auth.resetPasswordForEmail(email, {
  //     redirectTo: `${window.location.origin}/reset-password`,
  //   });

  //   if (error) {
  //     toast.error("Unable to send reset link");
  //     return;
  //   }

  //   toast.success("Password reset link sent to your email");
  // };




  return (
    <>
      <main className="bg-linear-to-r to-white from-[#d1d9ce] dark:bg-linear-to-r dark:to-[#1a1a1a] dark:from-[#809679] text-[#1a1a1a] flex min-h-screen items-center justify-center flex-col gap-2 ">

        <form onSubmit={handleSubmit} className="flex absolute flex-col min-w-[350px] md:min-w-[500px] h-[450px] sm:h-[350px] items-center justify-center shadow-2xl bg-[hsl(104,12%,83%)] dark:bg-[#809679] text-black rounded-lg">
          <h2 className="text-lg font-bold">Login</h2>
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
            {error.email && <p className='text-red-500'>{error.email}</p>}

            <div className="relative flex items-center justify-center">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                name='password'
                type={showPassword ? 'text' : 'password'}
                id='password'
                placeholder='Password'
                className="px-3 py-2 mt-4 border border-[#1a1a1a] rounded-sm"
              />

              <button
                type="button"
                onClick={toggleMenu}
                className="absolute right-3 bottom-0 -translate-y-1/2 cursor-pointer"
                >
                {showPassword ? <EyeClosed size={15} /> : <Eye size={15} />}
              </button>

            </div>
                {error.password && <p className='text-red-500'>{error.password}</p>}



            <button
              type='submit'
              className={` ${loading ? "bg-[#a1a1a1]" : "bg-black"} "mt-4 w-full p-2 rounded-md border  dark:hover:bg-[#d1d9ce]/60 dark:hover:text-gray-700 text-[#d1d9ce] my-4 cursor-pointer hover:scale-[1.05] font-bold"`}>
              {loading ? "Signing you in" : "Sign In"}
            </button>


            <button
              onClick={googleSignin}
              disabled={disableB}
              className="cursor-pointer">
              <div
                className="flex gap-4 items-center justify-center border-black border p-2 rounded-md ">
                <img src={GoogleLogo} alt="" />
                Continue with Google
              </div>
            </button>

            {/* <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-blue-500"
            >
              Forgot password?
            </button> */}

          </div>

          <p className="">
            Don't have an account? <Link className='underline' to="/signup">Sign up!</Link>
          </p>

        </form>
      </main>
    </>

  )
}

export default SignIn