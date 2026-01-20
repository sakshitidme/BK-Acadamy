import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Target, Users, Trophy } from "lucide-react";
import Shimmer from "../Shimmer";

const trainingPrograms = [
  {
    title: "PSI Training",
    description: "Complete physical preparation with running drills, endurance building and exam-oriented practice.",
    image: "/assets/images/aboutpage/PSITrainingabout.jpg",
  },
  {
    title: "Police Bharti",
    description: "Structured daily routines focusing on stamina, speed and physical tests.",
    image: "/assets/images/aboutpage/PoliceBhartiabout.jpg",
  },
  {
    title: "Army Training",
    isList: true,
    list: ["800 Meter Run", "1600 Meter Run", "100 Meter Shot Out"],
    image: "/assets/images/aboutpage/ArmyTrainingabout.jpg",
  },
];

const athleticsPrograms = [
  {
    title: "Running",
    description: "Professional coaching to improve performance and technique.",
    image: "/assets/images/aboutpage/runningabout.jpeg",
  },
  {
    title: "Jumping",
    description: "High jump, long jump, and explosive power training.",
    image: "/assets/images/aboutpage/jumpingabout.jpeg",
  },
  {
    title: "Throwing",
    description: "Shot put, discuss throw, and strength conditioning.",
    image: "/assets/images/aboutpage/throw.jpg",
    fit: "object-contain" // Changed to contain to fit fully without stretch
  },
];

const whyChooseUs = [
  {
    title: "Expert Trainers",
    icon: <Users size={40} />,
    desc: "Guided by ex-defense personnel and national athletes.",
  },
  {
    title: "Result Oriented",
    icon: <Target size={40} />,
    desc: "Focus on Result Oriented Training for Police & Defense forces.",
  },
  {
    title: "Personal Focus",
    icon: <Trophy size={40} />,
    desc: "Individual attention to every student's progress.",
  },
  {
    title: "Proven Track Record",
    icon: <CheckCircle size={40} />,
    desc: "Consistent top rankers in physical tests.",
  },
];

const AboutUs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-montserrat text-slate-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img
          src="/assets/images/aboutpage/aboutfirst.jpg"
          alt="Our Legacy"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.4]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-black/30" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-oswald font-bold text-white uppercase tracking-tighter mb-4"
          >
            Our <span className="text-brand-red">Legacy</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-slate-200 font-light"
          >
            Forging Future Champions
          </motion.p>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-black mb-6 uppercase">
              We Don't Just Train.<br/>
              <span className="text-brand-red">We Transform.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6 border-l-4 border-brand-red pl-4">
              BK Sports Academy is a premier institute dedicated to preparing candidates for Army, Police, PSI, and competitive athletics. We combine rigorous physical conditioning with mental toughness training.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="bg-white p-4 rounded-xl shadow-md border-b-4 border-brand-red">
                <h3 className="text-3xl font-oswald font-bold text-brand-black">Admissions</h3>
                <p className="text-sm text-slate-500 font-semibold uppercase">Open</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-md border-b-4 border-brand-red">
                <h3 className="text-3xl font-oswald font-bold text-brand-black">Expert</h3>
                <p className="text-sm text-slate-500 font-semibold uppercase">Coaches</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-red/10 rounded-2xl rotate-3 -z-10" />
            <img
              className="rounded-xl shadow-2xl w-full object-cover h-[400px] border-4 border-white"
              src="/assets/images/aboutpage/aboutsecind.webp"
              alt="Transformation"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= PROGRAMS GRID ================= */}
      <section className="bg-brand-black text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mb-4">
              Elite <span className="text-brand-red">Training</span> Programs
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {loading ? (
               Array.from({ length: 3 }).map((_, i) => <Shimmer key={i} className="h-96 w-full rounded-xl" />)
            ) : (
              [...trainingPrograms].map((program, i) => (
                <motion.div
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative h-96 rounded-xl overflow-hidden bg-slate-900 border border-white/10"
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full">
                    <h3 className="text-2xl font-oswald font-bold text-white mb-2 uppercase group-hover:text-brand-red transition-colors">
                      {program.title}
                    </h3>
                    <div className="w-full bg-white/20 h-px mb-4" />
                    {program.isList ? (
                      <ul className="text-sm text-slate-300 space-y-1 list-disc list-inside">
                        {program.list.map((item, idx) => <li key={idx}>{item}</li>)}
                      </ul>
                    ) : (
                      <p className="text-sm text-slate-300">{program.description}</p>
                    )}
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ================= ATHLETICS ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-oswald font-bold text-center mb-12 uppercase text-brand-black">
          Specialized <span className="text-brand-red">Athletics</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {athleticsPrograms.map((item, i) => (
             <motion.div 
               key={i}
               whileHover={{ y: -10 }}
               className="bg-white rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] overflow-hidden border border-slate-100"
             >
               <div className="h-48 relative">
                 <img src={item.image} alt={item.title} className={`w-full h-full ${item.fit || "object-cover"}`} />
                 <div className="absolute inset-0 bg-brand-red/20 mix-blend-multiply" />
               </div>
               <div className="p-6">
                 <h3 className="text-xl font-oswald font-bold text-brand-black mb-2 uppercase">{item.title}</h3>
                 <p className="text-slate-600 text-sm">{item.description}</p>
               </div>
             </motion.div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-red rounded-full filter blur-[150px] opacity-20" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8">
            {whyChooseUs.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-brand-red mb-4 flex justify-center">{item.icon}</div>
                <h3 className="text-xl font-oswald font-bold mb-2 uppercase">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
