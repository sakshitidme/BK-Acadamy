import { useState, useEffect } from "react"
import API_URL from "../../config"

export default function EventManager() {
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)
  const [showForm, setShowForm] = useState(false)
  const [editingEvent, setEditingEvent] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    categories: [{ name: "", fee: 0 }],
    mediaUrl: "",
    isActive: true,
    registrationEnabled: true,
  })

  const token = localStorage.getItem("token")

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const res = await fetch(`${API_URL}/api/events`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      const data = await res.json()
      setEvents(data.events || [])
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const url = editingEvent
        ? `${API_URL}/api/events/${editingEvent._id}`
        : `${API_URL}/api/events`

      const method = editingEvent ? "PUT" : "POST"

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
        setEditingEvent(null)
        setFormData({
          title: "",
          description: "",
          date: "",
          time: "",
          location: "",
          categories: [{ name: "", fee: 0 }],
          mediaUrl: "",
          isActive: true,
          registrationEnabled: true,
        })
        fetchEvents()
      } else {
        alert(data.message)
      }
    } catch (err) {
      alert("Error saving event")
    }
  }

  const handleEdit = (item) => {
    setEditingEvent(item)
    setFormData({
      title: item.title,
      description: item.description,
      date: item.date,
      time: item.time,
      location: item.location,
      categories: item.categories.length > 0 ? item.categories : [{ name: "", fee: 0 }],
      mediaUrl: item.mediaUrl || "",
      isActive: item.isActive,
      registrationEnabled: item.registrationEnabled,
    })
    setShowForm(true)
  }

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this event?")) return

    try {
      const res = await fetch(`${API_URL}/api/events/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      })

      const data = await res.json()
      alert(data.message)
      fetchEvents()
    } catch (err) {
      alert("Error deleting event")
    }
  }

  const addCategory = () => {
    setFormData({
      ...formData,
      categories: [...formData.categories, { name: "", fee: 0 }],
    })
  }

  const updateCategory = (index, field, value) => {
    const newCategories = [...formData.categories]
    newCategories[index][field] = field === "fee" ? parseInt(value) : value
    setFormData({ ...formData, categories: newCategories })
  }

  const removeCategory = (index) => {
    const newCategories = formData.categories.filter((_, i) => i !== index)
    setFormData({ ...formData, categories: newCategories })
  }

  if (loading) return <div className="text-center py-10">Loading...</div>

  return (
    <div className="p-6 animate-fade-in font-montserrat">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <h2 className="text-3xl font-oswald font-bold text-white uppercase tracking-wide">
          Manage <span className="text-brand-red">Events</span>
        </h2>
        <button
          onClick={() => {
            setShowForm(!showForm)
            setEditingEvent(null)
            setFormData({
              title: "",
              description: "",
              date: "",
              time: "",
              location: "",
              categories: [{ name: "", fee: 0 }],
              mediaUrl: "",
              isActive: true,
              registrationEnabled: true,
            })
          }}
          className="bg-brand-red text-white px-8 py-3 rounded-lg font-oswald font-bold uppercase tracking-wider hover:bg-white hover:text-brand-red transition-all shadow-lg"
        >
          {showForm ? "Cancel" : "+ Create Event"}
        </button>
      </div>

      {showForm && (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 mb-8 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/10 rounded-full blur-[80px]" />
           
          <h3 className="text-2xl font-oswald font-bold mb-6 text-white uppercase tracking-wide relative z-10">
            {editingEvent ? "Edit Event Details" : "New Event Details"}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
            <div>
              <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Event Title</label>
              <input
                type="text"
                placeholder="e.g. Nashik MVP Marathon 2026"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all"
                required
              />
            </div>

            <div>
              <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Description</label>
              <textarea
                placeholder="Brief description of the event..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all font-montserrat"
                rows="3"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Date</label>
                <input
                  type="text"
                  placeholder="e.g. Sunday, 22 Feb 2026"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all"
                  required
                />
              </div>

              <div>
                <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Time</label>
                <input
                  type="text"
                  placeholder="e.g. 5:00 AM - 10:00 AM"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Location</label>
              <input
                type="text"
                placeholder="Event Venue"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all"
                required
              />
            </div>

            <div className="bg-black/20 p-6 rounded-xl border border-white/5">
              <label className="block text-sm font-bold text-white uppercase tracking-wide mb-4">Categories & Fees</label>
              <div className="space-y-3">
                {formData.categories.map((cat, index) => (
                  <div key={index} className="flex gap-4 items-center">
                    <input
                      type="text"
                      placeholder="Category (e.g., 3km Run)"
                      value={cat.name}
                      onChange={(e) => updateCategory(index, "name", e.target.value)}
                      className="flex-1 px-4 py-2 rounded bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-brand-red text-sm"
                      required
                    />
                    <input
                      type="number"
                      placeholder="Fee (₹)"
                      value={cat.fee}
                      onChange={(e) => updateCategory(index, "fee", e.target.value)}
                      className="w-32 px-4 py-2 rounded bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-1 focus:ring-brand-red text-sm"
                      required
                    />
                    {formData.categories.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeCategory(index)}
                        className="p-2 bg-red-500/20 text-red-500 rounded hover:bg-red-500 hover:text-white transition"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={addCategory}
                className="mt-4 text-xs font-bold uppercase tracking-wider text-brand-red hover:text-white transition-colors"
              >
                + Add Another Category
              </button>
            </div>

            <div>
              <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">Promotional Media URL (Optional)</label>
              <input
                type="text"
                placeholder="Link to image/video"
                value={formData.mediaUrl}
                onChange={(e) => setFormData({ ...formData, mediaUrl: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-brand-red placeholder:text-slate-600 transition-all"
              />
            </div>

            <div className="flex gap-8 py-2">
              <label className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.isActive ? 'bg-brand-red border-brand-red' : 'border-slate-500 group-hover:border-slate-300'}`}>
                   {formData.isActive && <span className="text-white text-xs">✓</span>}
                </div>
                <input
                  type="checkbox"
                  checked={formData.isActive}
                  onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                  className="hidden"
                />
                <span className="text-slate-300 font-medium group-hover:text-white transition">Active (Visible)</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer group">
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.registrationEnabled ? 'bg-brand-red border-brand-red' : 'border-slate-500 group-hover:border-slate-300'}`}>
                   {formData.registrationEnabled && <span className="text-white text-xs">✓</span>}
                </div>
                <input
                  type="checkbox"
                  checked={formData.registrationEnabled}
                  onChange={(e) => setFormData({ ...formData, registrationEnabled: e.target.checked })}
                  className="hidden"
                />
                <span className="text-slate-300 font-medium group-hover:text-white transition">Enable Registration</span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-brand-red text-white py-4 rounded-lg font-oswald font-bold uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all shadow-lg"
            >
              {editingEvent ? "Save Changes" : "Publish Event"}
            </button>
          </form>
        </div>
      )}

      <div className="space-y-6">
        {events.map((item) => (
          <div
            key={item._id}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 hover:bg-white/10 transition duration-300 group"
          >
            <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
              <div>
                <div className="flex items-center gap-4 mb-3">
                   <h3 className="font-oswald font-bold text-2xl text-white uppercase tracking-wide">{item.title}</h3>
                   {item.isActive ? (
                    <span className="bg-green-500/20 text-green-400 border border-green-500/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Active</span>
                  ) : (
                    <span className="bg-slate-500/20 text-slate-400 border border-slate-500/30 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Inactive</span>
                  )}
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-4 max-w-2xl">{item.description}</p>
                
                <div className="flex flex-wrap gap-6 text-sm text-slate-300 font-medium">
                   <div className="flex items-center gap-2">
                     <span className="text-brand-red">📅</span> {item.date}
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="text-brand-red">🕔</span> {item.time}
                   </div>
                   <div className="flex items-center gap-2">
                     <span className="text-brand-red">📍</span> {item.location}
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-black/20 rounded-xl p-4 mb-6 border border-white/5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-3">Categories</h4>
              <div className="flex gap-3 flex-wrap">
                {item.categories.map((cat, i) => (
                  <span key={i} className="bg-white/10 px-4 py-1.5 rounded text-sm text-white border border-white/5">
                    {cat.name} <span className="text-slate-400 ml-1">₹{cat.fee}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => handleEdit(item)}
                className="bg-blue-600/20 text-blue-400 border border-blue-600/30 px-6 py-2 rounded font-bold text-sm uppercase tracking-wide hover:bg-blue-600 hover:text-white transition-all"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-600/20 text-red-500 border border-red-600/30 px-6 py-2 rounded font-bold text-sm uppercase tracking-wide hover:bg-red-600 hover:text-white transition-all"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {events.length === 0 && !loading && (
        <div className="text-center py-24 border-2 border-dashed border-white/10 rounded-3xl">
          <p className="text-slate-500 text-lg">No events found in the system.</p>
          <button onClick={() => { setShowForm(true); setEditingEvent(null); }} className="text-brand-red font-bold mt-2 hover:underline uppercase tracking-wide text-sm">Create your first event</button>
        </div>
      )}
    </div>
  )
}
