"use client";

import { FaEdit, FaTrash } from "react-icons/fa";

const facilities = [
  {
    _id: "1",
    name: "Football Ground",
    facility_type: "Outdoor",
    location: "Dhaka",
    price_per_hour: 500,
    capacity: 20,
    available_slots: "9:00 AM - 12:00 PM",
    description: "Professional football ground with flood lights.",
    owner_email: "sabbir@gmail.com",
    booking_count: 15,
  },
  {
    _id: "2",
    name: "Tennis Court",
    facility_type: "Indoor",
    location: "Chattogram",
    price_per_hour: 300,
    capacity: 4,
    available_slots: "2:00 PM - 6:00 PM",
    description: "Professional indoor tennis court.",
    owner_email: "john@gmail.com",
    booking_count: 8,
  },
  {
    _id: "3",
    name: "Swimming Pool",
    facility_type: "Indoor",
    location: "Sylhet",
    price_per_hour: 700,
    capacity: 10,
    available_slots: "10:00 AM - 8:00 PM",
    description: "Luxury swimming pool with modern facilities.",
    owner_email: "admin@gmail.com",
    booking_count: 25,
  },
];

const ManageFacilitiesPage = () => {
  const handleEdit = (id) => {
    console.log("Edit:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete:", id);
  };

  return (
    <div className="max-w-7xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-lime-600">
        Manage My Facilities
      </h1>

      <div className="overflow-x-auto bg-white shadow-lg rounded-2xl">
        <table className="min-w-full">
          <thead className="bg-lime-100 text-[#002d40]">
            <tr>
              <th className="p-4 text-left">#</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-left">Price/Hour</th>
              <th className="p-4 text-left">Capacity</th>
              <th className="p-4 text-left">Available Slots</th>
              <th className="p-4 text-left">Owner Email</th>
              <th className="p-4 text-left">Bookings</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {facilities.map((facility, index) => (
              <tr
                key={facility._id}
                className="border-b text-gray-600 hover:bg-gray-50 transition"
              >
                <td className="p-4">{index + 1}</td>
                <td className="p-4 font-semibold">{facility.name}</td>
                <td className="p-4">{facility.facility_type}</td>
                <td className="p-4">{facility.location}</td>
                <td className="p-4">${facility.price_per_hour}</td>
                <td className="p-4">{facility.capacity}</td>
                <td className="p-4">{facility.available_slots}</td>
                <td className="p-4">{facility.owner_email}</td>
                <td className="p-4">
                  <span className="bg-lime-100 text-lime-700 px-3 py-1 rounded-full text-sm font-medium">
                    {facility.booking_count}
                  </span>
                </td>

                <td className="p-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => handleEdit(facility._id)}
                      className="flex items-center gap-1 px-3 py-2 border border-green-500 text-green-500 rounded-lg hover:bg-green-500 hover:text-white transition"
                    >
                      <FaEdit />
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(facility._id)}
                      className="flex items-center gap-1 px-3 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition"
                    >
                      <FaTrash />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {facilities.length === 0 && (
              <tr>
                <td colSpan={10} className="text-center py-10 text-gray-500">
                  No facilities found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFacilitiesPage;
