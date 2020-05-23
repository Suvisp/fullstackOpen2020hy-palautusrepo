const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]
const nameN = process.argv[3]
const numberN = process.argv[4]

//salasanan saa komentoriviparametrista --> eli komennolla node mongo.js salasana
const url =
    // `mongodb+srv://fullstack:${password}@cluster0-ostce.mongodb.net/test?retryWrites=true`
    `mongodb+srv://Suvisp:${password}@cluster0-nvzth.mongodb.net/people-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
})

const Person = mongoose.model('Person', personSchema)

//tallentaa uuden datan
const person = new Person({
    name: nameN,
    number: numberN
})

//Kun syöttää neljä komentoriviparametriä node mongo.js salasana nimi tai numero --> herjaa että tulee olla sekä nimi että numero
if (process.argv.length === 4) {
    console.log('give password, name and number as argument')
    process.exit(1)
}

//Kun syöttää yli neljä komentoriviparametriä "node mongo.js salasana nimi numero" --> tallentaa uuden henkilön tiedot puhelinluetteloon
if (process.argv.length > 4) {
    // person.save().then(response => {
    person.save().then(() => {
        console.log(`added ${nameN} number ${numberN} to phonebook`)
        mongoose.connection.close()
    })
}

//Kun syöttää kolme komentoriviparametriä node mongo.js salasana --> etsii ja näyttää konsolissa tallennetun datan
if (process.argv.length === 3) {
    console.log('phonebook:')
    Person.find({}).then(result => {
        result.forEach(p => {
            console.log(`${p.name} ${p.number}`)
        })
        mongoose.connection.close()
    })
}