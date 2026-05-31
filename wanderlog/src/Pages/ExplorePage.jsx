import { useState } from "react";
import Navbar from "../components/Layout/Navbar";
import SearchBar from "../components/Explore/SearchBar";
import CountryGrid from "../components/Explore/CountryGrid";
import useCountries from "../hooks/useCountries";

const ExplorePage = () => {
  const {
    countries,
    loading,
    error,
  } = useCountries();

  const [search, setSearch] =
    useState("");

  const filteredCountries =
    countries.filter(country =>
      country.name.common
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {loading && (
          <h1 className="text-center">
            Loading...
          </h1>
        )}

        {error && (
          <h1 className="text-center text-red-500">
            {error}
          </h1>
        )}

        {!loading && !error && (
          <CountryGrid
            countries={
              filteredCountries
            }
          />
        )}
      </div>
    </>
  );
};

export default ExplorePage;