const Person = require('../models/personSchema')

//GETTING A PERSON BY NAME
const getThePerson = async (req, res) => {
    try {
        const persons = await Person.findById(req.params.user_id)
        if (!persons) {
            res.status(404).json({ message: 'the person does not exist!' })
        }
        else {
            res.status(200).json(persons)
        }
    }
    catch (err) {
        console.log(err.message)
        res.status(500).json({message:'internal server error, try later!'})
   }
}
//ADDING A NEW PERSON
const addThePerson = async(req, res) => {
    const { name} = req.body
        if (!name) {
            res.status(400).json({ message: 'The name field is mandatory' })
        return
       } 
    
    try {
        //adding a person new to db
        const newPerson = await Person.create({name})
         res.status(201).json(newPerson)
           
    } catch (err) {
                res.status(500).json({ message: "internal server error, try again!" })
            
        }
    }
// CHANGING A PERSONS NAME
const editThePerson = async (req, res) => {
    try{
        const person = await Person.findById(req.params.user_id)
        if (!person) {
            res.status(404).json({ message: 'person not found' })
            
        } 
            const updatedPerson = await Person.findByIdAndUpdate(
                req.params.user_id,
               req.body,
                {new:true}
        )
        if (updatedPerson) {
            res.status(200).json(updatedPerson)
        }
        }
         catch (err) {
        console.log(err.message)
        res.status(500).json({message:'internal server error, try later'})
    }
}
//Deleting a Person by name
const removeAPerson = async (req, res) => {
   
    try {
        const person = await Person.findById(req.params.user_id)
        if (!person) {
            res.status(404).json({ message: "there is no person with such user_id" })
            return
        }
        const removePerson = await Person.findOneAndDelete(req.params.user_id)
        res.status(200).json(removePerson)
    } catch (err) {
        res.status(500).json({message:'internal server error'})
   }
}

module.exports = {getThePerson, addThePerson, editThePerson, removeAPerson}