"use client";

import { useEffect, useRef, useState } from "react";
import { publicPath } from "@/lib/assets";

type CaseStudyLazyVideoProps = {
  src: string;
  alt: string;
  fit?: boolean;
};

export function CaseStudyLazyVideo({
  src,
  alt,
  fit = true,
}: CaseStudyLazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const resolvedSrc = publicPath(src);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
        } else {
          video.pause();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!shouldLoad || !video) return;

    video.load();
    void video.play().catch(() => {});
  }, [shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? resolvedSrc : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-label={alt}
      className={
        fit ? "block h-auto w-auto max-w-full" : "block h-auto w-full"
      }
    />
  );
}
