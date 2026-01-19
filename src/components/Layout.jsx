import { Outlet } from "react-router-dom";
import Navbar from "/src/components/common/Navbar.jsx";
import Footer from "/src/components/common/Footer.jsx";

export default function Layout() {
  return (
    <>
      <Navbar />

      {/* 🔥 OFFSET for FIXED + STICKY NAVBAR */}
      <main className="min-h-screen bg-slate-50">
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
