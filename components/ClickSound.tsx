"use client";

import { useEffect, useRef } from "react";
import { publicPath } from "@/lib/assets";

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], summary, label[for], .interactive-link, .interactive-card';

/** Drop your file here as click.mp3, click.wav, or click.ogg */
const CLICK_SOUND_CANDIDATES = [
  "/sounds/click.mp3",
  "/sounds/click.wav",
  "/sounds/click.ogg",
];

function playSample(ctx: AudioContext, buffer: AudioBuffer) {
  const source = ctx.createBufferSource();
  const gain = ctx.createGain();
  source.buffer = buffer;
  gain.gain.value = 0.7;
  source.connect(gain);
  gain.connect(ctx.destination);
  source.start(0);
}

async function loadClickBuffer(
  ctx: AudioContext,
): Promise<AudioBuffer | null> {
  for (const path of CLICK_SOUND_CANDIDATES) {
    try {
      const response = await fetch(publicPath(path), { method: "GET" });
      if (!response.ok) continue;
      const data = await response.arrayBuffer();
      return await ctx.decodeAudioData(data.slice(0));
    } catch {
      /* try next candidate */
    }
  }
  return null;
}

/** Plays /public/sounds/click.* on interactive clicks when the file exists. */
export function ClickSound() {
  const ctxRef = useRef<AudioContext | null>(null);
  const bufferRef = useRef<AudioBuffer | null>(null);
  const loadStateRef = useRef<"idle" | "loading" | "ready" | "missing">(
    "idle",
  );

  useEffect(() => {
    const getContext = () => {
      if (!ctxRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as typeof window & { webkitAudioContext?: typeof AudioContext })
            .webkitAudioContext;
        if (!AudioCtx) return null;
        ctxRef.current = new AudioCtx();
      }
      return ctxRef.current;
    };

    const ensureSample = async (ctx: AudioContext) => {
      if (loadStateRef.current === "ready" || loadStateRef.current === "missing") {
        return;
      }
      if (loadStateRef.current === "loading") return;
      loadStateRef.current = "loading";
      const buffer = await loadClickBuffer(ctx);
      bufferRef.current = buffer;
      loadStateRef.current = buffer ? "ready" : "missing";
    };

    const unlock = () => {
      const ctx = getContext();
      if (!ctx) return;
      if (ctx.state === "suspended") void ctx.resume();
      void ensureSample(ctx);
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const interactive = target.closest(INTERACTIVE_SELECTOR);
      if (!interactive) return;
      if (
        interactive instanceof HTMLButtonElement ||
        interactive instanceof HTMLInputElement
      ) {
        if (interactive.disabled) return;
      }
      if (interactive.getAttribute("aria-disabled") === "true") return;

      const ctx = getContext();
      if (!ctx) return;

      const run = async () => {
        if (ctx.state === "suspended") await ctx.resume();
        await ensureSample(ctx);
        if (!bufferRef.current) return;
        try {
          playSample(ctx, bufferRef.current);
        } catch {
          /* ignore autoplay / context errors */
        }
      };

      void run();
    };

    document.addEventListener("pointerdown", unlock, { once: true });
    document.addEventListener("click", onClick, true);

    return () => {
      document.removeEventListener("pointerdown", unlock);
      document.removeEventListener("click", onClick, true);
      void ctxRef.current?.close();
      ctxRef.current = null;
    };
  }, []);

  return null;
}
