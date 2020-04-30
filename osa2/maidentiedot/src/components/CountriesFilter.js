import React from 'react';
import CountryInfo from './CountryInfo'

const CountriesFilter = ({ searchTerm, onChange, searchResults }) => {
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
        return (
            <div>
                find countries <input type="text" value={searchTerm} onChange={onChange} />
                <ul>
                    {searchResults.map((item, i) => (<li key={i}>{item.name}</li>))}
                </ul>
            </div>
        )
    }
}

export default CountriesFilter;
