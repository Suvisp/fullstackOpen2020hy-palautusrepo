import React, { useState, useEffect } from 'react'
import axios from 'axios'
require('dotenv').config();

const api_key = process.env.REACT_APP_API_KEY;

const CountryWeather = ({ country }) => {
  const [weather, setWeather] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${country.capital}`)
      .then(response => {
        console.log('promise fulfilled', response)
        setWeather(response.data)
      })
  }, [])
  console.log('render weather', weather)

  if (weather) {
    return (
      <div>
        <h3>Weather in {country.capital}</h3>
        <p>temperature: {weather.current.temperature} Celsius</p>
        <img src={weather.current.weather_icons} width='60px' height='60px' alt='weather icon'/>
        <p>wind: {weather.current.wind_speed} mph direction {weather.current.wind_dir}</p>
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}

export default CountryWeather;