import React, { useState } from 'react'
import CountryInfo from './CountryInfo'

const CountriesFilter = ({ searchTerm, onChange, searchResults }) => {
    const [selectedCountry, setSelectedCountry] = useState('')
    // console.log('Filter props value is', {searchTerm, onChange, searchResults})
    if (searchResults.length > 10) {
        return (
            <div>
                find countries <input type="text" value={searchTerm} onChange={onChange} />
                <p>Too many matches, specify another filter</p>
            </div>
        )
    } else if
        (searchResults.length === 1) {
        const country = searchResults[0]
        return (
            <div>
                find countries <input type="text" value={searchTerm} onChange={onChange} />
                <CountryInfo country={country} />
            </div>
        )
    } else {
        const handleClick = (country) => {
            setSelectedCountry(country)
            console.log('country prop', country)
        }
        return (
            <div>
                find countries <input type="text" value={searchTerm} onChange={onChange} />
                <ul>
                    {searchResults.map((country, i) => (<li key={i}>{country.name} <button value='show' onClick={() => handleClick(country)}>show</button></li>))}
                    {selectedCountry ? <CountryInfo country={selectedCountry} /> : null}
                </ul>
            </div>
        )
    }
}

export default CountriesFilter;
