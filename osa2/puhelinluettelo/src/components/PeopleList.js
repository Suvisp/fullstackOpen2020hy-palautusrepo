import React from 'react';

const PeopleList = ({ people, removePerson }) => {
    console.log('PeopleList props value is', { people, removePerson })

    const handleRemove = (person) => {
        if (window.confirm(`Do you really want to delete ${person.name}?`)) { 
            window.open("http://localhost:3000", "Person deleted");
            removePerson(person.id)
          } 
        }

    return (
        <div>
            <ul>
                {people.map((person, i) => (<li key={i}>{person.name} {person.number} <button onClick={() => handleRemove(person)}>poista</button> </li>))}
            </ul>
        </div>
    )
}

export default PeopleList;