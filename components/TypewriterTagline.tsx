"use client";

import { Fragment, useEffect, useState } from "react";

const OPENING_SESSION_KEY = "linhvk-opening-seen";

type TypewriterTaglineProps = {
  text: string;
  className?: string;
};

function renderWithLineBreaks(value: string) {
  return value.split("\n").map((line, index) => (
    <Fragment key={index}>
      {index > 0 ? <br /> : null}
      {line}
    </Fragment>
  ));
}

export function TypewriterTagline({ text, className }: TypewriterTaglineProps) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setDisplayed(text);
      setDone(true);
      return;
    }

    // Wait for opening curtain on first visit; start sooner on return visits.
    const startDelay =
      sessionStorage.getItem(OPENING_SESSION_KEY) === "1" ? 280 : 1400;

    let index = 0;
    let intervalId = 0;

    const startId = window.setTimeout(() => {
      intervalId = window.setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          window.clearInterval(intervalId);
          setDone(true);
        }
      }, 32);
    }, startDelay);

    return () => {
      window.clearTimeout(startId);
      window.clearInterval(intervalId);
    };
  }, [text]);

  return (
    <p className={className} aria-label={text.replace(/\n/g, " ")}>
      <span aria-hidden="true">{renderWithLineBreaks(displayed)}</span>
      <span
        className={`typewriter-caret${done ? " typewriter-caret--done" : ""}`}
        aria-hidden="true"
      />
    </p>
  );
}
