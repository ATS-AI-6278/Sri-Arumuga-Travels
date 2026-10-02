import React, { Suspense, lazy } from 'react';

const CinematicCanvas = lazy(() =>
  import('./CinematicCanvas').then((m) => ({ default: m.CinematicCanvas }))
);

interface Props {
  scrollProgress: number;
  enabled: boolean;
}

export const CinematicCanvasLazy: React.FC<Props> = ({ scrollProgress, enabled }) => {
  if (!enabled) {
    return <div className="fixed inset-0 w-full h-full z-0 ambient-fallback" aria-hidden="true" />;
  }

  return (
    <Suspense
      fallback={<div className="fixed inset-0 w-full h-full z-0 ambient-fallback" aria-hidden="true" />}
    >
      <CinematicCanvas scrollProgress={scrollProgress} enabled={enabled} />
    </Suspense>
  );
};
