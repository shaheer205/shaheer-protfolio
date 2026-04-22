import { useEffect, useRef, useState } from "react";

/** Minimal IntersectionObserver hook — no external deps. */
export const useInView = <T extends Element = HTMLDivElement>(
  options: IntersectionObserverInit & { triggerOnce?: boolean } = {},
) => {
  const { triggerOnce = true, threshold = 0.15, root, rootMargin } = options;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) obs.disconnect();
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, root, rootMargin },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [triggerOnce, threshold, root, rootMargin]);

  return { ref, inView };
};
