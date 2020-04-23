import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';


const Header = () => {
  const header = 'give feedback'

  return (
    <div>
      <h2>{header}</h2>
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Statistics = (props) => {
  const statistics = 'statistics'
  if (props.all === 0) {

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
      <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <tr>all {props.all}</tr>
        <tr>average {props.average / props.all}</tr>
        <tr>positive {props.positive * 100 / props.all} %</tr>
      </tbody>
      </table>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      <tr>{props.text} {props.value}</tr>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
    setPositive(positive + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
    setAverage(average + 0)
    setPositive(positive)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average + -1)
    setPositive(positive)
  }

  return (
    <div>
      <Header />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)