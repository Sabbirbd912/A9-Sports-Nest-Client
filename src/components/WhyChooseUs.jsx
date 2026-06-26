import { ArrowRight, Award, ShieldCheck, UserCheck, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="bg-[#f7faf4] py-16 px-4 md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">

                {/* --- Section Title --- */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-[#9ACD32] font-bold text-xs uppercase tracking-widest block mb-2">
                        WHY CHOOSE US
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#0A2240] tracking-tight mb-4">
                        Why players <span className="text-[#9ACD32]">choose us for excellence</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Players choose our pickleball club because we offer professional courts,
                        top-tier coaching, premium equipment, and a friendly community that welcomes
                        all skill levels. Our commitment to quality ensures every player improves,
                        enjoys, and thrives — from beginners to seasoned competitors.
                    </p>
                </div>

                {/* --- Main Content Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

                    {/* Left Column (Content text-end) */}
                    <div className="col-span-1 md:col-span-3 flex flex-col gap-12 order-2 md:order-1">

                        {/* Feature 1 */}
                        <div className="flex flex-col items-center md:items-end text-center md:text-end group">
                            <div className="w-12 h-12 bg-[#9ACD32] rounded-full flex items-center justify-center text-[#0A2240] mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110">
                                <Award className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-[#0A2240] mb-2">
                                Elite Pickleball Experience
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Enjoy professional-grade courts designed for precision, smooth movement, and competitive play.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-center md:items-end text-center md:text-end group">
                            <div className="w-12 h-12 bg-[#9ACD32] rounded-full flex items-center justify-center text-[#0A2240] mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110">
                                <Users className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-[#0A2240] mb-2">
                                Family-Friendly Environment
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                A safe, welcoming space where families, kids, and adults can learn and play together.
                            </p>
                        </div>

                    </div>

                    {/* Center Column (Circular Image Showcase) */}
                    <div className="col-span-1 md:col-span-6 flex justify-center order-1 md:order-2 my-8 md:my-0">
                        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center">

                            {/* Outer Decorative Rotating Circle */}
                            <div className="absolute inset-0 border-2 border-dashed border-[#9ACD32]/40 rounded-full animate-[spin_60s_linear_infinite]"></div>

                            {/* Inner Green Backdrop Circles */}
                            <div className="absolute w-[85%] h-[85%] bg-[#9ACD32]/10 rounded-full flex items-center justify-center">
                                <div className="w-[70%] h-[70%] bg-[#9ACD32] rounded-full shadow-inner opacity-90"></div>
                            </div>

                            {/* Main Cutout Player Image */}
                            <img src="/img/why-choose-img_new.png" alt="Pickleball Player" className="absolute z-10 w-[95%] h-[95%] object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)]" />
                        </div>
                    </div>

                    {/* Right Column (Content text-start) */}
                    <div className="col-span-1 md:col-span-3 flex flex-col gap-12 order-3">

                        {/* Feature 3 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-start group">
                            <div className="w-12 h-12 bg-[#9ACD32] rounded-full flex items-center justify-center text-[#0A2240] mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-[#0A2240] mb-2">
                                Exclusive Member Benefits
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Get priority court bookings, discounted coaching, event access, and more.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-start group">
                            <div className="w-12 h-12 bg-[#9ACD32] rounded-full flex items-center justify-center text-[#0A2240] mb-4 shadow-sm transition-transform duration-300 group-hover:scale-110">
                                <UserCheck className="w-6 h-6" />
                            </div>
                            <h4 className="text-xl font-bold text-[#0A2240] mb-2">
                                Personalized Coaching Programs
                            </h4>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Improve faster with expert-led training tailored to your skill level and goals.
                            </p>
                        </div>

                    </div>

                </div>

                {/* --- Bottom Action Button --- */}
                <div className="text-center mt-16">
                    <Link href="/contact">
                        <button className="inline-flex items-center gap-2 bg-[#9ACD32] hover:bg-[#861212]/0 hover:scale-105 bg-linear-to-r from-[#9ACD32] to-[#8cbd2b] text-[#0A2240] font-extrabold px-8 py-3.5 rounded-full shadow-md transition-all duration-300 group">
                            Join the Club
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default WhyChooseUs;