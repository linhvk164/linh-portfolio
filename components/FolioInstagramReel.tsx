"use client";

import {
  Maximize2,
  Minimize2,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { useRef, useState } from "react";
import { publicPath } from "@/lib/assets";

const FOLIO_REEL_VIDEO = "/images/folio/folio-reel.mp4";

const controlButtonClass =
  "flex h-7 w-7 items-center justify-center rounded-full bg-ink/70 text-white backdrop-blur-sm transition-colors duration-200 hover:bg-ink";

export function FolioInstagramReel() {
  const [isOpen, setIsOpen] = useState(true);
  const [isLarge, setIsLarge] = useState(false);
  const [muted, setMuted] = useState(true);
  const [entering, setEntering] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  function toggleMute() {
    const nextMuted = !muted;
    setMuted(nextMuted);
    if (videoRef.current) {
      videoRef.current.muted = nextMuted;
    }
  }

  function minimize() {
    videoRef.current?.pause();
    setEntering(true);
    setIsOpen(false);
  }

  function restore() {
    setEntering(true);
    setIsOpen(true);
    requestAnimationFrame(() => {
      void videoRef.current?.play();
    });
  }

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={restore}
        aria-label="Open Folio reel"
        className={`${entering ? "folio-reel-pop-in" : ""} fixed right-4 bottom-4 z-[90] flex h-12 w-12 items-center justify-center rounded-full border border-border bg-ink text-white shadow-[0_8px_30px_rgba(26,43,36,0.16)] transition-transform duration-200 hover:scale-105`}
        onAnimationEnd={() => setEntering(false)}
      >
        <Play size={18} fill="currentColor" strokeWidth={0} aria-hidden />
      </button>
    );
  }

  return (
    <div
      className={`${entering ? "folio-reel-pop-in" : ""} fixed right-4 bottom-4 z-[90] transition-[width] duration-300 ease-out ${
        isLarge ? "w-[min(100vw-2rem,378px)]" : "w-[min(100vw-2rem,252px)]"
      }`}
      role="dialog"
      aria-label="Folio product reel"
      onAnimationEnd={() => setEntering(false)}
    >
      <div className="relative overflow-hidden rounded-[var(--radius-card)] border border-border bg-ink shadow-[0_12px_40px_rgba(26,43,36,0.2)]">
        <div className="absolute top-2 right-2 z-10 flex gap-1.5">
          <button
            type="button"
            onClick={() => setIsLarge((large) => !large)}
            aria-label={isLarge ? "Make video smaller" : "Make video larger"}
            className={controlButtonClass}
          >
            {isLarge ? (
              <Minimize2 size={14} strokeWidth={2.25} aria-hidden />
            ) : (
              <Maximize2 size={14} strokeWidth={2.25} aria-hidden />
            )}
          </button>
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? "Unmute video" : "Mute video"}
            className={controlButtonClass}
          >
            {muted ? (
              <VolumeX size={14} strokeWidth={2.25} aria-hidden />
            ) : (
              <Volume2 size={14} strokeWidth={2.25} aria-hidden />
            )}
          </button>
          <button
            type="button"
            onClick={minimize}
            aria-label="Minimize video"
            className={controlButtonClass}
          >
            <X size={14} strokeWidth={2.25} aria-hidden />
          </button>
        </div>

        <video
          ref={videoRef}
          src={publicPath(FOLIO_REEL_VIDEO)}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="block aspect-[9/16] h-auto w-full object-cover"
        />
      </div>
    </div>
  );
}
