export const createNotificationOfNew = (title) => {
  return {
    type: 'NEW_BLOG_NOTIFICATION',
    data: title
  }
}

export const createNotificationOfLike = (title) => {
  return {
    type: 'ADD_LIKE_NOTIFICATION',
    data:  title
  }
}

export const createNotificationOfDelete = (title) => {
  return {
    type: 'DELETE_BLOG_NOTIFICATION',
    data:  title
  }
}

export function hideNotification() {
  return { type: 'HIDE_NOTIFICATION' }
}