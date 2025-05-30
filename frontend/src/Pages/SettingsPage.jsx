import React from 'react';

export default function SettingsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white">
      <h1 className="text-4xl font-extrabold mb-4 drop-shadow">Settings Page</h1>
      <p className="text-lg text-white/80 mb-8">This is where user settings will appear.</p>
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6">
        <p className="text-white/70 text-center">[Settings coming soon]</p>
      </div>
    </div>
  );
} 