import { motion } from "framer-motion";
import { FaMountain, FaUsers, FaHistory, FaRunning } from "react-icons/fa";

const trekImages = [
  "/assets/images/raigadh/raigadh1.jfif",
  "/assets/images/raigadh/raigadh2.jfif",
  "/assets/images/raigadh/raigadh3.jfif",
  "/assets/images/raigadh/raigdh4.jfif",
  "/assets/images/raigadh/raigadh5.jfif",
  "/assets/images/raigadh/raigadh6.jfif",
];

const highlights = [
  {
    title: "Early Morning Ascent",
    icon: <FaMountain />,
    desc: "Sunrise trek building discipline, focus and routine.",
  },
  {
    title: "High Endurance",
    icon: <FaRunning />,
    desc: "Steep climbs & long walks improving stamina.",
  },
  {
    title: "Team Spirit",
    icon: <FaUsers />,
    desc: "Group coordination & leadership development.",
  },
  {
    title: "Historical Awareness",
    icon: <FaHistory />,
    desc: "Learning values of Chhatrapati Shivaji Maharaj.",
  },
];

export default function Trek() {
  return (
    <div className="bg-slate-50 text-slate-900 overflow-hidden">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/raigadh/raigadh1.jfif')" }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-6xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md">
            Raigad <span className="text-red-500">Fort Trek</span>
          </h1>

          <p className="mt-4 text-lg md:text-xl text-slate-100 font-medium">
            Strength • Endurance • Leadership • History
          </p>

          {/* Highlights */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                className="bg-white/90 backdrop-blur-md
                border border-slate-200 rounded-2xl
                p-5 text-center shadow-xl"
              >
                <div className="text-red-600 text-3xl mb-3 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-bold text-sm md:text-base text-slate-900">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-red-600 mb-6">
            About the Trek
          </h2>

          <p className="text-slate-600 leading-relaxed text-base md:text-lg">
            BK Career Academy organized the{" "}
            <strong className="text-slate-900">Raigad Fort Trek</strong> to build physical endurance,
            mental toughness, leadership skills, and teamwork among students.
            <br /><br />
            Raigad Fort, the capital of{" "}
            <strong className="text-slate-900">Chhatrapati Shivaji Maharaj</strong>, symbolizes courage,
            discipline, and self-respect. This trek prepares students for
            <strong className="text-slate-900"> Army, Police, PSI</strong> and other competitive careers.
          </p>
        </motion.div>

        <motion.img
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src="/assets/images/raigadh/raigadh2.jfif"
          alt="Raigad Trek"
          className="rounded-3xl shadow-2xl border border-orange-500/30"
        />
      </section>

      {/* ================= HIGHLIGHTS ================= */}
      <section className="bg-slate-100 py-20 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-14">
          Trek Highlights
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              className="flex gap-5 bg-white
              border border-slate-200 shadow-lg
              rounded-2xl p-6 hover:shadow-xl transition-all"
            >
              <div className="text-red-500 text-3xl">{item.icon}</div>
              <div>
                <h3 className="text-lg font-bold mb-1 text-slate-900">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-red-600 text-center mb-12">
          Trek Gallery
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {trekImages.map((img, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="overflow-hidden rounded-2xl
              border border-yellow-500/30"
            >
              <img
                src={img}
                alt="Raigad Trek"
                className="w-full h-56 object-cover transition duration-500 hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          Join Our Next Trek 🚩
        </motion.h2>

        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg font-medium">
          Experience adventure, discipline, leadership, and history with
          BK Career Academy.
        </p>
      </section>
    </div>
  );
}
