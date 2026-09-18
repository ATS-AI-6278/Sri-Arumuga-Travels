import React from 'react';
import { InspectionAngle } from './CinematicCanvas';
import { Eye, ArrowLeft, CheckCircle2, RotateCw, ZoomIn, Info } from 'lucide-react';

interface StudioInspectionOverlayProps {
  activeAngle: InspectionAngle;
  onSelectAngle: (angle: InspectionAngle) => void;
  onExitStudio: () => void;
}

export const StudioInspectionOverlay: React.FC<StudioInspectionOverlayProps> = ({
  activeAngle,
  onSelectAngle,
  onExitStudio,
}) => {
  const angles: { id: InspectionAngle; label: string; number: string; desc: string }[] = [
    {
      id: 'front34',
      number: '01',
      label: 'Front 3/4',
      desc: 'Smiling chrome grille, teardrop headlamps & sloped hood ridges',
    },
    {
      id: 'side',
      number: '02',
      label: 'Side Profile',
      desc: '4.265m x 1.51m proportions, 2.55m wheelbase & C-pillar quarter-glass',
    },
    {
      id: 'rear34',
      number: '03',
      label: 'Rear 3/4',
      desc: '595L high boot lid, chrome trunk garnish, ETIOS & GD badging',
    },
    {
      id: 'frontClose',
      number: '04',
      label: 'Front Close-Up',
      desc: 'Toyota 3-oval emblem, mustache grille, dual-beam reflectors & HSRP plate',
    },
  ];

  return (
    <div className="fixed inset-0 z-40 pointer-events-none flex flex-col justify-between p-4 sm:p-8">
      {/* Top Header Bar */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pointer-events-auto bg-[#0b0e14]/85 backdrop-blur-md border border-white/10 p-4 sm:px-6 rounded-xl shadow-2xl">
        <div className="flex items-center gap-3.5">
          <div className="w-9 h-9 rounded bg-[#d4af37]/15 border border-[#d4af37]/40 flex items-center justify-center text-[#d4af37]">
            <Eye className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d4af37]">
                Vehicle Inspection Studio
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-white/80 font-mono">
                Neutral 5500K Lighting
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-display font-semibold text-white tracking-wide">
              Toyota Etios GD <span className="text-white/50 text-sm font-normal">— Indian Sedan Specification</span>
            </h2>
          </div>
        </div>

        {/* Action: Return to Highway Film */}
        <button
          onClick={onExitStudio}
          className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg bg-[#d4af37] text-black font-semibold text-xs tracking-wider uppercase hover:bg-[#e6c258] transition-all shadow-lg active:scale-95"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Highway Film</span>
        </button>
      </div>

      {/* Center Interactive Hint (Discreet) */}
      <div className="self-center pointer-events-auto bg-black/50 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-full text-[11px] text-white/70 tracking-wider flex items-center gap-3">
        <span className="flex items-center gap-1.5">
          <RotateCw className="w-3.5 h-3.5 text-[#d4af37]" /> Click & Drag to Orbit 360°
        </span>
        <span className="text-white/20">•</span>
        <span className="flex items-center gap-1.5">
          <ZoomIn className="w-3.5 h-3.5 text-[#d4af37]" /> Scroll / Pinch to Zoom
        </span>
      </div>

      {/* Bottom Controls: 4 Requested Camera Views & Authentic Specs Card */}
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-end justify-between gap-4 pointer-events-auto">
        {/* Specifications Verification Card */}
        <div className="hidden md:flex flex-col bg-[#0b0e14]/85 backdrop-blur-md border border-white/10 p-4 rounded-xl text-xs max-w-md w-full shadow-2xl">
          <div className="flex items-center gap-2 text-white/80 font-medium mb-2.5 pb-2 border-b border-white/10">
            <Info className="w-4 h-4 text-[#d4af37]" />
            <span className="tracking-wider uppercase text-[11px] font-semibold text-white">
              Authentic Indian Etios GD Specifications
            </span>
          </div>
          <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-[11px] text-white/70">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Length: <strong>4,265 mm</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Width: <strong>1,695 mm</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Height: <strong>1,510 mm</strong> (Tall Roof)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Wheelbase: <strong>2,550 mm</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Clearance: <strong>174 mm</strong> (Indian Stance)</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>Boot: <strong>595 Liters</strong> (High Deck)</span>
            </div>
          </div>
        </div>

        {/* 4 Camera Angle Selector Pills */}
        <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 bg-[#0b0e14]/90 backdrop-blur-md border border-white/10 p-2 rounded-xl shadow-2xl">
          {angles.map((ang) => {
            const isActive = activeAngle === ang.id;
            return (
              <button
                key={ang.id}
                onClick={() => onSelectAngle(ang.id)}
                className={`flex flex-col items-start px-4 py-2.5 rounded-lg text-left transition-all ${
                  isActive
                    ? 'bg-[#d4af37] text-black shadow-lg font-semibold scale-[1.02]'
                    : 'text-white/75 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-black/70' : 'text-[#d4af37]'}`}>
                    {ang.number}
                  </span>
                  <span className="text-xs font-semibold tracking-wide uppercase">
                    {ang.label}
                  </span>
                </div>
                <span className={`text-[10px] mt-0.5 line-clamp-1 max-w-[140px] ${isActive ? 'text-black/80' : 'text-white/50'}`}>
                  {ang.desc}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
