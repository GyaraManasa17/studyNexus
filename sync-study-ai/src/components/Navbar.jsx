// function Navbar() {
//   return (
//     <nav>
//       <h2>StudySync AI</h2>
//     </nav>
//   )
// }

// export default Navbar

import { useState } from "react"

function Navbar() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  )
}

export default Navbar