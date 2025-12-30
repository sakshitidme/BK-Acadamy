import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { motion } from "framer-motion";

/* ================= STAFF DATA ================= */
const staff = [
  {
    name: "Bhavesh Kale",
    role: "Founder & Head Coach",
    exp: "10+ Years Experience",
    img: "/staff/coach1.jpg",
  },
  {
    name: "Rohit Patil",
    role: "Physical Training Instructor",
    exp: "Army Training Specialist",
    img: "/staff/coach2.jpg",
  },
  {
    name: "Amit Jadhav",
    role: "Athletics Coach",
    exp: "State Level Athlete",
    img: "/staff/coach3.jpg",
  },
];

/* ================= 3D BACKGROUND OBJECT ================= */
function TrainerCard3D() {
  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={2}>
      <mesh position={[0, 0.8, 0]}>
        <boxGeometry args={[3, 4, 0.3]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>
    </Float>
  );
}

/* ================= STAFF PAGE ================= */
export default function Staff() {
  return (
    <div className="min-h-screen pt-28 bg-gradient-to-b from-black via-slate-900 to-black text-white">

      {/* ===== Header ===== */}
      <section className="text-center py-20 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          Meet Our <span className="text-orange-500">Elite Staff</span>
        </motion.h1>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Our trainers are ex-army professionals, athletes, and certified
          physical instructors dedicated to shaping champions.
        </p>
      </section>

      {/* ===== 3D HERO SECTION ===== */}
      <section className="relative h-[420px] max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl mb-20">

        {/* 3D Canvas */}
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} />
          <TrainerCard3D />
          <OrbitControls enableZoom={false} />
        </Canvas>

        {/* HTML Card Overlay (SAFE) */}
        <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-white p-4 rounded-xl shadow-2xl text-center w-64"
          >
            <img
              src="/staff/coach1.jpg"
              className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
            />
            <h3 className="font-bold text-lg text-black">
              Bhavesh Kale
            </h3>
            <p className="text-sm text-gray-600">
              Founder & Head Coach
            </p>
            <p className="text-xs mt-1 text-gray-500">
              10+ Years Training Experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== 2D STAFF GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-10">
          {staff.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="bg-slate-800 rounded-2xl shadow-xl overflow-hidden border border-slate-700"
            >
              <img
                src={member.img}
                alt={member.name}
                className="h-64 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-orange-400 font-medium">
                  {member.role}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  {member.exp}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
