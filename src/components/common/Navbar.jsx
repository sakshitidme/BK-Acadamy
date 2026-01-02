import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isLoggedIn] = useState(false);
  const location = useLocation();

  const navLinkClass = (path) =>
    `relative hover:text-sky-500 transition ${
      location.pathname === path ? "text-sky-500 font-semibold" : ""
    } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-sky-500 hover:after:w-full after:transition-all`;

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm sticky top-0 w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2">
          <div className="flex items-center gap-3">
            <span className="bg-white/20 p-2 rounded-full">📍</span>
            <span>Nashik, Ashok Stambha, Gajanan Plaza</span>
          </div>

          <div className="flex items-center gap-6">
            <span>✉️ bkcarrer@gmail.com</span>
            <span>📞 +91 98765 43210</span>

            {!isLoggedIn ? (
              <Link
                to="/login"
                className="bg-white text-sky-600 px-5 py-1.5 rounded-full font-semibold shadow hover:scale-105 transition"
              >
                Login / Register
              </Link>
            ) : (
              <Link
                to="/dashboard"
                className="bg-green-500 text-white px-5 py-1.5 rounded-full font-semibold"
              >
                Dashboard
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <div className="bg-white/80 backdrop-blur-xl shadow-md fixed top-[40px] w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">
          <h1 className="text-3xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
              BK
            </span>{" "}
            <span className="text-gray-900">Sports Academy</span>
          </h1>

          <nav className="flex gap-6 text-[15px] font-medium text-gray-700">
            <Link to="/home" className={navLinkClass("/home")}>Home</Link>
            <Link to="/about" className={navLinkClass("/about")}>About</Link>
            <Link to="/programs" className={navLinkClass("/programs")}>Programs</Link>
            <Link to="/gallery" className={navLinkClass("/gallery")}>Gallery</Link>
            <Link to="/staff" className={navLinkClass("/staff")}>Staff</Link>
            <Link to="/contact" className={navLinkClass("/contact")}>Contact</Link>
            <Link to="/notice-board" className={navLinkClass("/notice-board")}>Notice Board</Link>
            <Link to="/trek" className={navLinkClass("/trek")}>Trek</Link>
            <Link to="/payment" className={navLinkClass("/payment")}>Payment</Link>
            <Link to="/testimonials" className={navLinkClass("/testimonials")}>Testimonials</Link>
          </nav>
        </div>
      </div>
    </>
  );
}
