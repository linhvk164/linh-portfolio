"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AboutModal } from "@/components/AboutModal";

type AboutModalContextValue = {
  openAbout: () => void;
  closeAbout: () => void;
};

const AboutModalContext = createContext<AboutModalContextValue | null>(null);

export function AboutModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  const openAbout = useCallback(() => setOpen(true), []);
  const closeAbout = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ openAbout, closeAbout }),
    [openAbout, closeAbout],
  );

  return (
    <AboutModalContext.Provider value={value}>
      {children}
      <AboutModal open={open} onClose={closeAbout} />
    </AboutModalContext.Provider>
  );
}

export function useAboutModal() {
  const context = useContext(AboutModalContext);
  if (!context) {
    throw new Error("useAboutModal must be used within AboutModalProvider");
  }
  return context;
}
