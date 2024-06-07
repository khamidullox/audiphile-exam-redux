import React from "react";
import NavbarLinks from "./NavbarLinks";
import { customFetch } from "../utils";
import { Link } from "react-router-dom";
import NovabrModal from "./NovabrModal";
function Navbar() {
  return (
    <header className="navbar bg-black text-white aligen-conatiner max-w-full h-24 border-b border-opacity-10 border-slate-700">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 uppercase"
          >
            {" "}
            <li className=" hover:text-[#D87D4A] focus:text-[#D87D4A] active:text-[#D87D4A]">
              <Link to={`/`}>Home</Link>
            </li>
            <NavbarLinks />
          </ul>
        </div>
        <a className="text-xl">
          <img src="/assets/shared/desktop/logo.svg" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10 text-white px-1  uppercase">
          <li className=" hover:text-[#D87D4A] focus:text-[#D87D4A] active:text-[#D87D4A]">
            <Link to={`/`}>Home</Link>
          </li>
          <NavbarLinks />
        </ul>
      </div>
      <NovabrModal />
    </header>
  );
}

export default Navbar;
