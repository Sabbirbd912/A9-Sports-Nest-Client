"use client";
import { DeleteAlert } from '@/components/DeleteAlert';
import Loading from '@/components/Loading';
import { useSession } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash } from "react-icons/fa";

const ManageFacility = () => {

    const [facilities, setFacilities] = useState([]);
    const [loading, setLoading] = useState(true);

    const { data, isPending } = useSession();
    const user = data?.user;

    const fetchFacilities = async () => {

        if (!user?.email) return;

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allfacilities?email=${user.email}`);

        const data = await res.json();
        // console.log(data)
        setFacilities(data);
        setLoading(false)

    };

    useEffect(() => {

        fetchFacilities();
    }, [user?.email]);


    if (isPending || loading) {
        return <Loading></Loading>
    }

    return (
        <div className="w-full bg-lime-100">

            <div className="w-full md:w-[80%] mx-auto py-10 px-4">
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
                                            <Link href={`/managefacility/${facility._id}`} className="flex items-center rounded-4xl text-sm gap-1 px-3 py-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">
                                                <FaEdit />
                                                Edit
                                            </Link>

                                            {/* <button className="flex items-center gap-1 px-3 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition">
                                                <FaTrash />
                                                Delete
                                            </button> */}

                                            <DeleteAlert refetch={fetchFacilities} alertData={facility} endpoint={'deletefacility'} ></DeleteAlert>
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