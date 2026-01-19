import React from 'react';
import { motion } from "framer-motion";
import { Quote, Medal, Star, Clock } from "lucide-react";

/* ================= STAFF DATA ================= */
const staff = [
  {
    name: "Mangesh Raut",
    role: "Assistant Coach & Technical Official",
    qualifications: "SAI NIS Coach | World Athletics Level 1 | BPED",
    exp: "6+ Years Experience",
    img: "/assets/images/staffphotos/staff.jpg",
    specialty: "Athletics & Field Events"
  },
];

const Staff = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-montserrat pt-8 pb-20">
      
      {/* ================= HEADER ================= */}
      <div className="text-center px-6 mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-oswald font-bold uppercase mb-4"
        >
          Meet The <span className="text-brand-red">Mentors</span>
        </motion.h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
          The driving force behind every champion. Our certified experts bring decades of experience to the field.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-20">

        {/* ================= SENIOR SIR (FEATURED) ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 md:grid md:grid-cols-2 lg:grid-cols-[400px_1fr]"
        >
          {/* Image Section */}
          <div className="relative h-[400px] md:h-full">
            <img 
              src="/assets/images/staffphotos/staffHead.jpg" 
              alt="Bhagwan Yelmame" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/5" />
            
            {/* Mobile Name Overlay */}
            <div className="absolute bottom-6 left-6 md:hidden text-white">
              <h2 className="text-2xl font-oswald font-bold uppercase leading-none mb-1">Bhagwan Yelmame</h2>
              <p className="text-brand-red font-bold text-xs uppercase tracking-wider">Founder & Head Coach</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center relative">
            <Quote className="absolute top-8 right-8 text-brand-red/10 w-24 h-24 rotate-180" />
            
            <div className="hidden md:block mb-6">
              <div className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red font-bold text-[10px] uppercase tracking-widest rounded mb-3">
                Founder Secretary
              </div>
              <h2 className="text-2xl lg:text-3xl font-oswald font-bold uppercase text-brand-black mb-2">
                Dr. Adv. Bhagwan Nivrutti Elmame
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">
              "Training is not just about physical strength; it's about building a mindset that refuses to quit.I bring the discipline of the forces to the sports field, ensuring every student reaches their peak potential."
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Medal className="text-brand-red w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-black uppercase text-sm">Experience</h4>
                  <p className="text-slate-500 text-sm">21 Degrees | 10+ Yrs Exp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="text-brand-red w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-black uppercase text-sm">Leadership</h4>
                  <p className="text-slate-500 text-sm">Exam Mentor</p>
                </div>
              </div>
            </div>

            <div className="w-full h-1 bg-slate-100 mb-6" />
            <p className="font-oswald text-slate-400 text-sm uppercase tracking-widest">
              Holder of 21 Degrees • Competitive Exam Mentor
            </p>
          </div>
        </motion.div>

        {/* ================= DUPLICATE CARD ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 md:grid md:grid-cols-2 lg:grid-cols-[400px_1fr]"
        >
          {/* Image Section */}
          <div className="relative h-[400px] md:h-full">
            <img 
              src="/assets/images/staffphotos/staffHead.jpg" 
              alt="Duplicate Profile" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-black/5" />
            
            {/* Mobile Name Overlay */}
            <div className="absolute bottom-6 left-6 md:hidden text-white">
              <h2 className="text-2xl font-oswald font-bold uppercase leading-none mb-1">New Profile</h2>
              <p className="text-brand-red font-bold text-xs uppercase tracking-wider">Role Title</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12 flex flex-col justify-center relative">
            <Quote className="absolute top-8 right-8 text-brand-red/10 w-24 h-24 rotate-180" />
            
            <div className="hidden md:block mb-6">
              <div className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red font-bold text-[10px] uppercase tracking-widest rounded mb-3">
                Role Title
              </div>
              <h2 className="text-2xl lg:text-3xl font-oswald font-bold uppercase text-brand-black mb-2">
                New Profile Name
              </h2>
            </div>

            <p className="text-slate-600 text-lg leading-relaxed mb-8 relative z-10">
              "Description text goes here. Updates to photo and description will be made later."
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <Medal className="text-brand-red w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-black uppercase text-sm">Experience</h4>
                  <p className="text-slate-500 text-sm">Qualification | Yrs Exp</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Star className="text-brand-red w-6 h-6 shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-brand-black uppercase text-sm">Role</h4>
                  <p className="text-slate-500 text-sm">Specialty</p>
                </div>
              </div>
            </div>

            <div className="w-full h-1 bg-slate-100 mb-6" />
            <p className="font-oswald text-slate-400 text-sm uppercase tracking-widest">
              Additional Info • Credentials
            </p>
          </div>
        </motion.div>


        {/* ================= TRAINERS GRID (Assistant Coaches) ================= */}
        <section>
          <div className="flex items-center gap-4 mb-10">
             <div className="h-px bg-slate-200 flex-1" />
             <h3 className="text-2xl font-oswald font-bold text-slate-400 uppercase tracking-widest">
               Expert Trainers
             </h3>
             <div className="h-px bg-slate-200 flex-1" />
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {staff.map((coach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden group w-full md:w-[380px]"
              >
                <div className="h-64 overflow-hidden relative">
                   <img 
                     src={coach.img} 
                     alt={coach.name} 
                     className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                   <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-xs font-bold bg-brand-red px-2 py-0.5 rounded inline-block mb-1">
                        {coach.specialty}
                      </p>
                   </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-oswald font-bold text-brand-black uppercase mb-1">
                    {coach.name}
                  </h3>
                  <p className="text-brand-red font-semibold text-sm mb-4 uppercase tracking-wide">
                    {coach.role}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                       <Medal size={16} className="text-slate-400" />
                       <span>{coach.qualifications}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                       <Clock size={16} className="text-slate-400" />
                       <span>{coach.exp}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default Staff;
