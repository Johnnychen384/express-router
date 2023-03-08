const express = require("express")
const router = express.Router()

// List of Fruits
let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.get("/", (req, res) => {
    try {
        res.json(fruits)
    } catch(err) {
        console.error(err)
    }
})

router.get("/:id", (req, res) => {
    try {
        const target = fruits[req.params.id - 1]
        res.json(target)
    } catch(err) {
        console.error(err)
    }
})



module.exports = router