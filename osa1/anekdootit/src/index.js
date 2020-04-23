import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import './index.css';


const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Display = (props) => {
  return (
    <div>
      <h1>{props.header}</h1>
      <p>{props.text}</p>
      <p>has {props.votes} votes</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(6).fill(0))

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)
  }

  const nextAnecdote = () => {
    const randomAnecdote = Math.floor(Math.random() * 6)
    setSelected(randomAnecdote)
  }

  const indexOfMostVoted = points.indexOf(Math.max.apply(null, votes))

  return (
    <div>
      <Display header="Anecdote of the day" text={props.anecdotes[selected]}
        votes={votes[selected]} />
      <Button text="vote" onClick={handleVote} />
      <Button text="next anecdote" onClick={nextAnecdote} />
      <Display header="Anecdote with most votes" text={props.anecdotes[indexOfMostVoted]}
        votes={points[indexOfMostVoted]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)