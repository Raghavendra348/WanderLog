const VisitedList = ({
  countries,
}) => {
  if (
    !countries ||
    countries.length === 0
  ) {
    return (
      <h2 className="text-center text-xl">
        No Visited Countries
      </h2>
    );
  }

  return (
    <div
      className="
      grid
      grid-cols-1
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      gap-6
    "
    >
      {countries.map(country => (
        <div
          key={country.cca3}
          className="
            bg-white
            rounded-xl
            shadow-md
            overflow-hidden
          "
        >
          <img
            src={country.flags?.png}
            alt={
              country.name
                ?.common
            }
            className="
              w-full
              h-40
              object-cover
            "
          />

          <div className="p-4">
            <h2 className="font-bold">
              {
                country.name
                  ?.common
              }
            </h2>

            <p>
              {
                country.region
              }
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VisitedList;