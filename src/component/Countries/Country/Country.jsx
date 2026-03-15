import React from 'react';

const Country = ({ country }) => {
    const { name, population, region, area, flags } = country;
    return (
        <div>
        <img src={flags.flags.png} alt={flags.flags.alt} />
            <h3>{name.common}</h3>
            <p>Population: {population.population}</p>
            <p>Region: {region.region}</p>
            <p>Area: {area.area}</p>
        </div>
    );
};

export default Country;