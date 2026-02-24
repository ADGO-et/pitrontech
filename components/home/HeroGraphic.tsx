import React from 'react';
import { Settings, TrendingUp, Network, Mail, Tag, DollarSign, CheckCircle, Lock } from 'lucide-react';

export default function HeroGraphic() {
  return (
    <div className="relative w-full h-full flex items-center justify-center min-h-[500px]">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* Main Graphic Container */}
      <div className="relative w-[600px] h-[500px] scale-75 md:scale-90 lg:scale-100 origin-center">
        {/* Dashed Lines (SVG) */}
        <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
          {/* Top Left Connections */}
          <path d="M 250 180 L 184 180 L 184 108" fill="none" stroke="#2a7a8f" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
          <path d="M 250 220 L 104 220 L 104 158" fill="none" stroke="#2a7a8f" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
          <path d="M 284 180 L 284 148" fill="none" stroke="#2a7a8f" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
          <path d="M 220 250 L 144 250 L 144 228" fill="none" stroke="#2a7a8f" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
          
          {/* Bottom Right Connections */}
          <path d="M 350 300 L 444 300 L 444 320" fill="none" stroke="#2a7a8f" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
          <path d="M 350 320 L 384 320 L 384 380" fill="none" stroke="#2a7a8f" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
          <path d="M 380 300 L 504 300 L 504 380" fill="none" stroke="#2a7a8f" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
          <path d="M 350 340 L 444 340 L 444 440" fill="none" stroke="#2a7a8f" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" />
        </svg>

        {/* Cloud Shape */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[220px] z-10">
          {/* Cloud SVG */}
          <svg viewBox="0 0 380 220" className="w-full h-full drop-shadow-[0_0_30px_rgba(42,122,143,0.15)]">
            <path d="M 120 200 C 60 200 30 160 30 120 C 30 80 70 50 110 60 C 130 20 190 10 230 40 C 280 10 330 40 340 90 C 370 100 380 140 350 180 C 330 210 280 200 260 200 Z" fill="url(#cloud-grad)" opacity="0.9" />
            <defs>
              <linearGradient id="cloud-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3a3a3a" />
                <stop offset="100%" stopColor="#222222" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Center CPU Icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#1d505e] rounded-xl flex items-center justify-center shadow-[0_0_50px_rgba(29,80,94,0.8)] z-20">
            {/* CPU Pins Top */}
            <div className="absolute -top-2 left-3 w-1.5 h-3 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute -top-2 left-7 w-1.5 h-3 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute -top-2 left-11 w-1.5 h-3 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute -top-2 left-15 w-1.5 h-3 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute -top-2 right-3 w-1.5 h-3 bg-[#1d505e] rounded-sm"></div>
            
            {/* CPU Pins Bottom */}
            <div className="absolute -bottom-2 left-3 w-1.5 h-3 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute -bottom-2 left-7 w-1.5 h-3 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute -bottom-2 left-11 w-1.5 h-3 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute -bottom-2 left-15 w-1.5 h-3 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute -bottom-2 right-3 w-1.5 h-3 bg-[#1d505e] rounded-sm"></div>
            
            {/* CPU Pins Left */}
            <div className="absolute top-3 -left-2 w-3 h-1.5 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute top-7 -left-2 w-3 h-1.5 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute top-11 -left-2 w-3 h-1.5 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute top-15 -left-2 w-3 h-1.5 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute bottom-3 -left-2 w-3 h-1.5 bg-[#1d505e] rounded-sm"></div>
            
            {/* CPU Pins Right */}
            <div className="absolute top-3 -right-2 w-3 h-1.5 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute top-7 -right-2 w-3 h-1.5 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute top-11 -right-2 w-3 h-1.5 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute top-15 -right-2 w-3 h-1.5 bg-[#1d505e] rounded-sm"></div>
            <div className="absolute bottom-3 -right-2 w-3 h-1.5 bg-[#1d505e] rounded-sm"></div>

            {/* Inner Logo */}
            <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          </div>
        </div>

        {/* Floating Icons */}
        {/* Top Left - Gear */}
        <div className="absolute top-[60px] left-[160px] w-12 h-12 bg-[#2a2a2a] rounded-xl border border-white/10 flex items-center justify-center z-20 shadow-lg">
          <Settings className="w-6 h-6 text-gray-400" />
        </div>

        {/* Top Left Further - Arrows */}
        <div className="absolute top-[110px] left-[80px] w-12 h-12 bg-[#2a2a2a] rounded-xl border border-white/10 flex items-center justify-center z-20 shadow-lg">
          <TrendingUp className="w-6 h-6 text-gray-400" />
        </div>

        {/* Top Right - Nodes */}
        <div className="absolute top-[100px] left-[260px] w-12 h-12 bg-[#2a2a2a] rounded-xl border border-white/10 flex items-center justify-center z-20 shadow-lg">
          <Network className="w-6 h-6 text-gray-400" />
        </div>

        {/* Middle Left - Mail */}
        <div className="absolute top-[180px] left-[120px] w-12 h-12 bg-[#2a2a2a] rounded-xl border border-white/10 flex items-center justify-center z-20 shadow-lg">
          <Mail className="w-6 h-6 text-gray-400" />
        </div>

        {/* Bottom Right - Tag */}
        <div className="absolute top-[320px] left-[420px] w-12 h-12 bg-[#2a2a2a] rounded-xl border border-white/10 flex items-center justify-center z-20 shadow-lg">
          <Tag className="w-6 h-6 text-gray-400" />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#2a7a8f] rounded-full flex items-center justify-center border-2 border-[#1a1a1a]">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
        </div>

        {/* Bottom Right - Dollar */}
        <div className="absolute top-[380px] left-[360px] w-12 h-12 bg-[#2a2a2a] rounded-xl border border-white/10 flex items-center justify-center z-20 shadow-lg">
          <DollarSign className="w-6 h-6 text-gray-400" />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#2a7a8f] rounded-full flex items-center justify-center border-2 border-[#1a1a1a]">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
        </div>

        {/* Bottom Right - Checkmark */}
        <div className="absolute top-[380px] left-[480px] w-12 h-12 bg-[#2a2a2a] rounded-xl border border-white/10 flex items-center justify-center z-20 shadow-lg">
          <CheckCircle className="w-6 h-6 text-gray-400" />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#2a7a8f] rounded-full flex items-center justify-center border-2 border-[#1a1a1a]">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
        </div>

        {/* Bottom Right - Lock */}
        <div className="absolute top-[440px] left-[420px] w-12 h-12 bg-[#2a2a2a] rounded-xl border border-white/10 flex items-center justify-center z-20 shadow-lg">
          <Lock className="w-6 h-6 text-gray-400" />
          <div className="absolute -top-2 -right-2 w-5 h-5 bg-[#2a7a8f] rounded-full flex items-center justify-center border-2 border-[#1a1a1a]">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
        </div>

      </div>
    </div>
  );
}
