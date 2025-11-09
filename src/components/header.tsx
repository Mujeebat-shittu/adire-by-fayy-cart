import Logo from "../assets/logo.jpg"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./themeToggle";


const links = [
  { name: "HOME", path: "/", end: true },
  { name: "ABOUT", path: "/about" },
  { name: "PRODUCT", path: "/product" },

];

function Header() {


  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };


  return (
    <header className="sticky top-0 z-50 w-full bg-[#d0d8cd] dark:bg-[#809679]">
      <div className="h-16 lg:h-20 flex items-center justify-between px-4">      <div
        className="icons flex items-center justify-center absolute right-0 lg:hidden mr-6"
        onClick={toggleMenu}
      >
        {/* order button hidden on large screens */}
        <div className="lg:hidden flex items-end w-full justify-around font-bold">
          <button
            className="w-[100px] p-2 rounded-md border bg-black dark:bg-[#d1d9ce] dark:text-black dark:hover:bg-[#d1d9ce]/60 dark:hover:text-gray-700 text-[#d1d9ce] my-4 cursor-pointer hover:scale-[1.05]"
          >
            <a href="https://wa.me/2348126458317">Order Here</a>
          </button>
        </div>
        {/* menu and close icons */}
        {toggle ? (
          <X strokeWidth={5} className="cursor-pointer ml-5 text-black dark:text-[#d1d9ce]" />
        ) : (
          <Menu strokeWidth={4} className="cursor-pointer ml-5 text-black dark:text-[#d1d9ce]" />
        )}
      </div>

        <div>
          <img src={Logo} alt="Logo" className="w-15 ml-4" />
        </div>

        {/* nav desktop */}
        <div className="flex items-center justify-center">
        </div>
        <div className="hidden lg:flex flex-row px-6 py-4 gap-2 justify-between items-center text-white  bg-[rgba(255,255,255,0.06)] w-full mx-auto">
          <div className="flex items-end justify-center mx-auto">
            <ul className="flex flex-row gap-10 cursor-pointer">
              {links.map((link, index) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    end={link.end}
                    className={({ isActive }) =>
                      `relative block pb-6 capitalize ${isActive
                        ? "text-[#809679] dark:text-[#d1d9ce] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black"
                        : "text-black"
                      }`
                    }
                  >
                    <div className="flex gap-2">
                      <span className="font-bold">0{index}</span>
                      <span className="font-normal">{link.name}</span>
                    </div>

                  </NavLink>
                </li>
              ))}

            </ul>

          </div>

          <div className="flex gap-2">
            <button
            className="w-[100px] p-2 rounded-md border bg-black dark:bg-[#d1d9ce] dark:text-black dark:hover:bg-[#d1d9ce]/60 dark:hover:text-gray-700 text-[#d1d9ce] my-4 cursor-pointer hover:scale-[1.05]"
          >
            <a href="https://wa.me/2348126458317">Order Here</a>
          </button>

            <button
              className="p-2 rounded-md border dark:border-black border-gray-700 dark:text-black dark:hover:bg-[#d1d9ce]/60 dark:hover:text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#d1d9ce] hover:border-0 text-[#1a1a1a] my-4 cursor-pointer"
            >
              <a href="https://www.tiktok.com/@oghenefayjiro?_t=ZS-90xGfzGFpTE&_r=1" >Visit our TikTok Page</a>
            </button>
          </div>

          <ThemeToggle />

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
            {links.map((link, index) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.end}
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `relative flex gap-2 pb-1 capitalize ${isActive
                      ? "text-black after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-[3px] after:bg-black pr-4"
                      : "text-gray-800"
                    }`
                  }
                >
                  <span className="font-bold">0{index}</span>
                  <span className="font-normal">{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>


          <div className=" flex items-center w-full justify-center font-bold">
            <button
              className="w-[200px] p-2 rounded-md border bg-black dark:bg-[#d1d9ce] dark:text-black dark:hover:bg-[#d1d9ce]/60 dark:hover:text-gray-700 text-[#d1d9ce] my-4 cursor-pointer hover:scale-[1.05]"
            >
              <a href="https://wa.me/2348126458317">ORDER HERE</a>
            </button>
          </div>


          <button
            className="p-2 rounded-md border dark:border-black border-gray-700 dark:text-black dark:hover:bg-[#d1d9ce]/60 dark:hover:text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-[#d1d9ce] hover:border-0 text-[#1a1a1a] my-4 cursor-pointer"
          >
            <a href="https://www.tiktok.com/@oghenefayjiro?_t=ZS-90xGfzGFpTE&_r=1" >Visit our TikTok Page</a>
          </button>

          <div className="">
            <ThemeToggle />
          </div>


        </div>

      </div>
    </header >
  )
}

export default Header
