const express = require("express")
require("dotenv").config()
const mainRouter = require("./routes/mainRoutes.routes")
const cors = require("cors")
const mongoConnect = require("./DB/mongoConnect")

const app = express()

// Parse incoming JSON data in requests
app.use(express.json())

// Connect to MongoDB database (asynchronous operation)
mongoConnect(process.env.MONGOURL)
    .then(() => console.log("Connected to Mongo database successfully"))
    .catch((error) => console.error("Error connecting to MongoDB:", error));

// Configure CORS middleware for handling cross-origin requests
app.use(cors({
    credentials: true,
    origin: process.env.URLS,
    methods: ["GET", "PUT", "DELETE", "POST", "PATCH"]
}))

app.use(mainRouter)

// Start the server and listen on specified port
app.listen(
    process.env.PORT,
    () => console.log("server listening on port " + process.env.PORT)
)
