import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { connect } from 'react-redux'
import { voteAnecdote } from '../actions/anecdoteAction'
import { showNotificationOfVote } from '../actions/notificationAction'


const AnecdoteList = (props) => {
    // const anecdotes = useSelector(state => state.anecdotes)
    // const dispatch = useDispatch()
    const vote = (anecdote) => {
        props.voteAnecdote(anecdote)
        props.showNotificationOfVote(`you voted '${anecdote.content}'`, 5)
    }

    return (
        <div>
            <h2>Anecdotes</h2>
            {props.anecdotes
                .sort((a, b) => b.votes - a.votes)
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filterInput: state.filterInput
    }
}

const mapDispatchToProps = {
    voteAnecdote,
    showNotificationOfVote
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList
// export default AnecdoteList