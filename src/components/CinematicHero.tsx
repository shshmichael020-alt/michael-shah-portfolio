"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { SITE_METADATA, BASE_PATH } from "@/lib/constants";
import StreamingText from "./StreamingText";

export default function CinematicHero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  // References to manage timers and re-entry safely without duplicate firings
  const replayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const hasLeftHeroRef = useRef(false);
  const isPlayingRef = useRef(false);

  // Clear any active replay timer
  const clearReplayTimer = useCallback(() => {
    if (replayTimerRef.current) {
      clearTimeout(replayTimerRef.current);
      replayTimerRef.current = null;
    }
  }, []);

  // Safe play helper handling browser autoplay policies
  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    clearReplayTimer();

    video.currentTime = 0;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          isPlayingRef.current = true;
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("[Cinematic Hero] Autoplay prevented by browser policy:", err);
          isPlayingRef.current = false;
          setIsPlaying(false);
        });
    }
  }, [clearReplayTimer]);

  // Schedule the 30-second replay timer
  const scheduleReplay = useCallback(() => {
    clearReplayTimer();

    // Only schedule if document is currently visible
    if (typeof document !== "undefined" && document.visibilityState === "hidden") {
      return;
    }

    replayTimerRef.current = setTimeout(() => {
      // Trigger temporary background video playback once from 0
      playVideo();
    }, 30000); // 30 seconds
  }, [clearReplayTimer, playVideo]);

  // 1. Reduced motion check
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(motionQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    motionQuery.addEventListener("change", handleMotionChange);
    return () => motionQuery.removeEventListener("change", handleMotionChange);
  }, []);

  // 2. Main video lifecycle and events
  useEffect(() => {
    if (isReducedMotion) return;

    const video = videoRef.current;
    if (!video) return;

    const handlePlaying = () => {
      isPlayingRef.current = true;
      setIsPlaying(true);
    };

    const handleEnded = () => {
      isPlayingRef.current = false;
      setIsPlaying(false);

      // When video ends: fades out video layer, softly reveals atmospheric poster, schedules 30s replay
      scheduleReplay();
    };

    video.addEventListener("playing", handlePlaying);
    video.addEventListener("ended", handleEnded);

    // Initial load: Attempt autoplay immediately
    playVideo();

    return () => {
      video.removeEventListener("playing", handlePlaying);
      video.removeEventListener("ended", handleEnded);
      clearReplayTimer();
    };
  }, [isReducedMotion, playVideo, scheduleReplay, clearReplayTimer]);

  // 3. Document visibility change (pause timer when hidden, resume when visible)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        clearReplayTimer();
      } else {
        const video = videoRef.current;
        if (video && video.ended && !isPlayingRef.current) {
          scheduleReplay();
        }
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [clearReplayTimer, scheduleReplay]);

  // 4. Hero Re-entry detection via IntersectionObserver
  useEffect(() => {
    if (isReducedMotion) return;

    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry.isIntersecting) {
          // User scrolled down past the hero
          hasLeftHeroRef.current = true;
          clearReplayTimer();
          const video = videoRef.current;
          if (video && !video.paused) {
            video.pause();
          }
          setIsPlaying(false);
        } else {
          // User re-entered the hero while scrolling up
          if (hasLeftHeroRef.current) {
            hasLeftHeroRef.current = false;
            // Play video once again from 0 as temporary background layer
            playVideo();
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, [isReducedMotion, playVideo, clearReplayTimer]);

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Hero Overview"
      className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col justify-between overflow-hidden pt-24 pb-8 sm:pb-10 px-6 sm:px-10 md:px-12 lg:px-16 border-b border-white/[0.06] bg-canvas"
    >
      {/* ATMOSPHERIC BACKGROUND VISUAL SYSTEM (Video while playing; softly blended Poster when ended/paused) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        {/* Layer A: Atmospheric Blended Poster Image (Visible when video is not playing or in reduced motion) */}
        <div
          className="absolute inset-0 transition-opacity duration-1000 ease-out"
          style={{ opacity: isPlaying ? 0 : 1 }}
        >
          <Image
            src={`${BASE_PATH}/assets/poster.jpg`}
            alt=""
            fill
            priority
            sizes="100vw"
            className="w-full h-full object-cover object-[center_28%] md:object-[68%_30%] lg:object-[72%_32%] filter contrast-[1.04] brightness-[0.88] opacity-35 sm:opacity-70 lg:opacity-85"
          />
        </div>

        {/* Layer B: Temporary Cinematic Video (Smoothly fades in while playing; fades out on completion) */}
        {!isReducedMotion && (
          <div
            className="absolute inset-0 transition-opacity duration-1000 ease-out"
            style={{ opacity: isPlaying ? 1 : 0 }}
          >
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              tabIndex={-1}
              aria-hidden="true"
              className="w-full h-full object-cover object-[center_28%] md:object-[68%_30%] lg:object-[72%_32%] filter contrast-[1.08] brightness-[0.92]"
            >
              <source src={`${BASE_PATH}/assets/hero.webm`} type="video/webm" />
              <source src={`${BASE_PATH}/assets/hero.mp4`} type="video/mp4" />
            </video>
          </div>
        )}

        {/* Controlled Edge-Blending & Contrast Overlays:
            - Left: Deep canvas gradient protecting headline, subheadline, and CTAs
            - Top & Bottom: Soft vignette feathering into page borders and navbar
            - Right: Subtle edge fade eliminating any rectangular boundaries */}
        <div className="absolute inset-0 bg-gradient-to-r from-canvas via-canvas/90 via-40% sm:via-48% to-canvas/30 lg:to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-l from-canvas/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 film-grain opacity-20 pointer-events-none" />
      </div>

      {/* FOREGROUND HERO CONTENT */}
      <div className="relative z-10 max-w-[1536px] mx-auto w-full flex-1 flex flex-col justify-between py-6 lg:py-10">
        {/* Main 12-Column Editorial Grid: Left Text + Right Open Atmospheric Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center my-auto w-full">
          {/* LEFT ZONE: Identity Pill, Refined Headline, Statement & CTAs */}
          <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Identity Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-1/80 border border-white/10 text-[11px] font-mono tracking-wider text-text-secondary w-fit rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse" aria-hidden="true" />
              <span>Computer Science &amp; Systems Engineering</span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-white select-none">
              This is <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-accent-cyan/80">Michael.</span>
            </h1>

            {/* Supporting Statement with smooth progressive streaming */}
            <div className="text-sm sm:text-base lg:text-lg font-normal text-text-secondary max-w-xl leading-relaxed min-h-[4rem]">
              <StreamingText
                text={SITE_METADATA.subheadline}
                speed={16}
                delay={200}
                startImmediately={true}
                showCursor={true}
              />
            </div>

            {/* Action Triggers */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 pt-2">
              <a
                href="#selected-work"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 bg-white text-black font-sans text-xs sm:text-sm font-medium tracking-wide hover:bg-accent-cyan transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan text-center"
              >
                <span>Explore Selected Work</span>
                <span className="text-sm" aria-hidden="true">→</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 bg-transparent border border-white/20 text-text-secondary font-sans text-xs sm:text-sm font-medium tracking-wide hover:text-white hover:border-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan text-center"
              >
                <span>Get in Touch</span>
                <span className="text-sm" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT ZONE: Unboxed open space on desktop allowing the blended background visual to breathe */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-6 pointer-events-none" aria-hidden="true" />
        </div>

        {/* Downward Subtle Scroll Cue */}
        <div className="w-full flex items-center justify-between pt-6 border-t border-white/10 text-xs font-mono text-text-secondary mt-8">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 bg-accent-cyan" aria-hidden="true" />
            <span className="tracking-widest uppercase text-[11px] text-white/70">
              {isPlaying ? "CINEMATIC PLAYBACK ACTIVE" : "SCROLL TO EXPLORE"}
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/80" aria-hidden="true">
            <span className="text-sm animate-bounce">↓</span>
          </div>
        </div>
      </div>
    </section>
  );
}
