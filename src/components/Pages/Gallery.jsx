import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import API_URL from "../../config";

// Your actual videos from public/assets/videos folder
const FALLBACK_VIDEOS = [
  {
    _id: "1",
    url: "/assets/videos/cricket2.mp4",
    title: "Cricket Training"
  },
  {
    _id: "2",
    url: "/assets/videos/football.mp4",
    title: "Football Academy"
  },
  {
    _id: "3",
    url: "/assets/videos/badminton.mp4",
    title: "Badminton Championship"
  },
  {
    _id: "4",
    url: "/assets/videos/tabletennis.mp4",
    title: "Table Tennis"
  },
  {
    _id: "5",
    url: "/assets/videos/swimming.mp4",
    title: "Swimming Classes"
  },
  {
    _id: "6",
    url: "/assets/videos/cycling.mp4",
    title: "Cycling Training"
  },
  {
    _id: "7",
    url: "/assets/videos/chess.mp4",
    title: "Chess Academy"
  },
  {
    _id: "8",
    url: "/assets/videos/carrom.mp4",
    title: "Carrom Board"
  }
];

const Gallery = () => {
  const [loaded, setLoaded] = useState({});
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const res = await fetch(`${API_URL}/api/media`);
        const data = await res.json();
        
        // Use CMS data if available, otherwise use fallback
        if (data.media && data.media.length > 0) {
          setVideos(data.media);
        } else {
          setVideos(FALLBACK_VIDEOS);
        }
      } catch (err) {
        console.error("Error fetching media:", err);
        // Use fallback data on error
        setVideos(FALLBACK_VIDEOS);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-montserrat">
      
      <div className="pt-20" />{/* Spacing for fixed navbar */}

      {/* ================= HEADER ================= */}
      <div className="text-center px-6 mb-10 pt-2">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-oswald font-bold uppercase mb-4 text-brand-black"
        >
          Our <span className="text-brand-red">Moments</span>
        </motion.h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
          Capturing the spirit of determination, victory, and teamwork.
        </p>
        <div className="w-20 h-1.5 bg-brand-red mx-auto mt-6 rounded-full" />
      </div>

      {/* ================= GALLERY GRID ================= */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {loading ? (
          <div className="text-center py-20 text-slate-400 font-oswald text-xl uppercase tracking-widest animate-pulse">
            Loading gallery...
          </div>
        ) : videos.length === 0 ? (
          <div className="text-center py-20 text-slate-400">No media available yet.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video._id || index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 relative"
              >
                {/* VIDEO WRAPPER */}
                <div className="relative h-64 overflow-hidden bg-brand-black group-hover:shadow-2xl transition-all">
                  <video
                    src={video.url}
                    muted
                    loop
                    playsInline
                    onMouseEnter={(e) => e.target.play()}
                    onMouseLeave={(e) => {
                      e.target.pause();
                      e.target.currentTime = 0;
                    }}
                    onLoadedData={() =>
                      setLoaded((prev) => ({ ...prev, [index]: true }))
                    }
                    className={`w-full h-full object-cover transition-all duration-700 opacity-80 group-hover:opacity-100 group-hover:scale-110
                      ${loaded[index] ? "blur-0" : "blur-md"}
                    `}
                  />
                  {/* Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity duration-300">
                     <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm border border-white/20">
                        <Play size={20} fill="currentColor" />
                     </div>
                  </div>
                </div>

                <div className="p-5 relative z-10 bg-white">
                  <h3 className="text-lg font-oswald font-bold text-brand-black uppercase leading-tight group-hover:text-brand-red transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="w-8 h-1 bg-slate-100 mt-3 group-hover:bg-brand-red transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
