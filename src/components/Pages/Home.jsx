import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-[#0F172A] text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="grid md:grid-cols-2 gap-6 px-8 pt-8 pb-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
              BK
            </span>{" "}
            <span className="text-white">Sports Academy</span>
          </h1>

          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            Learn • Compete • Play
            <br />
            A next-generation platform for educational and competitive training.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Link
              to="/gallery"
              className="rounded-xl px-6 py-3 bg-red-600 hover:bg-red-700 transition text-white font-semibold shadow-lg"
            >
              Explore Games
            </Link>

            <Link
              to="/register"
              className="rounded-xl px-6 py-3 border border-slate-400 text-white font-semibold hover:bg-white/10 transition"
            >
              Join Academy
            </Link>
          </div>
        </motion.div>

        {/* Hero Image */}
        <div className="h-[400px] rounded-2xl overflow-hidden shadow-2xl relative">
          <img
            src="/assets/images/homebanner.png"
            alt="BK Career Academy Training"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/65 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Train Hard. Serve Proud.
            </h2>

            <p className="text-lg md:text-xl text-slate-300 max-w-2xl">
              Physical & Athletics Training for Army, Police, PSI and Competitive Selections
            </p>
          </div>
        </div>
      </section>

      {/* ================= TRAINING CATEGORIES ================= */}
      <section className="p-8">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Training Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "🏆 Athlete Training Programs",
              desc: "Structured physical training focusing on strength, endurance, stamina, and discipline.",
              video: "/assets/videos/home11.mp4",
            },
            {
              title: "⚡ Performance & Skill Development",
              desc: "Advanced drills, agility workouts, speed training, and technique improvement.",
              video: "/assets/videos/home2.mp4",
            },
            {
              title: "🎯 Competitive Pathway & Mentorship",
              desc: "Tournament exposure, selection preparation, and professional mentoring.",
              video: "/assets/videos/home3.mp4",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden h-[320px] group shadow-2xl"
            >
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition-all duration-500" />

              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-200 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="p-12 text-center bg-[#020617] border-t border-white/10">
        <h2 className="text-4xl font-bold mb-4 text-white">
          Ready to Play & Learn?
        </h2>

        <p className="text-lg mb-6 text-slate-400">
          Join BK Career Academy and experience education like a mission.
        </p>

        <Link
          to="/register"
          className="inline-block rounded-xl px-8 py-4 bg-slate-800 hover:bg-slate-700 transition text-white text-lg font-semibold border border-white/10"
        >
          Get Started
        </Link>
      </section>

    </div>
  )
}
