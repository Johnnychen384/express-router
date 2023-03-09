const express = require("express")
const router = express.Router()
const {check, validationResult} = require("express-validator")


// List of Users
let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]


router.get("/", (req, res) => {
    try{
        res.json(users)
    } catch(error) {
        console.error(error)
    }
})


router.get("/:id", (req, res) => {
    try{
        const target = users[req.params.id - 1]
        res.json(target)


    } catch(error) {
        console.error(error)
    }
})


router.post("/", [check("name").not().isEmpty().trim()], (req, res) => {
    try{
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }

        const newUser = req.body
        users.push(newUser)

        res.json(users)

    } catch(error) {
        console.error(error)
    }
})


router.put("/:id", (req, res) => {
    try{

        const user = users[req.params.id - 1]

        if(!user) res.status(200).send("No such user")

        const {name, age} = req.body

        if(name){
            user.name = name
        }

        if(age){
            user.age = age
        }

        res.status(200).json(user)

    } catch(error) {
        console.error(error)
    }
})


router.delete("/:id", (req, res) => {
    try{
        const user = users[req.params.id - 1]

        if(!user) res.status(200).send("No such user")

        const newUserArr = users.filter(element => element.name !== user.name)
        users = newUserArr

        res.status(200).json(users)


    } catch(error) {
        console.error(error)
        res.status(404).send("COuld not find user")
    }
})



module.exports = router