import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Trophy, Timer, Medal, Shield, Target, User, Star, Clock, MapPin, Activity, Zap, Quote } from "lucide-react";
import MarathonPopup from "../common/MarathonPopup";

/* ===================== HERO SECTION (FULL SCREEN IMMERSIVE) ===================== */

// Helper Component for Compact Grid Card
function ProgramCard({ program, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="relative h-[380px] rounded-2xl overflow-hidden cursor-pointer group shadow-xl hover:shadow-2xl hover:shadow-brand-red/20 border border-white/10 hover:border-brand-red/50 transition-colors"
    >
      <Link to="/programs" className="block w-full h-full">
        {/* Background with Zoom Effect */}
        <div className="absolute inset-0 bg-slate-900">
           <img 
              src={program.image} 
              alt={program.title} 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
           />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="absolute inset-0 p-6 flex flex-col justify-between">
           {/* Top Icons */}
           <div className="flex justify-between items-start">
              <div className={`w-12 h-12 rounded-xl backdrop-blur-md flex items-center justify-center text-white border border-white/20 ${program.color.replace('bg-', 'bg-opacity-20 bg-')}`}>
                  {React.cloneElement(program.icon, { className: "w-6 h-6" })}
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 p-2 rounded-full backdrop-blur-lg">
                  <Activity className="w-4 h-4 text-brand-red" />
              </div>
           </div>

           {/* Bottom Content */}
           <div className="relative z-10">
              <h4 className="text-brand-red font-bold tracking-widest uppercase text-[10px] mb-2 opacity-80">
                 {program.subtitle}
              </h4>
              <h3 className="text-2xl font-oswald font-bold text-white uppercase leading-none mb-3">
                 {program.title}
              </h3>
              
              <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500">
                 <div className="w-full l-[1px] bg-white/20 mb-3" />
                 <ul className="space-y-1 mb-4">
                   {program.features.slice(0, 3).map((f, i) => (
                     <li key={i} className="flex items-center text-slate-300 text-xs font-montserrat">
                       <span className="w-1 h-1 rounded-full bg-brand-red mr-2"></span>
                       {f}
                     </li>
                   ))}
                 </ul>
              </div>
              
               <div className="flex items-center text-xs font-bold uppercase tracking-wider text-white/50 group-hover:text-brand-red transition-colors mt-2">
                  Explore Program &rarr;
               </div>
           </div>
        </div>
      </Link>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Video (Single High Quality Source) */}
      <video
        src="/assets/videos/home1.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Gradient Overlay - Smooth & Premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-transparent to-brand-black/90" />
      <div className="absolute inset-0 bg-black/20" /> {/* General tint */}

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 -mt-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-montserrat text-xs md:text-sm tracking-widest uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-red animate-pulse"/>
            Admissions Open 2026
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-oswald font-bold text-white mb-6 uppercase tracking-tight drop-shadow-2xl">
            Forging <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-slate-400">Champions</span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 font-montserrat font-light mb-10 max-w-3xl mx-auto leading-relaxed">
            Unleash your inner athlete with first-class defense training.
            <span className="block mt-4 text-white font-oswald font-bold uppercase tracking-[0.2em] text-lg md:text-xl">
              Discipline <span className="text-brand-red">.</span> Strength <span className="text-brand-red">.</span> Success
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              to="/register"
              className="px-10 py-4 bg-brand-red text-white font-oswald font-bold text-xl uppercase tracking-wider rounded-full
              hover:bg-red-700 hover:scale-105 transition-all duration-300 shadow-xl ring-4 ring-brand-red/20"
            >
              Start Your Journey
            </Link>
            
            <Link
              to="/our-sports"
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-oswald font-bold text-xl uppercase tracking-wider rounded-full
              hover:bg-white hover:text-brand-black transition-all duration-300"
            >
              Explore Games
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>
    </section>
  );
}

/* ===================== STATS COUNTER (SLANTED STRIP) ===================== */
function StatsCounter() {
  const [counts, setCounts] = useState({ students: 0, trainers: 0, stories: 0, experience: 0 });

  useEffect(() => {
    const targets = { students: 50, trainers: 10, stories: 25, experience: 2 };
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;

    const timer = setInterval(() => {
      setCounts((prev) => {
        const newCounts = {};
        let allComplete = true;

        Object.keys(targets).forEach((key) => {
          if (prev[key] < targets[key]) {
            newCounts[key] = Math.min(prev[key] + Math.ceil(targets[key] / steps), targets[key]);
            allComplete = false;
          } else {
            newCounts[key] = targets[key];
          }
        });

        if (allComplete) clearInterval(timer);
        return newCounts;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "SELECTIONS", value: counts.students, suffix: "+" },
    { label: "SUCCESS STORIES", value: counts.stories, suffix: "+" },
    { label: "EXPERT COACHES", value: counts.trainers, suffix: "+" },
    { label: "YEARS LEGACY", value: counts.experience, suffix: "+" },
  ];

  return (
    <section className="bg-brand-black text-white py-16 -mt-16 relative z-20 transform border-t-4 border-b-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-6 transform">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-oswald font-bold text-brand-red mb-2">
                {stat.value}{stat.suffix}
              </div>
              {/* Red Separator Line */}
              <div className="w-12 h-1 bg-brand-red mx-auto mb-3 rounded-full"></div>
              
              <div className="text-sm md:text-base font-montserrat font-bold tracking-widest text-slate-400 uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== HOME PAGE ===================== */
export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const hallOfFameRef = useRef(null);
  const isHallOfFameInView = useInView(hallOfFameRef, { amount: 0.3 }); // Trigger when 30% visible

  // Handle Scroll Trigger
  useEffect(() => {
    if (isHallOfFameInView) {
      setShowPopup(true);
    } else {
      setShowPopup(false);
    }
  }, [isHallOfFameInView]);

  // Helper to handle popup close (manually dismissed)
  const handleClosePopup = () => {
    setShowPopup(false);
    // Removed sessionStorage persistence to allow appearing "every time"
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Marathon Popup - Scroll Triggered */}
      <AnimatePresence>
        {showPopup && <MarathonPopup onClose={handleClosePopup} />}
      </AnimatePresence>
      
      {/* Add padding to account for fixed banner */}
      <div className="pt-0">

      {/* ===================== HERO SECTION ===================== */}
      <HeroSection />

      {/* ===================== STATS COUNTER ===================== */}
      <StatsCounter />



      {/* ===================== FEATURED PROGRAMS (EXPANDING GALLERY) ===================== */}
      <section className="bg-brand-black text-white py-24 px-6 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-900 via-brand-black to-black opacity-80" />
        
        <div className="max-w-[1400px] mx-auto relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-5xl md:text-7xl font-oswald font-bold uppercase tracking-tight">
                Elite <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-orange-600">Training</span>
             </h2>
             <p className="text-slate-400 font-montserrat tracking-widest uppercase text-sm mt-4">
                Choose your battlefield • Defy your limits
             </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "ARMY & DEFENSE",
                subtitle: "SERVE THE NATION",
                features: ["Endurance Run", "Obstacle Course", "Mental Fortitude"],
                icon: <Medal />,
                image: "/assets/images/home/army.jpg",
                color: "bg-green-700"
              },
              {
                title: "POLICE BHARTI",
                subtitle: "LAW & ORDER",
                features: ["Sprinting Drills", "Strength Training", "Agility Tests"],
                icon: <Shield />,
                image: "/assets/images/home/policehome.jpg",
                color: "bg-blue-700"
              },
              {
                title: "COMPETITIVE SPORTS",
                subtitle: "TRACK & FIELD",
                features: ["Plyometrics", "Technique Correction", "Speed Work"],
                icon: <Trophy />,
                image: "/assets/images/home/runinnghome.jpg",
                color: "bg-accent-yellow"
              },
              {
                title: "PSI PREPARATION",
                subtitle: "LEADERSHIP & TACTICS",
                features: ["Advanced Physicals", "Interview Prep", "Tactical Skills"],
                icon: <Target />,
                image: "/assets/images/home/psihome.jpg",
                color: "bg-brand-red"
              },
            ].map((program, i) => (
              <ProgramCard key={i} program={program} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SUCCESS STORIES ===================== */}
      <section ref={hallOfFameRef} className="bg-white pt-10 pb-0 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-black text-center mb-12 uppercase">
            Hall of <span className="text-brand-red">Fame</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Pranav Bhujbal",
                achievement: "INDIAN ARMY",
                quote: "BK Academy transformed my fitness level. The training methodology is world-class.",
                image: "/assets/images/testimonials/pranavphto.jpeg",
                rating: 4.5
              },
              {
                name: "Nikita Kad",
                achievement: "STATE CHAMPION",
                quote: "The personalized coaching helped me win gold at the state level. Forever grateful!",
                image: "/assets/images/testimonials/nikitaphoto.jpeg",
                rating: 5
              },
              {
                name: "Bhavesh Patil",
                achievement: "POLICE FORCE",
                quote: "Cleared all physical tests in first attempt. Best academy for defense prep!",
                image: "/assets/images/testimonials/bhavesh.jpeg",
                rating: 4.8
              },
            ].map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 p-8 border-b-4 border-brand-red shadow-2xl text-center group hover:-translate-y-2 transition-transform duration-300 rounded-xl"
              >
                <div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-br from-brand-red to-accent-yellow mb-6 shadow-md">
                   <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full rounded-full object-cover border-4 border-slate-800"
                   />
                </div>
                
                <h4 className="text-2xl font-oswald font-bold text-white item">{story.name}</h4>
                <p className="text-brand-red font-bold text-sm tracking-widest mb-4">{story.achievement}</p>
                
                <p className="text-slate-300 italic font-medium mb-6 flex gap-2 justify-center text-sm">
                  <Quote className="w-3 h-3 text-brand-red rotate-180" />
                  {story.quote}
                  <Quote className="w-3 h-3 text-brand-red" />
                </p>
                
                <div className="flex justify-center gap-1 text-accent-yellow">
                   {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/testimonials" 
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-brand-black text-brand-black font-oswald font-bold uppercase tracking-wider hover:bg-brand-black hover:text-white transition-all shadow-lg"
            >
              <Trophy className="w-5 h-5" /> View All Success Stories
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== UPCOMING EVENTS ===================== */}
      <section className="bg-slate-100 py-10 border-t-4 border-brand-red/10 mx-4 md:mx-10 mt-0 shadow-inner relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
             <div className="border-l-4 border-brand-red pl-6">
               <h4 className="text-slate-500 font-bold tracking-widest uppercase text-sm mb-2 font-montserrat">Mark Your Calendar</h4>
               <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-black uppercase">
                 Upcoming <span className="text-brand-red">Actions</span>
               </h2>
             </div>
             <Link to="/notice-board" className="hidden md:inline-block px-8 py-3 bg-brand-black text-white font-oswald font-bold uppercase tracking-wider hover:bg-brand-red transition-all shadow-lg">
               View All Events
             </Link>
          </div>

            <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                date: "22",
                month: "FEB",
                title: "3KM Warm UP RUN",
                subtitle: "BK MARATHON 2026",
                time: "5:00 AM - 10:00 AM",
                loc: "MVP Marathon Chowk, Nashik",
                tag: "ENTRY FEE: ₹200",
                bg: "text-white", 
                link: "https://www.runindia.in/home/login",
                image: "/assets/images/home/runinnghome.jpg",
                logo: "/assets/images/running img.png"
              },
               {
                date: "22",
                month: "FEB",
                title: "5KM POWER RUN",
                subtitle: "BK MARATHON 2026",
                time: "5:00 AM - 10:00 AM",
                loc: "MVP Marathon Chowk, Nashik",
                tag: "ENTRY FEE: ₹350",
                bg: "text-white",
                link: "https://www.runindia.in/home/login",
                image: "/assets/images/home/runinnghome.jpg",
                logo: "/assets/images/running img.png"
              },
               {
                date: "22",
                month: "FEB",
                title: "10KM CHALLENGE",
                subtitle: "BK MARATHON 2026",
                time: "5:00 AM - 10:00 AM",
                loc: "MVP Marathon Chowk, Nashik",
                tag: "ENTRY FEE: ₹500",
                bg: "text-white",
                link: "https://www.runindia.in/home/login",
                image: "/assets/images/home/runinnghome.jpg",
                logo: "/assets/images/running img.png"
              }
            ].map((ev, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.15 }}
                 onClick={() => ev.link && window.open(ev.link, '_blank')}
                 className={`relative p-8 shadow-2xl group cursor-pointer hover:-translate-y-2 transition-transform duration-300 overflow-hidden ${ev.bg} min-h-[400px] flex flex-col justify-between`}
               >
                 {/* Background Image & Overlay */}
                 {ev.image && (
                   <>
                     <img 
                       src={ev.image} 
                       alt="Marathon" 
                       className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                     />
                     <div className="absolute inset-0 bg-brand-black/70 group-hover:bg-brand-black/60 transition-colors duration-300" />
                   </>
                 )}

                 <div className="relative z-10">
                   <div className="absolute top-0 right-0 text-xs font-bold border border-white/30 px-3 py-1.5 uppercase tracking-widest opacity-90 bg-brand-red text-white shadow-lg">
                     {ev.tag}
                   </div>
                   
                   {/* Run India Logo Watermark */}
                   {/* Run India Logo Watermark Removed */}
                   
                   <div className="text-6xl font-oswald font-bold mb-0 opacity-10 absolute bottom-0 right-0 rotate-[-15deg] group-hover:scale-110 transition-transform text-white">
                      {ev.date}
                   </div>
  
                   <div className="flex items-start gap-4 mb-6 mt-4">
                     <div className="text-center min-w-[60px]">
                       <span className="block text-4xl font-oswald font-bold leading-none">{ev.date}</span>
                       <span className="block text-xs font-bold uppercase tracking-wider opacity-80 text-brand-red">{ev.month}</span>
                     </div>
                     <div className="w-[2px] h-12 bg-brand-red opacity-80"></div>
                     <div className="flex flex-col justify-center">
                        {/* Subtitle Removed */}
                     </div>
                   </div>
  
                   <h3 className="text-3xl font-oswald font-bold uppercase leading-tight mb-6 text-white text-shadow-sm">
                      {ev.title}
                   </h3>
                   
                   <div className="font-montserrat text-sm space-y-3 opacity-90 font-medium text-slate-200">
                     <div className="flex items-center gap-3">
                       <Clock className="w-5 h-5 text-brand-red" /> 
                       <span>{ev.time}</span>
                     </div>
                     <div className="flex items-center gap-3">
                       <MapPin className="w-5 h-5 text-brand-red" /> 
                       <span>{ev.loc}</span>
                     </div>
                   </div>
                 </div>

                 {/* Click to Register CTA */}
                 <div className="relative z-10 mt-6 pt-6 border-t border-white/10">
                    <span className="inline-block text-brand-red font-bold uppercase tracking-wider text-sm group-hover:text-white transition-colors">
                      Click to Register &rarr;
                    </span>
                 </div>
               </motion.div>
             ))}
          </div>

          <div className="mt-12 text-center md:hidden">
             <Link to="/notice-board" className="inline-block px-8 py-3 bg-brand-black text-white font-oswald font-bold uppercase tracking-wider shadow-lg">
               View All Events
             </Link>
          </div>
        </div>
      </section>

      {/* ===================== CALL TO ACTION ===================== */}
      <section className="pt-12 pb-24 bg-brand-red text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-oswald font-bold uppercase mb-6"
          >
            Start Your <span className="text-accent-yellow">Legacy</span>
          </motion.h2>

          <p className="text-xl md:text-2xl text-white/90 font-montserrat mb-10 max-w-3xl mx-auto">
            Join the elite academy that builds champions. Discipline, Strength, and Success wait for no one.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/register" 
              className="px-10 py-5 bg-white text-brand-red font-oswald font-bold text-2xl uppercase tracking-wider
              hover:bg-brand-black hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)]"
            >
              Get Admitted
            </Link>
             <Link 
              to="/contact" 
              className="px-10 py-5 border-2 border-white text-white font-oswald font-bold text-2xl uppercase tracking-wider
              hover:bg-brand-black hover:border-brand-black transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
