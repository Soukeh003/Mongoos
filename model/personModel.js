const mongoose = require("mongoose")
const {Schema, model} = mongoose()

const PersonSchema = new Schema({
    name: {type: String, require: true},
    age:Number,
    favoriteFoods: [String]
})

const Person = model("Person", PersonSchema)

module.exports = Person