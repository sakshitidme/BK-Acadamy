import React, { useEffect, useState, useRef } from "react";
import Shimmer from "../Shimmer";
import { motion, AnimatePresence, useInView } from "framer-motion";
import MarathonPopup from "../common/MarathonPopup"; 
import { 
  Trophy, Users, Timer, Activity, 
  MapPin, CheckCircle, ArrowRight,
  ChevronDown, ChevronUp, Info, Star
} from "lucide-react";
import API_URL from "../../config";

// Fallback Data
const FALLBACK_PROGRAMS = [
  {
    _id: "prog1",
    title: "Cricket Excellence",
    description: "Professional cricket coaching for all age groups. Master batting, bowling, and fielding with state-level coaches.",
    mediaUrl: "/assets/images/programm/programs1.jpeg",
    features: ["Batting Drills", "Bowling Action", "Match Simulations"]
  },
  {
    _id: "prog2",
    title: "Elite Football",
    description: "Comprehensive football training focusing on tactical awareness, ball control, and match simulation.",
    mediaUrl: "/assets/images/programm/program2.jfif",
    features: ["Tactical Drills", "Ball Control", "Stamina Building"]
  },
  {
    _id: "prog3",
    title: "Aquatic Mastery",
    description: "Olympic-standard swimming training for beginners to competitive swimmers in our all-weather pool.",
    mediaUrl: "/assets/images/programm/program3.jpg",
    features: ["Stroke Correction", "Endurance Lap", "Water Safety"]
  }
];

const FALLBACK_FEATURED = {
  _id: "featured1",
  title: "Annual Marathon 2026",
  description: "Join the biggest sporting event of the year. Push your limits, compete with the best, and earn your glory.",
  mediaUrl: "/assets/videos/marahton.mp4"
};

const FAQS = [
  {
    question: "What age groups do you train?",
    answer: "We offer programs for all age groups starting from 6 years old to adults. Specific programs like Defense Training have age eligibility criteria as per government norms."
  },

  {
    question: "How do I register for a program?",
    answer: "You can register online through our 'Register Now' button or visit our campus for a counseling session and on-spot admission."
  },
  {
    question: "Are the trainers certified?",
    answer: "Absolutely. All our coaches are national-level athletes or certified professionals with years of experience in their respective sports."
  }
];

const Programs = () => {
  const [loading, setLoading] = useState(true);
  const [programs, setPrograms] = useState([]);
  const [featuredProgram, setFeaturedProgram] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  
  const exploreRef = useRef(null);
  const isExploreInView = useInView(exploreRef, { amount: 0.3 });

  useEffect(() => {
    if (isExploreInView) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [isExploreInView]);

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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-montserrat">
      
      <AnimatePresence>
        {showPopup && <MarathonPopup onClose={() => setShowPopup(false)} />}
      </AnimatePresence>

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center justify-center overflow-hidden bg-brand-black">
        <div className="absolute inset-0">
          <img 
            src="/assets/images/aboutpage/aboutimg1.jpg" 
            alt="Programs Hero" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/60 via-brand-black/40 to-brand-black" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto -mt-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
             
            <h1 className="text-5xl md:text-7xl font-oswald font-bold text-white uppercase mb-6 tracking-tight">
              Our <span className="text-brand-red">Programs</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Designed for champions. Whether you aim for the Olympics or the Armed Forces, we have the roadmap to your success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PROGRAMS GRID ================= */}
      <section ref={exploreRef} className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase text-brand-black">
             Explore <span className="text-brand-red">Courses</span>
           </h2>
           <div className="w-24 h-1 bg-brand-red mx-auto mt-4 rounded-full" />
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
             {[1,2,3].map(i => <Shimmer key={i} className="h-[400px] rounded-2xl" />)}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.slice(0, 3).map((program, index) => (
              <motion.div
                key={program._id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-brand-red/30 flex flex-col h-full"
              >
                {/* Media Header */}
                <div className="h-56 relative overflow-hidden bg-slate-900">
                   <img 
                     src={program.mediaUrl || "/assets/images/aboutpage/aboutimg1.jpg"} 
                     alt={program.title}
                     className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                   <div className="absolute bottom-4 left-4">
                     <h3 className="text-2xl font-oswald font-bold text-white uppercase">{program.title}</h3>
                   </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed line-clamp-3">
                    {program.description}
                  </p>
                  
                  {program.features && (
                    <ul className="space-y-2 mb-6 mt-auto">
                      {program.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wide">
                          <CheckCircle className="w-4 h-4 text-brand-red" /> {feat}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* ================= THE BK EDGE (METHODOLOGY) ================= */}
      <section className="bg-brand-black text-white pt-12 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red rounded-full blur-[120px] opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-oswald font-bold uppercase mb-4 pt-2">
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
                <div className="absolute inset-0">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                </div>

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
        <section className="pt-20 pb-0 px-6 max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden relative shadow-[0_20px_50px_rgba(0,0,0,0.3)] bg-brand-black h-[500px] flex items-center group">
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

                <div className="relative z-10 px-8 md:px-16 max-w-2xl transform transition-transform duration-500 group-hover:translate-x-2">
                   <div className="inline-block bg-brand-red text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded mb-4 animate-pulse">
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
                     className="inline-block bg-white text-brand-black px-8 py-3 rounded font-bold uppercase tracking-wider hover:bg-brand-red hover:text-white transition-all transform hover:scale-105 shadow-xl"
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
      <section className="pt-10 pb-24 bg-white">
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
                   <div className="w-6 h-6 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                     <CheckCircle size={14} />
                   </div>
                   {item}
                 </li>
               ))}
             </ul>
           </div>
           <div className="grid grid-cols-2 gap-4">
              <img src="/assets/images/aboutpage/aboutimg1.jpg" alt="Gym" className="rounded-2xl shadow-lg w-full h-48 object-cover transform translate-y-4" />
              <img src="/assets/images/aboutpage/aboutlast2.jpg" alt="Track" className="rounded-2xl shadow-lg w-full h-48 object-cover -translate-y-4" />
           </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-oswald font-bold uppercase text-brand-black">
              Frequent <span className="text-brand-red">Questions</span>
            </h2>
            <p className="text-slate-500 mt-2">Everything you need to know before joining.</p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-brand-black text-lg">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="text-brand-red" />
                  ) : (
                    <ChevronDown className="text-slate-400" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-slate-600 leading-relaxed border-t border-slate-100 mt-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Programs;
