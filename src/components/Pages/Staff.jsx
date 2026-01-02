import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion } from "framer-motion";

/* ================= STAFF DATA ================= */
const staff = [
  {
    name: "Mangesh Raut",
    role: "SAI NIS Coach | World Athletics Level 1 | BPED | Indian Athletics Technical Official",
    exp: "6+ Years Experience",
    img: "/assets/images/staffphotos/staff.jpg",
  },
];

/* ================= 3D BACKGROUND OBJECT ================= */
function TrainerCard3D() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
      <mesh>
        <boxGeometry args={[2.8, 3.6, 0.2]} />
        <meshStandardMaterial color="#020617" />
      </mesh>
    </Float>
  );
}

/* ================= STAFF PAGE ================= */
export default function Staff() {
  return (
    <div className="min-h-screen pt-28 bg-gradient-to-b from-black via-slate-900 to-black text-white">
      {/* ===== HEADER ===== */}
      <section className="text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Meet Our <span className="text-orange-500">Elite Staff</span>
        </motion.h1>
        <p className="text-gray-400 max-w-3xl mx-auto">
          Ex-army professionals, certified coaches, and elite mentors shaping
          future champions at BK Career Academy.
        </p>
      </section>

      {/* ===== FOUNDER 3D FEATURE CARD ===== */}
      <section className="relative h-[380px] max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl mb-24">
        {/* 3D Canvas */}
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 5, 5]} />
          <TrainerCard3D />
          <OrbitControls enableZoom={false} />
        </Canvas>

        {/* ===== FOUNDER CARD (COMPACT & PREMIUM) ===== */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl px-6 py-6 w-[280px] text-center"
          >
            {/* Image */}
            <div className="relative w-28 h-28 mx-auto mb-4">
              <img
                src="/assets/images/staffphotos/staffHead.jpg"
                alt="Bhagwan Yelmame"
                className="w-full h-full rounded-full object-cover border-4 border-orange-500"
              />
              <span className="absolute inset-0 rounded-full ring-4 ring-orange-400/30 animate-pulse"></span>
            </div>

            {/* Content */}
            <h3 className="text-xl font-extrabold text-slate-900">
              Bhagwan Yelmame
            </h3>
            <p className="text-orange-500 font-semibold text-sm mt-1">
              Founder & Head Coach
            </p>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              Ex-Army Trainer & Senior Athletics Coach with proven leadership in
              national-level training programs.
            </p>
            <p className="text-xs font-medium text-gray-500 mt-3">
              10+ Years Experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== STAFF GRID (ONLY ONE — CENTERED & PREMIUM) ===== */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <motion.div
          whileHover={{ y: -8, scale: 1.04 }}
          transition={{ type: "spring", stiffness: 180 }}
          className="bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-700 md:flex"
        >
          {/* Image */}
          <img
            src={staff[0].img}
            alt={staff[0].name}
            className="h-72 md:h-auto md:w-1/2 object-cover"
          />

          {/* Content */}
          <div className="p-8 flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl font-extrabold mb-2">{staff[0].name}</h3>
            <p className="text-orange-400 font-medium leading-snug">
              {staff[0].role}
            </p>
            <p className="text-sm text-gray-400 mt-3">{staff[0].exp}</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
