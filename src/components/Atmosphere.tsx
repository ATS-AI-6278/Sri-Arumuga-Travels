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
              'linear-gradient(165deg, #f8f4ec 0%, #f3ebe0 42%, #efe2d4 72%, #e8dccf 100%)',
          }}
        />
        <div
          className="atmosphere-glow"
          style={{
            width: '55%',
            height: '55%',
            top: '-8%',
            right: '-5%',
            background: 'radial-gradient(circle, rgba(184,92,56,0.22), transparent 70%)',
          }}
        />
        <div
          className="atmosphere-glow"
          style={{
            width: '45%',
            height: '40%',
            bottom: '5%',
            left: '-8%',
            background: 'radial-gradient(circle, rgba(140,160,120,0.18), transparent 70%)',
          }}
        />
        {/* Subtle horizon / road suggestion */}
        <svg
          className="absolute inset-x-0 bottom-0 w-full h-[42%] opacity-[0.14]"
          viewBox="0 0 1200 420"
          preserveAspectRatio="none"
        >
          <path
            d="M0 280 C200 240 320 300 480 270 C650 240 720 200 900 230 C1040 252 1120 240 1200 220 L1200 420 L0 420 Z"
            fill="#2C241E"
          />
          <path
            d="M0 300 C180 310 300 250 520 290 C740 330 860 270 1200 300"
            fill="none"
            stroke="#B85C38"
            strokeWidth="2"
            strokeDasharray="8 14"
          />
          <circle cx="980" cy="160" r="36" fill="#B85C38" opacity="0.25" />
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
