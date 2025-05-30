import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center w-full h-full py-8">
      <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
} 