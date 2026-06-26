import { ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const TeamMember = () => {

    //dummy data for team cards
    const coaches = [
        {
            id: 1,
            name: "Mason Carter",
            role: "Head Pickleball Coach",
            image: "images/coach1.png",
        },
        {
            id: 2,
            name: "Sabbir Ahmed",
            role: "Instructor",
            image: "https://i.ibb.co.com/0j3WHMx7/300by3px240r.jpg",
        },
        {
            id: 3,
            name: "Taukir",
            role: "E-learning Trainer",
            image: "https://i.ibb.co.com/9HxR32rW/user.png",
        },
    ];

    return (
        <section className="bg-white py-16 px-4 mx-auto md:px-8 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* --- Section Title --- */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <span className="text-[#9ACD32] font-bold text-xs uppercase tracking-widest block mb-2">
                        ELITE TRAINERS
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#0A2240] tracking-tight mb-4 leading-tight">
                        Your pickleball journey starts with <br />
                        <span className="text-[#9ACD32]">our expert coaches</span>
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        Train with certified pickleball professionals who specialize in
                        skill development, game strategy, and performance improvement for
                        players of all ages and levels.
                    </p>
                </div>

                {/* --- Slider / Grid Wrapper --- */}
                <div className="w-full overflow-x-auto no-scrollbar pb-6 mb-12">
                    
                    <div className="flex gap-6 min-w-max md:min-w-0 md:grid md:grid-cols-3">
                        {coaches.map((coach) => (
                            <div
                                key={coach.id}
                                className="w-72 md:w-auto bg-gray-50 rounded-[24px] overflow-hidden shadow-sm group border border-gray-100 flex flex-col transition-all duration-300 hover:shadow-md"
                            >
                                {/* Image Section */}
                                <div className="relative h-80 overflow-hidden bg-gray-200">
                                    <img
                                        src={coach.image}
                                        alt={coach.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />

                                    {/* Raw SVGs - 100% Error-free Social Overlay */}
                                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/90 via-black/50 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-5 text-white">
                                        {/* Facebook */}
                                        <Link
                                            href="#"
                                            className="hover:text-[#9ACD32] transition-colors"
                                        >
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
                                            </svg>
                                        </Link>
                                        {/* X (Twitter) */}
                                        <Link
                                            href="#"
                                            className="hover:text-[#9ACD32] transition-colors"
                                        >
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                            </svg>
                                        </Link>
                                        {/* Instagram */}
                                        <Link
                                            href="#"
                                            className="hover:text-[#9ACD32] transition-colors"
                                        >
                                            <svg
                                                className="w-5 h-5 stroke-current fill-none stroke-2"
                                                viewBox="0 0 24 24"
                                            >
                                                <rect
                                                    x="2"
                                                    y="2"
                                                    width="20"
                                                    height="20"
                                                    rx="5"
                                                    ry="5"
                                                ></rect>
                                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                            </svg>
                                        </Link>
                                        {/* Linkedin */}
                                        <Link
                                            href="#"
                                            className="hover:text-[#9ACD32] transition-colors"
                                        >
                                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                {/* Coach Details Footer */}
                                <div className="p-5 flex justify-between items-center bg-white border-t border-gray-50 mt-auto">
                                    <div>
                                        <h4 className="font-bold text-lg text-[#0A2240] group-hover:text-[#9ACD32] transition-colors">
                                            <Link href={`/coaches/${coach.id}`}>{coach.name}</Link>
                                        </h4>
                                        <p className="text-xs font-semibold text-gray-500 mt-0.5">
                                            {coach.role}
                                        </p>
                                    </div>

                                    <Link href={`/coaches/${coach.id}`}>
                                        <div className="w-9 h-9 rounded-full bg-gray-100 group-hover:bg-[#9ACD32] text-[#0A2240] flex items-center justify-center transition-colors">
                                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* --- Bottom Features Info Section --- */}
                <div className="border-t border-gray-100 pt-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-center text-[#0A2240] font-bold text-sm md:text-base">
                        <div className="flex items-center gap-3">
                            <div className="text-[#9ACD32]">
                                <CheckCircle className="w-5 h-5 fill-[#9ACD32]/10" />
                            </div>
                            <span>Get 30-day free trial</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-[#9ACD32]">
                                <CheckCircle className="w-5 h-5 fill-[#9ACD32]/10" />
                            </div>
                            <span>No hidden fees</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="text-[#9ACD32]">
                                <CheckCircle className="w-5 h-5 fill-[#9ACD32]/10" />
                            </div>
                            <span>Cancel anytime</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMember;