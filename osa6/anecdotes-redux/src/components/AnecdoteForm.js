import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../actions/anecdoteAction'
import { createNotification, hideNotification } from '../actions/notificationAction'


const AnecdoteForm = (props) => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(createAnecdote(content))
    dispatch(createNotification(content))
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