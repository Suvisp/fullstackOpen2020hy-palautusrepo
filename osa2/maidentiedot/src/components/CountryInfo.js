import React from 'react';

const CountryInfo = ({ country }) => {

  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>languages</h3>
      <p>{country.languages.name}</p>
      <ul>
        {country.languages.map((item, i) => (<li key={i}>{item.name}</li>))}
      </ul>
      <img src={country.flag} width='80px' height='60px' />
    </div>
  )
}

export default CountryInfo;