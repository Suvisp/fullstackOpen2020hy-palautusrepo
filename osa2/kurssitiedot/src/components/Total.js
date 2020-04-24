import React from 'react';


const Total = (props) => {
    // console.log('parts value is', props)

    //laitetaan osien tehtävät ensin omaan taulukkoon
    const totalexercises = [];
    props.parts.map(part => totalexercises.push(part.exercises))
    //ja lasketaan uuden taulukon arvot yhteen
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const total = totalexercises.reduce(reducer);

    return (
        <div>
            <h4>total of {total} exercises</h4>
        </div>
    )
}

export default Total;
