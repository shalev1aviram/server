const Fly = require('../models/flightModel')

const newflight = async (req, res, next) => {
    try {
        // Destructure request body for easier access
        const { body } = req;

        // Create a new Fly instance using the request data
        const fly = new Fly(body);

         // Save the new Fly object at the Database and await the result
        const savedFly = await fly.save();

        // **Handle Saving Error**
        if (!savedFly) {
            return res.status(400).json({ error: "Fly not saved" }); // Return error response if saving fails
        }

        // **Handle Successful Save**
        res.status(201).json(savedFly);
    } catch (error) {
        // **Handle Unexpected Errors During Request Processing**
        next(error);
    }
};

module.exports = newflight