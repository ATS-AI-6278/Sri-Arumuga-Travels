import { useEffect, useState } from 'react';

export function useScrollSpy(sectionIds: string[], disabled = false): string {
  const [active, setActive] = useState(sectionIds[0] ?? '');

  useEffect(() => {
    if (disabled) return;

    const onScroll = () => {
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= window.innerHeight * 0.25) {
          setActive(id);
          return;
        }
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, disabled]);

  return active;
}
