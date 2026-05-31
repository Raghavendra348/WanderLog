import { Link } from "react-router-dom";

const CountryCard = ({
  country,
}) => {
  return (
    <Link
      to={`/country/${country.cca3}`}
    >
      <div
        className="
          bg-white
          rounded-xl
          overflow-hidden
          shadow-md
          hover:shadow-xl
          hover:scale-105
          transition-all
          duration-300
        "
      >
        <img
          src={country.flags?.png}
          alt={country.name?.common}
          className="
            w-full
            h-40
            object-cover
          "
        />

        <div className="p-4">
          <h2
            className="
            text-lg
            font-bold
            mb-2
          "
          >
            {country.name?.common}
          </h2>

          <p>
            <span className="font-semibold">
              Capital:
            </span>{" "}
            {country.capital?.[0] ||
              "N/A"}
          </p>

          <p>
            <span className="font-semibold">
              Population:
            </span>{" "}
            {country.population?.toLocaleString()}
          </p>

          <p>
            <span className="font-semibold">
              Region:
            </span>{" "}
            {country.region}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;