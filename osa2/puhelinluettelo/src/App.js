import React, { useState, useEffect } from 'react'
import peopleService from './services/restclient'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PeopleList from './components/PeopleList'
import Notification from './components/Notification'

const App = () => {
  const [people, setPeople] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newPeople, setNewPeople] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    console.log('effect')
    peopleService
    //GET
      .getAll()
      .then(initialPeople => {
        setPeople(initialPeople)
      })
  }, [])
  console.log('render', people.length, people)

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)
  const handleFilter = (event) => setSearchTerm(event.target.value)

  const addPerson = (event) => {
    event.preventDefault()
    //ilmoittaa, jos nimi on jo listalla ja kysyy halutaanko puhelinnumero muuttaa?
    if (people.find(({ name }) => name === newName)) {
      if (window.confirm(`${newName} is already in phonebook, replace the old number with a new one?`)) {
        const id = people.find(({ name }) => name === newName).id
        const personObject = {
          name: newName,
          number: newNumber,
        }
        peopleService
        //PUT - update number
          .updateOne(id, personObject)
          .then(returnedPerson => {
            // setPeople(people.filter(p => p.id_updateNumber !== id_updateNumber))
            setPeople(people.map(p => p.id !== id ? p : returnedPerson))
            setNotification(
              `The number of '${personObject.name}' has been updated`
            )
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })
          .catch(error => {
            alert(`Data of '${personObject.name}' has already been removed from server`)
          })
      }
    } else {
      const personObject = {
        name: newName,
        number: newNumber,
        id: people.length + 1,
      }
      peopleService
      //POST
        .createOne(personObject)
        .then(updatedPeople => {
          setPeople(people.concat(updatedPeople))
          setNewPeople('')
          setNotification(
            `'${personObject.name}' added to phonebook`
          )
          setTimeout(() => {
            setNotification(null)
          }, 5000)
        })
    }
  }

  const removePerson = (id) => {
    const deleteId = people.filter(person => person.id === id)
    if (deleteId.length === 1) {
      if (window.confirm(`Do you want to delete ${deleteId[0].name}?`)) {
        peopleService
        //DELETE
          .deleteOne(id)
          .then(returnedPeople => {
            console.log('returnedPeople', returnedPeople)
            setPeople(people.filter(person => person.id !== id))
            // setNewPeople(people.concat(returnedPeople))
            setNotification(`'${deleteId[0].name}' deleted from phonebook`)
            setTimeout(() => {
              setNotification(null)
            }, 5000)
          })
      }
    }
  }

  //FILTER - filteröi nimet, sisältää annetun kirjaimen/nimen
  useEffect(() => {
    const results = !searchTerm
      ? people
      : people.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setSearchResults(results);
  }, [searchTerm]);

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notification} />
      <Filter
        searchTerm={searchTerm}
        onChange={handleFilter}
        searchResults={searchResults}
      />
      <h2>add a new</h2>
      <PersonForm onSubmit={addPerson}
        name={newName}
        nameChange={handleNameChange}
        number={newNumber}
        numberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <PeopleList people={people} removePerson={removePerson} setNotification={setNotification} />
    </div>
  )
}

export default App
