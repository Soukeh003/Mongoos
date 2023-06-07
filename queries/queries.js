const Person = require("../model/personModel");

//Create and save a record of a model:
let Person = new Person({
  name: "Ahmed",
  age: 20,
  favoriteFoods: ["Pizza"],
});
const createAndSavePerson = async () => {
  try {
    await Person.save();
  } catch (error) {
    console.log(error)
  }
};

// Create many records with model.create()
let arrayOfPeople = [
  {
    name: "Salim",
    age: 15,
    favoriteFoods: ["Makloub"],
  },
  {
    name:"Zeineb",
    age:25,
    favoriteFoods:["Makrouna"]
  }
];

const createManyPeople = async () => {
    try {
      await Person.create(arrayOfPeople)
    } catch (error) {
      console.log(error)
    }
  }

//Use model.find() to search your Database
const search = async (searchByName) => {
    try{
        const data =  await Person.find({name: `${searchByName}`})
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

//Use model.findOne() to return a single matching document from your Database
const searchByFood = async (food) => {
    try{
        const data =  await Person.find({favoriteFoods : {$all:[`${food}`]}})
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

//Use model.findById() to return a single matching document from your Database
const searchById = async (id) => {
    try{
        const data =  await Person.findById(`${id}`)
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

// Perform classic updates by running Find, Edit, then Save
const updatePerson = async (personId) => {
    try{
        const data =  await Person.findById(`${id}`)
        data.favoriteFoods.push("hamburger")
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

// Perform new updates on documents using model.findOneAndUpdate()
const updatePersonAge = async (personName) => {
    try{
        const data =  await Person.findOneAndUpdate({name:`${personName}`}, {age:20}, {new:true})
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
// Delete one document using model.findByIdAndRemove
const deletePerson = async (id) => {
    try{
        const data =  await Person.findByIdAndDelete(`${id}`)
        console.log(data)
    }catch(error){
        console.log(error)
    }
}

// MongoDB and Mongoose - Delete Many Documents with model.remove()
const deleteManyPerson = async (personName) => {
    try{
        const data =  await Person.findByIdAndDelete(`${personName}`)
        console.log(data)
    }catch(error){
        console.log(error)
    }
}
// Chain Search query helpers to narrow search results
const chainSearch = async () => {
    try{
        const data =  await Person.find({favoriteFoods: {$all: ["Pizza"]}})
            .sort({name:'asc'})
            .limit(2)
            .select("-age")
            .exec()
        console.log(data)
    }catch(error){
        console.log(error)
    }
}



module.exports = {
  createAndSavePerson,
  createManyPeople,
  search,
  searchByFood,
  searchById,
  updatePerson,
  updatePersonAge,
  deletePerson,
  deleteManyPerson,
  chainSearch,
};
