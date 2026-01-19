import { useState } from "react";
import API_URL from "../config";

export default function PopupForm({ onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "phone") {
      if (!/^\d*$/.test(value)) return;
      if (value.length > 10) return;
    }

    setFormData({ ...formData, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch(`${API_URL}/api/enquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.message || "Something went wrong ❌");
        return;
      }

      setStatus("Enquiry submitted successfully ✅");

      // mark as shown (SESSION STORAGE – SAME AS HOME)
      sessionStorage.setItem("enquiryPopupShown", "true");

      setTimeout(onClose, 1500);

    } catch {
      setStatus("Server not responding ❌");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
      <div className="bg-white w-[90%] max-w-md rounded-lg p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center text-black">
          Enquiry Form
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input name="name" required placeholder="Name"
            value={formData.name} onChange={handleChange}
            className="w-full border px-4 py-2 rounded" />

          <input name="email" type="email" required placeholder="Email"
            value={formData.email} onChange={handleChange}
            className="w-full border px-4 py-2 rounded" />

          <input name="phone" required placeholder="Phone (10 digits)"
            value={formData.phone} onChange={handleChange}
            className="w-full border px-4 py-2 rounded" />

          <input name="message" placeholder="Message"
            value={formData.message} onChange={handleChange}
            className="w-full border px-4 py-2 rounded" />

          <button className="w-full bg-sky-500 text-white py-2 rounded">
            Submit
          </button>

          {status && <p className="text-center text-sm">{status}</p>}
        </form>
      </div>
    </div>
  );
}
