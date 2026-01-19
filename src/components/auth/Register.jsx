import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom" // ✅ import
import API_URL from "../../config"

export default function Register({ onClose }) {
  const navigate = useNavigate() // ✅ get navigate function
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleClose = () => {
    if (onClose) onClose()
    else navigate("/")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.message || "Registration failed")
        setLoading(false)
        return
      }

      setSuccess(true)
      setLoading(false)

      // ✅ Hide form after 2 seconds and redirect to home
      setTimeout(() => {
        if (onClose) onClose()
        navigate("/")       // redirect to home page
      }, 2000)
    } catch (err) {
      console.error(err)
      setError("Server not reachable")
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-black relative overflow-hidden px-4">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-red/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 backdrop-blur-lg border border-white/10 text-white rounded-2xl shadow-2xl w-full max-w-md p-8 md:p-10 relative z-10"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
        >
          ✕
        </button>

        {!success ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-oswald font-bold text-white uppercase tracking-wide mb-2">
                Join The <span className="text-brand-red">Squad</span>
              </h2>
              <p className="text-slate-400 font-montserrat text-sm w-full mx-auto">
                Begin your journey to excellence.
              </p>
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded text-sm text-center mb-6">
                {error}
              </div>
            )}

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                 <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all placeholder:text-slate-600 font-montserrat"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                   className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all placeholder:text-slate-600 font-montserrat"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                   className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all placeholder:text-slate-600 font-montserrat"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Create Password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-black/40 border border-white/10 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all placeholder:text-slate-600 font-montserrat"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-brand-red text-white py-4 rounded-lg font-oswald font-bold uppercase tracking-widest hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] disabled:opacity-60 disabled:cursor-not-allowed mt-4"
              >
                {loading ? "Creating Account..." : "Register Now"}
              </button>
            </form>
            
            <div className="text-center mt-6">
               <p className="text-slate-400 text-sm font-montserrat">
                 Already have an account? 
                 <button onClick={() => navigate('/login')} className="text-brand-red font-bold ml-2 hover:text-white transition-colors uppercase text-xs tracking-wider">
                   Login Here
                 </button>
               </p>
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-green-500">
               <div className="text-green-500 text-3xl">✔</div>
            </div>
            <h3 className="text-2xl font-oswald font-bold text-white uppercase mb-2">Welcome Aboard!</h3>
            <p className="text-slate-400 font-montserrat">
              Your account has been created. Redirecting...
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
