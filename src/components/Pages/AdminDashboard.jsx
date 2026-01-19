import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import MediaManager from "../admin/MediaManager"
import ProgramManager from "../admin/ProgramManager"
import EventManager from "../admin/EventManager"
import ContactManager from "../admin/ContactManager"
import useAuth from "../../hooks/useAuth"
import API_URL from "../../config"

export default function AdminDashboard() {
  const navigate = useNavigate()
  const { user, logout, loading: authLoading } = useAuth()

  const [loading, setLoading] = useState(true)
  const [users, setUsers] = useState([])
  const [totalEnquiries, setTotalEnquiries] = useState(0)
  const [activeTab, setActiveTab] = useState("dashboard")

  useEffect(() => {
    if (authLoading) return; // Wait for auth to load

    if (!user || user.role !== "admin") {
      navigate("/")
      return
    }

    const fetchData = async () => {
      try {
        // Correct auth token usage: Retrieve from localStorage since useAuth context might not always expose raw token
        const token = localStorage.getItem("token"); 

        const usersRes = await fetch(`${API_URL}/api/admin/users`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        const usersData = await usersRes.json()
        setUsers(usersData.users || [])

        const enquiryRes = await fetch(`${API_URL}/api/enquiry`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        const enquiryData = await enquiryRes.json()
        setTotalEnquiries(enquiryData.enquiries ? enquiryData.enquiries.length : 0)
      } catch (err) {
        console.error(err)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [navigate, user, authLoading])

  const handleLogout = () => {
    localStorage.clear()
    navigate("/")
  }

  const downloadUsersCSV = () => {
    if (users.length === 0) {
      alert("No users to export");
      return;
    }

    const headers = ["Name,Email,Role,Last Login,Joined"];
    const rows = users.map(u => 
      `"${u.name}","${u.email}","${u.role}","${u.lastLogin ? new Date(u.lastLogin).toLocaleString() : 'Never'}","${new Date(u.createdAt || Date.now()).toLocaleDateString()}"`
    );

    const csvContent = [headers, ...rows].join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `users_report_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading Dashboard...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-brand-black text-white p-6 md:p-10 font-montserrat relative overflow-hidden">
       {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-red/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* ================= HEADER ================= */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 relative z-10 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-4xl font-oswald font-bold text-white uppercase tracking-wider">
            Admin <span className="text-brand-red">Dashboard</span>
          </h1>
          <p className="text-slate-400 text-sm mt-1">Manage your academy content dynamically</p>
        </div>

        <button
          onClick={logout}
          className="mt-4 md:mt-0 bg-brand-red text-white px-6 py-2 rounded font-oswald font-bold uppercase tracking-wider hover:bg-white hover:text-brand-red transition-all shadow-[0_0_15px_rgba(220,38,38,0.5)]"
        >
          Logout
        </button>
      </div>

      {/* ================= TABS NAVIGATION ================= */}
      <div className="flex gap-4 mb-8 overflow-x-auto pb-2 relative z-10 scrollbar-hide">
        {[
          { id: "dashboard", label: "Overview", icon: "📊" },
          { id: "gallery", label: "Gallery", icon: "🎬" },
          { id: "programs", label: "Programs", icon: "🏆" },
          { id: "events", label: "Events", icon: "📢" },
          { id: "contacts", label: "Inquiries", icon: "📨" },
          { id: "users", label: "Users", icon: "👥" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-oswald font-bold uppercase tracking-wide transition whitespace-nowrap flex items-center gap-2 border ${
              activeTab === tab.id
                ? "bg-brand-red text-white border-brand-red shadow-[0_0_15px_rgba(220,38,38,0.4)]"
                : "bg-white/5 text-slate-400 border-white/5 hover:bg-white/10 hover:text-white"
            }`}
          >
            <span>{tab.icon}</span> {tab.label}
          </button>
        ))}
      </div>

      {/* ================= TAB CONTENT ================= */}
      <div className="relative z-10">
        {activeTab === "dashboard" && (
          <div className="space-y-8 animate-fade-in">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-brand-red">
                  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline></svg>
                </div>
                <h2 className="text-5xl font-oswald font-bold text-white mb-2">
                  {users.length}
                </h2>
                <p className="text-brand-red font-bold uppercase tracking-widest text-sm">Total Users</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-brand-red">
                   <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
                </div>
                <h2 className="text-5xl font-oswald font-bold text-white mb-2">
                  {totalEnquiries}
                </h2>
                <p className="text-brand-red font-bold uppercase tracking-widest text-sm">Total Inquiries</p>
              </div>

              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition text-brand-red">
                   <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.8)]"></span>
                  <span className="text-green-400 font-bold uppercase text-xs tracking-wider">Online</span>
                </div>
                <h2 className="text-2xl font-oswald font-bold text-white leading-tight">
                  CMS v2.0
                </h2>
                <p className="text-slate-400 text-sm mt-1">System Operational</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-red/10 to-transparent border border-brand-red/20 rounded-2xl p-8">
              <h2 className="text-2xl font-oswald font-bold text-white mb-4 uppercase">
                Welcome to BK Academy Control Center
              </h2>
              <p className="text-slate-300 max-w-3xl leading-relaxed">
                You have full control over the website content. Use the tabs above to manage dynamic sections.
                All changes reflect immediately on the live website.
              </p>
            </div>
          </div>
        )}

        {activeTab === "gallery" && <MediaManager />}

        {activeTab === "programs" && <ProgramManager />}

        {activeTab === "events" && <EventManager />}

        {activeTab === "contacts" && <ContactManager />}

        {activeTab === "users" && (
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-fade-in">
            <div className="p-6 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-2xl font-oswald font-bold text-white uppercase tracking-wide">
                Registered Users
              </h2>
              <div className="flex items-center gap-4">
                 <div className="text-xs text-slate-500 font-mono uppercase">
                   Total: {users.length} members
                 </div>
                 <button 
                  onClick={downloadUsersCSV}
                  className="bg-green-600/20 px-4 py-2 rounded border border-green-600/30 text-green-500 font-bold text-xs uppercase tracking-wide hover:bg-green-600 hover:text-white transition-all flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M14.2 10.3c.7-.7 1.8-.7 2.5 0l.9-.9c.5-.5.5-1.3 0-1.8l-3.7-3.7c-.5-.5-1.3-.5-1.8 0l-.9.9c-.7.7-.7 1.8 0 2.5l3 3z"/><path d="M10 20v-7H4v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4.5"/><path d="M10 13h4"/></svg> 
                  Export CSV
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-white/5 text-slate-400 text-xs uppercase tracking-wider font-bold">
                    <th className="px-6 py-4">Name</th>
                    <th className="px-6 py-4">Email</th>
                    <th className="px-6 py-4">Role</th>
                    <th className="px-6 py-4">Joined / Last Login</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-white/5">
                  {users.map((u) => (
                    <tr
                      key={u._id}
                      className="hover:bg-white/5 transition duration-150"
                    >
                      <td className="px-6 py-4 font-semibold text-white">{u.name}</td>
                      <td className="px-6 py-4 text-slate-300">{u.email}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded text-xs font-bold uppercase tracking-wide border ${
                          u.role === 'admin' 
                            ? 'bg-brand-red/20 text-brand-red border-brand-red/30' 
                            : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                        }`}>
                          {u.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-slate-500 text-sm font-mono">
                        {u.lastLogin
                          ? new Date(u.lastLogin).toLocaleString()
                          : "Never"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
