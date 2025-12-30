import React from "react";

const Programs = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      
      {/* Page Title */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-400">
          Our Programs
        </h1>
        <p className="text-gray-300 mt-2">
          Learn, Explore & Grow with BK Career Academy
        </p>
      </header>

      {/* Programs Grid */}
      <section className="grid md:grid-cols-3 gap-8 mb-16">

  {/* Card 1 */}
  <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg group">
    <video
      src="/assets/videos/progrm1.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
    />

    <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-all" />

    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
      <h2 className="text-xl font-semibold text-sky-400 mb-2">
        Multi-Sport Match Events
      </h2>
      <p className="text-gray-200 text-sm">
        Conducting competitive matches across multiple sports with fair play and official rules.
      </p>
    </div>
  </div>

  {/* Card 2 */}
  <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg group">
    <video
      src="/assets/videos/prmg2.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
    />

    <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-all" />

    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
      <h2 className="text-xl font-semibold text-sky-400 mb-2">
        Leagues & Tournaments
      </h2>
      <p className="text-gray-200 text-sm">
        Organized leagues and championships with proper scheduling, officials, and results.
      </p>
    </div>
  </div>

  {/* Card 3 */}
  <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg group">
    <video
      src="/assets/videos/prgm3.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
    />

    <div className="absolute inset-0 bg-black/65 group-hover:bg-black/55 transition-all" />

    <div className="relative z-10 p-6 h-full flex flex-col justify-end">
      <h2 className="text-xl font-semibold text-sky-400 mb-2">
        Player & Team Recognition
      </h2>
      <p className="text-gray-200 text-sm">
        A platform for players and teams to showcase performance and gain recognition.
      </p>
    </div>
  </div>

</section>

      {/* Marathon Highlight */}
      {/* Marathon Highlight */}
<section className="relative overflow-hidden rounded-3xl shadow-2xl h-[420px] flex items-center">
  
  {/* Background Video */}
  <video
    src="/assets/videos/prgmMarathon.mp4" // ← replace with your video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="relative z-10 p-8 md:p-12 max-w-3xl text-white">
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
      BK Academy Marathon 2025
    </h2>

    <p className="text-gray-200 mb-6">
      We successfully conducted a marathon to promote fitness and teamwork among students.
      It was a day full of energy, fun activities, and community spirit.
    </p>

    <ul className="space-y-2 text-gray-300 mb-6">
      <li>🏃 Over 300 participants from all programs</li>
      <li>🏆 Fun competitions and prizes for winners</li>
      <li>🤝 Networking and community building</li>
    </ul>

    <button className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-gray-200 transition">
      See Marathon Gallery
    </button>
  </div>

</section>

    </div>
  );
};

export default Programs;
