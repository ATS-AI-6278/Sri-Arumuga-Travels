import React from 'react';

/** Soft page atmosphere — CSS only. Hero uses full-bleed photo instead. */
export const Atmosphere: React.FC<{ variant?: 'hero' | 'page' }> = ({ variant = 'page' }) => {
  if (variant === 'hero') {
    return null;
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
