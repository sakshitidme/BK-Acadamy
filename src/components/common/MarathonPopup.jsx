import React from "react";
import { motion } from "framer-motion";
import { X, Timer } from "lucide-react";

/* ===================== MARATHON POPUP (SCROLL TRIGGERED VIDEO) ===================== */
export default function MarathonPopup({ onClose }) {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ y: 100, opacity: 0, scale: 0.9 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.5 }}
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
