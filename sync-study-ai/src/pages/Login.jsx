import { useState } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login:", { email, password })
    // Backend connection comes later
  }

  return (
    <div className="hero-bg min-h-screen flex flex-col text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        {/* <Link to="/">
          <img src={logo} alt="StudyNexus" className="h-10" />
        </Link> */}
        <Link to="/" className="flex items-center gap-3">
            <img 
                src={logo} 
                alt="StudyNexus" 
                className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-500/40" 
            />
            <span className="font-display text-xl font-bold gradient-text">
                StudyNexus
            </span>
        </Link>
        <p className="text-white/40 text-sm">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-medium">
            Sign up
          </Link>
        </p>
      </nav>

      {/* Login Form */}
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-md">

          <div className="text-center mb-10">
            <h1 className="font-display text-4xl font-bold mb-3">Welcome back</h1>
            <p className="text-white/50">Log in to your StudyNexus account</p>
          </div>

          <div className="glass-card rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label className="block text-sm text-white/60 mb-2 font-medium">
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field w-full px-4 py-3 rounded-xl text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2 font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field w-full px-4 py-3 rounded-xl text-sm pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 text-xs"
                  >
                    {showPassword ? "HIDE" : "SHOW"}
                  </button>
                </div>
                <div className="text-right mt-2">
                  <a href="#" className="text-xs text-blue-400 hover:text-blue-300">
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full py-3.5 rounded-xl font-semibold text-white text-sm mt-2"
              >
                Log In →
              </button>

            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-white/30 text-xs">or continue with</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Google button placeholder */}
            <button className="w-full py-3 rounded-xl border border-white/10 text-white/60 text-sm hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <span>🌐</span> Google
            </button>
          </div>

          <p className="text-center text-white/30 text-xs mt-6">
            By continuing, you agree to our{" "}
            <a href="#" className="text-blue-400/70 hover:text-blue-400">Terms</a> and{" "}
            <a href="#" className="text-blue-400/70 hover:text-blue-400">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login