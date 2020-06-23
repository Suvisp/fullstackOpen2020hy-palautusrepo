const initialState = null

const notificationReducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        case 'NEW_ANECDOTE_NOTIFICATION':
            return action.data
        case 'NEW_VOTE_NOTIFICATION':
            return action.data
        case 'HIDE_NOTIFICATION':
            return initialState
        default: return state
    }
}

export default notificationReducer