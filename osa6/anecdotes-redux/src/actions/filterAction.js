export const filter = (content) => {
  console.log('filtteröi')
  return {
      type: 'FILTER',
      data: {
          content
      }
  }
}