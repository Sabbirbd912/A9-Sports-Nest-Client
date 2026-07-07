"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyNavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-1.5 
        ${
          isActive
            ? "bg-[#002d40] text-[#a3e635] shadow-md"
            : "text-[#002d40] hover:text-lime-600 hover:bg-gray-50"
        }`}
    >
      {children}
    </Link>
  );
};

export default MyNavLink;
