import { useEffect, useState } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion"
import { Link } from "react-router-dom"

/* ---------------- MARATHON POPUP ---------------- */
function MarathonPopup({ onClose }) {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl p-6"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
        >
          ✕
        </button>

        <h2 className="text-2xl font-extrabold text-center mb-3 text-slate-900">
          🏃‍♂️ Marathon Registration
        </h2>

        <p className="text-center text-gray-700 mb-4">
          Hurry! The marathon is near. Register now.
        </p>

        <motion.a
          href="https://www.runindia.in/home/login"
          target="_blank"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="block w-full text-center py-4 rounded-xl
          bg-gradient-to-r from-orange-500 to-red-600
          text-white font-extrabold text-lg"
        >
          Register for Marathon
        </motion.a>
      </motion.div>
    </div>
  )
}

/* ---------------- 3D HERO VIDEO ---------------- */
function Hero3DVideo() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [12, -12])
  const rotateY = useTransform(x, [-100, 100], [-12, 12])

  function handleMouse(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      style={{ rotateX, rotateY }}
      className="relative h-[420px] rounded-3xl overflow-hidden
      bg-white/10 backdrop-blur-xl
      border border-white/20
      shadow-2xl shadow-black/60"
    >
      <video
        src="/assets/videos/homebannrvideo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h3 className="text-3xl font-extrabold mb-2">
          Train Like a Champion
        </h3>
        <p className="text-slate-200 mb-4">
          Professional coaching • Proven results
        </p>

         
      </div>
    </motion.div>
  )
}

/* ---------------- HOME PAGE ---------------- */
export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    if (!sessionStorage.getItem("marathonPopupShown")) {
      setShowPopup(true)
      sessionStorage.setItem("marathonPopupShown", "true")
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020617] to-[#0F172A] text-white">
      {showPopup && <MarathonPopup onClose={() => setShowPopup(false)} />}

      {/* HERO SECTION */}
      <section className="grid md:grid-cols-2 gap-12 px-8 pt-16 pb-20 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
              BK
            </span>{" "}
            Sports Academy
          </h1>

          <p className="text-xl text-slate-300 mb-8">
            Learn • Compete • Play
          </p>

          <div className="flex gap-5">
            <Link to="/gallery" className="px-7 py-3 bg-red-600 rounded-xl font-bold">
              Explore Games
            </Link>
            <Link to="/register" className="px-7 py-3 border border-white/30 rounded-xl">
              Join Academy
            </Link>
          </div>
        </motion.div>

        {/* RIGHT 3D VIDEO */}
        <Hero3DVideo />
      </section>

      {/* TRAINING CATEGORIES (UNCHANGED) */}
      <section className="p-8">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Training Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "🏆 Athlete Training Programs",
              desc: "Structured physical training",
              video: "/assets/videos/home11.mp4",
            },
            {
              title: "⚡ Performance Development",
              desc: "Speed, agility & drills",
              video: "/assets/videos/home2.mp4",
            },
            {
              title: "🎯 Competitive Mentorship",
              desc: "Selection preparation",
              video: "/assets/videos/home3.mp4",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative rounded-2xl overflow-hidden h-[320px]"
            >
              <video
                src={item.video}
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/70" />
              <div className="relative z-10 h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="text-sm text-slate-200">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
