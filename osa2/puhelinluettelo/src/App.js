import React, { useState } from 'react'

const App = () => {
  const [ people, setPeople ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' } ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const handleNameChange = (event) => setNewName(event.target.value)
  const handleNumberChange = (event) => setNewNumber(event.target.value)

  const handleAdd = () => {
//ilmoittaa, jos nimi on jo listalla ja estää lisäyksen
    if (people.find(({name}) => name === newName))
      {alert(`${newName} is already added to the phonebook, replace it with a new one?`)}
      else
    setPeople([...people, {name:newName, number:newNumber}]);
    setNewName('');
    setNewName('');
  }

  // const handleNameSearch = () => 


  return (
    <div>
      <h2>Phonebook</h2>
      {/* filter shown with <input value={nameSearch} onChange={handleNameSearch} /> */}
      <form>
        <div>
        <h2>add a new</h2>
          name: <input value={newName} onChange={handleNameChange} />
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          {/* <button type="submit" onClick={handleAdd}>add</button> */}
          <input type="button" value="add" onClick={handleAdd}/>
        </div>
      </form>
  
      {/* <div>debug: {newName} {newNumber}</div> */}
      <h2>Numbers</h2>
      <ul>
      {people.map((p, i)=>(<li key={i}>{p.name} {p.number}  </li>))}
    </ul>
    </div>
  )

}

export default App
