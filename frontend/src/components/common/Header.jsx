import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-6 py-4 bg-white/10 backdrop-blur-md shadow-md">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-primary">🟢</span>
        <span className="text-2xl font-extrabold tracking-wide">NayaCircle</span>
      </div>
      <nav className="flex gap-4">
        <Link to="/" className="font-semibold hover:underline">Home</Link>
        <Link to="/dashboard" className="font-semibold hover:underline">Dashboard</Link>
        <Link to="/profile" className="font-semibold hover:underline">Profile</Link>
        <Link to="/chat" className="font-semibold hover:underline">Chat</Link>
        <Link to="/settings" className="font-semibold hover:underline">Settings</Link>
      </nav>
    </header>
  );
} 