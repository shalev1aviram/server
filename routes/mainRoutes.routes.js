const router = require("express").Router()
const flyRoutes = require("./flyRoutes.routes")
require("dotenv").config()

router.use("/fly", flyRoutes)

router.use((err, req, res, next) => {
    const errorObj = {};
    if (err.msg) errorObj.msg = err.msg;
    if (err.stack) errorObj.stack = err.stack;
    if (!Object.keys(errorObj).length) {
        return res.status(err.status ?? 500).send("there was an error")
    }
    res.status(err.status ?? 500).json(errorObj)
})


module.exports = router;