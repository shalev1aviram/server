const { Schema, model } = require("mongoose"); // Import Mongoose functionalities

// Define Fly Schema
const flySchema = new Schema({
  Altitude: { type: Number, required: true }, // Altitude property
  His: { type: Number, required: true },       // His property
  ADI: { type: Number, required: true },       // ADI property
}, { timestamps: true });                       // Adding timestamps for creation and update

// Create Fly Model
const Fly = model("Fly", flySchema); // Creates a Mongoose model named "Fly" based on the schema

module.exports = Fly; // Export the Fly model for use in other parts of your application
