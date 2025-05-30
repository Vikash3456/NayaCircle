import React from 'react';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-900 via-gray-900 to-black text-white">
      <h1 className="text-5xl font-extrabold mb-4 drop-shadow">404</h1>
      <p className="text-2xl text-white/80 mb-8">Page Not Found</p>
      <div className="w-full max-w-xl bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-xl p-6">
        <p className="text-white/70 text-center">Sorry, the page you are looking for does not exist.</p>
      </div>
    </div>
  );
} 