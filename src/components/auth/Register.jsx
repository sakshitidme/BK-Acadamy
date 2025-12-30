import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-pink-200">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[380px]">

        <h2 className="text-2xl font-bold text-center mb-6">
          Create Account 🚀
        </h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-pink-400 outline-none"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-pink-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-pink-400 outline-none"
          />

          <button className="w-full bg-pink-500 text-white py-2 rounded-lg font-semibold hover:bg-pink-600 transition">
            Register
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already registered?
          <Link to="/login" className="text-pink-500 font-semibold ml-1">
            Login
          </Link>
        </p>

      </div>
    </div>
  )
}
