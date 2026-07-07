"use client";
import Loading from '@/components/Loading';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React, { use, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

const editFacility = ({ params }) => {

    const [facility, setFacility] = useState();
    const [isloading, setIsLoading] = useState(true);

    const paramPromise = params;
    const { id } = use(paramPromise)


    const fetchFacility = async () => {

        const res = await fetch(`http://localhost:5000/allfacilities/${id}`);
        const data = await res.json();
        setFacility(data);
        setIsLoading(false);
    }

    const inputStyle = "w-full px-4 py-3 border border-gray-200 rounded-lg text-black placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#97D700] focus:border-[#97D700]";

    useEffect(() => {
        fetchFacility()
    }, [id])

    console.log(facility)

    const handleEditFacility = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const newFacility = Object.fromEntries(formData.entries());

        newFacility.available_slots = formData.getAll("available_slots");

        if (newFacility.available_slots.length === 0) {
            Swal.fire({
                icon: "error",
                title: "No Slot Selected!",
                text: "Please select at least one available slot.",
            });
            return;
        }

        console.log(newFacility)

        const res = await fetch(`http://localhost:5000/updatefacility/${facility._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFacility)
        })

        const resdata = await res.json();

        console.log(resdata);

        if (resdata.modifiedCount > 0) {
            toast('Facility updated successfully!');
        }

        redirect('/managefacility')

    }

    if (isloading) return <Loading></Loading>

    return (
        <section className="w-full px-4 py-10 bg-lime-100">
            <h2 className="text-3xl font-bold text-center text-lime-700 mb-8">
                Update Facility
            </h2>
            <div className="w-full md:w-[80%] mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-lg">

                <form onSubmit={handleEditFacility} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 font-semibold text-black">
                                Facility Name
                            </label>
                            <input name="name"
                                type="text"
                                defaultValue={facility.name}
                                className={inputStyle}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold text-black">
                                Facility Type
                            </label>
                            <select className={inputStyle} defaultValue={facility.facility_type} name="facility_type">
                                <option>Select Facility Type</option>
                                <option value='tennis'>Tennis</option>
                                <option value='football'>Football</option>
                                <option value='cricket'>Cricket</option>
                                <option value='badminton'>Badminton</option>
                                <option value='basketball'>Basketball</option>
                                <option value='swimming'>Swimming</option>
                            </select>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 font-semibold text-black">
                                Location
                            </label>
                            <input
                                type="text"
                                name="location"
                                defaultValue={facility.location}
                                className={inputStyle}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold text-black">
                                Price Per Hour
                            </label>
                            <input
                                type="number"
                                name="price_per_hour"
                                defaultValue={facility.price_per_hour}
                                className={inputStyle}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                            <label className="block mb-2 font-semibold text-black">
                                Capacity
                            </label>
                            <input
                                type="number"
                                name="capacity"
                                defaultValue={facility.capacity}
                                className={inputStyle}
                            />
                        </div>

                        <div>
                            <label className="block mb-2 font-semibold text-black">
                                Owner Email
                            </label>
                            <input
                                type="email"
                                name="owner_email"
                                defaultValue={facility.owner_email}
                                className={inputStyle}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-black">
                            Image URL
                        </label>
                        <input
                            type="text"
                            name="image_url"
                            defaultValue={facility.image_url}
                            className={inputStyle}
                        />
                    </div>
                    <div>
                        <label className="block mb-2 font-semibold text-black">
                            Available Slots
                        </label>

                        <div className="flex flex-wrap gap-6 text-black">
                            <label>
                                <input
                                    type="checkbox"
                                    name="available_slots"
                                    value="Morning"
                                    className="mr-2"
                                />
                                Morning
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    name="available_slots"
                                    value="Afternoon"
                                    className="mr-2"
                                />
                                Afternoon
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    name="available_slots"
                                    value="Evening"
                                    className="mr-2"
                                />
                                Evening
                            </label>

                            <label>
                                <input
                                    type="checkbox"
                                    name="available_slots"
                                    value="Night"
                                    className="mr-2"
                                />
                                Night
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 font-semibold text-black">
                            Description
                        </label>
                        <textarea
                            rows={5}
                            name="description"
                            defaultValue={facility.description}
                            className={inputStyle}
                        ></textarea>
                    </div>

                    <div className='flex flex-row gap-5'>
                        <button
                            type="submit"
                            className="bg-[#97D700] hover:bg-[#86c000] text-[#002D3A] font-bold px-8 py-3 rounded-full transition"
                        >
                            Update Facility
                        </button>
                        <Link href={`/managefacility`} className="bg-[#d77300] hover:bg-[#86c000] text-[#002D3A] font-bold px-8 py-3 rounded-full transition">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default editFacility;