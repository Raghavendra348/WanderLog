import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/Layout/Navbar";
import CountryInfo from "../components/CountryDetail/CountryInfo";
import ActionButtons from "../components/CountryDetail/ActionButtons";

import { getCountryByCode } from "../api/countriesApi";

const CountryDetailPage = () => {
  const { code } = useParams();

  const [country, setCountry] =
    useState(null);

  useEffect(() => {
    fetchCountry();
  }, [code]);

  const fetchCountry =
    async () => {
      const data =
        await getCountryByCode(
          code
        );

      setCountry(data[0]);
    };

  if (!country) {
    return (
      <h1 className="text-center mt-10">
        Loading...
      </h1>
    );
  }

  return (
    <>
      <Navbar />

      <div className="p-6">
        <CountryInfo
          country={country}
        />

        <ActionButtons
          country={country}
        />
      </div>
    </>
  );
};

export default CountryDetailPage;