import React from "react";

const trainingPrograms = [
  {
    title: "PSI Training",
    description:
      "Complete physical preparation with running drills, endurance building and exam-oriented practice.",
    video:"/assets/videos/aboutPage/armyabout.mp4", // Replace with your video path
    color: "text-sky-400",
  },
  {
    title: "Police Bharti",
    description:
      "Structured daily routines focusing on stamina, speed and physical tests.",
    video: "/assets/videos/aboutPage/policeabout.mp4",
    color: "text-green-400",
  },
  {
    title: "Army Training",
    description: "800 Meter Run, 1600 Meter Run, 100 Meter Shot Out",
    video:"/assets/videos/aboutPage/army1about.mp4",
    color: "text-red-400",
    isList: true,
    list: ["800 Meter Run", "1600 Meter Run", "100 Meter Shot Out"],
  },
];

const athleticsPrograms = [
  {
    title: "Running",
    description: "Professional coaching to improve performance and technique.",
    video:"/assets/videos/aboutPage/runningabout.mp4",
  },
  {
    title: "Jumping",
    description: "Professional coaching to improve performance and technique.",
    video:"/assets/videos/aboutPage/about2.mp4",
  },
  {
    title: "Throwing",
    description: "Professional coaching to improve performance and technique.",
    video:"/assets/videos/aboutPage/about3.mp4",
  },
];

const whyChooseUs = [
  {
    title: "Experienced Trainers",
    image:"/assets/images/aboutpage/aboutimg1.jpg", // Replace with your image path
  },
  {
    title: "Result-Oriented Programs",
    image:"/assets/images/aboutpage/aboutimg2.jpg",
  },
  {
    title: "Personal Guidance",
    image: "/assets/images/aboutpage/aboutimg3.jpg",
  },
  {
    title: "Proven Track Record",
    image: "/assets/images/aboutpage/aboutimg4.jpg",
  },
];

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
          <h2 className="text-4xl font-bold mb-6 text-sky-400">Who We Are</h2>
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
          {trainingPrograms.map((program, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition">
              
              {/* Video Background */}
              <video
                src={program.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
              />

              {/* Overlay Content */}
              <div className="relative z-10 bg-black/30 p-6 rounded-2xl flex flex-col justify-center h-full">
                <h3 className={`text-2xl font-bold mb-3 ${program.color}`}>{program.title}</h3>
                {program.isList ? (
                  <ul className="list-disc list-inside text-slate-300 space-y-1">
                    {program.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-slate-300">{program.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ATHLETICS ================= */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">Athletics Training</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {athleticsPrograms.map((item, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition">

              {/* Video Background */}
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
              />

              {/* Overlay Content */}
              <div className="relative z-10 bg-black/30 p-8 flex flex-col justify-center h-full text-center rounded-2xl">
                <h3 className="text-3xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </div>
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
          {whyChooseUs.map((item, i) => (
            <div key={i} className="relative rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition">

              {/* Image Background */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500"
              />

              {/* Overlay Content */}
              <div className="relative z-10 bg-black/30 p-6 flex flex-col justify-center h-full text-center rounded-2xl">
                <p className="text-lg font-semibold text-white">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
