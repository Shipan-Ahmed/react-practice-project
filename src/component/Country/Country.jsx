import React, { use, useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries }) => {

    const [visited, setVisited] = useState(false);


    const handleVisit = () => {
        // console.log(`Visited ${country.name.common}`);
        // basic
        // if (visited) {
        //     setVisited(false);
        // } else setVisited(true);
        
        // toggle
        // setVisited(visited ? false : true);
        setVisited(!visited);
        handleVisitedCountries(country);
    }

    const { name, population, region, area, flags } = country;
    return (
        <div className={`country ${visited ? 'countryVisited' : ''}`}>
        <img src={flags.flags.png} alt={flags.flags.alt} />
            <h3>{name.common}</h3>
            <p>Population: {population.population}</p>
            <p>Region: {region.region}</p>
            <p>Area: {area.area} <br /> {area.area > 3000 ? 'Big Country' : 'Small Country'} </p>

            <button onClick={handleVisit}> 
                {visited ? 'Visited' : 'Not Visited'}
            </button>
        </div>
    );
};

export default Country;