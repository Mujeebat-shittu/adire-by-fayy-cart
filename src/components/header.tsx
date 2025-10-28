import Logo from "../assets/logo.jpg"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const links = [
  { name: "HOME", path: "/", end: true },
  { name: "ABOUT", path: "/about" },
  { name: "PRODUCT", path: "/product" },
  //   { name: "CART", path: "/cart" },
];

function Header() {


  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle((prev) => !prev);
  };


  return (
    <header className="sticky top-0 z-50 flex items-center justify-between w-full h-20 lg:h-24 px-4 bg-[#d0d8cd]">
      <div
        className="icons flex items-center justify-center absolute right-0 lg:hidden mr-6"
        onClick={toggleMenu}
      >
        {toggle ? <X className="hidden" /> : <Menu className="cursor-pointer ml-5 text-black" />}
      </div>

      <div>
        <img src={Logo} alt="Logo" className="w-15" />
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
                      ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-black"
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

        <div className="">
          <button className="bg-black text-[#d0d8cd] px-6 py-2 rounded">Order here</button>
        </div>

      </div>


      {/* Mobile Nav */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#d0d8cd] transform transition-transform duration-300 ease-in-out ${toggle ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* Close button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-black cursor-pointer"
        >
          <X size={32} strokeWidth={3} />
        </button>

        {/* Nav links */}
        <ul className="flex flex-col gap-6 text-lg font-semibold text-gray-800">
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

          <button className="bg-black text-[#d0d8cd] px-6 py-2 rounded cursor-pointer my-10">Order here</button>
      </div>


    </header >
  )
}

export default Header
