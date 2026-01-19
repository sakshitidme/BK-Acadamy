import { useState, useEffect } from "react"
import API_URL from "../../config"

export default function ProgramManager() {
  const [programs, setPrograms] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingProgram, setEditingProgram] = useState(null)
  const [formData, setFormData] =useState({
    title: "",
    description: "",
    mediaUrl: "",
    mediaType: "video",
    order: 0,
    isFeatured: false,
  })

  const token = localStorage.getItem("token")

  useEffect(() => {
    fetchPrograms()
  }, [])

  const fetchPrograms = async () => {
    try {
      const res = await fetch(`${API_URL}/api/programs`)
      const data = await res.json()
      setPrograms(data.programs || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const url = editingProgram
        ? `${API_URL}/api/programs/${editingProgram._id}`
        : `${API_URL}/api/programs`

      const method = editingProgram ? "PUT" : "POST"

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        alert(data.message)
        setShowForm(false)
        setEditingProgram(null)
        setFormData({ title: "", description: "", mediaUrl: "", mediaType: "video", order: 0, isFeatured: false })
        fetchPrograms()
      } else {
        alert(data.message)
      }
    } catch (err) {
      alert("Error saving program")
    }
  }

  const handleEdit = (item) => {
    setEditingProgram(item)
    setFormData({
      title: item.title,
      description: item.description,
      mediaUrl: item.mediaUrl,
      mediaType: item.mediaType,
      order: item.order,
      isFeatured: item.isFeatured,
    })
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this program?")) return

    try {
      const res = await fetch(`${API_URL}/api/programs/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })

      const data = await res.json()
      alert(data.message)
      fetchPrograms()
    } catch (err) {
      alert("Error deleting program")
    }
  }

  if (loading) return <div className="text-center py-10">Loading...</div>

  return (
    <div className="p-6 animate-fade-in font-montserrat">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-oswald font-bold text-white uppercase tracking-wide">
          Manage <span className="text-brand-red">Programs</span>
        </h2>
        <button
          onClick={() => {
            setShowForm(!showForm)
            setEditingProgram(null)
            setFormData({ title: "", description: "", mediaUrl: "", mediaType: "video", order: 0, isFeatured: false })
          }}
          className="bg-brand-red text-white px-8 py-3 rounded-lg font-oswald font-bold uppercase tracking-wider hover:bg-white hover:text-brand-red transition-all shadow-lg"
        >
          {showForm ? "Cancel" : "+ Add Program"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px]" />
          
          <h3 className="text-2xl font-oswald font-bold mb-6 text-white uppercase tracking-wide relative z-10">
            {editingProgram ? "Edit Program" : "Add New Program"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Program Title</label>
              <input
                type="text"
                placeholder="e.g. Endurance Training"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Description</label>
              <textarea
                placeholder="Detailed description of the program..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all font-montserrat"
                rows="3"
                required
              />
            </div>

            <div>
              <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Media URL (Video/Image)</label>
              <input
                type="text"
                placeholder="e.g. /assets/videos/endurance.mp4"
                value={formData.mediaUrl}
                onChange={(e) => setFormData({ ...formData, mediaUrl: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all font-mono text-sm"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 items-end">
              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Display Order</label>
                <input
                  type="number"
                  placeholder="Order (0-100)"
                  value={formData.order}
                  onChange={(e) => setFormData({ ...formData, order: parseInt(e.target.value) })}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all"
                />
              </div>

              <label className="flex items-center gap-3 cursor-pointer group bg-black/20 p-3 rounded-lg border border-white/5 hover:bg-black/40 transition-colors">
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.isFeatured ? 'bg-brand-red border-brand-red' : 'border-slate-500 group-hover:border-slate-300'}`}>
                   {formData.isFeatured && <span className="text-white text-xs">✓</span>}
                </div>
                <input
                  type="checkbox"
                  checked={formData.isFeatured}
                  onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                  className="hidden"
                />
                <span className="text-slate-300 font-bold uppercase text-xs tracking-wider group-hover:text-white transition">Set as Featured Program</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-red text-white py-4 rounded-lg font-oswald font-bold uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all shadow-lg"
            >
              {editingProgram ? "Save Changes" : "Create Program"}
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((item) => (
          <div
            key={item._id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 group shadow-xl relative"
          >
            {item.isFeatured && (
               <div className="absolute top-4 left-4 z-10">
                 <span className="bg-brand-red text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg border border-white/20">
                   ⭐ Featured
                 </span>
               </div>
            )}
            
            <div className="h-48 overflow-hidden relative bg-black">
              <video
                src={item.mediaUrl}
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                muted
                loop
                // autoPlay
              />
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
            </div>

            <div className="p-6 relative -mt-6">
              <div className="bg-brand-black border border-white/10 rounded-xl p-4 shadow-xl">
                 <h3 className="font-oswald font-bold text-xl text-white mb-2 uppercase tracking-wide">{item.title}</h3>
                 <p className="text-sm text-slate-400 mb-4 line-clamp-3 leading-relaxed">{item.description}</p>
                 <div className="text-xs text-slate-600 font-mono uppercase mb-4">Display Order: {item.order}</div>

                 <div className="flex gap-3">
                   <button
                     onClick={() => handleEdit(item)}
                     className="flex-1 bg-blue-600/20 text-blue-400 border border-blue-600/30 py-2 rounded-lg font-bold text-xs uppercase tracking-wide hover:bg-blue-600 hover:text-white transition-all"
                   >
                     Edit
                   </button>
                   <button
                     onClick={() => handleDelete(item._id)}
                     className="flex-1 bg-red-600/20 text-red-500 border border-red-600/30 py-2 rounded-lg font-bold text-xs uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all"
                   >
                     Delete
                   </button>
                 </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {programs.length === 0 && !loading && (
        <div className="text-center py-24 border-2 border-dashed border-white/10 rounded-3xl">
          <p className="text-slate-500 text-lg">No programs found.</p>
          <button onClick={() => { setShowForm(true); setEditingProgram(null); }} className="text-brand-red font-bold mt-2 hover:underline uppercase tracking-wide text-sm">Create your first program</button>
        </div>
      )}
    </div>
  )
}
