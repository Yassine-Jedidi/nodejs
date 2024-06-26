const mongoose = require("mongoose");
const { typeDescription } = require("../utils/enum/typeDescription.enum");
// Define a Mongoose schema for the "example" entity
const descriptionSchema = new mongoose.Schema({
  // Specific fields for example entity
  //_id : mongoose.Schema.Types.ObjectId,
  titre: {
    type: String,
  },
  description: { type: String },
  images: {
    type: [String], // Define images as an array of strings
  },
  contenu: { type: String },
  typeDescription: [
    {
      type: String,
      enum: Object.values(typeDescription),
    },
  ],
});
// Create a Mongoose model named "Example" based on the defined schema
const description = mongoose.model("description", descriptionSchema);
// Export the Example model to make it accessible from other modules
module.exports = description;
