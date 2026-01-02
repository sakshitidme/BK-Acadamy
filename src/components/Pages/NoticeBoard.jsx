import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NoticeBoard() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    fee: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let fee = formData.fee;

    if (name === "category") {
      if (value === "3km") fee = "200";
      if (value === "5km") fee = "500";
      if (value === "10km") fee = "1000";
    }

    setFormData({ ...formData, [name]: value, fee });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Later we will send this data to backend
    console.log("Marathon Registration:", formData);

    // Redirect to payment page
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-[#0F172A] text-white p-10">
      <h1 className="text-4xl font-bold text-orange-500 mb-8 text-center">
        Notice Board
      </h1>

      {/* ================= NOTICE CARD ================= */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-3xl mx-auto shadow-lg mb-10">
        <h2 className="text-2xl font-semibold text-orange-400 mb-3">
          🏃 Nashik MVP Marathon 2026
        </h2>

        <p className="text-gray-300 mb-2">📅 <strong>Date:</strong> Sunday, 22/02/2026</p>
        <p className="text-gray-300 mb-2">🕔 <strong>Time:</strong> 5:00 AM – 10:00 AM</p>
        <p className="text-gray-300 mb-2">📍 <strong>Location:</strong> Nashik MVP Marathon Chowk</p>

        <ul className="list-disc list-inside text-gray-300 mt-3">
          <li>3km – ₹200</li>
          <li>5km – ₹500</li>
          <li>10km – ₹1000</li>
        </ul>

        <p className="text-gray-300 mt-3">
          🎖️ Attractive prizes for winners in all categories.
        </p>
      </div>

      {/* ================= REGISTRATION FORM ================= */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 max-w-xl mx-auto shadow-lg">
        <h3 className="text-2xl font-semibold text-sky-400 mb-6 text-center">
          Join Marathon
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Student Full Name"
            required
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none"
            onChange={handleChange}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Mobile Number"
            required
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none"
            onChange={handleChange}
          />

          <select
            name="category"
            required
            className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 focus:outline-none"
            onChange={handleChange}
          >
            <option value="">Select Distance</option>
            <option value="3km">3 KM</option>
            <option value="5km">5 KM</option>
            <option value="10km">10 KM</option>
          </select>

          {formData.fee && (
            <p className="text-green-400 font-semibold text-center">
              Entry Fee: ₹{formData.fee}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-sky-500 to-indigo-600 py-3 rounded-full font-semibold text-white hover:scale-105 transition"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
}
