export const createNotification = (content) => {
    return {
        type: 'NEW_ANECDOTE_NOTIFICATION',
        data: { content }
    }
}

export const createNotificationVote = (content) => {
    return {
        type: 'NEW_VOTE_NOTIFICATION',
        data: { content }
    }
}

export function hideNotification() {
    return { type: 'HIDE_NOTIFICATION' }
  }