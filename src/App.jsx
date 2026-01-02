import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Layout
import Layout from "./components/Layout";

// Pages
import Home from "./components/Pages/Home";
import AboutUs from "./components/Pages/AboutUs";
import Contact from "./components/Pages/Contact";
import Testimonials from "./components/Pages/Testimonials";
import Programs from "./components/Pages/Programs";
import Trek from "./components/Pages/Trek";
import PaymentLink from "./components/Pages/PaymentLink";
import Staff from "./components/Pages/Staff";
import Gallery from "./components/Pages/Gallery";
import NoticeBoard from "./components/Pages/NoticeBoard";
import NotFound from "./components/Pages/NotFound";

// Auth
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

// Components
import WhatsAppButton from "./components/WhatsAppButton";
import PopupForm from "./components/PopupForm";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Routes>

        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Auth (No Layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Website with Layout */}
        <Route element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notice-board" element={<NoticeBoard />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/trek" element={<Trek />} />
          <Route path="/payment" element={<PaymentLink />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>

      {showPopup && <PopupForm onClose={() => setShowPopup(false)} />}
      <WhatsAppButton />
    </BrowserRouter>
  );
}

export default App;
