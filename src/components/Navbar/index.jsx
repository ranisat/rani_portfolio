import React, { useState } from "react";
import Darkmode from "./Darkmode";
import { NavLink } from "react-router-dom";

const Navbar = ({children}) => {
  const [isOpen, setOpen] = useState(false);
  const menu = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Work",
      link: "/portfolio",
    },
    {
      name: "Tech",
      link: "/skills",
    },
    {
      name: "Resume",
      link: "/resume",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  return (
   <>
    <header className=" sticky top-0 left-0 z-50">
      <nav className="container px-4 py-2 bg-white mx-auto my-3 rounded-md shadow-md dark:bg-slate-800">
        <div className="flex items-center justify-between">
        <div className="md:hidden flex">
            <Darkmode /> 
          </div>
          <div>
           <NavLink to='/'> <img src="./images/logo.png" alt="" className="h-[44px] dark:hidden" /></NavLink>
           <NavLink to='/'> <img src="./images/dark-logo.png" alt="" className="h-[44px] hidden dark:block" /></NavLink>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center justify-center gap-8">
              {menu.map((item, index) => (
                <li key={index} className="p-2">
                  <NavLink  style={({ isActive}) => {
                    return {
                      color: isActive ? "#d203a4" : "",
                    };
                  }}
                    to={item.link}
                    className="font-medium leading-relaxed hover:text-color_purple duration-300 dark:text-white"
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}

              <li>
                <Darkmode />
              </li>
            </ul>
          </div>
          <div className="md:hidden flex">
            <button className="dark:text-white" onClick={() => setOpen(!isOpen)}>
              <i className="ri-menu-3-line ml-2"></i>
            </button>
          </div>

          {/* ---- mobile menu  ----- */}
          {isOpen ? (
            <div className="absolute top-0 left-0 bottom-0 w-64 h-screen bg-white shadow-md dark:bg-gray-900  p-4 transition-duration-500 animate__animated animate__fadeInLeftBig z-50">
              <ul className="flex flex-col items-center justify-center gap-2">
                {menu.map((item, index) => (
                  <li key={index} className="p-1">
                    <NavLink
                      to={item.link}
                      className="text-color_black dark:text-white font-medium leading-relaxed hover:text-color_purple"
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </nav>
    </header>
     {/* --------- children    ------------ */}
     {children}
     {/* ------- Footer code here...     ------- */}
     <div className="md:py-10 py-10 bg-white dark:bg-gray-900 dark:border-t-2 border-gray-500">
        <div className="md:w-7/12 mx-auto">
           <ul className="flex items-center justify-center gap-5">
            <li className="dark:w-30 dark:h-30 dark:bg-black dark:border dark:border-gray-600 dark:rounded-lg dark:p-1">
              <NavLink to="/">
               <img src="/images/whatspp.png" alt="" className="h-9"/>
              </NavLink>
            </li>
            <li className="dark:w-30 dark:h-30 dark:bg-black dark:border dark:border-gray-600 dark:rounded-lg dark:p-1">
              <NavLink to="/">
               <img src="/images/insta.png" alt="" className="h-8"/>
              </NavLink>
            </li>
            <li className="dark:w-30 dark:h-30 dark:bg-black dark:border dark:border-gray-600 dark:rounded-lg dark:p-1">
              <NavLink to="/">
               <img src="/images/linkedin.png" alt="" className="h-8"/>
              </NavLink>
            </li>
            <li className="dark:w-30 dark:h-30 dark:bg-gray-600 dark:border dark:border-gray-600 dark:rounded-lg dark:p-1">
              <NavLink to="/">
               <img src="/images/github.png" alt="" className="h-8"/>
              </NavLink>
            </li>
           </ul>
           <div className="text-center mt-4">
            <h1 className="leading-relaxed text-2xl font-medium scale-75 hover:scale-100 dark:text-white">Rani Vijay Matkar</h1>
           </div>
        </div>
     </div>
   </>
    
  );
};

export default Navbar;
