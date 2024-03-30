const Fly = require('../models/flyteModel')

// const getFlytsBy = async (id,req, res, next) => {
//     try {
//         const flyte = await Fly.findone();
//         res.json(flyte);
//     } catch (error) {
//         next(error);
//     }
// };

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