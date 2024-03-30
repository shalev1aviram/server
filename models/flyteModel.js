const {Schema,model} = require("mongoose")


const flySchema = new Schema({
    Altitude:{type: Number, required: true},
    His: {type: Number, required: true},
    ADI: {type: Number, required: true},
},{timestamps:true})

const Fly = model("Fly", flySchema)

module.exports = Fly;