const express = require("express")
const app = express()
const port = 3000
const usersRouter = require("./routers/Users")
const fruitsRouter = require("./routers/Fruits")
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Express Routes
app.use("/users", usersRouter)
app.use("/fruits", fruitsRouter)



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
