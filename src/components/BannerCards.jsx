import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FacilityCard from "./FacilityCard";

const BannerCards = async () => {
  async function getFacilities() {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allfacilities`, {
        next: { revalidate: 10 },
      });
      if (!res.ok) return [];
      return res.json();
    } catch (error) {
      console.error("Data fetch error:", error);
      return [];
    }
  }

  const facilities = await getFacilities();

  return (
    <div id="featured-facilities" className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-5xl text-neutral-900 font-bold text-center pb-10">Popular <span className="text-lime-500">Facilities</span> </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {facilities.slice(0, 6).map((facility) => (
          <FacilityCard key={facility._id} facility={facility} />
        ))}
      </div>
    </div>
  );
};

export default BannerCards;