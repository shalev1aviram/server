const Fly = require('../models/flightModel')

const newflight = async (req, res, next) => {
    try {
        const { body } = req;
        const fly = new Fly(body);
        const savedFly = await fly.save();
        if (!savedFly) {
            return res.status(400).json({ error: "Fly not saved" });
        }
        res.status(201).json(savedFly);
    } catch (error) {
        next(error);
    }
};

module.exports = newflight