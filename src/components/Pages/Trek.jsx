import { motion } from "framer-motion";

const trekImages = [
  "/images/trek/raigad1.jpg",
  "/images/trek/raigad2.jpg",
  "/images/trek/raigad3.jpg",
  "/images/trek/raigad4.jpg",
];

export default function Trek() {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* ================= HERO SECTION ================= */}
      <section
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/trek/raigad-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-orange-500">
            Raigad Fort Trek
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Strength • Endurance • Team Spirit • History
          </p>
        </motion.div>
      </section>

      {/* ================= ABOUT TREK ================= */}
      <section className="pt-12 pb-8 px-6 max-w-6xl mx-auto -mt-12">
        <motion.h2
          initial={{ opacity: 4, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-orange-500 mb-6"
        >
          About the Trekking
        </motion.h2>

        <p className="text-gray-300 leading-relaxed text-lg">
          BK Career Academy successfully organized a **Raigad Fort Trek** to
          build physical stamina, mental toughness, leadership skills, and team
          bonding among our students.
          <br />
          <br />
          Raigad Fort, the capital of **Chhatrapati Shivaji Maharaj**, inspires
          discipline, courage, and pride. The trek challenged students with
          steep climbs, long endurance walks, and group coordination — exactly
          what is required for **Army, Police, PSI, and competitive exams**.
        </p>
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="bg-zinc-900 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            "Early Morning Ascent",
            "High Endurance Training",
            "Team Coordination",
            "Historical Awareness",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black border border-orange-500/30 rounded-xl p-6 text-center"
            >
              <h3 className="text-xl font-semibold text-orange-500 mb-2">
                {item}
              </h3>
              <p className="text-gray-400 text-sm">
                Training designed to develop discipline, stamina and unity.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-orange-500 mb-8"
        >
          Trek Gallery
        </motion.h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trekImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-xl border border-orange-500/20"
            >
              <img
                src={img}
                alt="Raigad Trek"
                className="w-full h-56 object-cover"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="bg-orange-500-400 text-black py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold"
        >
          Want to Join Our Next Trek?
        </motion.h2>

        <p className="mt-4 max-w-xl mx-auto font-medium">
          Be a part of BK Career Academy’s adventure and discipline programs.
          Build strength, confidence, and leadership.
        </p>

        <button className="mt-6 px-8 py-3 bg-black text-orange-500 font-semibold rounded-full hover:bg-zinc-800 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
