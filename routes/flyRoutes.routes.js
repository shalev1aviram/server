const router = require("express").Router()
const newflight = require("../controllers/flyController")

router.post("/newflight",newflight)


module.exports=router;