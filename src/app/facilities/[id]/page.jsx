import BookingForm from '@/components/BookingForm';
import React from 'react';

const FacilityDetails = async ({ params }) => {

  const { id } = await params

  const res = await fetch(`http://localhost:5000/allfacilities/${id}`);
  const data = await res.json();

  // console.log(data)

  return (
    
<div className="w-full bg-lime-100">
      <div className="w-full md:w-[80%] mx-auto px-4 py-12 font-sans bg-lime-100">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1 rounded-2xl overflow-hidden shadow-xl">
            <div className="bg-[#a2e635] w-full h-100 md:w-60 md:h-60 lg:w-100 lg:h-100 xl:w-150 xl:h-120 flex flex-col items-center text-center shadow-2xl bg-cover bg-center" style={{ backgroundImage: `url(${data.image_url})` }} >

            </div>
          </div>
          <div className="lg:col-span-2 space-y-10 text-[#002d40] lg:pl-4">
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight">
                {data.name}
              </h2>
              <p className="text-gray-600 leading-relaxed font-normal text-[15px]">
                {data.description}
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                <div className="flex items-center gap-2 font-bold text-[15px]">
                  <span className="w-5 h-5 rounded-full bg-[#a2e635] flex items-center justify-center text-white shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span>Type: {data.facility_type}</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-[15px]">
                  <span className="w-5 h-5 rounded-full bg-[#a2e635] flex items-center justify-center text-white shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span>Location: {data.location}</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-[15px]">
                  <span className="w-5 h-5 rounded-full bg-[#a2e635] flex items-center justify-center text-white shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span>Capacity: {data.capacity}</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-[15px]">
                  <span className="w-5 h-5 rounded-full bg-[#a2e635] flex items-center justify-center text-white shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={3}
                      stroke="currentColor"
                      className="w-3 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                  </span>
                  <span>Price per hour: {data.price_per_hour}</span>
                </div>

              </div>
            </div>
            <div className="space-y-6 pt-2">

              <BookingForm facility={data} ></BookingForm>

            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default FacilityDetails;