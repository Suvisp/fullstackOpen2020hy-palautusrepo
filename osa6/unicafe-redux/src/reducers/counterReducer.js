const initialState = {
  good: 0,
  ok: 0,
  bad: 0,
  all: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      initialState.good += 1
      initialState.all += 1
      return initialState
    case 'OK':
      initialState.ok += 1
      initialState.all += 1
      return initialState
    case 'BAD':
      initialState.bad += 1
      initialState.all += 1
      return initialState
    case 'ZERO':
      return {
        good: 0,
        ok: 0,
        bad: 0,
        all: 0
      }
    // case 'ALL':
    //   const all = initialState.good+initialState.ok+initialState.bad
    //   return all
      default: return initialState
    }
    
  }

export default counterReducer;