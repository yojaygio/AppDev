"use client";

import React, { useState } from 'react';

export default function BriesMusic() {
  const [copied, setCopied] = useState(false);

  const tracks = [
    { 
      title: "Iris", 
      artist: "Goo Goo Dolls", 
      desc: "A timeless anthem of longing and being seen. Perfect for those late-night main character moments. A song too precious to dedicate, saved for a heart that once understood it." 
    },
    { 
      title: "Isa Lang", 
      artist: "Arthur Nery", 
      desc: "Smooth, soulful, deeply romantic, and yearns. The kind of song that feels like a warm embrace in the dark." 
    },
    { 
      title: "The Scientist", 
      artist: "Coldplay", 
      desc: "This song reminds me of someone I used to like—they loved it, and somehow, I learned to love it as well." 
    },
    { 
      title: "Demonyo", 
      artist: "Juan Karlos", 
      desc: "Gritty and raw. A love song wrapped in fire and faith—where devotion wears the mask of a demon, and longing blurs the line between heaven and hell." 
    },
    { 
      title: "The Night We Met", 
      artist: "Lord Huron", 
      desc: "Ghostly and nostalgic. A song that makes you mourn memories you haven't even made yet." 
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#9c27b0] pb-20">
      
      {/* Background Decorative Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-[#9c27b0] opacity-15 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-80 h-80 bg-[#4a148c] opacity-10 blur-[100px] rounded-full"></div>
      </div>

      <section className="relative pt-20 px-6 z-10">
        <div className="max-w-5xl mx-auto">
          
          {/* Header Area: Side-by-Side */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8 border-b border-[#1a1a1a] pb-12">
            <div className="text-center md:text-left">
              <h1 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
                Brie's <br />
                <span className="text-[#9c27b0] drop-shadow-[0_0_15px_rgba(156,39,176,0.6)]">Top 5</span>
              </h1>
              <p className="text-[#e1bee7] font-bold mt-4 tracking-[0.4em] text-xs uppercase opacity-70">
                press spotify icon for live playlist
              </p>
            </div>

            {/* Icons Container */}
            <div className="flex items-center space-x-4">
              {/* Copy Link Button */}
              <button 
                onClick={handleCopy}
                className="bg-[#1a1a1a] border border-[#333] hover:border-[#9c27b0] px-6 py-3 rounded-full text-[10px] font-black tracking-widest uppercase transition-all flex items-center space-x-2 active:scale-95"
              >
                <span>{copied ? 'COPIED!' : 'SHARE LINK'}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>

              {/* Spotify Icon */}
              <a 
                href="https://open.spotify.com/playlist/7q3dolmoQFE3dlYgysYZit?si=uzVTT33LSWuCDRL2BdNEOg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center w-20 h-20 bg-[#1DB954] rounded-full hover:scale-110 transition-all duration-500 shadow-[0_0_40px_rgba(29,185,84,0.3)]"
              >
                <span className="absolute inset-0 rounded-full bg-[#1DB954] animate-ping opacity-20"></span>
                <svg className="w-10 h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.494 17.306c-.215.353-.675.466-1.026.251-2.85-1.742-6.439-2.135-10.665-1.168-.403.093-.809-.16-.902-.563-.093-.403.161-.809.563-.902 4.625-1.057 8.582-.609 11.779 1.343.352.215.465.673.251 1.029zm1.468-3.264c-.271.44-.848.579-1.288.308-3.26-2.003-8.23-2.585-12.086-1.415-.494.15-1.018-.129-1.168-.623-.15-.494.129-1.018.623-1.168 4.412-1.339 9.894-.687 13.613 1.6 0 .439.271.848.579 1.288.308zm.135-3.395c-3.908-2.321-10.347-2.535-14.108-1.393-.6.182-1.234-.162-1.416-.761-.182-.599.162-1.233.761-1.415 4.316-1.309 11.428-1.059 15.939 1.62.541.32.718 1.017.397 1.558-.32.542-1.018.72-1.558.401z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Song Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {tracks.map((track, i) => (
              <div 
                key={i} 
                className={`
                  group p-8 bg-[#121212] border-2 border-[#1a1a1a] hover:border-[#9c27b0] rounded-3xl transition-all duration-300 shadow-2xl flex flex-col
                  ${i === 4 ? 'md:col-span-2 md:max-w-xl md:mx-auto w-full' : ''}
                `}
              >
                <div className="mb-6">
                  <span className="text-3xl font-black text-[#252525] group-hover:text-[#9c27b0] transition duration-500 italic">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                </div>
                <h4 className="text-2xl font-black text-white tracking-tight group-hover:text-[#e1bee7] transition">
                  {track.title}
                </h4>
                <p className="text-[#9c27b0] font-black text-xs uppercase tracking-[0.2em] mt-1 mb-6">
                  {track.artist}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed font-medium border-l-2 border-[#252525] pl-4 group-hover:border-[#9c27b0] transition duration-300 italic">
                  "{track.desc}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 text-center opacity-30">
        <div className="text-[10px] font-black uppercase tracking-[0.5em] text-[#e1bee7]">
          Brie × Kuromi Core
        </div>
      </footer>
    </div>
  );
}