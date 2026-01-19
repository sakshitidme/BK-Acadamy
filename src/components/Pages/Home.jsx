import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, Trophy, Timer, Medal, Shield, Target, User, Star, Clock, MapPin, Activity, Zap, Quote } from "lucide-react";



/* ===================== MARATHON POPUP (SCROLL TRIGGERED VIDEO) ===================== */
function MarathonPopup({ onClose }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 100, opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className="fixed bottom-6 right-6 z-[9999] w-80 bg-brand-black/95 backdrop-blur-md rounded-xl shadow-[0px_0px_30px_rgba(220,38,38,0.3)] overflow-hidden border-2 border-brand-red"
    >
      <div className="relative h-48 group">
        <video 
           src="/assets/videos/marahton.mp4" 
           autoPlay 
           loop 
           muted 
           className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent opacity-80" />
        
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 bg-black/60 hover:bg-brand-red text-white rounded-full p-1.5 transition-all transform hover:rotate-90 hover:scale-110 border border-white/20"
        >
          <X size={16} />
        </button>
      </div>

      <div className="p-5 text-center relative -mt-12 bg-transparent">
         <div className="w-16 h-16 mx-auto bg-brand-red rounded-full flex items-center justify-center border-4 border-brand-black shadow-lg mb-3 relative z-10">
            <Timer className="w-8 h-8 text-white animate-pulse" />
         </div>
         
         <h3 className="font-oswald font-bold text-xl text-white mb-1 uppercase tracking-wide leading-none">
            Marathon <br/><span className="text-brand-red text-2xl">2026</span>
         </h3>
         <p className="text-xs text-slate-400 font-montserrat mb-4 font-medium uppercase tracking-widest">Limited Slots Available</p>
         
         <a href="https://www.runindia.in/home/login" target="_blank" rel="noreferrer" 
            className="block w-full py-3 bg-white text-brand-black font-bold font-oswald uppercase text-sm rounded-lg
            shadow-[4px_4px_0px_#dc2626] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-brand-red hover:text-white transition-all border-2 border-transparent hover:border-white">
            Register Now
         </a>
      </div>
    </motion.div>
  );
}

/* ===================== HERO SECTION (FULL SCREEN IMMERSIVE) ===================== */
function HeroSection() {
  const videos = [
    "/assets/videos/homebannrvideo.mp4",
    "/assets/videos/home1.mp4",
    "/assets/videos/home3.mp4"
  ];
  const [currentVideo, setCurrentVideo] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videos.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background Video Loop */}
      <AnimatePresence mode="wait">
        <motion.video
          key={currentVideo}
          src={videos[currentVideo]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
      </AnimatePresence>

      {/* Gradient Overlay - Smooth & Premium */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/30 via-transparent to-brand-black/90" />
      <div className="absolute inset-0 bg-black/20" /> {/* General tint */}

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
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

          <p className="text-lg md:text-2xl text-slate-200 font-montserrat font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            Unleash your inner athlete with first-class defense training. 
            <span className="block mt-2 font-medium text-white">Discipline. Strength. Success.</span>
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
              to="/gallery"
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
    const targets = { students: 50, trainers: 3, stories: 25, experience: 2 };
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
    { label: "EXPERT COACHES", value: counts.trainers, suffix: "" },
    { label: "YEARS LEGACY", value: counts.experience, suffix: "+" },
  ];

  return (
    <section className="bg-brand-black text-white py-16 -mt-16 relative z-20 transform -skew-y-2 border-t-4 border-brand-red">
      <div className="max-w-7xl mx-auto px-6 transform skew-y-2">
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

  // Helper to handle popup close and persistence
  const handleClosePopup = () => {
    setShowPopup(false);
    sessionStorage.setItem("marathonPopupDismissed", "true");
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

      {/* ===================== TRAINING CATEGORIES ===================== */}
      <motion.section 
        className="max-w-7xl mx-auto px-6 py-16"
        onViewportEnter={() => {
          if (!sessionStorage.getItem("marathonPopupDismissed")) {
            setShowPopup(true);
          }
        }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl font-bold text-red-600 text-center mb-12">
          Training Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Athlete Training Programs",
              desc: "Structured physical training",
              video: "/assets/videos/home11.mp4",
            },
            {
              title: "Performance Development",
              desc: "Speed, agility & drills",
              video: "/assets/videos/home2.mp4",
            },
            {
              title: "Competitive Mentorship",
              desc: "Selection preparation",
              video: "/assets/videos/home3.mp4",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative bg-white pt-12 pb-8 px-8 border-b-4 border-brand-red shadow-lg group overflow-hidden"
            >
              {/* Huge Number Background */}
              <div className="absolute -top-6 -right-4 text-9xl font-oswald font-bold text-slate-100 z-0 group-hover:text-slate-200 transition-colors">
                0{i + 1}
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-oswald font-bold text-brand-black mb-3 uppercase group-hover:text-brand-red transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 font-montserrat text-sm leading-relaxed mb-6">
                  {item.desc}
                </p>
                
                {/* Video Preview on Hover (optional or small) */}
                <div className="h-1 bg-slate-100 w-full mb-4 overflow-hidden rounded-full">
                  <motion.div 
                    className="h-full bg-brand-red" 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>


      </motion.section>

      {/* ===================== FEATURED PROGRAMS ===================== */}
      <section className="bg-brand-black text-white py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-white text-center mb-4 uppercase">
            Featured <span className="text-brand-red">Programs</span>
          </h2>
          <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto font-montserrat">
            Specialized training designed for Army, Police, and Competitive Athletics.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "ARMY & DEFENSE",
                features: ["1600m Endurance Run", "Obstacle Training", "Mental Conditioning", "Selection Drills"],
                icon: <Medal className="w-full h-full" />,
                video: "/assets/videos/aboutPage/armyabout.mp4",
                color: "border-green-600"
              },
              {
                title: "POLICE BHARTI",
                features: ["Sprinting Technique", "Strength & Agility", "Physical Efficiency Test", "Interview Prep"],
                icon: <Shield className="w-full h-full" />,
                video: "/assets/videos/aboutPage/policeabout.mp4",
                color: "border-blue-600"
              },
              {
                title: "COMPETITIVE SPORTS",
                features: ["Track & Field Coaching", "Plyometrics", "District/State Meets", "Diet & Nutrition"],
                icon: <Trophy className="w-full h-full" />,
                video: "/assets/videos/aboutPage/runningabout.mp4",
                color: "border-accent-yellow"
              },
              {
                title: "PSI PREPARATION",
                features: ["Advanced Physical Prep", "Tactical Training", "Leadership Skills", "Personal Mentorship"],
                icon: <Target className="w-full h-full" />,
                video: "/assets/videos/aboutPage/army1about.mp4",
                color: "border-brand-red"
              },
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative bg-brand-black border-l-8 ${program.color} shadow-2xl overflow-hidden h-[450px] flex flex-col justify-end p-8`}
              >
                  {/* Background Video (Muted, Loop, Absolute) */}
                  <video
                    src={program.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-700"
                  />
                  
                  {/* Gradient Overlay - Lighter for visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Icon Watermark */}
                 <div className="absolute top-4 right-4 p-4 opacity-20 w-24 h-24 text-white group-hover:scale-110 transition-transform duration-500">
                   {program.icon}
                 </div>

                <div className="relative z-10">
                  <h3 className="text-3xl font-oswald font-bold mb-4 italic text-white">{program.title}</h3>
                  <ul className="space-y-2 mb-6 text-sm">
                    {program.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center font-montserrat font-medium text-slate-300">
                        <span className="w-1.5 h-1.5 bg-brand-red mr-3 rotate-45"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== SUCCESS STORIES ===================== */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-oswald font-bold text-brand-black text-center mb-12 uppercase">
            Hall of <span className="text-brand-red">Fame</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "RAJESH KUMAR",
                achievement: "INDIAN ARMY",
                quote: "BK Academy transformed my fitness level. The training methodology is world-class.",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                rating: 5
              },
              {
                name: "PRIYA SHARMA",
                achievement: "STATE CHAMPION",
                quote: "The personalized coaching helped me win gold at the state level. Forever grateful!",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                rating: 5
              },
              {
                name: "AMIT PATIL",
                achievement: "POLICE FORCE",
                quote: "Cleared all physical tests in first attempt. Best academy for defense prep!",
                image: "https://randomuser.me/api/portraits/men/86.jpg",
                rating: 5
              },
            ].map((story, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-8 border-b-4 border-brand-red shadow-lg text-center group hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-br from-brand-red to-accent-yellow mb-6 shadow-md">
                   <img 
                    src={story.image} 
                    alt={story.name} 
                    className="w-full h-full rounded-full object-cover border-4 border-white"
                   />
                </div>
                
                <h4 className="text-2xl font-oswald font-bold text-brand-black item">{story.name}</h4>
                <p className="text-brand-red font-bold text-sm tracking-widest mb-4">{story.achievement}</p>
                
                <p className="text-slate-600 italic font-medium mb-6 flex gap-2 justify-center text-sm">
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
      <section className="bg-slate-100 py-20 border-t-4 border-brand-red/10 mx-4 md:mx-10 mt-10 shadow-inner relative">
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
                title: "BK MARATHON 2026",
                time: "5:00 AM - 10:00 AM",
                loc: "MVP Marathon Chowk, Nashik",
                tag: "OPEN FOR ALL",
                bg: "bg-brand-black text-white"
              },
               {
                date: "DAILY",
                month: "MON-SAT",
                title: "MORNING DRILLS",
                time: "05:30 AM",
                loc: "BK ACADEMY",
                tag: "CADETS ONLY",
                bg: "bg-white text-brand-black border-2 border-brand-black"
              },
               {
                date: "WEEK",
                month: "EVERY",
                title: "NEW BATCH TRIAL",
                time: "06:00 AM",
                loc: "MAIN CAMPUS",
                tag: "FREE ENTRY",
                bg: "bg-brand-red text-white"
              }
            ].map((ev, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.15 }}
                 className={`relative p-8 ${ev.bg} shadow-2xl group cursor-pointer hover:-translate-y-2 transition-transform duration-300`}
               >
                 <div className="absolute top-4 right-4 text-xs font-bold border px-2 py-1 uppercase tracking-widest opacity-70">
                   {ev.tag}
                 </div>
                 
                 <div className="text-6xl font-oswald font-bold mb-0 opacity-20 absolute bottom-4 right-4 rotate-[-15deg] group-hover:scale-110 transition-transform">
                    {ev.date}
                 </div>

                 <div className="flex items-start gap-4 mb-6">
                   <div className="text-center min-w-[60px]">
                     <span className="block text-4xl font-oswald font-bold leading-none">{ev.date}</span>
                     <span className="block text-xs font-bold uppercase tracking-wider opacity-80">{ev.month}</span>
                   </div>
                   <div className="w-[2px] h-12 bg-current opacity-20"></div>
                 </div>

                 <h3 className="text-2xl font-oswald font-bold uppercase leading-tight mb-4">{ev.title}</h3>
                 
                 <div className="font-montserrat text-sm space-y-2 opacity-90 font-medium">
                   <div className="flex items-center gap-2">
                     <Clock className="w-4 h-4" /> {ev.time}
                   </div>
                   <div className="flex items-center gap-2">
                     <MapPin className="w-4 h-4" /> {ev.loc}
                   </div>
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
      <section className="py-24 bg-brand-red text-white text-center relative overflow-hidden">
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
