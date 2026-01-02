import { Outlet } from "react-router-dom";
import Navbar from "/src/components/common/Navbar.jsx";
import Footer from "/src/components/common/Footer.jsx";

export default function Layout() {
  return (
    <>
      <Navbar />

      {/* 🔥 OFFSET for FIXED + STICKY NAVBAR */}
      <main className="min-h-screen pt-[120px] bg-gradient-to-br from-[#020617] via-[#020617] to-[#0F172A]">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
