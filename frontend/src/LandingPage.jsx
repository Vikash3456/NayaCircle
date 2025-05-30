import bgPhoto from './assets/bg_photo.jpg';

export default function LandingPage() {
  return (
    <div
      className="fixed inset-0 min-h-screen min-w-full flex flex-col bg-cover bg-center z-0 overflow-auto"
      style={{ backgroundImage: `url(${bgPhoto})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      {/* Main shadow wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen min-w-full items-center justify-center shadow-[0_0_80px_20px_rgba(0,0,0,0.85)]">
        {/* Header */}
        <header className="flex justify-between items-center px-6 py-4 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-white drop-shadow-md">🟢</span>
            <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow-md">NayaCircle</span>
          </div>
          <nav className="flex gap-4">
            <button className="text-white font-semibold hover:underline">Login</button>
            <button className="text-white font-semibold bg-white/20 px-4 py-1 rounded-lg shadow hover:bg-white/30 transition">Sign Up</button>
          </nav>
        </header>
        {/* Main Content */}
        <main className="flex flex-col items-center justify-center flex-1 w-full px-4 py-8">
          {/* Hero Section */}
          <section className="flex flex-col items-center justify-center w-full">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-6 backdrop-blur-md bg-white/10 rounded-2xl px-4 sm:px-8 py-4 border border-white/20 shadow-2xl text-center"
              style={{
                textShadow: '0 4px 24px rgba(0,0,0,0.7)',
                letterSpacing: '0.05em',
              }}
            >
              <span className="block ">Make Real Friends. Nearby. Verified.</span>
            </h1>
            <p className="text-base sm:text-lg md:text-2xl text-white/90 mb-8 max-w-2xl text-center drop-shadow-md">
              NayaCircle helps you make genuine, local friendships with verified people in your city. Safe, fun, and map-first.
            </p>
            <button className="mt-2 mb-8 px-6 sm:px-8 py-3 rounded-xl bg-white/20 text-white font-bold shadow-lg hover:bg-white/30 transition backdrop-blur-md border border-white/30">
              Join Now - It&apos;s Free
            </button>
            {/* Feature Tags */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
              <span className="px-4 py-2 rounded-full bg-white/20 text-white font-semibold shadow">📍 Location-First</span>
              <span className="px-4 py-2 rounded-full bg-white/20 text-white font-semibold shadow">✅ Verified</span>
              <span className="px-4 py-2 rounded-full bg-white/20 text-white font-semibold shadow">🤝 Platonic Only</span>
              <span className="px-4 py-2 rounded-full bg-white/20 text-white font-semibold shadow">🛡️ Safe</span>
            </div>
          </section>
          {/* How It Works */}
          <section className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6 mb-10">
            <h2 className="text-2xl font-bold text-white mb-4 text-center drop-shadow">How It Works</h2>
            <ol className="flex flex-col sm:flex-row justify-center items-center gap-6 text-white text-lg font-medium">
              <li className="flex flex-col items-center">
                <span className="text-3xl mb-1">1️⃣</span>
                <span>Sign Up</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="text-3xl mb-1">2️⃣</span>
                <span>Get Verified</span>
              </li>
              <li className="flex flex-col items-center">
                <span className="text-3xl mb-1">3️⃣</span>
                <span>Meet</span>
              </li>
            </ol>
          </section>
          {/* Why NayaCircle Section */}
          <section className="w-full max-w-5xl flex flex-col items-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-8 text-center drop-shadow">Why NayaCircle?</h2>
            <div className="flex flex-col md:flex-row gap-6 w-full justify-center">
              <div className="flex-1 flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 hover:scale-105 transition-transform">
                <span className="text-4xl mb-2">🗺️</span>
                <span className="font-bold text-white text-lg mb-1">Map-first Connections</span>
                <span className="text-white/80 text-center">Find real friends nearby, not just online.</span>
              </div>
              <div className="flex-1 flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 hover:scale-105 transition-transform">
                <span className="text-4xl mb-2">✅</span>
                <span className="font-bold text-white text-lg mb-1">Verified & Safe</span>
                <span className="text-white/80 text-center">Every user is verified for a safe, platonic experience.</span>
              </div>
              <div className="flex-1 flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 hover:scale-105 transition-transform">
                <span className="text-4xl mb-2">🚚</span>
                <span className="font-bold text-white text-lg mb-1">Perfect for Relocators</span>
                <span className="text-white/80 text-center">New in town? Instantly find your circle.</span>
              </div>
              <div className="flex-1 flex flex-col items-center bg-white/20 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-white/30 hover:scale-105 transition-transform">
                <span className="text-4xl mb-2">✨</span>
                <span className="font-bold text-white text-lg mb-1">Modern & Private</span>
                <span className="text-white/80 text-center">Sleek, easy-to-use, and privacy-focused.</span>
              </div>
            </div>
          </section>
          {/* Security & Privacy Features */}
          <section className="w-full max-w-5xl flex flex-col items-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-8 text-center drop-shadow">Security & Privacy</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
              <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30 hover:bg-white/30 transition">
                <span className="text-3xl mb-2">🔒</span>
                <span className="font-bold text-white mb-1">Data Protection</span>
                <span className="text-white/80 text-center text-sm">All personal data encrypted</span>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30 hover:bg-white/30 transition">
                <span className="text-3xl mb-2">📍</span>
                <span className="font-bold text-white mb-1">Location Privacy</span>
                <span className="text-white/80 text-center text-sm">Approximate location only (500m radius)</span>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30 hover:bg-white/30 transition">
                <span className="text-3xl mb-2">🚩</span>
                <span className="font-bold text-white mb-1">Report System</span>
                <span className="text-white/80 text-center text-sm">Quick reporting for inappropriate behavior</span>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30 hover:bg-white/30 transition">
                <span className="text-3xl mb-2">🤖</span>
                <span className="font-bold text-white mb-1">Moderation</span>
                <span className="text-white/80 text-center text-sm">Automated + manual content moderation</span>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30 hover:bg-white/30 transition">
                <span className="text-3xl mb-2">⛔</span>
                <span className="font-bold text-white mb-1">Block Function</span>
                <span className="text-white/80 text-center text-sm">Instant blocking with no trace back</span>
              </div>
              <div className="bg-white/20 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30 hover:bg-white/30 transition">
                <span className="text-3xl mb-2">🤝</span>
                <span className="font-bold text-white mb-1">Safe Meeting</span>
                <span className="text-white/80 text-center text-sm">In-app meeting confirmation system</span>
              </div>
            </div>
          </section>
          {/* Success Metrics */}
          <section className="w-full max-w-5xl flex flex-col items-center mb-10">
            <h2 className="text-3xl font-extrabold text-white mb-8 text-center drop-shadow">Success Metrics</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 w-full">
              <div className="bg-gradient-to-br from-green-400/30 to-green-700/30 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30">
                <span className="text-4xl mb-2">📈</span>
                <span className="font-bold text-white mb-1">User Engagement</span>
                <span className="text-white/80 text-center text-sm">Daily active users</span>
              </div>
              <div className="bg-gradient-to-br from-blue-400/30 to-blue-700/30 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30">
                <span className="text-4xl mb-2">🤗</span>
                <span className="font-bold text-white mb-1">Connection Quality</span>
                <span className="text-white/80 text-center text-sm">Accepted requests ratio</span>
              </div>
              <div className="bg-gradient-to-br from-yellow-400/30 to-yellow-700/30 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30">
                <span className="text-4xl mb-2">🎉</span>
                <span className="font-bold text-white mb-1">Meeting Success</span>
                <span className="text-white/80 text-center text-sm">Real-world meetings</span>
              </div>
              <div className="bg-gradient-to-br from-pink-400/30 to-pink-700/30 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30">
                <span className="text-4xl mb-2">🔁</span>
                <span className="font-bold text-white mb-1">User Retention</span>
                <span className="text-white/80 text-center text-sm">7/30-day retention</span>
              </div>
              <div className="bg-gradient-to-br from-purple-400/30 to-purple-700/30 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-white/30">
                <span className="text-4xl mb-2">🛡️</span>
                <span className="font-bold text-white mb-1">Safety Score</span>
                <span className="text-white/80 text-center text-sm">Reports per user</span>
              </div>
            </div>
          </section>
          {/* Final CTA */}
          <section className="w-full max-w-2xl flex flex-col items-center justify-center mb-16">
            <div className="w-full bg-gradient-to-r from-green-400/30 via-blue-400/30 to-purple-400/30 rounded-2xl p-8 shadow-2xl flex flex-col items-center">
              <h2 className="text-3xl font-extrabold text-white mb-2 text-center drop-shadow">Ready to make real friends?</h2>
              <p className="text-white/80 mb-6 text-center">Join NayaCircle and start your journey to genuine, local friendships today.</p>
              <button className="px-10 py-4 rounded-2xl bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 text-white font-extrabold text-xl shadow-xl hover:scale-105 transition-transform border-0">
                Get Started Now
              </button>
            </div>
          </section>
        </main>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1) both;
        }
        @keyframes glassy {
          0%, 100% { filter: blur(0px) brightness(1); }
          50% { filter: blur(1.5px) brightness(1.2); }
        }
        .animate-glassy {
          animation: glassy 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
} 