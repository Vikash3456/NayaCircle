import React from 'react';

export default function Dashboard() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white">
      <h1 className="text-4xl font-extrabold mb-4 drop-shadow">Dashboard</h1>
      <p className="text-lg text-white/80 mb-8">This is where the interactive map, filters, and user pins will appear.</p>
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6">
        <p className="text-white/70 text-center">[Map and filter sidebar coming soon]</p>
      </div>
    </div>
  );
} 