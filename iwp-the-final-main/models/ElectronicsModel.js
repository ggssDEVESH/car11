const mongoose = require("mongoose");

const electronicsModelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  priceStr: { type: String, required: true },
  imagePath: { type: String, required: true }
});

module.exports = mongoose.model("electronicsmodel", electronicsModelSchema, "electronicsmodel");
