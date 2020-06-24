export const filterAnecdotes = (content) => {
  console.log('filtteröi')
  return {
      type: 'FILTER',
      data: {
          content
      }
  }
}