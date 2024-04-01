const router = require("express").Router()
const flyRoutes = require("./flyRoutes.routes")
require("dotenv").config()

// Any routes defined in flyRoutes.routes will be prefixed with "/fly"
router.use("/fly", flyRoutes)

// error handler
router.use((err, req, res, next) => {
    const errorObj = {};
    if (err.msg) errorObj.msg = err.msg;
    if (err.stack) errorObj.stack = err.stack;

    // **Handle Empty Error Object**
    if (!Object.keys(errorObj).length) {
        return res.status(err.status ?? 500).send("error occurred")
    }
    // **Send Error Response with Details (if available)**
    res.status(err.status ?? 500).json(errorObj)
})


module.exports = router;