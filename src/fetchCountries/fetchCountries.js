import React from "react";
import axios from "axios";

const fetchCountries = async () => {
  // const getData = await axios.get(`${process.env.COUNTRY_API_URL}`);
  const getData = await axios.get(`https://rawcdn.githack.com/stefanbinder/countries-states/2756fe7ac344e6f9cec253077efd956af00d4f44/countries.json`);

  // const data = await getData.json();
  // console.log(process.env.COUNTRY_API_URL);
  // console.log("getData", { getData });
  return getData.data;
};

export { fetchCountries };
