const FacilityDetails = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/allfacilities/${id}`, {
    cache: "no-store",
  });

  const facility = await res.json();

  return <div>{facility.name}</div>;
};

export default FacilityDetails;