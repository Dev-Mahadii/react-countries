import React, { useState } from 'react';
import './Country.css';

const Country = ({country, handleVisitedCountries}) => {
    // console.log(country)
    // console.log(country.name.common);
    // console.log(country.flags.flags.png);
    // console.log(country.population.population);
    // console.log(country.capital.capital[0]);
    // console.log(country.currencies.currencies);
    // const currencyCode = country.currencies.currencies;
    // console.log(country.region.region);
    // console.log(handleVisitedCountries);

    const [visited, setVisited] = useState(false);

    const handleVisited =()=>{
        // Option 1 [Basic]:
        // if(visited){
        //     setvisited(false);
        // }
        // else{
        //     setvisited(true);
        // }

        // Option 2 [Ternary]:
        // setvisited(visited? false: true);

        // Option 3 [toggling]:
        setVisited(!visited);

        handleVisitedCountries(country);
        
        
    }

    return (
        <div className={`card ${visited && 'country-visited'}`}>            
            
            {/* <h3>Name: {country.name.common}</h3> */}
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <p>Population: {country.population.population}</p>
            <p>Capital: {country.capital.capital[0]}</p>
            <p>Region: {country.region.region}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "- Big country" : "- Small country"}</p>

            <button onClick={handleVisited}>
                {
                    visited? "Visited" : "Not Visited"
                }
            </button>
            
            
        </div>
    );
};

export default Country;