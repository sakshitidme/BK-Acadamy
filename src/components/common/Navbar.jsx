import { useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import useAuth from "../../hooks/useAuth";

export default function Navbar() {
  const { user } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinkClass = useCallback(
    (path) =>
      `relative px-1 transition-colors duration-300
       ${
         location.pathname === path
           ? "text-red-600 font-semibold after:w-full"
           : "text-slate-700 hover:text-red-600"
       }
       after:content-[''] after:absolute after:left-0 after:-bottom-1
       after:h-[2px] after:bg-red-600 after:w-0 after:transition-all`,
    [location.pathname]
  );

  const navItems = [
    { path: "/home", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/programs", label: "Programs" },
    { path: "/gallery", label: "Gallery" },
    { path: "/staff", label: "Staff" },
    { path: "/notice-board", label: "Notice Board" },
    { path: "/trek", label: "Trek" },
    { path: "/payment", label: "Payment" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="bg-brand-black text-white text-sm fixed top-0 w-full z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-2 font-montserrat">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition">
               <span className="text-brand-red">📍</span>
               <span className="text-xs md:text-sm font-semibold tracking-wide">Nashik, Ashok Stambh</span>
            </div>
            <div className="hidden md:flex items-center gap-2 opacity-80 hover:opacity-100 transition">
               <span className="text-brand-red">📞</span>
               <span className="text-xs md:text-sm font-semibold tracking-wide">8080195558</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Link
              to="/login"
              className="bg-brand-red text-white px-5 py-1 text-xs font-bold uppercase tracking-wider
              hover:bg-white hover:text-brand-red transition-all clip-path-slant"
            >
              Login / Register
            </Link>
          </div>
        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg fixed top-[40px] w-full z-40 border-b-4 border-brand-red">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <Link to="/home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-brand-red text-white flex items-center justify-center font-oswald font-bold text-xl skew-x-[-10deg] border-2 border-brand-red transition-colors">
              BK
            </div>
            <div className="flex flex-col">
              <span className="font-oswald font-bold text-2xl uppercase leading-none text-brand-black tracking-tighter">
                Sports Academy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-oswald font-bold uppercase tracking-wider text-sm py-1 transition-all duration-300
                  ${location.pathname === item.path ? "text-brand-red" : "text-brand-black hover:text-brand-red"}
                  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[3px] after:bg-brand-red 
                  ${location.pathname === item.path ? "after:w-full" : "after:w-0 hover:after:w-full"}
                  after:transition-all after:duration-300
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-brand-black hover:text-brand-red transition-colors"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-brand-black border-t border-white/10 text-white absolute w-full left-0 top-full shadow-2xl">
            <nav className="flex flex-col px-6 py-6 gap-4 font-oswald font-bold uppercase tracking-widest text-lg">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={`py-2 border-b border-white/10 hover:text-brand-red hover:pl-2 transition-all
                    ${location.pathname === item.path ? "text-brand-red pl-2 border-brand-red" : "text-slate-300"}`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Spacer */}
      <div className="h-[120px]" />
    </>
  );
}
