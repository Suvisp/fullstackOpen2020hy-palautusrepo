const express = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')
require('dotenv').config()

app.use(cors())
app.use(express.json())
//näyttää staattisia JavaScript tiedostoja, CSS tiedostoja ja kuvia yms - Express kirjaston middleware
app.use(express.static('build'))

//GET info
app.get('/info', (req, response) => {
  Person.countDocuments({}).then(total => {
    if (total) {
      console.log(total)
      let timeNow = new Date()
      response.send(`Phonebook has info for ${total} people ${timeNow}`)
    } else {
      response.status(404).end()
    }
  })
})

//GET ALL
app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons.map(person => person.toJSON()))
  })
})

//GET ONE
app.get('/api/persons/:id', (request, response, next) => {
  Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        //jos kannasta ei löydy haettua oliota virheilmoitus -->
        response.status(404).end()
      }
    })
    //jos id ei ole hyväksyttävässä muodossa virheilmoitus -->
    .catch(error => next(error))
})

//POST
app.post('/api/persons', (request, response, next) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'name missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save()
  .then(savedPerson => savedPerson.toJSON())
  .then(savedAndFormattedPerson => {
    response.json(savedAndFormattedPerson)
  })
  .catch(error => next(error))
})

//DELETE
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

//PUT
app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number,
  }

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then(updatedPerson => {
      response.json(updatedPerson)
    })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError' && error.kind == 'ObjectId') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})