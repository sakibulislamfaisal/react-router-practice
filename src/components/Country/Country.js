import React from "react";
import { Link, useHistory } from "react-router-dom";
import "./Country.css";

const Country = (props) => {
  //console.log(props.country);
  const { name, capital, region, subregion, alpha2Code } = props.country;
  let history = useHistory();
  const handleDetail = (alpha2Code) => {
    //console.log("clicked");
    const url = `/country/${alpha2Code}`;
    history.push(url);
  };
  return (
    <div className="country">
      <h2>Name : {name}</h2>
      <h3>Capital : {capital}</h3>
      <h3>Region : {region}</h3>
      <h3>Subregion : {subregion}</h3>
      <Link to={`/country/${alpha2Code}`}>
        <h3>Alpha2Code : {alpha2Code}</h3>
      </Link>
      <button onClick={() => handleDetail(alpha2Code)}>See Details</button>
    </div>
  );
};

export default Country;
