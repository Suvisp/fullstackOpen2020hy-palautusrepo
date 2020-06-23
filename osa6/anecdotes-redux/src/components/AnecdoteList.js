import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../actions/anecdoteAction'
import { showNotificationOfVote } from '../actions/notificationAction'
// import { actionCreatorFilter } from '../actions/filterAction'


const AnecdoteList = (props) => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        const id = anecdote.id
        const content = anecdote.content
        const votes = anecdote.votes
        console.log('vote', id)
        dispatch(voteAnecdote(id, content, votes))
        dispatch(showNotificationOfVote(`you voted '${content}'`, 10))
    }

    // const filterHandler = (event) => {
    //         let filterText = event.target.value
    //         // let filtered = anecdotes
    //         let filtered = anecdotes.filter(anecdote => {
    //           let content = anecdote.content.toLowerCase()
    //           return content.indexOf(
    //             filterText.toLowerCase()) !== -1
    //         })
    //         dispatch(actionCreatorFilter(filtered))
    //       }

    return (
        <div>
      {/* Filter: 
      <input onChange={filterHandler}>
      </input> */}
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