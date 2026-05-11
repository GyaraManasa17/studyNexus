import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
// app.use(express.json())

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

// import Navbar from "./components/Navbar"

// function App() {  //this is a react component 
//   return ( // everything that should appear on the screen is in return
//     <div>
//       <Navbar />

//       <h1>Welcome</h1>
//     </div>

//   )
// }
// export default App //Makes component available to other files