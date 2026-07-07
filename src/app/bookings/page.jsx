// "use client";
import { FaEdit, FaTrash } from "react-icons/fa";
// import { useSession } from '@/lib/auth-client';
// import React, { useEffect, useState } from 'react';
import { DeleteAlert } from "@/components/DeleteAlert";
import Loading from "@/components/Loading";
import Link from "next/link";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";


const BookingPage = async () => {

    // const [bookings, setBookings] = useState([]);

    // const [loading, setLoading] = useState(true);

    // const { data, isPending } = useSession();
    // const user = data?.user;

    const session = await auth.api.getSession({
        headers: await headers(),
    })
    const user = session?.user;

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    console.log(token)

    const res = await fetch(`http://localhost:5000/allbookings?email=${user.email}`,{
        headers: {
            authorization: `Bearer ${token}`
        }
    });
    const data = await res.json();
    const bookings = data.result;

    // const fetchBookings = async () => {

    //     if (!user?.email) return;

    //     const res = await fetch(`http://localhost:5000/allbookings?email=${user.email}`);

    //     const data = await res.json();
    //     setBookings(data.result);

    //     setLoading(false)
    // };

    // useEffect(() => {
    //     fetchBookings();
    // }, [user?.email]);

    console.log(bookings)

    // if (isPending || loading) {
    //     return <Loading></Loading>
    // }

    return (
        <div className="w-full bg-lime-100">

            <div className="w-full md:w-[80%] mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold text-center mb-8 text-lime-700">
                    All Bookings
                </h1>

                <div className="overflow-x-auto bg-white shadow-lg rounded-2xl border border-lime-500">
                    <table className="min-w-full">
                        <thead className="bg-lime-100 text-[#002d40]">
                            <tr>
                                <th className="p-4 text-left">#</th>
                                <th className="p-4 text-left">User Email</th>
                                <th className="p-4 text-left">Booking Date</th>
                                <th className="p-4 text-left">Time Slot</th>
                                <th className="p-4 text-left">Hours</th>
                                <th className="p-4 text-left">Total Price</th>
                                <th className="p-4 text-left">Status</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {bookings.map((booking, index) => (
                                <tr
                                    key={index}
                                    className="border-b text-gray-600 hover:bg-gray-50 transition"
                                >
                                    <td className="p-4">{index + 1}</td>
                                    <td className="p-4">{booking.user_email}</td>
                                    <td className="p-4">{booking.booking_date}</td>
                                    <td className="p-4">{booking.time_slot}</td>
                                    <td className="p-4">{booking.hours}</td>
                                    <td className="p-4">${booking.total_price}</td>

                                    <td className="p-4">
                                        <span
                                            className={`px-3 py-1 rounded-full text-sm font-medium ${booking.status === "Confirmed"
                                                ? "bg-green-100 text-green-700"
                                                : booking.status === "Pending"
                                                    ? "bg-yellow-100 text-yellow-700"
                                                    : "bg-blue-100 text-blue-700"
                                                }`}
                                        >
                                            {booking.status}
                                        </span>
                                    </td>

                                    <td className="p-4">
                                        <div className="flex justify-center gap-2">
                                            <Link href={`/bookings/${booking._id}`} className="flex items-center rounded-4xl text-sm gap-1 px-3 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">
                                                <FaEdit />
                                                Edit
                                            </Link>

                                            <DeleteAlert alertData={booking} endpoint={'deletebooking'} ></DeleteAlert>
                                        </div>
                                    </td>
                                </tr>
                            ))}

                            {bookings.length === 0 && (
                                <tr>
                                    <td colSpan={8} className="text-center py-10 text-gray-500">
                                        No bookings found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;