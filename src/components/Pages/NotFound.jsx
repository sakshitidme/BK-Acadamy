import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(9);

  // 🔁 Auto redirect after 5 seconds
  useEffect(() => {
    if (countdown === 0) {
      navigate("/");
    }
    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-slate-900 to-indigo-950 text-white px-6 text-center">
      
      {/* 🔥 Animated 404 */}
      <h1 className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 animate-pulse">
        404
      </h1>

      <h2 className="text-3xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="text-gray-300 mt-4 max-w-md">
        The page you are looking for does not exist, was moved,
        or the URL is incorrect.
      </p>

      {/* ⏳ Countdown */}
      <p className="text-sm text-gray-400 mt-2">
        Redirecting to Home in <span className="text-orange-400 font-bold">{countdown}</span> seconds...
      </p>

      {/* 🔗 Actions */}
      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        <Link
          to="/"
          className="px-6 py-3 bg-orange-500 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Go Home
        </Link>

        <Link
          to="/gallery"
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
        >
          Gallery
        </Link>

        <Link
          to="/contact"
          className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg hover:bg-white/20 transition"
        >
          Contact
        </Link>
      </div>

      {/* 🔍 Suggested pages */}
      <div className="mt-12">
        <p className="text-gray-400 mb-3">You might be looking for:</p>
        <ul className="flex gap-6 text-orange-400 font-semibold flex-wrap justify-center">
          <li><Link to="/programs" className="hover:underline">Programs</Link></li>
          <li><Link to="/staff" className="hover:underline">Staff</Link></li>
          <li><Link to="/gallery" className="hover:underline">Gallery</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default NotFound;
