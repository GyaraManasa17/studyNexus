const express = require("express")

const app = express()

app.use(express.json())

app.post("/login", (req, res) => {

  console.log(req.body)

  res.json({
    message: "Login route working"
  })
})

app.listen(5000, () => {
  console.log("Server running")
})

// const express = require("express")

// const app = express()

// app.get("/", (req, res) => {
//   res.send("Server is running 🚀")
// })

// app.listen(5000, () => {
//   console.log("Server started on port 5000")
// })

// const express = require("express")

// const app = express()

// app.use(express.json())

// app.get("/", (req, res) => {
//   res.send("Home Route")
// })

// app.get("/about", (req, res) => {
//   res.send("About Route")
// })

// app.get("/contact", (req, res) => {
//   res.send("Contact Route")
// })

// app.get("/user", (req, res) => {
//   res.json({
//     name: "Manasa",
//     role: "Student"
//   })
// })
// app.post("/login", (req, res) => {

//   console.log(req.body)

//   res.json({
//     message: "Login route working"
//   })
// })

// app.listen(5000, () => {
//   console.log("Server running")
// })