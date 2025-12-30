import React from "react"

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[420px] flex items-center justify-center text-center px-6">
        <img
          src="\assets\images\bannerAboutPage.png"
          alt="BK Career Academy"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500">
            About BK Career Academy
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
            Building discipline, strength, and confidence for future Army, Police & Athletic champions.
          </p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6 text-sky-400">
            Who We Are
          </h2>
          <p className="text-slate-300 leading-relaxed text-lg">
            BK Career Academy is a professional physical training institute dedicated
            to preparing candidates for Army, Police, PSI and competitive physical
            examinations. Our training methodology focuses on discipline, endurance,
            speed, strength and real-time performance improvement.
          </p>
        </div>

        <img
          src="\assets\images\imgAbout.png"
          className="rounded-2xl shadow-2xl hover:scale-105 transition"
          alt="Training"
        />
      </section>

      {/* ================= TRAINING PROGRAMS ================= */}
      <section className="bg-white/5 py-20">
        <h2 className="text-4xl font-bold text-center mb-14 text-yellow-400">
          Our Training Programs
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">

          {/* PSI */}
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3 text-sky-400">PSI Training</h3>
            <p className="text-slate-300">
              Complete physical preparation with running drills, endurance building
              and exam-oriented practice.
            </p>
          </div>

          {/* Police */}
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3 text-green-400">Police Bharti</h3>
            <p className="text-slate-300">
              Structured daily routines focusing on stamina, speed and physical tests.
            </p>
          </div>

          {/* Army */}
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl shadow-xl hover:scale-105 transition">
            <h3 className="text-2xl font-bold mb-3 text-red-400">Army Training</h3>
            <ul className="list-disc list-inside text-slate-300 space-y-1">
              <li>800 Meter Run</li>
              <li>1600 Meter Run</li>
              <li>100 Meter Shot Out</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= ATHLETICS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">
          Athletics Training
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Running", "Jumping", "Throwing"].map((item, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 text-center shadow-xl hover:scale-105 transition"
            >
              <h3 className="text-3xl font-bold mb-2">{item}</h3>
              <p className="text-slate-300">
                Professional coaching to improve performance and technique.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-black/40 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-400">
          Why Choose BK Career Academy?
        </h2>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-6 text-center">
          {[
            "Experienced Trainers",
            "Result-Oriented Programs",
            "Personal Guidance",
            "Proven Track Record",
          ].map((reason, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-xl p-6 shadow-lg hover:scale-105 transition"
            >
              <p className="text-lg font-semibold">{reason}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}

export default AboutUs
