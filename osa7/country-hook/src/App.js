import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Country from './components/Country'
import useField from './hooks/index'
import useCountry from './hooks/index'


const App = () => {
  const nameInput = useField('text')
  const [name, setName] = useState('')
  const [isSubmit, setIsSubmit] = useState(false)
  const country = useCountry(name, isSubmit)

  console.log('name', name)
  // console.log('country', country)

  // useEffect(() => {
  //   console.log('effect')
  //   axios
  //     .get('https://restcountries.eu/rest/v2/name/{name}?fullText=true')
  //     .then(response => {
  //       console.log('promise fulfilled')
  //       setName(response.data)
  //       console.log('name', response.data)
  //     })
  // }, [])

  const fetch = (e) => {
    e.preventDefault()
    setName(nameInput.value)
    setIsSubmit(true)
  }

  return (
    <div>
      <form onSubmit={fetch}>
        <input {...nameInput} />
        <button>find</button>
      </form>

      {isSubmit === true ? <Country country={country} /> : null}


      {/* <Country country={country} /> */}
    </div>
  )
}

export default App