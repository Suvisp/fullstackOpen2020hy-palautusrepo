const initialState = null

const notifyNew = 'New anecdote added'

const voteNew = 'You have voted'


const notificationReducer = (state = initialState, action) => {
    console.log('state now: ', state)
    console.log('action', action)
    switch (action.type) {
        case 'NEW_ANECDOTE_NOTIFICATION':
            return notifyNew
            case 'NEW_VOTE_NOTIFICATION':
                return voteNew
        case 'HIDE_NOTIFICATION':
            return initialState
        default: return state
    }
}

export default notificationReducer