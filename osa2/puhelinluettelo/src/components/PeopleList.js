import React from 'react';

const PeopleList = ({ people, removePerson }) => {
    // console.log('PeopleList props value is', { people, removePerson })

    return (
        <div>
            <ul>
                {people.map((person, i) => (<li key={i}>{person.name} {person.number} <button onClick={() => removePerson(person.id)}>poista</button> </li>))}
            </ul>
        </div>
    )
}

export default PeopleList;