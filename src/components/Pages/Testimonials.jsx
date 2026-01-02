import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Amit Kumar",
    role: "NDA Aspirant",
    image: "https://i.pravatar.cc/150?img=12",
    feedback:
      "BK Career Academy completely transformed my physical and mental strength. The trainers are extremely supportive and focused on results.",
    rating: 5,
  },
  {
    name: "Rahul Singh",
    role: "Army GD Candidate",
    image: "https://i.pravatar.cc/150?img=32",
    feedback:
      "The PSI and endurance training helped me clear my physical tests confidently. Best academy for defence preparation.",
    rating: 5,
  },
  {
    name: "Neha Verma",
    role: "Sports Athlete",
    image: "https://i.pravatar.cc/150?img=47",
    feedback:
      "Professional coaching, disciplined environment, and personal guidance make BK Career Academy truly outstanding.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-[#0F172A] text-white py-16 px-6">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4">
          Student Testimonials
        </h1>
        <p className="text-gray-300 text-lg">
          Hear directly from our students who trained, transformed, and achieved success with BK Career Academy.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl hover:shadow-orange-500/20 transition"
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-5">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full border-2 border-orange-500"
              />
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-sm text-gray-400">{item.role}</p>
              </div>
            </div>

            {/* Feedback */}
            <p className="text-gray-300 leading-relaxed mb-6">“{item.feedback}”</p>

            {/* Rating */}
            <div className="flex gap-1">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-orange-400 fill-orange-400" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mt-20"
      >
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
        <p className="text-gray-400 mb-6">
          Join BK Career Academy and become the next success story.
        </p>
        <a href="/register" className="inline-block px-8 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold transition">
          Join Now
        </a>
      </motion.div>
    </div>
  );
}
