const FacilityDetailsPage = async ({ params }) => {
  const res = await fetch(
    `http://localhost:5000/allfacilities/${params.id}`,
    {
      cache: "no-store",
    }
  );

  const facility = await res.json();

  return (
    <div>{facility.name}</div>
  );
};

export default FacilityDetailsPage;