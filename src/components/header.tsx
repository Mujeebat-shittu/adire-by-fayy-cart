// import Logo from "../assets/logo.svg"
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";


const links = [
  { name: "HOME", path: "/", end: true },
  { name: "ABOUT", path: "/about" },
  { name: "PRODUCT", path: "/product" },
  { name: "CART", path: "/cart" },
];

function Header() {


  const [toggle, setToggle] = useState(false);
  const toggleMenu = () => {
    setToggle((prev) => !prev );
  };


  return (
    <header className="absolute z-[100] gap-10 top-0 flex items-center justify-between mx-auto p-4 h-auto w-full py-8 lg:py-4 bg-[#d0d8cd]">
      <div
        className="icons flex items-center justify-center absolute right-0 lg:hidden mr-6"
        onClick={toggleMenu}
      >
        {toggle ? <X className="hidden" /> : <Menu className="cursor-pointer ml-5 text-black"/>}
      </div>

      {/* <div>
        <img src={Logo} alt="Logo" className="w-[40px]" />
      </div> */}

      {/* nav desktop */}
      <div className="flex items-center justify-center">
      </div>
      <div className="hidden lg:flex flex-row px-6 py-4 gap-2 justify-between items-center text-white h-[80px] bg-[rgba(255,255,255,0.06)] w-[100%] mx-auto">
        <div className="flex items-end justify-center mx-auto">
          <ul className="flex flex-row gap-10 cursor-pointer">
            {links.map((link, index) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) =>
                    `relative block pb-6 capitalize ${isActive
                      ? "text-black after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black"
                      : "text-black"
                    }`
                  }
                >
                  <div className="flex gap-2">
                    <span className="font-bold">0{index}</span>
                    <span className="font-[400]">{link.name}</span>
                  </div>

                </NavLink>
              </li>
            ))}

          </ul>

        </div>

      </div>


      {/* nav mobile */}

      <div className={` ${toggle ? "flex" : "hidden"} flex flex-col p-4 justify-between items-center my-5 transition-[0.5s height ease-in-out] h-[100%] fixed w-screen -top-5 bg-[#d0d8cd] right-0 z-20 backdrop-blur-lg`}>

        <div className="">
          <div className="self-end absolute right-10 top-4 " onClick={toggleMenu}>
            <X
              size={30}
              strokeWidth={3}
              className="cursor-pointer text-[black]"
            />
          </div>
          <ul className="flex flex-col p-4 m-4 my-10 gap-4 cursor-pointer font-semibold text-lg">
            {links.map((link, index) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  end={link.end}
                  className={({ isActive }) =>
                    `relative block pb-1 capitalize ${isActive
                      ? "text-black after:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-[3px] after:bg-black gap-5 pr-4"
                      : "text-gray-800"
                    }`
                  }
                  onClick={toggleMenu} // close menu when clicking
                >
                  <div className="flex gap-2">
                    <span className="font-bold">0{index}</span>
                    <span className="font-[400]">{link.name}</span>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>


    </header>
  )
}

export default Header
