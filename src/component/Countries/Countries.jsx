import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './countries.css';

const Countries = ({ countriesPromises }) => {

    const [visitedCountries, setVisitedCountries] = useState([]);

    const handleVisitedCountries = (country) => {
        console.log("visited Countries", country);
        // visitedCountries.push(country);
        // setVisitedCountries([...visitedCountries]);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }


    const countriesData = use(countriesPromises);
    const countries = countriesData.countries;
    console.log(countries);
    return (
      <div>
        <h1>Countries: {countries.length}</h1>
        <h3> Your Visited Countries: {visitedCountries.length}</h3> <br />
        <ol>
                {
                    visitedCountries.map(country =>
                    <li key={country.ccn3.ccn3}>{country.name.common}</li>
                    )
                }
        </ol>
        <div className="countries">
          {countries.map((country) => (
            <Country
              key={country.ccn3.ccn3}
              country={country}
              handleVisitedCountries={handleVisitedCountries}
            ></Country>
          ))}
        </div>
      </div>
    );
};

export default Countries;