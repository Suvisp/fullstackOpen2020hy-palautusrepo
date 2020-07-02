export const createErrorMessage = (username) => {
  return {
    type: 'WRONG_CREDENTIALS',
    data: username
  }
}

export function hideErrorMessage() {
  return { type: 'HIDE_ERRORMESSAGE' }
}