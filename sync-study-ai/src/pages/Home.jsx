import { Link } from "react-router-dom"
import logo from "../assets/logo.png"

const features = [
  {
    icon: "🤖",
    title: "AI Summaries",
    desc: "Upload your notes and get instant AI-generated summaries tailored to your learning style."
  },
  {
    icon: "📝",
    title: "Quiz Generator",
    desc: "Transform any PDF or notes into smart MCQ quizzes to test your knowledge."
  },
  {
    icon: "💬",
    title: "Live Collaboration",
    desc: "Study together in real-time rooms with chat, shared notes, and group discussions."
  },
  {
    icon: "📊",
    title: "Progress Tracking",
    desc: "Monitor your study streaks, completed quizzes, and growth over time."
  },
  {
    icon: "📁",
    title: "Note Uploads",
    desc: "Store and organize all your PDFs and notes in one centralized study space."
  },
  {
    icon: "🏠",
    title: "Study Rooms",
    desc: "Create or join subject-specific rooms and collaborate with fellow students."
  }
]

function Home() {
  return (
    <div className="hero-bg min-h-screen text-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-white/10">
        {/* <img src={logo} alt="StudyNexus" className="h-10" /> */}
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
        <div className="flex items-center gap-4">
          <Link to="/login">
            <button className="px-5 py-2 text-sm text-blue-300 border border-blue-400/40 rounded-lg hover:bg-blue-500/10 transition-all">
              Log In
            </button>
          </Link>
          <Link to="/signup">
            <button className="btn-primary px-5 py-2 text-sm rounded-lg text-white font-medium">
              Get Started
            </button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center px-6 pt-24 pb-20">

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-blue-300 mb-8">
          <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
          AI-Powered Learning Platform
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
          Study Smarter,{" "}
          <span className="gradient-text">Together.</span>
        </h1>

        <p className="text-lg text-white/60 max-w-xl mb-10 leading-relaxed">
          Collaborate in real-time, generate AI summaries from your notes,
          create instant quizzes, and track your learning — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/signup">
            <button className="btn-primary px-8 py-3.5 rounded-xl text-white font-semibold text-base">
              Start Studying Free →
            </button>
          </Link>
          <Link to="/login">
            <button className="px-8 py-3.5 rounded-xl border border-white/20 text-white/80 hover:bg-white/5 transition-all font-medium text-base">
              Already have an account
            </button>
          </Link>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-10 mt-20 text-center">
          {[["10K+", "Students"], ["500+", "Study Rooms"], ["98%", "Satisfaction"], ["24/7", "AI Assist"]].map(([num, label]) => (
            <div key={label}>
              <p className="font-display text-3xl font-bold gradient-text">{num}</p>
              <p className="text-white/40 text-sm mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="px-6 pb-24 max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-3">
          Everything you need to excel
        </h2>
        <p className="text-white/50 text-center mb-12 text-base">
          Built for students who are serious about learning.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div key={f.title} className="feature-card rounded-2xl p-6">
              <div className="text-3xl mb-4">{f.icon}</div>
              <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 pb-24">
        <div className="max-w-3xl mx-auto glass-card rounded-3xl p-12 text-center">
          <h2 className="font-display text-3xl font-bold mb-4">
            Ready to level up your studies?
          </h2>
          <p className="text-white/50 mb-8">
            Join thousands of students already using StudyNexus.
          </p>
          <Link to="/signup">
            <button className="btn-primary px-10 py-4 rounded-xl text-white font-semibold text-base">
              Create Free Account →
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 px-8 py-6 text-center text-white/30 text-sm">
        © 2025 StudyNexus. Built with ❤️ for students.
      </footer>

    </div>
  )
}

export default Home


// import { Link } from "react-router-dom";
// import logo from "/src/assets/logo.png";

// function Home() {
//   return (
//     <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-6 text-center">
//       {/* If you have the logo file, put it in src/assets/ and import it */}
//       <img src={logo} alt="Logo" className="w-24 mb-6" />
      
//       <h1 className="text-6xl font-extrabold mb-4">
//         <span className="text-white">Study</span>
//         <span className="text-blue-500">Nexus</span>
//       </h1>
      
//       <p className="text-2xl font-medium text-gray-400 mb-2">Connect. Study. Succeed.</p>
//       <p className="text-gray-500 mb-10 max-w-sm">The AI-powered platform for seamless collaboration.</p>

//       <div className="flex gap-4">
//         <Link to="/login">
//           <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20">
//             Login
//           </button>
//         </Link>
//         <Link to="/signup">
//           <button className="bg-white hover:bg-gray-200 text-gray-900 px-8 py-3 rounded-xl font-bold transition-all">
//             Sign Up
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Home;

// import { Link } from "react-router-dom"
// function Home() {
//   return (
//     <div className="h-screen bg-black text-white flex flex-col items-center justify-center">

//       <h1 className="text-5xl font-bold">
//         StudySync AI 🚀
//       </h1>

//       <p className="mt-4 text-gray-300">
//         AI Powered Study Platform
//       </p>

//       <div className="mt-6 flex gap-4">

//         <Link to="/login">
//           <button className="bg-blue-500 px-6 py-2 rounded-lg">
//             Login
//           </button>
//         </Link>

//         <Link to="/signup">
//           <button className="bg-green-500 px-6 py-2 rounded-lg">
//             Signup
//           </button>
//         </Link>

//       </div>
//     </div>
//   )
// }

// export default Home