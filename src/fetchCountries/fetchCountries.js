import React from "react";

const fetchCountries = async () => {
  const getData = await fetch(process.env.COUNTRY_API_URL);
  const data = await getData.json();
  return data;
};

export { fetchCountries };
