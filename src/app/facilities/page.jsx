import Link from "next/link";
const FacilitiesPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allfacilities`);
  const data = await res.json();
  return (
    <div className="w-full bg-lime-100">

      <div className="container w-full md:w-[80%] mx-auto px-6 py-10">
        <h2 className="text-3xl text-lime-700 font-bold text-center mb-8">
          All Of Our Facilities
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((facility) => (
            <div
              key={facility._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="h-56 overflow-hidden">
                <img
                  src={facility.image_url}
                  alt={facility.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {facility.facility_type}
                </span>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {facility.name}
                </h3>

                <p className="text-gray-500 mb-4">
                  Premium sports facility with modern equipment and excellent
                  environment.
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Price / Hour</p>
                    <p className="text-2xl font-bold text-green-600">
                      ${facility.price_per_hour}
                    </p>
                  </div>
                  <Link
                    href={`/facilities/${facility._id}`}
                    className="bg-[#9ACD32] hover:bg-[#8cbd2b] text-[#0A2240] px-5 py-2 rounded-lg transition duration-300 inline-block"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;
