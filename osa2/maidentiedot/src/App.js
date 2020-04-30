import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CountriesFilter from './components/CountriesFilter'

const App = () => {
  const [countries, setCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])
  console.log('render', countries.length, 'countries')

  const handleChange = (event) => setSearchTerm(event.target.value)

  //filteröi nimet, sisältää annetun kirjaimen tai nimen
  useEffect(() => {
    const results = !searchTerm
      ? countries
      : countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm)
      );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <CountriesFilter
        searchTerm={searchTerm}
        onChange={handleChange}
        searchResults={searchResults}
      />
    </div>
  )
}

export default App
