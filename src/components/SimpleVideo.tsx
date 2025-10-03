import React from 'react';
import digividyaDemo from '../assets/digividya_demo.mp4';

export default function SimpleVideo() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Video Test</h2>
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        <video
          src={digividyaDemo}
          className="w-full aspect-video"
          controls
          preload="metadata"
          muted
        >
          Your browser doesn't support HTML5 video.
        </video>
      </div>
    </div>
  );
}