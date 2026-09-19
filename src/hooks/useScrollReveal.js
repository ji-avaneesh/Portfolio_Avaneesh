import { useEffect, useState, useRef } from "react";

export default function useScrollReveal({ once = true, threshold = 0.1 } = {}) {
  const ref = useRef(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsRevealed(true);
        if (once) {
          observer.unobserve(entry.target);
        }
      } else if (!once) {
        setIsRevealed(false);
      }
    }, { once, threshold });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [once, threshold]);

  return [ref, isRevealed];
}
