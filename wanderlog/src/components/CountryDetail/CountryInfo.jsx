const CountryInfo = ({
  country,
}) => {
  const languages =
    country.languages
      ? Object.values(
          country.languages
        ).join(", ")
      : "N/A";

  return (
    <div
      className="
      max-w-5xl
      mx-auto
      bg-white
      rounded-xl
      shadow-lg
      overflow-hidden
    "
    >
      <img
        src={country.flags?.png}
        alt={country.name?.common}
        className="
          w-full
          h-80
          object-cover
        "
      />

      <div className="p-6">
        <h1
          className="
          text-4xl
          font-bold
          mb-6
        "
        >
          {country.name?.common}
        </h1>

        <div className="space-y-3">
          <p>
            <strong>
              Official Name:
            </strong>{" "}
            {
              country.name
                ?.official
            }
          </p>

          <p>
            <strong>
              Capital:
            </strong>{" "}
            {country.capital?.[0] ||
              "N/A"}
          </p>

          <p>
            <strong>
              Population:
            </strong>{" "}
            {country.population?.toLocaleString()}
          </p>

          <p>
            <strong>
              Region:
            </strong>{" "}
            {country.region}
          </p>

          <p>
            <strong>
              Sub Region:
            </strong>{" "}
            {country.subregion}
          </p>

          <p>
            <strong>
              Languages:
            </strong>{" "}
            {languages}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;