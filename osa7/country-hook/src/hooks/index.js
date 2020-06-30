import { useState, useEffect } from 'react'
import axios from 'axios'


const useField = (type) => {
    const [value, setValue] = useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return {
        type,
        value,
        onChange
    }
}

export const useCountry = (name, isSubmit) => {
    // const [country, setCountry] = useState({ found: false })
    const [country, setCountry] = useState(null)

    // useEffect()
    useEffect(() => {
        console.log('effect')
        if (isSubmit) {
        axios
          .get('https://restcountries.eu/rest/v2/name/{name}?fullText=true')
          .then(response => {
            console.log('promise fulfilled')
            setCountry(response.data)
            console.log('countryset', response.data)
          })
        }
      }, [setCountry, name, isSubmit])


        //filteröi nimet, sisältää annetun kirjaimen tai nimen
//   useEffect(() => {
//     const results = name
//       )
//     setCountry(results)
//   }, [name])

    return country
}

export default useField
