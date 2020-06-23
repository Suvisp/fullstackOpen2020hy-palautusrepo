import anecdoteService from '../services/anecdotes'

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = {...anecdote, votes: anecdote.votes + 1}
    const editedAnecdote = await anecdoteService.editVotes(updatedAnecdote)
    dispatch({
      type: 'VOTE',
      data: editedAnecdote,
    })
  }
}