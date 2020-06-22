// const getId = () => (100000 * Math.random()).toFixed(0)

// export const createAnecdote = (content) => {
//     return {
//         type: 'NEW_ANECDOTE',
//         data: {
//             content,
//             id: getId(),
//             votes: 0
//         }
//     }
// }

export const createAnecdote = (data) => {
    return {
      type: 'NEW_ANECDOTE',
      data,
            //   data: {
            //       content: data.content,
            // votes: 0
        // }
    }
  }

export const initializeAnecdotes = (anecdotes) => {
    return {
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    }
  }
  

export const voteAnecdote = (id) => {
    return {
        type: 'VOTE',
        data: { id }
    }
}
