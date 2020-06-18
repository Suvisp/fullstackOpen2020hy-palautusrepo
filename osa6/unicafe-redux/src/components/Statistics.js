import React from 'react'
import { createStore } from 'redux'
import reducer from '../reducers/counterReducer'


const store = createStore(reducer)

const Statistics = () => {
    const statistics = 'statistics'
    if ( store.getState().all === 0) 
    {   
        return (
            <div>
                <h2>{statistics}</h2>
        No feedback given
            </div>
        )
    }
    //else
    return (
        <div>
            <h2>{statistics}</h2>
                    <div>good {store.getState().good}</div>
                    <div>neutral {store.getState().ok}</div>
                    <div>bad {store.getState().bad}</div>
                    <div>all {store.getState().all}</div>
        {/* <tr>average {props.average / props.all}</tr>
        <tr>positive {props.positive * 100 / props.all} %</tr> */}

        </div>
    )
}

export default Statistics