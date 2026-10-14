"use client";

import { useEffect, useRef, useState } from "react";

interface StreamingTextProps {
  text: string;
  speed?: number; // ms per character
  delay?: number; // initial delay before starting typing (ms)
  className?: string;
  cursorClassName?: string;
  as?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4";
  showCursor?: boolean;
  cursorChar?: string;
  startImmediately?: boolean;
  onComplete?: () => void;
}

export default function StreamingText({
  text,
  speed = 18,
  delay = 100,
  className = "",
  cursorClassName = "text-accent-cyan",
  as: Component = "p",
  showCursor = true,
  cursorChar = "▎",
  startImmediately = false,
  onComplete,
}: StreamingTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [hasTriggered, setHasTriggered] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      setIsReducedMotion(mediaQuery.matches);
      if (mediaQuery.matches) {
        setDisplayedText(text);
        setIsCompleted(true);
      }
    }
  }, [text]);

  // Intersection observer trigger
  useEffect(() => {
    if (isReducedMotion || hasTriggered) return;

    if (startImmediately) {
      setHasTriggered(true);
      return;
    }

    const element = containerRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [hasTriggered, isReducedMotion, startImmediately]);

  // Progressive typing effect
  useEffect(() => {
    if (!hasTriggered || isReducedMotion) return;

    let currentIndex = 0;
    let timer: NodeJS.Timeout | null = null;

    const delayTimeout = setTimeout(() => {
      timer = setInterval(() => {
        if (currentIndex < text.length) {
          currentIndex++;
          setDisplayedText(text.slice(0, currentIndex));
        } else {
          if (timer) clearInterval(timer);
          setIsCompleted(true);
          if (onComplete) onComplete();
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(delayTimeout);
      if (timer) clearInterval(timer);
    };
  }, [hasTriggered, isReducedMotion, text, speed, delay, onComplete]);

  // If reduced motion, just render static text directly
  if (isReducedMotion) {
    return <Component className={className}>{text}</Component>;
  }

  return (
    <Component
      ref={containerRef as any}
      className={`relative ${className}`}
    >
      {/* Screen reader full text */}
      <span className="sr-only">{text}</span>

      {/* Visual streaming text */}
      <span aria-hidden="true">
        {displayedText}
        {showCursor && !isCompleted && hasTriggered && (
          <span className={`inline-block animate-pulse ml-0.5 ${cursorClassName}`}>
            {cursorChar}
          </span>
        )}
      </span>
    </Component>
  );
}
