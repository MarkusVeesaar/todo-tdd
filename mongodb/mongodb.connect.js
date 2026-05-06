const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://markus:markusqwerty@cluster0.ivshsyy.mongodb.net/"
    );
    console.log("Connected to MongoDB successfully!");
  } catch (err) {
    console.error("Error connecting to mongodb");
    console.error(err);
  }
}

module.exports = { connect };