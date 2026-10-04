"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import { SITE_METADATA } from "@/lib/constants";

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

      // When video ends: fades out background layer, restores poster, schedules 30s replay
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
      {/* LAYER 2 — TEMPORARY CINEMATIC VIDEO BACKGROUND LAYER (Only visible while playing) */}
      <div
        className="absolute inset-0 pointer-events-none z-0 overflow-hidden transition-opacity duration-700 ease-out"
        style={{ opacity: isPlaying ? 1 : 0 }}
        aria-hidden="true"
      >
        {!isReducedMotion && (
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            aria-hidden="true"
            className="w-full h-full object-cover object-[center_30%] filter contrast-[1.08] brightness-[0.92]"
          >
            <source src="/assets/hero.webm" type="video/webm" />
            <source src="/assets/hero.mp4" type="video/mp4" />
          </video>
        )}

        {/* Controlled gradient overlay: dark behind left text for crisp readability, open on right for vivid footage */}
        <div className="absolute inset-0 bg-gradient-to-r from-canvas/95 via-canvas/60 via-40% to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-canvas via-transparent to-canvas/30 pointer-events-none" />
        <div className="absolute inset-0 film-grain opacity-20 pointer-events-none" />
      </div>

      {/* LAYER 1 — HERO FOREGROUND CONTENT */}
      <div className="relative z-10 max-w-[1536px] mx-auto w-full flex-1 flex flex-col justify-between py-6 lg:py-10">
        {/* Main 12-Column Two-Zone Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center my-auto w-full">
          {/* LEFT ZONE: Identity Pill, Monumental Headline, Statement & CTAs */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center space-y-6 sm:space-y-8">
            {/* Identity Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-surface-1/90 backdrop-blur-md border border-white/10 text-[10px] sm:text-[11px] font-mono tracking-widest text-text-secondary uppercase w-fit">
              <span className="w-1.5 h-1.5 bg-accent-cyan animate-pulse" aria-hidden="true" />
              <span>Systems &amp; Creative Engineering</span>
            </div>

            {/* Monumental Headline */}
            <h1 className="font-display font-extrabold text-[2.75rem] sm:text-[4rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.92] tracking-tighter text-white uppercase select-none">
              THIS IS<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60">
                MICHAEL.
              </span>
            </h1>

            {/* Supporting Statement */}
            <p className="text-base sm:text-lg lg:text-xl font-normal text-text-primary/90 max-w-xl leading-relaxed tracking-tight">
              {SITE_METADATA.subheadline}
            </p>

            {/* Sharp Action Triggers */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3.5 sm:gap-4 pt-2">
              <a
                href="#selected-work"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 bg-white text-black font-mono text-xs font-semibold tracking-wider uppercase hover:bg-accent-cyan hover:text-black transition-colors duration-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan text-center"
              >
                <span>EXPLORE WHAT I BUILD</span>
                <span className="text-sm font-bold" aria-hidden="true">→</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 bg-transparent border border-white/20 text-text-secondary font-mono text-xs tracking-wider uppercase hover:text-white hover:border-white/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan text-center"
              >
                <span>GET IN TOUCH</span>
                <span className="text-sm" aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          {/* RIGHT ZONE: Hero Media Panel (poster.jpg) - Visible BEFORE & AFTER video, HIDDEN during video */}
          <div className="lg:col-span-6 xl:col-span-6 w-full flex items-center justify-center lg:justify-end">
            <div
              className="relative w-full max-w-2xl aspect-[16/10] sm:aspect-[16/9] bg-surface-1 border border-white/10 overflow-hidden shadow-2xl transition-opacity duration-700 ease-out"
              style={{
                opacity: isPlaying ? 0 : 1,
                pointerEvents: isPlaying ? "none" : "auto",
              }}
            >
              {/* Permanent Poster Image */}
              <Image
                src="/assets/poster.jpg"
                alt="Michael Shah Portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center filter contrast-[1.05] brightness-[0.92]"
              />

              {/* Subtle cinematic overlays */}
              <div className="absolute inset-0 pointer-events-none film-grain opacity-25" />
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-canvas/40 via-transparent to-transparent" />

              {/* Technical framing markers */}
              <div className="absolute top-3 left-3 pointer-events-none flex items-center gap-2 px-2 py-0.5 bg-canvas/80 backdrop-blur-sm border border-white/10 text-[9px] font-mono text-text-muted tracking-widest uppercase">
                <span>PORTRAIT // ARCHIVE</span>
              </div>

              <div className="absolute bottom-3 right-3 pointer-events-none flex items-center gap-2 px-2 py-0.5 bg-canvas/80 backdrop-blur-sm border border-white/10 text-[9px] font-mono tracking-widest uppercase text-text-secondary">
                <span className="w-1.5 h-1.5 bg-white/40" aria-hidden="true" />
                <span>MICHAEL SHAH</span>
              </div>
            </div>
          </div>
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
