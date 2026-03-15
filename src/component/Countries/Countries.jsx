import React, { use } from 'react';
import Country from './Country/Country';

const Countries = ({ countriesPromises }) => {
    const countriesData = use(countriesPromises);
    // const countries = countriesData.countries.length;
    // console.log(countries);
    return (
      <div>
        <h1>Countries: {countriesData.countries.length}</h1>
        <Country></Country>
      </div>
    );
};

export default Countries;