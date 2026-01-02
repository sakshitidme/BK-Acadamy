import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function EnquiryPopup({ onClose }) {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose?.();
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white text-black rounded-xl shadow-xl w-full max-w-md p-6 relative"
      >
        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-xl text-gray-500"
        >
          ✕
        </button>

        <h2 className="text-xl font-bold text-center mb-4">
          Register Yourself
        </h2>

        {/* Register Form */}
        <form className="space-y-3" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded"
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold"
          >
            Register
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Marathon Button */}
        <a
          href="https://www.runindia.in/home/login?red=b25saW5lL2Jvb2tpbmcvTWpRdw=="
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-bold text-lg"
        >
          🏃‍♂️ Join for the Marathon
        </a>

        <p className="text-xs text-center text-gray-400 mt-2">
          Official RunIndia Registration
        </p>
      </motion.div>
    </div>
  );
}
