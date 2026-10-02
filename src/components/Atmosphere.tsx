import React from 'react';

/** Soft photographic travel atmosphere — CSS only, no 3D. */
export const Atmosphere: React.FC<{ variant?: 'hero' | 'page' }> = ({ variant = 'page' }) => {
  if (variant === 'hero') {
    return (
      <div className="atmosphere" aria-hidden>
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(160deg, #f9f5ee 0%, #f4ebe0 38%, #efe3d5 68%, #e8d9cb 100%)',
          }}
        />
        <div
          className="atmosphere-glow"
          style={{
            width: '58%',
            height: '52%',
            top: '-6%',
            right: '-4%',
            background: 'radial-gradient(circle, rgba(184,92,56,0.20), transparent 68%)',
          }}
        />
        <div
          className="atmosphere-glow"
          style={{
            width: '42%',
            height: '38%',
            bottom: '8%',
            left: '-10%',
            background: 'radial-gradient(circle, rgba(140,160,120,0.16), transparent 70%)',
          }}
        />
        {/* Soft road / horizon under the car */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-[48%] opacity-[0.12]"
          viewBox="0 0 1200 480"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="roadFade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2C241E" stopOpacity="0" />
              <stop offset="35%" stopColor="#2C241E" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#2C241E" stopOpacity="0.85" />
            </linearGradient>
          </defs>
          <path
            d="M0 300 C180 250 340 310 520 275 C720 235 820 200 1000 240 C1100 260 1160 255 1200 245 L1200 480 L0 480 Z"
            fill="url(#roadFade)"
          />
          <path
            d="M80 340 C280 320 420 360 620 335 C820 310 980 300 1180 320"
            fill="none"
            stroke="#B85C38"
            strokeWidth="1.75"
            strokeDasharray="6 16"
            opacity="0.9"
          />
        </svg>
        <div className="atmosphere-grain" />
      </div>
    );
  }

  return (
    <div className="atmosphere" aria-hidden>
      <div
        className="atmosphere-glow"
        style={{
          width: '40%',
          height: '35%',
          top: '10%',
          right: '5%',
          background: 'radial-gradient(circle, rgba(184,92,56,0.08), transparent 70%)',
        }}
      />
      <div className="atmosphere-grain" />
    </div>
  );
};
