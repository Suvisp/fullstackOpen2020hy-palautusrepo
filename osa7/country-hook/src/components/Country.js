import React from 'react'


const Country = ({ country }) => {
    // if (!country) {
    //   return null
    // }
  
    // else if (!country.found) {
        if (!country) {
      return (
        <div>
          not found...
        </div>
      )
    }

    console.log('country', country)
  
    return (
      <div>
        <h3>{country.data.name} </h3>
        <div>capital {country.data.capital} </div>
        <div>population {country.data.population}</div> 
        <img src={country.data.flag} height='100' alt={`flag of ${country.data.name}`}/>  
      </div>
    )
  }

  export default Country