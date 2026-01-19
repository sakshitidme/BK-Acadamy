import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { 
  MapPin, Phone, Mail, Facebook, Instagram, Twitter, Youtube, 
  Send, CheckCircle, ExternalLink, ChevronRight 
} from "lucide-react";
import { motion } from "framer-motion";
import API_URL from "../../config";

const Footer = () => {
  const [views, setViews] = useState(0);
  
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState("idle"); // idle, loading, success, error

  // Fetch Views
  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch(`${API_URL}/api/stats/increment`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        const data = await response.json();
        if (data.success) setViews(data.views);
      } catch (error) {
        console.error("Failed to fetch views:", error);
      }
    };
    fetchViews();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("loading");

    // 1. Prepare WhatsApp Message
    const waNumber = "918080195558"; // Country code + number
    const waMessage = encodeURIComponent(
      `*New Inquiry from Website*\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Email:* ${formData.email}\n*Message:* ${formData.message}`
    );
    const waUrl = `https://wa.me/${waNumber}?text=${waMessage}`;
    // 3. Optimistic Redirection: Open WhatsApp immediately
    window.open(waUrl, "_blank");

    try {
      // 2. Send to Backend (Background Process)
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 5000);
      } else {
        // WhatsApp already opened, so just log internal error
        console.error("Backend submission failed");
        setFormStatus("success"); // Show success to user since they are on WA
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setFormStatus("success"); 
    }
  };

  return (
    <footer className="w-full bg-brand-black text-slate-300 border-t-[6px] border-brand-red font-montserrat relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* COLUMN 1: BRANDING */}
          <div>
            <Link to="/home" className="inline-block mb-6 group">
              <div className="flex items-center gap-2">
                 <span className="font-oswald font-bold text-4xl text-brand-red skew-x-[-10deg] transition-transform group-hover:scale-110">
                   BK
                 </span>
                 <div className="flex flex-col">
                   <span className="font-oswald font-bold text-2xl uppercase text-white leading-none tracking-tighter">
                     Sports Academy
                   </span>
                   <span className="text-[10px] font-bold text-slate-400 tracking-[0.3em] uppercase ml-0.5 leading-none mt-1">
                     Since 2009
                   </span>
                 </div>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Forging champions through discipline, elite training, and unwavering dedication. Join the legacy of success.
            </p>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red hover:text-white transition-all duration-300">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS (SITE PLAYBOOK) */}
          <div>
            <h3 className="text-xl font-oswald font-bold text-white uppercase tracking-wider mb-6 border-l-4 border-brand-red pl-3">
              Academy Playbook
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              {[
                { name: "About The Academy", path: "/about" },
                { name: "Training Programs", path: "/programs" },
                { name: "Success Stories", path: "/testimonials" },
                { name: "Meet The Staff", path: "/staff" },
                { name: "Our Sports", path: "/our-sports" },
                { name: "Trekking Events", path: "/trek" },
              ].map((link, i) => (
                <li key={i}>
                  <Link to={link.path} className="flex items-center gap-2 hover:text-brand-red hover:translate-x-1 transition-all">
                    <ChevronRight size={14} className="text-brand-red" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: GET IN TOUCH */}
          <div>
            <h3 className="text-xl font-oswald font-bold text-white uppercase tracking-wider mb-6 border-l-4 border-brand-red pl-3">
              Contact Us
            </h3>
            <ul className="space-y-5 text-sm">
              <li className="flex items-start gap-4">
                <MapPin className="text-brand-red shrink-0" size={20} />
                <span className="opacity-80">
                   2nd Floor, Gajanan Plaza, Gharpure Ghat Road, Ashok Stambh,<br /> Nashik, Maharashtra, BK Educational & Welfare Society
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="text-brand-red shrink-0" size={20} />
                <span className="font-bold text-white tracking-wide">+91 80801 95558</span>
              </li>
              <li className="flex items-center gap-4">
                <Mail className="text-brand-red shrink-0" size={20} />
                <a href="bkgroupofeducation@gmail.com" className="hover:text-white transition">bkgroupofeducation@gmail.com</a>
              </li>
            </ul>

            {/* Total Views Badge */}
            <div className="mt-8 inline-flex items-center gap-3 px-4 py-2 bg-white/5 rounded-lg border border-white/10">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-red opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-red"></span>
              </span>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Total Views</span>
                <span className="font-oswald font-bold text-white text-lg">{views.toLocaleString()}</span>
              </div>
            </div>
          </div>

          {/* COLUMN 4: QUICK INQUIRY FORM */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-lg font-oswald font-bold text-white uppercase mb-4 flex items-center gap-2">
              <Send size={18} className="text-brand-red" /> Quick Inquiry
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-black/30 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-red transition placeholder:text-slate-600"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-black/30 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-red transition placeholder:text-slate-600"
              />
              <input 
                type="text" 
                name="phone"
                placeholder="Phone Number" 
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-black/30 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-red transition placeholder:text-slate-600"
              />
              <textarea 
                name="message"
                placeholder="Message" 
                rows="2"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-black/30 border border-white/10 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-brand-red transition placeholder:text-slate-600 resize-none"
              ></textarea>
              
              <button 
                type="submit" 
                disabled={formStatus === "loading" || formStatus === "success"}
                className={`w-full py-2.5 font-bold uppercase tracking-wider text-sm rounded transition-all flex items-center justify-center gap-2
                  ${formStatus === "success" 
                    ? "bg-green-600 text-white cursor-default" 
                    : "bg-brand-red text-white hover:bg-white hover:text-brand-red shadow-lg"
                  }`}
              >
                {formStatus === "loading" ? "Sending..." : formStatus === "success" ? <>Sent <CheckCircle size={16}/></> : "Send Message"}
              </button>
            </form>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} BK Sports Academy. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
             <Link to="/terms" className="hover:text-white">Terms of Service</Link>
             <Link to="/sitemap" className="hover:text-white">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
