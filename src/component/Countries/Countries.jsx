import React, { use } from 'react';
import Country from './Country/Country';

const Countries = ({ countriesPromises }) => {
    const countriesData = use(countriesPromises);
    const countries = countriesData.countries;
    console.log(countries);
    return (
        <div>
            <h1>Countries: {countries.length}</h1>
            {
                countries.map(country => <Country key={country.ccn3.ccn3} country={country} />)
            }
        </div>
    );
};

export default Countries;