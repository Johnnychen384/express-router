const express = require("express")
const router = express.Router()

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


router.post("/", (req, res) => {
    try{
        const newUser = req.body
        users.push(newUser)

        res.json(newUser)

    } catch(error) {
        console.error(error)
    }
})



module.exports = router