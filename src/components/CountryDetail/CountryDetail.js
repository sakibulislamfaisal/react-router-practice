import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CountryDetail = () => {
  const { countrycode } = useParams();
  const [detail, setDetail] = useState({});
  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/alpha/${countrycode}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDetail(data))
      .catch((error) => console.error(error));
  }, []);
  const { name, capital, region, flag } = detail;
  return (
    <div>
      <h2>Country detail Info :</h2>
      <img style={{ height: "30px" }} src={flag} alt="" />
      <p>Name : {name}</p>
      <p>Capital : {capital}</p>
      <p>Region : {region}</p>
    </div>
  );
};

export default CountryDetail;
