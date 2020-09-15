import React, { useEffect, useState } from "react";
import Country from "../../components/Country/Country";

const Home = () => {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/all";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountry(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2> Total Country : {country.length}</h2>
      {country.map((country) => (
        <Country key={country.alpha2Code} country={country}></Country>
      ))}
    </div>
  );
};

export default Home;
