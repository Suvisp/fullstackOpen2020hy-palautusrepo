import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { voteAnecdote } from '../actions/anecdoteAction'
import { showNotificationOfVote } from '../actions/notificationAction'
// import { actionCreatorFilter } from '../actions/filterAction'


const AnecdoteList = (props) => {
    // const anecdotes = useSelector(state => state.anecdotes)
    // const dispatch = useDispatch()
    const vote = (anecdote) => {
        props.voteAnecdote(anecdote)
        props.showNotificationOfVote(`you voted '${anecdote.content}'`, 10)
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {props
                .anecdotes
                // .filter(a => a.content.toLowerCase().includes(props.filter.content))
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote)}>vote</button>
                            {/* <button onClick={() => props.dispatch(voteAnecdote(anecdote.id, props))}>vote</button> */}
                        </div>
                    </div>
                )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return ({
        anecdotes: state.anecdotes,
        filter: state.filter,
        notification: state.notification
    })
}

const mapDispatchToProps = {
    voteAnecdote,
    showNotificationOfVote
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList
// export default AnecdoteList