import { useState, useEffect } from "react"
import API_URL from "../../config"

export default function MediaManager() {
  const [media, setMedia] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingMedia, setEditingMedia] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    type: "video",
    url: "",
    category: "",
    thumbnail: "",
  })

  const token = localStorage.getItem("token")

  useEffect(() => {
    fetchMedia()
  }, [])

  const fetchMedia = async () => {
    try {
      const res = await fetch(`${API_URL}/api/media`)
      const data = await res.json()
      setMedia(data.media || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const url = editingMedia
        ? `${API_URL}/api/media/${editingMedia._id}`
        : `${API_URL}/api/media`

      const method = editingMedia ? "PUT" : "POST"

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
        setEditingMedia(null)
        setFormData({ title: "", type: "video", url: "", category: "", thumbnail: "" })
        fetchMedia()
      } else {
        alert(data.message)
      }
    } catch (err) {
      alert("Error saving media")
    }
  }

  const handleEdit = (item) => {
    setEditingMedia(item)
    setFormData({
      title: item.title,
      type: item.type,
      url: item.url,
      category: item.category,
      thumbnail: item.thumbnail || "",
    })
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this media?")) return

    try {
      const res = await fetch(`${API_URL}/api/media/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })

      const data = await res.json()
      alert(data.message)
      fetchMedia()
    } catch (err) {
      alert("Error deleting media")
    }
  }

  if (loading) return <div className="text-center py-10">Loading...</div>

  return (
    <div className="p-6 animate-fade-in font-montserrat">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-oswald font-bold text-white uppercase tracking-wide">
          Manage <span className="text-brand-red">Gallery</span>
        </h2>
        <button
          onClick={() => {
            setShowForm(!showForm)
            setEditingMedia(null)
            setFormData({ title: "", type: "video", url: "", category: "", thumbnail: "" })
          }}
          className="bg-brand-red text-white px-8 py-3 rounded-lg font-oswald font-bold uppercase tracking-wider hover:bg-white hover:text-brand-red transition-all shadow-lg"
        >
          {showForm ? "Cancel" : "+ Add Media"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px]" />
          
          <h3 className="text-2xl font-oswald font-bold mb-6 text-white uppercase tracking-wide relative z-10">
            {editingMedia ? "Edit Media" : "Add New Media"}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Title</label>
              <input
                type="text"
                placeholder="e.g. Football Training Session"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Media Type</label>
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all appearance-none"
                >
                  <option value="video">Video</option>
                  <option value="image">Image</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Category</label>
                <input
                  type="text"
                  placeholder="e.g. Football"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Media URL</label>
              <input
                type="text"
                placeholder="e.g. /assets/videos/football.mp4"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all font-mono text-sm"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-brand-red text-white py-4 rounded-lg font-oswald font-bold uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all shadow-lg"
            >
              {editingMedia ? "Save Changes" : "Add to Gallery"}
            </button>
          </form>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {media.map((item) => (
          <div
            key={item._id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 group shadow-xl"
          >
            <div className="h-48 overflow-hidden relative">
              {item.type === "video" ? (
                <video
                  src={item.url}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  muted
                  loop
                  // autoPlay // Disabled autoplay for better performance
                />
              ) : (
                <img src={item.url} alt={item.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
              )}
              <div className="absolute top-2 right-2">
                 <span className="bg-black/60 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider border border-white/10">
                   {item.type}
                 </span>
              </div>
            </div>

            <div className="p-5">
              <h3 className="font-oswald font-bold text-lg text-white mb-1 uppercase tracking-wide truncate">{item.title}</h3>
              <p className="text-xs text-brand-red font-bold uppercase tracking-widest mb-4">{item.category}</p>

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
        ))}
      </div>

      {media.length === 0 && !loading && (
        <div className="text-center py-24 border-2 border-dashed border-white/10 rounded-3xl">
          <p className="text-slate-500 text-lg">No media items found.</p>
          <button onClick={() => { setShowForm(true); setEditingMedia(null); }} className="text-brand-red font-bold mt-2 hover:underline uppercase tracking-wide text-sm">Add your first media</button>
        </div>
      )}
    </div>
  )
}
