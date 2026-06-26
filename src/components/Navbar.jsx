"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data, isPending } = useSession();

  const user = data?.user;

  const logOut = () => {
    signOut();
    toast("You are logged out!");
  };

  const navItems = (
    <>
      <li>
        <Link
          href="/"
          className="bg-[#002d40] text-[#a3e635] px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:bg-[#001f2d] focus:bg-[#002d40] focus:text-[#a3e635] active:bg-[#002d40]"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/allfacilities"
          className="hover:text-lime-600 px-4 py-2 hover:bg-transparent focus:bg-transparent active:bg-transparent"
        >
          All Facilities
        </Link>
      </li>
      <li>
        <Link
          href="/bookings"
          className="hover:text-lime-600 px-4 py-2 hover:bg-transparent focus:bg-transparent active:bg-transparent"
        >
          My Bookings
        </Link>
      </li>
      <li>
        <Link
          href="/addfacility"
          className="hover:text-lime-600 px-4 py-2 hover:bg-transparent focus:bg-transparent active:bg-transparent"
        >
          Add Facility
        </Link>
      </li>
      <li>
        <Link
          href="#"
          className="hover:text-lime-600 px-4 py-2 hover:bg-transparent focus:bg-transparent active:bg-transparent"
        >
          Manage My Facilities
        </Link>
      </li>
    </>
  );

  if (isPending) {
    return (
      <div className="w-full h-22 bg-white flex justify-center items-center">
        <span className="loading loading-spinner text-[#002d40] loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-sm">
      <div className="navbar bg-white w-full md:w-[85%] m-auto px-6 py-4 font-semibold text-[#002d40]">
        {/* Navbar Start: Logo & Mobile Dropdown */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-[#002d40] hover:bg-gray-100 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-white rounded-2xl z-50 mt-3 w-52 p-3 shadow-lg border border-gray-100 text-[#002d40]"
            >
              {navItems}
            </ul>
          </div>

          {/* Brand Logo */}
          <Link
            href="#"
            className="flex items-center gap-3 normal-case transition-transform active:scale-95"
          >
            <span className="text-2xl font-black text-[#002d40] tracking-tight hidden md:block">
              SportNest
            </span>
            <span className="text-2xl font-black text-[#002d40] tracking-tight md:hidden block">
              SN
            </span>
          </Link>
        </div>

        {/* Navbar Center: Desktop Navigation Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-1 text-[#002d40]">
            {navItems}
          </ul>
        </div>

        {/* Navbar End: Book Now Button */}
        {user ? (
          <div className="navbar-end gap-2">
            <button
              onClick={() => logOut()}
              className="bg-[#a3e635] text-[#002d40] text-xs md:text-sm border-none font-bold px-4 md:px-6 py-3 h-auto min-h-0 rounded-full flex items-center gap-2 shadow-sm hover:bg-[#b4f043] transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              Log out
            </button>
          </div>
        ) : (
          <div className="navbar-end gap-2">
            <Link
              href="/signup"
              className="bg-[#a3e635] text-[#002d40] text-xs md:text-sm border-none font-bold px-4 md:px-6 py-3 h-auto min-h-0 rounded-full flex items-center gap-2 shadow-sm hover:bg-[#b4f043] transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              Sign Up
            </Link>

            <Link
              href="/signin"
              className="bg-[#a3e635] text-[#002d40] text-xs md:text-sm border-none font-bold px-4 md:px-6 py-3 h-auto min-h-0 rounded-full flex items-center gap-2 shadow-sm hover:bg-[#b4f043] transition-all duration-200 hover:scale-[1.02] active:scale-95"
            >
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
