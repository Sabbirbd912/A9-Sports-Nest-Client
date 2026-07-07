import { Button } from '@heroui/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FacilityCard = ({facility}) => {
    return (
        <div className="flex flex-col rounded-[24px] overflow-hidden shadow-md bg-white text-black transition-all duration-300 hover:shadow-xl group cursor-pointer">
            <div className="h-64 overflow-hidden relative">
                <img
                    src={facility.image_url || "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=600"}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-6 flex flex-col flex-1 bg-white">
                <span className="text-[#9ACD32] font-bold text-xs uppercase tracking-wider mb-1 block">
                    {facility.facility_type}
                </span>
                <div className="mb-2">
                    <h4 className="text-xl font-extrabold text-[#0A2240] tracking-tight line-clamp-1 hover:text-[#9ACD32] transition-colors">
                        {facility.name}
                    </h4>
                </div>

                <div className="text-gray-600 text-sm mb-5 font-medium">
                    <p className="line-clamp-2">
                        Enjoy top-tier play space for just <span className="text-[#0A2240] font-bold">${facility.price_per_hour}/hr</span>. Perfect for training and matches.
                    </p>
                </div>

                <div className="flex gap-3 w-full mt-auto pt-2">
                    <Link href={`/facilities/${facility._id}`} className="flex-1">
                        <Button
                            size="sm"
                            variant="bordered"
                            className="w-full bg-[#9ACD32] hover:bg-[#861212]/0 bg-linear-to-r from-[#9ACD32] to-[#8cbd2b] text-[#0A2240] font-extrabold rounded-xl shadow-sm flex items-center justify-center gap-1 group/btn"
                        >
                            Details 
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default FacilityCard;