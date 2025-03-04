"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface CustomCursorProps {
  position: { x: number; y: number };
}

export default function CustomCursor({ position }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    const animateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.setProperty(
          "--cursor-x",
          `${position.x - 16}px`,
        );
        cursorRef.current.style.setProperty(
          "--cursor-y",
          `${position.y - 16}px`,
        );
      }
    };

    animateCursor();
  }, [position]);

  return (
    <div
      ref={cursorRef}
      className={cn(
        "pointer-events-none fixed z-50 h-8 w-8 transform mix-blend-difference",
        "custom-cursor hidden md:block",
      )}
    >
      <div className="h-full w-full rounded-full border border-white" />
      <div className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-white" />
    </div>
  );
}
