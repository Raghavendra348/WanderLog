const BASE_URL =
  "https://restcountries.com/v3.1";

export const getAllCountries =
  async () => {
    const response = await fetch(
      `${BASE_URL}/all?fields=name,flags,population,region,capital,cca3`
    );

    return response.json();
  };

export const getCountryByCode =
  async code => {
    const response = await fetch(
      `${BASE_URL}/alpha/${code}`
    );

    return response.json();
  };