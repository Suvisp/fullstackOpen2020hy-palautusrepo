import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers/counterReducer'

const store = createStore(reducer)

const Header = () => {
  const header = 'give feedback'

  return (
    <div>
      <h2>{header}</h2>
    </div>
  )
}

const Statistics = () => {
  const statistics = 'statistics'
  if (store.getState().all === 0) {
    return (
      <div>
        <h2>{statistics}</h2>
      No feedback given
      </div>
    )
  }
  //else
  return (
    <div>
      <h2>{statistics}</h2>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
      <div>all {store.getState().all}</div>
      <div>average {store.getState().average / store.getState().all}</div>
      <div>positive {store.getState().positive * 100 / store.getState().all} %</div>
    </div>
  )
}

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
      <Header />
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