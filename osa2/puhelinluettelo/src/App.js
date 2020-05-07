import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PeopleList from './components/PeopleList'
import peopleService from './services/restclient'

const App = () => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newPeople, setNewPeople] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    console.log('effect')
    peopleService
      .getAll()
      .then(initialPeople => {
        setPeople(initialPeople)
      })
  }, [])
  console.log('render', people.length, people)

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleChange = (event) => setSearchTerm(event.target.value)

  //lisää henkilö
  // const addPerson = () => {
  //   //ilmoittaa, jos nimi on jo listalla ja estää lisäyksen
  //   if (people.find(({ name }) => name === newName)) { alert(`${newName} is already added to the phonebook, replace it with a new one?`) }
  //   else
  //     setPeople([...people, { name: newName, number: newNumber }]);
  //   setNewName('');
  //   setNewName('');
  // }

  const addPerson = (event) => {
    event.preventDefault()
    //ilmoittaa, jos nimi on jo listalla ja kysyy halutaankp puhelinnumero muuttaa?
    if (people.find(({ name }) => name === newName)) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        window.open("http://localhost:3000", "Phonenumber changed");
        const id_updateNumber = people.find(({ name }) => name === newName).id
        const personObject = {
          name: newName,
          number: newNumber,
        }
        peopleService
          .updateOne(id_updateNumber, personObject)
          .then(returnedPerson => {
            setNewPeople(people.map(p => p.id_updateNumber !== id_updateNumber ? p : returnedPerson))
          })
          .catch(error => {
            alert(
              `the note '${people.name}' was already deleted from server`
            )
            setPeople(people.filter(p => p.id_updateNumber !== id_updateNumber))
          })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: people.length + 1,
      }
      peopleService
        .createOne(personObject)
        .then(updatedPeople => {
          setPeople(people.concat(updatedPeople))
          setNewPeople('')
        })
    }
  }

  const removePerson = (id) => {
    peopleService
      .deleteOne(id)
      .then(returnedPeople => {
        console.log(returnedPeople)
        setNewPeople(people.concat(returnedPeople))
        // setPeople()
      })
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
      <PeopleList people={people} removePerson={removePerson} />
    </div>
  )
}

export default App
