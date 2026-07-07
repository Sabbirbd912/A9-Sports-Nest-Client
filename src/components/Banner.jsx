"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="bg-[url('/img/hero-bg.jpg')] bg-cover bg-center h-screen w-full">
      <div className="w-full h-full rounded-lg bg-black/60 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-white">
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-4 max-w-2xl"
          >
            Discover & Book Top Sports Facilities
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl mb-6 max-w-xl text-gray-200"
          >
            Find premium sports grounds, stadiums, and training spaces near you.
            Book instantly and enjoy seamless facility management.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex gap-4"
          >
            <Link href="#featured-facilities">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="bg-linear-to-r from-green-500 via-emerald-500 to-teal-500 text-white font-semibold">
                  Explore Facilities
                </Button>
              </motion.div>
            </Link>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Banner;