const express = require("express")
const connectDB = require("./config/connectDB")
require("dotenv").config({path : "./config/.env"})
const queries = require("./queries/queries")

// queries.createAndSavePerson()
// queries.createManyPeople()
// queries.search()
// queries.searchByFood()
// queries.searchById()
// queries.updatePerson()
// queries.updatePersonAge()
// queries.deletePerson()
// queries.deleteManyPerson()
// queries.chainSearch()


const app = express()

connectDB()

const PORT = process.env.PORT

app.listen(PORT, (err) =>{
    err ? console.log(err)
        : console.log(`Server running on port ${PORT}`)
})
