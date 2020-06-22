const initialState = null

const notificationOfNewAnecdotes = 'New anecdote added'

const notificationOfVotes = 'You voted'


const notificationReducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        case 'NEW_ANECDOTE_NOTIFICATION':
            const newContent = action.data.content
            return notificationOfNewAnecdotes + ' ' + newContent
        case 'NEW_VOTE_NOTIFICATION':
            // const id = action.data.id
            const content = action.data.content
            return notificationOfVotes + ' ' + content
        case 'HIDE_NOTIFICATION':
            return initialState
        default: return state
    }
}

export default notificationReducer