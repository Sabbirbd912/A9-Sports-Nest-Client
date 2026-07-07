import Link from "next/link";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0A2240] text-white overflow-hidden pt-16">
      <div className="w-full md:w-[80%] mx-auto px-4 md:px-8 pb-12 border-b border-gray-700/50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <h2 className="text-2xl md:text-4xl font-black tracking-tight mb-3 leading-tight">
              Get regular updates on{" "}
              <span className="text-[#9ACD32]">
                pro-level Sport tips & training
              </span>
            </h2>
            <p className="text-gray-300 text-sm md:text-base">
              Stay ahead with weekly drills, gear recommendations, and expert
              guidance.
            </p>
          </div>

          <div className="lg:col-span-4 w-full">
            <form className="flex items-center bg-white rounded-full p-1.5 shadow-md">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-sm"
                required
              />
              <button
                type="submit"
                className="bg-[#9ACD32] hover:bg-[#8cbd2b] text-[#0A2240] font-extrabold px-6 py-2.5 rounded-full text-xs md:text-sm transition-colors shrink-0 flex items-center gap-1"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[80%] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 flex flex-col gap-5">
            <div>
              <Link
                href="/"
                className="text-2xl font-black tracking-wider text-white"
              >
                Sport<span className="text-[#9ACD32]">Nest</span>
              </Link>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              We’re a passionate, community-driven pickleball brand dedicated to
              improving your game through expert coaching, premium gear
              insights, and beginner-friendly learning resources.
            </p>

            <div className="flex gap-4 mt-2">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9ACD32] hover:text-[#0A2240] transition-all text-white"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9ACD32] hover:text-[#0A2240] transition-all text-white"
              >
                <svg
                  className="w-4 h-4 stroke-current fill-none stroke-2"
                  viewBox="0 0 24 24"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9ACD32] hover:text-[#0A2240] transition-all text-white"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#9ACD32] hover:text-[#0A2240] transition-all text-white"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white tracking-wide border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#9ACD32] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#9ACD32] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#9ACD32] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="hover:text-[#9ACD32] transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#9ACD32] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white tracking-wide border-b border-gray-700 pb-2">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5 text-sm text-gray-400">
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#9ACD32] transition-colors"
                >
                  Group Classes
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#9ACD32] transition-colors"
                >
                  Event Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#9ACD32] transition-colors"
                >
                  Club Access
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#9ACD32] transition-colors"
                >
                  Gear & Equipment Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-[#9ACD32] transition-colors"
                >
                  Pickleball Court Rentals
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white tracking-wide border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <div className="flex flex-col gap-4 text-sm text-gray-400">
              <a
                href="tel:+12225559090"
                className="flex items-center gap-3 hover:text-[#9ACD32] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#9ACD32]" /> +1 (222) 555-9090
              </a>
              <a
                href="mailto:hello@sportnest.com"
                className="flex items-center gap-3 hover:text-[#9ACD32] transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#9ACD32]" /> hello@sportnest.com
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#9ACD32] shrink-0 mt-0.5" />
                <span>Phoenix, AZ 2120 East Court Ave, Suite 104</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-black/20 border-t border-gray-800 py-6">
        <div className="w-full md:w-[80%] mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400">
          
          <p>
            &copy; {new Date().getFullYear()} SportNest Academy. All rights
            reserved.
          </p>

          
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
