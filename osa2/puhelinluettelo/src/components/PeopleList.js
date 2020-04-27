import React from 'react';

const PeopleList = ({ people }) => {
    // console.log('PeopleList props value is', { people })

    return (
        <div>
            <ul>
                {people.map((person, i) => (<li key={i}>{person.name} {person.number}  </li>))}
            </ul>
        </div>
    )
}

export default PeopleList;