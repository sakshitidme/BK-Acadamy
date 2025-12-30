import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 py-16">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500">
          Contact BK Sports Academy
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Train Hard. Serve Proud.  
          Get in touch with us for Army, Police & Competitive Sports Training.
        </p>
      </motion.div>

      {/* Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-orange-400">
            Get In Touch
          </h2>

          <div className="flex items-center gap-4">
            <Phone className="text-orange-500" />
            <span className="text-lg">+91 9XXXXXXXXX</span>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="text-orange-500" />
            <span className="text-lg">bksportsacademy@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-orange-500" />
            <span className="text-lg">
              BK Sports Academy, Maharashtra, India
            </span>
          </div>

          {/* Google Map */}
          <div className="mt-8 rounded-2xl overflow-hidden shadow-xl border border-gray-700">
            <iframe
              title="BK Sports Academy Location"
              src="https://www.google.com/maps?q=Maharashtra%20India&output=embed"
              className="w-full h-64"
              loading="lazy"
            ></iframe>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900 p-8 rounded-2xl shadow-2xl space-y-6"
        >
          <h2 className="text-2xl font-bold text-orange-400">
            Send Us a Message
          </h2>

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-orange-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-orange-500"
          />

          <input
            type="text"
            placeholder="Your Phone Number"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-orange-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-black border border-gray-700 focus:outline-none focus:border-orange-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-black font-bold py-3 rounded-lg transition"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </div>
  );
}
