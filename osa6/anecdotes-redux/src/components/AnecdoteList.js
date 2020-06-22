import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../actions/anecdoteAction'
import { showNotificationOfVote, hideNotification } from '../actions/notificationAction'


const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        const id = anecdote.id
        const content = anecdote.content
        console.log('vote', id)
        dispatch(voteAnecdote(id))
        dispatch(showNotificationOfVote(content))
        setTimeout(() => {
          dispatch(hideNotification())
        }, 5000)
    }

    return (
        <div>
            {anecdotes.sort((a, b) => b.votes - a.votes)
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

export default AnecdoteList