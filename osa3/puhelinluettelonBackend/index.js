const express = require('express')
const app = express()

app.use(express.json())

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

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/info', (req, res) => {
  let numberOfPersons = persons.length
  let timeNow = new Date()
  console.log(persons.length)
  res.send(`<p>Phonebook has info for ${numberOfPersons} people</p><br><p>${timeNow}</p>`)
})



//GET ALL
app.get('/api/persons', (req, res) => {
  res.json(persons)
})

//GET ONE
app.get('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  const person = persons.find(p => p.id === id)

  if (person) {
    response.json(person)
  } else {
    return response.status(400).json({ 
      error: 'person missing' 
    })
  }
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

app.post('/api/persons', (request, response) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ 
      error: 'name missing' 
    })
  } if (!body.number) {
    return response.status(400).json({ 
      error: 'number missing' 
    })
  } if (persons.find(({ name }) => name === body.name)) {
  return response.status(400).json({ 
    error: 'name must be unique' 
  })
}

  const newPerson = {
    name: body.name,
    number: body.number,
    id: generateId(),
  }

  persons = persons.concat(newPerson)

  response.json(newPerson)
})

//DELETE
app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(p => p.id !== id)

  response.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})