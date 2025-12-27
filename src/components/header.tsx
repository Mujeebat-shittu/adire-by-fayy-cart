import Logo from "../assets/logo.jpg"
import { Menu, X, ShoppingCart } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./themeToggle";
import { CartItem } from "@/context-and-reducer/reducer";
import { useCart } from "@/context-and-reducer/CartContext";
import { useAuth } from "@/context-and-reducer/AuthContext";


const links = [
  { id: 1, name: "HOME", path: "/", end: true },
  { id: 2, name: "ABOUT", path: "/about" },
  { id: 3, name: "PRODUCT", path: "/product" },
  { id: 4, name: "CART", path: "/cart" },

];

const menuLinks = links.slice(0, 3);
const specialLink = links[3];


function Header() {
  const { cart } = useCart()
  const { session, profile } = useAuth()

  const totalQuantity = cart.reduce((acc: number, item: CartItem) => {
    return acc + item.quantity;
  }, 0);

  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };


  return (
    <header className="sticky top-0 z-50 w-full bg-[#d0d8cd] dark:bg-[#809679] h-18 lg:h-20 flex items-center justify-between px-4">
      {/* Logo */}
      <div>
        <img src={Logo} alt="Logo" className="w-15 ml-4" />
      </div>


      {/* nav desktop */}

      <div className="hidden lg:flex flex-row px-6 py-4 gap-2 justify-between items-center text-white  bg-[rgba(255,255,255,0.06)] w-full mx-auto">
        <div className="flex items-end justify-center mx-auto">
          <ul className="flex flex-row gap-10 cursor-pointer">
            {links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) =>
                    `relative block pb-3 capitalize ${isActive
                      ? "text-[#809679] dark:text-[#d1d9ce] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black"
                      : "text-black"
                    }`
                  }
                >
                  <div className="flex gap-2">
                    <span className="font-normal">{link.name}</span>
                  </div>

                </NavLink>
              </li>
            ))}

          </ul>

        </div>
      </div>

      {/* general features for all screen size */}

      <div className="flex gap-2 absolute right-2 items-center justify-end">
        {session  && profile? (
          <div className="flex items-center gap-2">
            <img
            src={profile.avatar_url || "/default-avatar.png"}
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium">
              {profile.first_name}
            </span>
          </div>
        ) : (
        <button
          className="w-[100px] p-2 rounded-md border bg-black dark:hover:bg-[#d1d9ce]/60 dark:hover:text-gray-700 text-[#d1d9ce] my-4 cursor-pointer hover:scale-[1.05] font-bold"
        >
         <NavLink to={"/signin"}>
            Log in
         </NavLink> 
          
            
        </button>
        )}

        <div className="relative">
          <NavLink
          to={specialLink.path}>
          <span className="text-xs text-[#d1d9ce] bg-black absolute right-0 -top-4 rounded-full px-2 py-1">
            {totalQuantity}</span>
          <ShoppingCart className="text-black" />
        </NavLink>
        </div>

        



        {/* theme toggle component */}
        <ThemeToggle />


        {/* toggle menu icon */}
        <div
          className="icons flex lg:hidden"
          onClick={toggleMenu}
        >

          {/* menu and close icons */}
          {toggle ? (
            <X strokeWidth={5} className="cursor-pointer ml-4 text-black dark:text-[#d1d9ce]" />
          ) : (
            <Menu strokeWidth={4} className="cursor-pointer ml-4 text-black dark:text-[#d1d9ce]" />
          )}
        </div>
      </div>



      {/* Mobile Nav */}


      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#d0d8cd] dark:bg-[#809679] dark:text-[#d0d8cd] transform transition-all duration-300 ease-in-out ${toggle ? "translate-x-0" : "translate-x-full"
          }`}
      >

        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-black cursor-pointer"
        >
          <X size={32} strokeWidth={3} className="dark:text-black" />
        </button>

        {/* Nav links */}
        <ul className="flex flex-col gap-6 text-lg font-semibold text-gray-800 dark:text-[#d0d8cd]">
          {menuLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                end={link.end}
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `relative flex gap-2 pb-1 hover:scale-[1.02] capitalize ${isActive
                    ? "text-black after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-[3px] after:bg-black pr-4"
                    : "text-gray-800"
                  }`
                }
              >
                <span className="font-normal">{link.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>


        <div className=" flex items-center w-full justify-center font-bold">
          <button
            className="w-[200px] p-2 rounded-md border bg-black text-[#d1d9ce] dark:hover:bg-[#d1d9ce]/60 dark:hover:text-gray-700 my-4 cursor-pointer hover:scale-[1.05]"
          >
            <a href="https://wa.me/2348126458317">ORDER HERE</a>
          </button>
        </div>


      </div>

    </header >
  )
}

export default Header
