"use client";

import Loading from '@/components/Loading';
import { authClient, useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';


const editBooking = ({ params }) => {

    const [booking, setBooking] = useState();
    const [isloading, setIsLoading] = useState(true);
    const [hours, setHours] = useState("");


    const paramPromise = params;
    const { id } = use(paramPromise)

    const { data, isPending } = useSession();
    const user = data?.user;

   const totalPrice = Number(hours || 0) * Number(booking?.facility?.price_per_hour || 0);

    const fetchBooking = async () => {

        const { data: tokenData } = await authClient.token();
        // console.log(tokenData)

        const res = await fetch(`http://localhost:5000/booking/${id}`, {
            headers: {
                authorization: `Bearer ${tokenData?.token}`
            }
        });
        const data = await res.json();
        setBooking(data);
        setIsLoading(false);
    }

    const inputStyle = "w-full px-4 py-3 border border-gray-200 rounded-lg text-black placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#97D700] focus:border-[#97D700]";

    useEffect(() => {
        fetchBooking()
    }, [id])

    const handleEditBooking = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newBooking = Object.fromEntries(formData.entries());

        const res = await fetch(`http://localhost:5000/booking/${booking._id}/update`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })

        const resdata = await res.json();

        console.log(resdata);

        if (resdata.modifiedCount > 0) {
            toast('Facility updated successfully!');
        }

        redirect('/bookings')

    }

    // console.log(booking)

    if (isloading) return <Loading></Loading>

    return (
        <section className="w-full px-4 py-10 bg-lime-100">
            <h2 className="text-3xl font-bold text-center text-lime-700 mb-8">
                Update Booking
            </h2>
            <div className="w-full md:w-[80%] mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-lg">

                <form onSubmit={handleEditBooking} className="space-y-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">

                        <div>
                            <label className="text-sm ml-2 block mb-2 font-semibold text-black">
                                Facility Name
                            </label>
                            <input name="user_email"
                                type="text"
                                defaultValue={booking?.facility?.name}
                                readOnly
                                className={inputStyle}
                            />
                        </div>

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
                                defaultValue={booking?.booking_date}
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

                                {booking?.facility.available_slots.map((slot, index) => (
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

                        <div className=" p-2 rounded-2xl bg-lime-100 text-[#002d40] font-bold">
                            <label className="text-sm ml-2 block mb-2 font-semibold text-black">
                                Total Price
                            </label>
                            <input name="total_price"
                                type="text"
                                placeholder="Enter time in hours"
                                value={totalPrice}
                                readOnly
                                className={inputStyle}
                            />
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 mt-5">
                        <button className="bg-[#a3e635] text-[#002d40] text-xs text-center md:text-sm border-none font-bold px-4 md:px-6 py-1 h-15 rounded-full flex items-center justify-center gap-2 shadow-sm hover:bg-[#b4f043] transition-all duration-200 hover:scale-[1.02] active:scale-95"  >
                            Update Booking
                        </button>
                        <Link href={`/bookings`} className="bg-[#d77300] hover:bg-red-500 text-[#002D3A] text-center flex justify-center items-center font-bold px-8 py-3 rounded-full transition">
                            Cancel
                        </Link>

                    </div>
                </form>
            </div>
        </section>
    );
};

export default editBooking;