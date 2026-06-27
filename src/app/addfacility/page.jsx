"use client";
const AddFacility = () => {
  const inputStyle = "w-full px-4 py-3 border border-gray-200 rounded-lg text-black placeholder:text-black placeholder:opacity-50 focus:outline-none focus:ring-2 focus:ring-[#97D700] focus:border-[#97D700]";

  const handleAddFacility = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const facility = Object.fromEntries(formData.entries());

    console.log(facility)

  }

  return (
    <section className="w-full px-4 py-10">
      <div className="max-w-5xl mx-auto bg-[#F1F7EC] rounded-3xl p-6 md:p-10 shadow-lg">
        <h2 className="text-3xl font-bold text-[#97D700] mb-8">
          Create Facility to SportNest
        </h2>

        <form onSubmit={handleAddFacility} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-semibold text-black">
                Facility Name
              </label>
              <input name="facility_name"
                type="text"
                placeholder="Enter facility name"
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-black">
                Facility Type
              </label>
              <select className={inputStyle} name="type">
                <option>Select Facility Type</option>
                <option value='tennis'>Tennis</option>
                <option value='football'>Football</option>
                <option value='cricket'>Cricket</option>
                <option value='badminton'>Badminton</option>
                <option value='basketball'>Basketball</option>
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
                placeholder="Enter location"
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-black">
                Price Per Hour
              </label>
              <input
                type="number"
                name="price"
                placeholder="Enter price"
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
                placeholder="Enter capacity"
                className={inputStyle}
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold text-black">
                Owner Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter owner email"
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
              placeholder="Enter image URL"
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
              placeholder="Enter facility description"
              className={inputStyle}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#97D700] hover:bg-[#86c000] text-[#002D3A] font-bold px-8 py-3 rounded-full transition"
          >
            Add Facility
          </button>
        </form>
      </div>
    </section>
  );
};

export default AddFacility;
