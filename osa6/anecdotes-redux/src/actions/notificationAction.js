var timer

export const showNotificationOfNewAnecdote = (content, time) => {
    return async dispatch => {
        clearTimeout(timer)
        await dispatch({
            type: 'NEW_ANECDOTE_NOTIFICATION',
            data: content
        })
        timer = setTimeout(() => {
            dispatch({ type: 'HIDE_NOTIFICATION' })
        }, time * 1000)
    }
}

export const showNotificationOfVote = (content, time) => {
    return async dispatch => {
        clearTimeout(timer)
        await dispatch({
            type: 'NEW_VOTE_NOTIFICATION',
            data: content
        })
        timer = setTimeout(() => {
            dispatch({ type: 'HIDE_NOTIFICATION' })
        }, time * 1000)
    }
}