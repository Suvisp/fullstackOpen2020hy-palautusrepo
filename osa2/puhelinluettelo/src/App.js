import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PeopleList from './components/PeopleList'

const App = () => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPeople(response.data)
      })
  }, [])
  console.log('render', people.length, 'persons')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleChange = (event) => setSearchTerm(event.target.value)

//lisää henkilö
  const addPerson = () => {
    //ilmoittaa, jos nimi on jo listalla ja estää lisäyksen
    if (people.find(({ name }) => name === newName)) { alert(`${newName} is already added to the phonebook, replace it with a new one?`) }
    else
      setPeople([...people, { name: newName, number: newNumber }]);
    setNewName('');
    setNewName('');
  }

  //filteröi nimet, sisältää annetun kirjaimen tai nimen
  useEffect(() => {
    const results = !searchTerm
      ? people
      : people.filter(person =>
        person.name.toLowerCase().includes(searchTerm)
      );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter 
      searchTerm={searchTerm} 
      onChange={handleChange}
      searchResults={searchResults}
        />
      <h2>add a new</h2>
      <PersonForm onSubmit={addPerson}
        name={newName}
        nameChange={handleNameChange}
        number={newNumber}
        numberChange={handleNumberChange}
      />
      {/* <div>debug: {newName} {newNumber}</div> */}
      <h2>Numbers</h2>
      <PeopleList people={people}/>
    </div>
  )
}

export default App
