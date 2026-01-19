import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import API_URL from "../../config"

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (!res.ok) {
        alert(data.message)
        setLoading(false)
        return
      }

      // ✅ SAVE TOKEN & USER
      localStorage.setItem("token", data.token)
      localStorage.setItem("user", JSON.stringify(data.user))

      alert("Login Successful")

      // ✅ ROLE BASED REDIRECT
      if (data.user.role === "admin") {
        navigate("/admin")
      } else {
        navigate("/") // student / coach
      }

    } catch (error) {
      console.error("Error logging in:", error)
      alert("Server not reachable. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-black relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

      <div className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl w-full max-w-md relative z-10">
        
        <div className="text-center mb-8">
          <h2 className="text-4xl font-oswald font-bold text-white uppercase tracking-wide mb-2">
            Welcome <span className="text-brand-red">Back</span>
          </h2>
          <p className="text-slate-400 font-montserrat text-sm">
            Sign in to continue your journey
          </p>
        </div>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all placeholder:text-slate-600 font-montserrat"
              required
            />
          </div>

          <div>
            <label className="block text-slate-300 text-xs font-bold uppercase tracking-wider mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all placeholder:text-slate-600 font-montserrat"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-brand-red text-white py-4 rounded-lg font-oswald font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login Now"}
          </button>
        </form>

        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm font-montserrat">
            Don't have an account?
            <Link to="/register" className="text-brand-red font-bold hover:text-white transition-colors ml-2 uppercase text-xs tracking-wider">
              Register Here
            </Link>
          </p>
          <div className="mt-6 pt-6 border-t border-white/10">
            <Link to="/" className="text-slate-500 hover:text-white text-xs uppercase tracking-widest transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
