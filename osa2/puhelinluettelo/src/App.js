import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PeopleList from './components/PeopleList'

const App = () => {
  const [people, setPeople] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

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
