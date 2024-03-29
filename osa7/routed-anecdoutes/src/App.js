import React, { useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import About from './components/About'
import Menu from './components/Menu'
import CreateNew from './components/CreateNew'
import AnecdoteList from './components/AnecdoteList'
import Anecdote from './components/Anecdote'
import Footer from './components/Footer'
import Notification from './components/Notification'


const App = () => {
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: '1'
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: '2'
    }
  ])

  console.log('anecdotes', anecdotes)


  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    const anecdoteWithId = {
      ...anecdote,
      id: (Math.random() * 10000).toFixed(0)
    }
    // anecdote.id = (Math.random() * 10000).toFixed(0)
    console.log('anecdoteID', anecdoteWithId.id)
    // setAnecdotes(anecdotes.concat(anecdoteWithId))
    setAnecdotes(previousAnecdotes => [...previousAnecdotes, anecdoteWithId]);
    console.log('anecdotetobeset', anecdoteWithId)
    // console.log('anecdotesUpdated', previousAnecdotes)
    setNotification(
      `a new anecdote '${anecdote.content}' created`
    )
    setTimeout(() => {
      setNotification('')
    }, 5000)
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  const match = useRouteMatch('/anecdotes/:id')
  const anecdote = match
    ? anecdotes.find(a => a.id === match.params.id)
    : null

  return (
    <div>
      <Menu />
      <Notification notification={notification} />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/createnew">
          <CreateNew addNew={addNew} />
        </Route>
        <Route path="/anecdotes/:id">
          <Anecdote anecdote={anecdote} />
        </Route>
        <Route path="/">
          <AnecdoteList anecdotes={anecdotes} />
        </Route>
      </Switch>
      <Footer />
    </div>
  )
}

export default App;