import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react"; // Assuming lucide-react is available, or use a text 'X'
import API_URL from "../../config";

// Your actual video from public/assets/videos folder
const FALLBACK_EVENT = {
  _id: "event1",
  title: "BK Marathon 2026",
  description: "Run Towards Success. We Shape Careers. Join us for the BK Marathon!",
  date: "2026-02-22",
  time: "5:00 AM - 10:00 AM",
  location: "MVP Marathon Chowk, Nashik",
  mediaUrl: "/assets/videos/marahton.mp4",
  categories: [
    { name: "3k Run", fee: "200" },
    { name: "5K Run", fee: "350" },
    { name: "10K Run", fee: "500" },
  ],
  registrationEnabled: true
};

export default function NoticeBoard() {
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    fee: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`${API_URL}/api/events/active`);
        const data = await res.json();
        
        // Use CMS data if available, otherwise use fallback
        if (data.event) {
          setEvent(data.event);
        } else {
          setEvent(FALLBACK_EVENT);
        }
      } catch (err) {
        console.error("Error fetching event:", err);
        // Use fallback data on error
        setEvent(FALLBACK_EVENT);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let fee = formData.fee;

    if (name === "category" && event) {
      const selectedCategory = event.categories.find(cat => cat.name === value);
      if (selectedCategory) {
        fee = selectedCategory.fee;
      }
    }

    setFormData({ ...formData, [name]: value, fee });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phone, category, fee } = formData;

    if (!name || !phone || !category || !fee) {
      alert("Please fill all fields");
      return;
    }

    // Redirect to Run India's website for BK marathon payment
    // Run India organizes the marathon
    window.open("https://www.runindia.in/home/login?red=b25saW5lL2Jvb2tpbmcvTWpRdw==", "_blank");
    
    // Optionally, you can also save the registration data to your backend
    // before redirecting (uncomment if needed)
    /*
    setSubmitting(true);
    try {
      await fetch(`${API_URL}/api/marathon/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, category, fee }),
      });
    } catch (err) {
      console.error("Error saving registration:", err);
    } finally {
      setSubmitting(false);
    }
    */
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-900 bg-slate-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">No Active Events</h2>
          <p className="text-slate-600">Check back later for upcoming events!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      {/* ================= BACKGROUND ================= */}
      {event.mediaUrl && (
        <>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover -z-10"
          >
            <source src={event.mediaUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/90 -z-10" />
        </>
      )}

      {/* ================= PAGE CONTENT ================= */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-start relative z-10">
        {/* ================= NOTICE INFO ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl
          border border-slate-200 shadow-2xl p-8"
        >
          <h1 className="text-4xl font-extrabold text-red-600 mb-6">
            Notice Board
          </h1>

          <h2 className="text-2xl font-bold text-slate-900 mb-3">
            🏃 {event.title}
          </h2>

          <p className="text-slate-600 mb-4">{event.description}</p>

          <div className="space-y-2 text-slate-700 text-sm mb-5">
            <p>📅 <strong>Date:</strong> {event.date}</p>
            <p>🕔 <strong>Time:</strong> {event.time}</p>
            <p>📍 <strong>Location:</strong> {event.location}</p>
          </div>

          {event.categories && event.categories.length > 0 && (
            <div className="mt-5">
              <h3 className="font-semibold mb-2 text-red-600">
                Categories & Fees
              </h3>
              <ul className="space-y-1 text-slate-600 mb-6">
                {event.categories.map((cat, i) => (
                  <li key={i}>• {cat.name} – ₹{cat.fee}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Event Attachments (Popups) */}
          <div className="mt-6">
             <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📋</span> Event Attachments
             </h3>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Flyer Card */}
                <motion.div 
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedImage("/assets/images/bk-marathon-flyer.jpg")}
                  className="cursor-pointer group relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-[4/3]"
                >
                   <img 
                     src="/assets/images/bk-marathon-flyer.jpg" 
                     alt="View Flyer" 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />
                   
                   <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-red-600 w-fit px-3 py-1 rounded-full text-xs font-bold text-white mb-2 shadow-sm">
                        OFFICIAL FLYER
                      </div>
                      <p className="text-white font-semibold text-lg drop-shadow-md group-hover:text-red-100 transition-colors">
                        View Event Details
                      </p>
                   </div>
                   
                   {/* Center Icon on Hover */}
                   <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                      </div>
                   </div>
                </motion.div>

                {/* Prizes Card */}
                <motion.div 
                   whileHover={{ y: -5, scale: 1.02 }}
                   whileTap={{ scale: 0.98 }}
                   onClick={() => setSelectedImage("/assets/images/new-marathon-prizes.jpg")}
                   className="cursor-pointer group relative rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-[4/3]"
                >
                   <img 
                     src="/assets/images/new-marathon-prizes.jpg" 
                     alt="View Prizes" 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300" />

                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-orange-500 w-fit px-3 py-1 rounded-full text-xs font-bold text-white mb-2 shadow-sm">
                        CASH PRIZES
                      </div>
                      <p className="text-white font-semibold text-lg drop-shadow-md group-hover:text-orange-100 transition-colors">
                        View Prize Pool
                      </p>
                   </div>
                   
                   {/* Center Icon on Hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
                      </div>
                   </div>
                </motion.div>
             </div>
          </div>

          <p className="mt-5 text-slate-600">
            🎖️ Attractive prizes & certificates for winners in all categories. Click above to see details.
          </p>
        </motion.div>

        {/* ================= REGISTRATION FORM ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl
          border border-slate-200 shadow-2xl p-8 sticky top-24"
        >
          <h3 className="text-2xl font-bold text-red-600 mb-6 text-center">
            Event Registration
          </h3>

          {!event.registrationEnabled ? (
            <div className="text-center py-10 text-gray-300">
              Registration is currently closed for this event.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl
                bg-slate-50 border border-slate-200 text-slate-900
                focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-slate-400"
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl
                bg-slate-50 border border-slate-200 text-slate-900
                focus:outline-none focus:ring-2 focus:ring-red-500 placeholder-slate-400"
                required
              />

              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl text-slate-900
                bg-slate-50 border border-slate-200
                focus:outline-none focus:ring-2 focus:ring-red-500
                [&>option]:text-gray-900 [&>option]:bg-white"
                required
              >
                <option value="">Select Category</option>
                {event.categories.map((cat, i) => (
                  <option key={i} value={cat.name}>{cat.name}</option>
                ))}
              </select>

              {formData.fee && (
                <p className="text-center font-semibold text-green-600">
                  Entry Fee: ₹{formData.fee}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-full font-semibold text-white
                bg-gradient-to-r from-red-600 to-orange-600
                hover:opacity-90 transition disabled:opacity-60 shadow-lg"
              >
                {submitting ? "Registering..." : "Proceed to Payment"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      {/* ================= IMAGE POPUP MODAL ================= */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 text-white hover:text-red-500 rounded-full transition-colors z-10 backdrop-blur-md"
              >
                {/* Close Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
              </button>
              
              <div className="w-full h-full flex items-center justify-center bg-slate-900">
                <img 
                  src={selectedImage} 
                  alt="Event Detail" 
                  className="max-w-full max-h-[85vh] object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

