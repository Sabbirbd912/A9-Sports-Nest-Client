"use client";
import { signOut, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  const { data, isPending } = useSession();
  const user = data?.user;

  const logOut = () => {
    signOut();
    toast.success("You are logged out!");
  };

  const navItems = (
    <>
      <li><MyNavLink href="/">Home</MyNavLink></li>
      <li><MyNavLink href="/facilities">All Facilities</MyNavLink></li>
      <li><MyNavLink href="/bookings">My Bookings</MyNavLink></li>
      <li><MyNavLink href="/addfacility">Add Facility</MyNavLink></li>
      <li><MyNavLink href="/managefacility">Manage My Facilities</MyNavLink></li>
    </>
  );

  if (isPending) {
    return (
      <div className="w-full h-20 bg-white flex justify-center items-center fixed top-0 z-50">
        <span className="loading loading-spinner text-[#002d40] loading-xl"></span>
      </div>
    );
  }

  return (
    <div className="bg-white shadow-sm sticky top-0 z-50 w-full">
      <div className="navbar bg-white w-full md:w-[90%] lg:w-[80%] m-auto px-4 md:px-6 py-4 font-semibold text-[#002d40]">
        
        {/* Navbar Start: Logo & Mobile Menu */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden text-[#002d40] hover:bg-gray-100 mr-1 p-2"
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
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-2xl z-50 mt-3 w-56 p-3 shadow-xl border border-gray-100 text-[#002d40] gap-1"
            >
              {navItems}
            </ul>
          </div>

          <Link
            href="/"
            className="flex items-center gap-2 normal-case transition-transform active:scale-95"
          >
            <span className="text-xl md:text-2xl font-black text-[#002d40] tracking-tight hidden sm:block">
              Sport<span className="text-[#9ACD32]">Nest</span>
            </span>
            <span className="text-xl font-black text-[#002d40] tracking-tight sm:hidden block">
              SN
            </span>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 items-center gap-1 text-[#002d40]">
            {navItems}
          </ul>
        </div>

        <div className="navbar-end gap-1.5 md:gap-2">
          {user ? (
            <div className="dropdown dropdown-end flex items-center">
              <div 
                tabIndex={0} 
                role="button" 
                className="btn bg-[#89de01] hover:bg-[#b4f043] text-[#002d40] border-0 shadow-none rounded-full h-9 md:h-10 min-h-0 px-4 md:px-5 flex items-center text-xs md:text-sm"
              >
                Profile
              </div>
              <ul 
                tabIndex={0} 
                className="dropdown-content bg-[#002d40] text-[#89de01] menu rounded-2xl z-50 w-60 p-2 mt-16 shadow-xl border border-gray-700"
              >
                <li className="font-bold text-[#89de01] my-1 py-1.5 border border-[#89de01]/30 rounded-xl bg-[#002d40] text-sm truncate px-2">
                  {user.name}
                </li>
                <li><Link href="/bookings" className="hover:bg-white/10 py-2 text-sm">My Bookings</Link></li>
                <li><Link href="/addfacility" className="hover:bg-white/10 py-2 text-sm">Add Facility</Link></li>
                <li><Link href="/managefacility" className="hover:bg-white/10 py-2 text-sm">Manage My Facilities</Link></li>
                <hr className="border-gray-700 my-1" />
                <li>
                  <button 
                    onClick={logOut} 
                    className="text-red-400 hover:bg-red-500/10 hover:text-red-300 py-2 text-sm w-full text-left"
                  >
                    Log out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-1.5 md:gap-2">
              <Link
                href="/signup"
                className="bg-gray-100 text-[#002d40] text-[11px] md:text-sm border-none font-bold px-3 md:px-5 py-2 md:py-2.5 rounded-full shadow-sm hover:bg-gray-200 transition-all active:scale-95"
              >
                Sign Up
              </Link>

              <Link
                href="/signin"
                className="bg-[#a3e635] text-[#002d40] text-[11px] md:text-sm border-none font-bold px-3 md:px-5 py-2 md:py-2.5 rounded-full shadow-sm hover:bg-[#b4f043] transition-all duration-200 active:scale-95"
              >
                Log In
              </Link>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Navbar;