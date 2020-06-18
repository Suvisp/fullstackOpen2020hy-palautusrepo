import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers/counterReducer'
import Statistics from './components/Statistics'

const store = createStore(reducer)

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD'
    })
  }
  const ok = () => {
    store.dispatch({
      type: 'OK'
    })
  }
  const bad = () => {
    store.dispatch({
      type: 'BAD'
    })
  }
  const zero = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <div>
      <h2>give feedback</h2>
      <button onClick={good}>good</button>
      <button onClick={ok}>neutral</button>
      <button onClick={bad}>bad</button>
      <button onClick={zero}>reset stats</button>
      <Statistics />
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)