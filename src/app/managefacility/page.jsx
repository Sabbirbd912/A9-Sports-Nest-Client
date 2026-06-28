"use client";
import { useSession } from '@/lib/auth-client';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageFacility = () => {

    const [facilities, setFacilities] = useState([]);

    const { data, isPending } = useSession();
    const user = data?.user;

    useEffect(() => {
        if (!user?.email) return;

        const fetchFacilities = async () => {
            const res = await fetch(
                `http://localhost:5000/allfacilities?email=${user.email}`
            );

            const data = await res.json();
            // console.log(data)
            setFacilities(data);
        };

        fetchFacilities();
    }, [user?.email]);

    // console.log(user?.email)

    if (isPending) {
        return (
            <div className="w-full h-22 bg-white flex justify-center items-center">
                <span className="loading loading-spinner text-[#002d40] loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="w-full bg-lime-100">

            <div className="w-[80%] mx-auto py-10 px-4">
                <h1 className="text-3xl font-bold text-center mb-8 text-lime-700">
                    Manage Facilities
                </h1>

                <div className="overflow-x-auto bg-white shadow-lg rounded-2xl border border-lime-500">
                    <table className="min-w-full">
                        <thead className="bg-lime-100 text-[#002d40]">
                            <tr>
                                <th className="p-4 text-left">#</th>
                                <th className="p-4 text-left">Photo</th>
                                <th className="p-4 text-left">Name</th>
                                <th className="p-4 text-left">Type</th>
                                <th className="p-4 text-left">Location</th>
                                <th className="p-4 text-left">Price</th>
                                <th className="p-4 text-left">Capacity</th>
                                <th className="p-4 text-center">Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {(facilities || []).map((facility, index) => (
                                <tr
                                    key={index}
                                    className="border-b text-gray-600 hover:bg-gray-50 transition"
                                >
                                    <td className="p-4">{index + 1}</td>
                                    <td className="p-4">
                                        <div className="bg-[#a2e635] w-20 h-20 flex rounded-2xl flex-col items-center text-center shadow-sm bg-cover bg-center" style={{ backgroundImage: `url(${facility.image_url})` }} >
                                        </div>
                                    </td>
                                    <td className="p-4">{facility.name}</td>
                                    <td className="p-4">{facility.facility_type}</td>
                                    <td className="p-4">{facility.location}</td>
                                    <td className="p-4">{facility.price_per_hour}</td>
                                    <td className="p-4">{facility.capacity}</td>

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

                            {(facilities || []).length === 0 && (
                                <tr>
                                    <td colSpan={8} className="text-center py-10 text-gray-500">
                                        No facilities found.
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

export default ManageFacility;