import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { motion } from "framer-motion";
import { 
  Trophy, Users, Timer, Activity, 
  MapPin, CheckCircle, ArrowRight 
} from "lucide-react";
import API_URL from "../../config";

// Fallback Data
const FALLBACK_PROGRAMS = [
  {
    _id: "prog1",
    title: "Cricket Excellence",
    description: "Professional cricket coaching for all age groups. Master batting, bowling, and fielding with state-level coaches.",
    mediaUrl: "/assets/videos/cricket2.mp4"
  },
  {
    _id: "prog2",
    title: "Elite Football",
    description: "Comprehensive football training focusing on tactical awareness, ball control, and match simulation.",
    mediaUrl: "/assets/videos/football2.mp4"
  },
  {
    _id: "prog3",
    title: "Aquatic Mastery",
    description: "Olympic-standard swimming training for beginners to competitive swimmers in our all-weather pool.",
    mediaUrl: "/assets/videos/swimming.mp4"
  },
  {
    _id: "prog4",
    title: "Defense Training",
    description: "Rigorous physical and mental conditioning for Army, Police, and Para-military force selections.",
    mediaUrl: "/assets/videos/home11.mp4"
  }
];

const FALLBACK_FEATURED = {
  _id: "featured1",
  title: "Annual Marathon 2026",
  description: "Join the biggest sporting event of the year. Push your limits, compete with the best, and earn your glory.",
  mediaUrl: "/assets/videos/prgmMarathon.mp4"
};

const Programs = () => {
  const [loading, setLoading] = useState(true);
  const [programs, setPrograms] = useState([]);
  const [featuredProgram, setFeaturedProgram] = useState(null);

  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await fetch(`${API_URL}/api/programs`);
        const data = await res.json();
        setPrograms(data.programs && data.programs.length > 0 ? data.programs : FALLBACK_PROGRAMS);

        const featuredRes = await fetch(`${API_URL}/api/programs/featured`);
        const featuredData = await featuredRes.json();
        setFeaturedProgram(featuredData.program || FALLBACK_FEATURED);
      } catch (err) {
        console.error("Error fetching programs:", err);
        setPrograms(FALLBACK_PROGRAMS);
        setFeaturedProgram(FALLBACK_FEATURED);
      } finally {
        setLoading(false);
      }
    };
    fetchPrograms();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-montserrat">
      
      <div className="pt-24" />{/* Spacing for fixed navbar */}

      {/* ================= PROGRAMS GRID ================= */}
      <section className="max-w-7xl mx-auto px-6 pb-20 pt-2">
        <div className="flex flex-col md:flex-row justify-between items-end mb-4">
          <div>
            <h2 className="text-4xl font-oswald font-bold text-brand-black uppercase">
              Our <span className="text-brand-red">Curriculum</span>
            </h2>
            <div className="w-20 h-1.5 bg-brand-red mt-2" />
          </div>
          <p className="text-slate-500 max-w-md mt-4 md:mt-0 text-sm font-semibold uppercase tracking-wider">
            Choose from a wide range of specialized sports and fitness disciplines.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
             Array.from({ length: 3 }).map((_, i) => <Shimmer key={i} className="h-96 w-full rounded-2xl" />)
          ) : (
            programs.map((program, i) => (
              <motion.div
                key={program._id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-brand-black"
              >
                <video
                  src={program.mediaUrl}
                  loop muted playsInline
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center mb-4 text-white shadow-lg">
                    <Activity size={24} />
                  </div>
                  <h3 className="text-2xl font-oswald font-bold text-white uppercase mb-2">
                    {program.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all">
                    {program.description}
                  </p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </section>

      {/* ================= THE BK EDGE (METHODOLOGY) ================= */}
      <section className="bg-brand-black text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red rounded-full blur-[120px] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mb-4">
              The BK <span className="text-brand-red">Advantage</span>
            </h2>
            <p className="text-slate-400">Why champions choose us to lead their journey.</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { 
                icon: Users, 
                title: "Elite Coaching", 
                desc: "Train with national-level athletes and certified mentors.",
                img: "/assets/images/aboutpage/aboutimg1.jpg"
              },
              { 
                icon: Trophy, 
                title: "Proven Results", 
                desc: "Over 1000+ selections in state and national defense services.",
                img: "/assets/images/aboutpage/aboutlast1.jpg"
              },
              { 
                icon: Timer, 
                title: "Structured Regimen", 
                desc: "Scientific training plans tailored to individual capability.",
                img: "/assets/images/aboutpage/aboutimg3.jpg"
              },
              { 
                icon: Activity, 
                title: "Holistic Growth", 
                desc: "Equal focus on physical endurance, diet, and mental strength.",
                img: "/assets/images/aboutpage/aboutlast2.jpg" 
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative rounded-2xl overflow-hidden shadow-lg h-[320px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-end">
                  <div className="w-12 h-12 rounded-full bg-brand-red/90 flex items-center justify-center mb-4 backdrop-blur-sm group-hover:bg-brand-red transition-colors">
                    <item.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-oswald font-bold text-white mb-2 uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURED SPOTLIGHT ================= */}
      {featuredProgram && (
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-brand-black h-[500px] flex items-center">
            {loading ? (
              <Shimmer className="w-full h-full" />
            ) : (
              <>
                <div className="absolute inset-0 w-full h-full">
                   <video 
                     src={featuredProgram.mediaUrl} 
                     autoPlay loop muted playsInline
                     className="w-full h-full object-cover opacity-60" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent" />
                </div>

                <div className="relative z-10 px-8 md:px-16 max-w-2xl">
                   <div className="inline-block bg-brand-red text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4">
                     Featured Event
                   </div>
                   <h2 className="text-4xl md:text-6xl font-oswald font-bold text-white uppercase mb-6 leading-none">
                     {featuredProgram.title}
                   </h2>
                   <p className="text-lg text-slate-200 mb-8 leading-relaxed">
                     {featuredProgram.description}
                   </p>
                   <a 
                     href="https://www.runindia.in/home/login" 
                     target="_blank" 
                     rel="noreferrer"
                     className="inline-block bg-white text-brand-black px-8 py-3 rounded font-bold uppercase tracking-wider hover:bg-brand-red hover:text-white transition-all transform hover:scale-105"
                   >
                     Register Now
                   </a>
                </div>
              </>
            )}
          </div>
        </section>
      )}

      {/* ================= FACILITIES ================= */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
           <div>
             <h2 className="text-4xl font-oswald font-bold text-brand-black uppercase mb-6">
               World Class <span className="text-brand-red">Facilities</span>
             </h2>
             <p className="text-slate-600 mb-8 leading-relaxed">
               We believe that environment shapes performance. Our campus provides state-of-the-art infrastructure designed to simulate professional competitive conditions.
             </p>
             <ul className="space-y-4">
               {[
                 "Premier New Sports Destination in Nashik",
                 "Organizing Professional Competitive Games",
                 "Expert Coaching & Structured Teaching",
                 "Advanced Training for All Skill Levels"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-slate-800 font-semibold">
                   <CheckCircle className="text-brand-red w-5 h-5" /> {item}
                 </li>
               ))}
             </ul>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <img src="/assets/images/aboutpage/aboutimg1.jpg" alt="Gym" className="rounded-2xl shadow-lg w-full h-48 object-cover" />
              <img src="/assets/images/aboutpage/aboutlast2.jpg" alt="Track" className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8" />
           </div>
        </div>
      </section>

    </div>
  );
};

export default Programs;
