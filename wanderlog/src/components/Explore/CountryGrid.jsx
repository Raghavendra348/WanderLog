import CountryCard from "./CountryCard";

const CountryGrid = ({
  countries,
}) => {
  if (
    !countries ||
    countries.length === 0
  ) {
    return (
      <div className="text-center mt-10">
        <h2
          className="
          text-2xl
          font-semibold
          text-gray-500
        "
        >
          No Countries Found
        </h2>
      </div>
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
        <CountryCard
          key={country.cca3}
          country={country}
        />
      ))}
    </div>
  );
};

export default CountryGrid;