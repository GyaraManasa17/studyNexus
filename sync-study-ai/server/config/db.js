const mongoose = require("mongoose")

const connectDB = async () => {
  try {

    await mongoose.connect("mongodb+srv://gyaramanasa01_db_user:<db_password>@cluster0.qh1uqtx.mongodb.net/?appName=Cluster0")

    console.log("MongoDB Connected 🚀")

  } catch (error) {

    console.log(error)

  }
}

module.exports = connectDB