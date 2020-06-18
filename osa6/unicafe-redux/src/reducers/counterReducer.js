const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
  all: 0,
  average: 0,
  positive: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      initialState.good += 1
      initialState.all += 1
      initialState.average += 1
      initialState.positive += 1
      return initialState
    case 'OK':
      initialState.ok += 1
      initialState.all += 1
      return initialState
    case 'BAD':
      initialState.bad += 1
      initialState.all += 1
      initialState.average -= 1
      return initialState
    case 'ZERO':
      return {
        good: 0,
        ok: 0,
        bad: 0,
        all: 0,
        average: 0,
        positive: 0
      }
      default: return initialState
    }
  }

export default counterReducer;