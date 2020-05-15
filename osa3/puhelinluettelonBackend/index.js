const express = require('express')
const app = express()
const cors = require('cors')
const Person = require('./models/person')
require('dotenv').config() 

app.use(express.json())

app.use(cors())

//näyttää staattisia JavaScript tiedostoja, CSS tiedostoja ja kuvia yms - Express kirjaston middleware
app.use(express.static('build'))

// // app.use(morgan('tiny'))
// app.use(bodyParser.json())

// morgan.token('reqbody', function (req, res) {
//   // console.log(req.body)
//   return JSON.stringify(req.body)
//  })

// app.use(
//   morgan(function (tokens, req, res) {
//     return [
//       tokens.method(req, res),
//       tokens.url(req, res),
//       tokens.status(req, res),
//       tokens.res(req, res, 'content-length'), '-',
//       tokens['response-time'](req, res), 'ms',
//       tokens.reqbody(req, res),
//     ].join(' ')
//   })
// )

// app.use(express.json())

let persons = [
      {
        "name": "Arto Hellas",
        "number": "040-1234567",
        "id": 1
      },
      {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
      },
      {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
      },
      {
        "name": "Mary Poppendieck",
        "number": "050-1234567",
        "id": 4
      }
    ]

// app.get('/info', (req, res) => {
//   let numberOfPersons = persons.length
//   let timeNow = new Date()
//   console.log(persons.length)
//   res.send(`<p>Phonebook has info for ${numberOfPersons} people</p><br><p>${timeNow}</p>`)
// })

//GET ALL
// app.get('/api/persons', (req, res) => {
//   res.json(persons)
// })
app.get('/api/persons', (request, response) => {
  Person.find({}).then(persons => {
    response.json(persons.map(person => person.toJSON()))
  })
})

//GET ONE
// app.get('/api/persons/:id', (request, response) => {
//   const id = Number(request.params.id)
//   const person = persons.find(p => p.id === id)

//   if (person) {
//     response.json(person)
//   } else {
//     return response.status(400).json({ 
//       error: 'person missing' 
//     })
//   }
// })
app.get('/api/persons/:id', (request, response) => {
  Person.findById(request.params.id).then(person => {
    response.json(person.toJSON())
  })
})

//POST
// const generateId = () => {
//   const maxId = persons.length > 0
//     ? Math.max(...persons.map(p => p.id))
//     : 0
//   return maxId + 1
// }
//Math ramdomilla id:
const generateId = () => {
  const id = Math.floor(Math.random() * 100)
  return id
}

// app.post('/api/persons', (request, response) => {
//   const body = request.body

//   if (!body.name) {
//     return response.status(400).json({ 
//       error: 'name missing' 
//     })
//   } if (!body.number) {
//     return response.status(400).json({ 
//       error: 'number missing' 
//     })
//   } if (persons.find(({ name }) => name === body.name)) {
//   return response.status(400).json({ 
//     error: 'name must be unique' 
//   })
// }

//   const newPerson = {
//     name: body.name,
//     number: body.number,
//     id: generateId(),
//   }

//   persons = persons.concat(newPerson)

//   response.json(newPerson)
// })
app.post('/api/persons', (request, response) => {
  const body = request.body

  if (body.name === undefined) {
    return response.status(400).json({ error: 'name missing' })
  }

  const person = new Person({
    name: body.name,
    number: body.number
  })

  person.save().then(savedPerson => {
    response.json(savedPerson.toJSON())
  })
})

//DELETE
// app.delete('/api/persons/:id', (request, response) => {
//   const id = Number(request.params.id)
//   persons = persons.filter(p => p.id !== id)

//   response.status(204).end()
// })
app.delete('/api/persons/:id', (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then(result => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})