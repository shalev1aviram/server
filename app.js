const express = require("express")
require("dotenv").config()
const mainRouter = require("./routes/mainRoutes.routes")
const cors = require("cors")
const mongoConnect= require("./DB/mongoConnect")
const Fly = require("./models/flyteModel")

const app = express()

mongoConnect(process.env.MONGOURL)
app.use(express.json())

app.use(cors({
    credentials: true,
    origin: process.env.URLS.split(";"),
    methods: ["GET", "PUT", "DELETE", "POST", "PATCH"]
}))

app.use(mainRouter)

app.listen(
    process.env.PORT,
    () => console.log("server listening on port " + process.env.PORT)
)
