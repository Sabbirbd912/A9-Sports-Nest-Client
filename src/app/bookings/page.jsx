"use client";

import { FaEdit, FaTrash } from "react-icons/fa";

const bookings = [
  {
    id: 1,
    user_email: "sabbir@gmail.com",
    booking_date: "2026-06-28",
    time_slot: "10:00 AM - 12:00 PM",
    hours: 2,
    total_price: 500,
    status: "Confirmed",
  },
  {
    id: 2,
    user_email: "john@gmail.com",
    booking_date: "2026-06-29",
    time_slot: "02:00 PM - 04:00 PM",
    hours: 2,
    total_price: 600,
    status: "Pending",
  },
  {
    id: 3,
    user_email: "maria@gmail.com",
    booking_date: "2026-06-30",
    time_slot: "06:00 PM - 08:00 PM",
    hours: 2,
    total_price: 700,
    status: "Completed",
  },
];

const BookingPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-lime-600">
        All Bookings
      </h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
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
                key={booking.id}
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
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      booking.status === "Confirmed"
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
                    <button className="flex items-center gap-1 px-3 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition">
                      <FaEdit />
                      Edit
                    </button>

                    <button className="flex items-center gap-1 px-3 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
                      <FaTrash />
                      Delete
                    </button>
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
  );
};

export default BookingPage;
