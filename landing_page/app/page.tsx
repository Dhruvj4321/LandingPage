export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-6">
      <main className="max-w-4xl w-full bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-slate-700">
        <div className="p-8 md:p-12 text-center">
          {/* Badge */}
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-cyan-400 uppercase bg-cyan-400/10 rounded-full">
            Environment Status: Online
          </span>

          {/* Title with Gradient */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Next.js is <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Live & Running</span>
          </h1>

          {/* Description */}
          <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            If you see a dark blue background and this text is centered with a nice gradient, 
            <span className="text-white font-medium"> Tailwind CSS is successfully configured.</span> 
            Now you can start building your masterpiece.
          </p>

          {/* Interactive Elements */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold rounded-xl transition-all hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20">
              Explore Components
            </button>
            <button className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-xl transition-all border border-slate-600">
              Read Docs
            </button>
          </div>
        </div>

        {/* Decorative Footer */}
        <div className="bg-slate-700/30 py-4 border-t border-slate-700">
          <p className="text-slate-500 text-sm">
            Node.js + Next.js + Tailwind CSS + App Router
          </p>
        </div>
      </main>
    </div>
  );
}
