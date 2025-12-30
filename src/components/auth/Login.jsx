import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-sky-100 to-blue-200">
      <div className="bg-white p-8 rounded-xl shadow-lg w-[380px]">

        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome Back 👋
        </h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-sky-400 outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-sky-400 outline-none"
          />

          <button className="w-full bg-sky-500 text-white py-2 rounded-lg font-semibold hover:bg-sky-600 transition">
            Login
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          New here?
          <Link to="/register" className="text-sky-500 font-semibold ml-1">
            Create account
          </Link>
        </p>

      </div>
    </div>
  )
}
