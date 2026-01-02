import { useState } from "react";

export default function PopupForm({ onClose }) {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [status, setStatus] = useState("");

  // handle input change
  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // handle form submit
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:7777/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
          // message backend me abhi nahi hai, isliye nahi bhej rahe
        })
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus(data.message || "Something went wrong");
        return;
      }

      setStatus("Enquiry submitted successfully ✅");

      // clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      setStatus("Server not responding ❌");
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      
      <div className="bg-white w-[90%] max-w-md rounded-lg p-6 relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">
          Enquiry Form
        </h2>

        {/* 🔥 FORM CONNECTED */}
        <form className="space-y-4" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
            required
          />

          <input
            type="text"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border px-4 py-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
          >
            Submit Form
          </button>

          {/* STATUS MESSAGE */}
          {status && (
            <p className="text-center text-sm mt-2">{status}</p>
          )}

        </form>

      </div>
    </div>
  );
}
