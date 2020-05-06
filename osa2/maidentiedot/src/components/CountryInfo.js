import React from 'react';
import CountryWeather from './CountryWeather'

const CountryInfo = ({ country }) => {

  return (
    <div>
      <h2>{country.name}</h2>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h3>Spoken languages</h3>
      <p>{country.languages.name}</p>
      <ul>
        {country.languages.map((item, i) => (<li key={i}>{item.name}</li>))}
      </ul>
      <img src={country.flag} width='150px' height='100px' alt='country flag'/>
      <CountryWeather country={country}/>
    </div>
  )
}

export default CountryInfo;