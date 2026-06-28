"use client";
import { useSession } from '@/lib/auth-client';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const BookingForm = ({ facility }) => {

    const [hours, setHours] = useState("");

    const totalPrice = Number(hours || 0) * Number(facility.price_per_hour);

    const { data, isPending } = useSession();

    const user = data?.user;

    console.log(facility)

    const handleBooking = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const bookingData = Object.fromEntries(formData.entries());

        const booking = {
            ...bookingData,
            facility_id: facility._id,
            total_price: totalPrice,
            status: 'pending'
        };

        console.log(booking);

        const res = await fetch('http://localhost:5000/addbooking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })

        const data = await res.json();

        console.log(data);

        if (data.insertedId) {
            toast('Facility created successfully!');
        }

        e.target.reset();
        setHours("0");
    };

    const inputStyle = " px-3 py-2 border border-gray-200 rounded-4xl text-black placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#97D700] focus:border-[#97D700]";

    return (
        <form onSubmit={handleBooking} className='bg-white p-5 rounded-2xl border border-lime-500'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                <div>
                    <label className="text-sm ml-2 block mb-2 font-semibold text-black">
                        Email
                    </label>
                    <input name="user_email"
                        type="text"
                        defaultValue={user?.email}
                        readOnly
                        className={inputStyle}
                    />
                </div>

                <div>
                    <label className="text-sm ml-2 block mb-2 font-semibold text-black">
                        Booking date
                    </label>
                    <input name="booking_date"
                        type="date"
                        placeholder="Enter facility name"
                        className={inputStyle}
                    />
                </div>

                <div>
                    <label className="text-sm ml-2 block mb-2 font-semibold text-black">
                        Time Slot
                    </label>

                    <select
                        name="time_slot"
                        className={inputStyle}
                        defaultValue=""
                    >
                        <option value="" disabled>
                            Select a time slot
                        </option>

                        {facility.available_slots.map((slot, index) => (
                            <option key={index} value={slot}>
                                {slot}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="text-sm ml-2 block mb-2 font-semibold text-black">
                        Hours
                    </label>
                    <input name="hours"
                        type="text"
                        placeholder="Enter time in hours"
                        value={hours}
                        onChange={(e) => setHours(e.target.value)}
                        className={inputStyle}
                    />
                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mt-5">
                <button className="bg-[#a3e635] text-[#002d40] text-xs md:text-sm border-none font-bold px-4 md:px-6 py-1 h-15 rounded-full flex items-center gap-2 shadow-sm hover:bg-[#b4f043] transition-all duration-200 hover:scale-[1.02] active:scale-95"  >
                    Book now
                </button>
                <div className=" p-4 rounded-4xl bg-lime-100 text-[#002d40] font-bold">
                    Total Price: {totalPrice}
                </div>
            </div>



        </form>
    );
};

export default BookingForm;