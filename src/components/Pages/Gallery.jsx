import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import API_URL from "../../config";

// Your actual videos from public/assets/videos folder
// Your actual media from public/assets/images/gallery folder
const FALLBACK_MEDIA = [
  {
    _id: "1",
    url: "/assets/images/gallery/cricketgallery.jpeg",
    title: "Cricket Training",
    type: "image"
  },
  {
    _id: "2",
    url: "/assets/images/gallery/fottbal.jpg",
    title: "Football Academy",
    type: "image"
  },
  {
    _id: "3",
    url: "/assets/images/gallery/badminton.jpg",
    title: "Badminton Championship",
    type: "image"
  },
  {
    _id: "4",
    url: "/assets/images/gallery/tabletennis.jpg",
    title: "Table Tennis",
    type: "image"
  },
  {
    _id: "5",
    url: "/assets/images/gallery/Swimming.jpg",
    title: "Swimming Classes",
    type: "image"
  },
  {
    _id: "6",
    url: "/assets/images/gallery/cyclingprogram.jpeg",
    title: "Cycling Training",
    type: "image"
  },
  {
    _id: "7",
    url: "/assets/images/gallery/chees.jpg",
    title: "Chess Academy",
    type: "image"
  },
  {
    _id: "8",
    url: "/assets/images/gallery/carrom board photography.jpg",
    title: "Carrom Board",
    type: "image"
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
          setVideos(FALLBACK_MEDIA);
        }
      } catch (err) {
        console.error("Error fetching media:", err);
        // Use fallback data on error
        setVideos(FALLBACK_MEDIA);
      } finally {
        setLoading(false);
      }
    };

    fetchMedia();
  }, []);


  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-montserrat">
      
      <div className="pt-8" />{/* Spacing for fixed navbar */}

      {/* ================= HEADER ================= */}
      <div className="text-center px-6 mb-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-6xl font-oswald font-bold uppercase mb-4 text-brand-black"
        >
          Our <span className="text-brand-red">Sports</span>
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
                  {video.type === "video" || video.url.endsWith(".mp4") ? (
                    <>
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
                        className="w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity duration-300">
                         <div className="w-12 h-12 bg-black/40 rounded-full flex items-center justify-center text-white backdrop-blur-sm border border-white/20">
                            <Play size={20} fill="currentColor" />
                         </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={video.url}
                      alt={video.title}
                      className="w-full h-full object-cover transition-all duration-700 opacity-90 group-hover:opacity-100 group-hover:scale-110"
                    />
                  )}
                </div>

                <div className="p-5 relative z-10 bg-white">
                  <h3 className="text-lg font-oswald font-bold text-brand-black uppercase leading-tight group-hover:text-brand-red transition-colors line-clamp-2">
                    {video.title}
                  </h3>
                  <div className="w-8 h-1 bg-slate-100 mt-3 mb-4 group-hover:bg-brand-red transition-colors" />
                  
                  <Link 
                    to="/contact" 
                    className="block w-full py-2 bg-slate-100 text-brand-black text-center text-sm font-bold uppercase rounded hover:bg-brand-red hover:text-white transition-all tracking-wider"
                  >
                    Join Now
                  </Link>
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
