import { useEffect, useState } from "react";
import { Mail, Phone, Calendar, Trash2, Search, RefreshCw, FileSpreadsheet } from "lucide-react";
import API_URL from "../../config";

export default function ContactManager() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchInquiries = async () => {
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/enquiry`);
      const data = await res.json();
      setInquiries(data.enquiries || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const downloadCSV = () => {
    if (inquiries.length === 0) {
      alert("No data to export");
      return;
    }

    const headers = ["Name,Email,Phone,Message,Date"];
    const rows = inquiries.map(inq => 
      `"${inq.name}","${inq.email}","${inq.phone}","${inq.message.replace(/"/g, '""')}","${new Date(inq.createdAt).toLocaleDateString()}"`
    );

    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `inquiries_report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure?")) return;
    try {
      await fetch(`${API_URL}/api/enquiry/${id}`, { method: "DELETE" });
      setInquiries(inquiries.filter((inq) => inq._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const filteredInquiries = inquiries.filter(inq => 
    inq.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    inq.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black/20">
        <div>
          <h2 className="text-2xl font-oswald font-bold text-white flex items-center gap-3 uppercase tracking-wide">
            <Mail className="text-brand-red w-6 h-6" /> Inquiries & Messages
          </h2>
          <p className="text-sm text-slate-400 mt-1 font-montserrat">Manage messages from the website contact form</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={downloadCSV}
            className="p-3 bg-green-600/20 border border-green-600/30 rounded-lg hover:bg-green-600 hover:text-white transition-all text-green-500 font-bold uppercase text-xs tracking-wider flex items-center gap-2"
            title="Download CSV"
          >
            <FileSpreadsheet size={18} /> Export
          </button>
          <button 
            onClick={fetchInquiries} 
            className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-brand-red hover:text-white hover:border-brand-red transition-all text-slate-300"
            title="Refresh"
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="p-6 border-b border-white/10 bg-white/5 flex gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search by name or email..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/10 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent placeholder:text-slate-600 font-montserrat"
          />
        </div>
      </div>

      {/* List */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm font-montserrat">
          <thead className="bg-black/40 text-slate-400 font-bold uppercase tracking-wider text-xs border-b border-white/10">
            <tr>
              <th className="px-6 py-4">Sender</th>
              <th className="px-6 py-4">Contact Info</th>
              <th className="px-6 py-4">Message</th>
              <th className="px-6 py-4">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {loading ? (
              <tr>
                <td colSpan="4" className="px-6 py-12 text-center text-slate-500 italic">Loading inquiries...</td>
              </tr>
            ) : filteredInquiries.length === 0 ? (
              <tr>
                <td colSpan="4" className="px-6 py-12 text-center text-slate-500 italic">No inquiries found.</td>
              </tr>
            ) : (
              filteredInquiries.map((inq) => (
                <tr key={inq._id} className="hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="font-bold text-white text-base">{inq.name}</div>
                  </td>
                  <td className="px-6 py-4">
                     <div className="flex flex-col gap-2">
                       <a href={`mailto:${inq.email}`} className="flex items-center gap-2 text-brand-red hover:text-white transition-colors font-medium">
                         <Mail size={14} /> {inq.email}
                       </a>
                       <div className="flex items-center gap-2 text-slate-400">
                         <Phone size={14} /> {inq.phone}
                       </div>
                     </div>
                  </td>
                  <td className="px-6 py-4 max-w-sm">
                    <div className="bg-black/20 p-3 rounded-lg border border-white/5">
                      <p className="text-slate-300 leading-relaxed text-sm group-hover:text-white transition-colors">
                        {inq.message}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500 whitespace-nowrap text-xs">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Calendar size={14} />
                      {new Date(inq.createdAt).toLocaleDateString()}
                    </div>
                    <div>
                      {new Date(inq.createdAt).toLocaleTimeString()}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
