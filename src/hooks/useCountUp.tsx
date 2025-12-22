import { useEffect, useState, useRef } from "react";

interface UseCountUpOptions {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
}

export function useCountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  suffix = "",
  prefix = "",
}: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = start + (end - start) * easeOutQuart;
      
      setCount(currentValue);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [isInView, end, start, duration]);

  const displayValue = `${prefix}${count.toFixed(decimals)}${suffix}`;

  return { count, displayValue, ref };
}

// Helper component for animated counter
interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export function CountUp({
  end,
  start = 0,
  duration = 2000,
  decimals = 0,
  suffix = "",
  prefix = "",
  className = "",
}: CountUpProps) {
  const { displayValue, ref } = useCountUp({
    end,
    start,
    duration,
    decimals,
    suffix,
    prefix,
  });

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
}
