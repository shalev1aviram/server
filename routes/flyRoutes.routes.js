const router = require("express").Router()
const newflight = require("../controllers/flyController")

// Define a POST route for "/newflight"
router.post("/newflight", newflight)


module.exports = router; // Export the router for use in the main server file