import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full text-center py-4 bg-white/10 backdrop-blur-md text-white/80 text-sm mt-auto">
      &copy; {new Date().getFullYear()} NayaCircle. All rights reserved.
    </footer>
  );
} 