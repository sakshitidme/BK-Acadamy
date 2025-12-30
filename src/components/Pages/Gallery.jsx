
import React from 'react'

const videos = [
  { title: 'Chess', src: '/assets/videos/chesss.mp4' },
  { title: 'Football', src: '/assets/videos/football2.mp4' },
  { title: 'Swimming', src: '/assets/videos/swimming.mp4' },
  { title: 'Cricket', src: '/assets/videos/cricket2.mp4' },
  { title: 'Table-Tennis', src: '/assets/videos/tTennis.mp4' },
  { title: 'Running', src: '/assets/videos/marahton.mp4' },
  { title: 'Cycling', src: '/assets/videos/cycling.mp4' },
  { title: 'Carrom', src: '/assets/videos/carrom.mp4' },
  { title: 'Badminton', src: '/assets/videos/badminton.mp4' },
]

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-indigo-950 text-white p-8">
      <h2 className="text-5xl font-extrabold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-text">
        🎮 Games Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="group bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            <video
              src={video.src}
              className="w-full h-48 object-cover rounded-t-xl"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-white group-hover:text-yellow-400 text-center drop-shadow-lg">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default GalleryPage