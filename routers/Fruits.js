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

router.post("/", (req, res) => {
    try {
        const newFruit = req.body
        if(!newFruit) res.status(200).send("No Fruit")

        fruits.push(newFruit)
        res.status(200).json(newFruit)
    } catch(err) {
        console.error(err)
    }
})


router.put("/:id", (req, res) => {
    try{

        const fruit = fruits[req.params.id - 1]

        if(!fruit) res.status(200).send("No such fruit")

        const {name, color} = req.body

        if(name){
            fruit.name = name
        }

        if(color){
            fruit.color = color
        }

        res.status(200).json(fruit)

    } catch(error) {
        console.error(error)
    }
})


router.delete("/:id", (req, res) => {
    try{
        const fruit = fruits[req.params.id - 1]

        if(!fruit) res.status(200).send("No such fruit")

        const newFruitsArr = fruits.filter(element => element.name !== fruit.name)
        fruits = newFruitsArr

        res.status(200).json(fruits)


    } catch(error) {
        console.error(error)
        res.status(404).send("COuld not find fruit")
    }
})



module.exports = router