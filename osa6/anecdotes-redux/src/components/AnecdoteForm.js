import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../actions/anecdoteAction'
import { showNotificationOfNewAnecdote, hideNotification } from '../actions/notificationAction'
import anecdoteService from '../services/anecdotes'


const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(newAnecdote))
    // dispatch(createAnecdote(content))
    dispatch(showNotificationOfNewAnecdote(content))
    setTimeout(() => {
      dispatch(hideNotification())
    }, 5000)

  }

  return (
    <div>
      <h2>Create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default AnecdoteForm