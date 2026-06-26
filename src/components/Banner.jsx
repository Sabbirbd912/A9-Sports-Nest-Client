import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    
    <div className="bg-[url('/img/hero-bg.jpg')] bg-cover bg-center h-screen w-full">
      <div className="w-full h-full rounded-lg bg-black/60 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl">
            Discover & Book Top Sports Facilities
          </h1>

          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Find premium sports grounds, stadiums, and training spaces near you.
            Book instantly and enjoy seamless facility management.
          </p>

          <div className="flex gap-4">
            <Link href="#featured-facilities">
              <Button className="bg-linear-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-semibold">
                Explore Facilities
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
