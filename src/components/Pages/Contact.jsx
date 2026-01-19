import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactUs() {
  /* ===== STATE ===== */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    success: "",
    error: "",
  });

  /* ===== HANDLE CHANGE ===== */
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ===== POPUP MESSAGE ===== */
  const showMessage = (type, text) => {
    setStatus({
      loading: false,
      success: type === "success" ? text : "",
      error: type === "error" ? text : "",
    });

    setTimeout(() => {
      setStatus({ loading: false, success: "", error: "" });
    }, 3000);
  };

  /* ===== HANDLE SUBMIT ===== */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      showMessage("error", "All fields are required ❌");
      return;
    }

    // 1. Prepare WhatsApp Message
    const waNumber = "918080195558";
    const waMessage = encodeURIComponent(
      `*New Inquiry from Contact Page*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`
    );
    const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;

    try {
      setStatus({ ...status, loading: true });

      // 2. Send to Backend
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        showMessage("error", data.message || "Something went wrong ❌");
        return;
      }

      // 3. Success & Redirect
      showMessage("success", "Message sent! Opening WhatsApp... ✅");
      window.open(waUrl, "_blank");
      
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
       // Fallback to WhatsApp if server fails
       showMessage("success", "Opening WhatsApp... ✅");
       window.open(waUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-6 py-20">

      {/* ================= POPUP ================= */}
      {(status.success || status.error) && (
        <div
          className={`fixed top-6 right-6 z-50 px-6 py-3 rounded-xl font-semibold shadow-xl
          ${status.success ? "bg-green-600" : "bg-red-600"}`}
        >
          {status.success || status.error}
        </div>
      )}

      {/* ================= HEADER ================= */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Contact <span className="text-red-600">BK Sports Academy</span>
        </h1>
        <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
          Train with discipline. Compete with confidence.  
          Reach out to begin your journey.
        </p>
      </motion.div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-14">

        {/* ================= INFO ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          <h2 className="text-3xl font-bold text-red-600">
            Get in Touch
          </h2>

          <div className="space-y-5 text-slate-700">
            <div className="flex items-center gap-4">
              <Phone className="text-red-500" />
              <span className="text-lg font-medium">+91 80801 95558</span>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-red-500" />
              <span className="text-lg font-medium">bksportsacademy@gmail.com</span>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-red-500" />
              <span className="text-lg font-medium">
                BK Sports Academy, Maharashtra, India
              </span>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl">
            <iframe
              title="BK Sports Academy Location"
              src="https://www.google.com/maps?q=Maharashtra%20India&output=embed"
              className="w-full h-64"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* ================= FORM ================= */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white
          p-8 rounded-2xl shadow-2xl space-y-6 border border-slate-200"
        >
          <h2 className="text-2xl font-bold text-red-600">
            Send a Message
          </h2>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900
            focus:outline-none focus:border-red-500 placeholder-slate-400"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900
            focus:outline-none focus:border-red-500 placeholder-slate-400"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, "");
              if (value.length <= 10) {
                setFormData({ ...formData, phone: value });
              }
            }}
            placeholder="Your Phone Number"
            maxLength={10}
            className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900
            focus:outline-none focus:border-red-500 placeholder-slate-400"
          />

          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 rounded-xl bg-slate-50 border border-slate-300 text-slate-900
            focus:outline-none focus:border-red-500 placeholder-slate-400"
          />

          <button
            type="submit"
            disabled={status.loading}
            className="w-full bg-red-600 hover:bg-red-700
            text-white font-bold py-3 rounded-xl transition
            disabled:opacity-60 shadow-lg"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </div>
  );
}
