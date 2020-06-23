const initialState = ''

const filterReducer = (state = initialState, action) => {
    console.log('state', state)
    switch(action.type) {
        case 'FILTER':
        console.log('action data', action.data)
        console.log('state', state)
        return action.data 
        default:
        return state
    }
}
  
  export default { filterReducer }