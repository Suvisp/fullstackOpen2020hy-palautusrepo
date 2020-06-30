// var timer

// export const showNotificationOfNewBlog = (newTitle, time) => {
//   return async dispatch => {
//     clearTimeout(timer)
//     await dispatch({
//       type: 'NEW_BLOG_NOTIFICATION',
//       data: newTitle
//     })
//     timer = setTimeout(() => {
//       dispatch({ type: 'HIDE_NOTIFICATION' })
//     }, time * 1000)
//   }
// }
export const createNotificationOfNew = (newTitle) => {
  return {
    type: 'NEW_BLOG_NOTIFICATION',
    data: newTitle
  }
}

// export const createNotificationVote = (content) => {
//   return {
//     type: 'NEW_VOTE_NOTIFICATION',
//     data: { content }
//   }
// }

export function hideNotification() {
  return { type: 'HIDE_NOTIFICATION' }
}