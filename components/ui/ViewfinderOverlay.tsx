"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

let startTime: number | null = null;

interface ViewfinderOverlayProps {
  currentSection: string;
}

export default function ViewfinderOverlay({
  currentSection,
}: ViewfinderOverlayProps) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRecording] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (startTime === null) {
      startTime = Date.now();
    }

    // Fade in the overlay after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);

    if (isRecording) {
      const interval = setInterval(() => {
        const currentElapsed = Math.floor((Date.now() - startTime!) / 1000);
        setElapsedTime(currentElapsed);
      }, 1000);

      return () => {
        clearInterval(interval);
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const minutes = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  const getAperture = () => {
    switch (currentSection) {
      case "experience":
        return "ƒ/2.8";
      case "gallery":
        return "ƒ/1.8";
      case "about":
        return "ƒ/4.0";
      case "contact":
        return "ƒ/5.6";
      default:
        return "ƒ/2.0";
    }
  };

  const getShutterSpeed = () => {
    switch (currentSection) {
      case "experience":
        return "1/125";
      case "gallery":
        return "1/60";
      case "about":
        return "1/250";
      case "contact":
        return "1/100";
      default:
        return "1/80";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "pointer-events-none absolute inset-0 z-40 font-mono text-[10px] sm:text-xs md:text-sm",
        "overflow-hidden",
      )}
    >
      {/* Top Left Info */}
      <div className="absolute top-16 left-3 z-10 space-y-1 sm:top-20 sm:left-6 md:top-24 md:left-8">
        <div
          className={cn(
            "text-primary flex items-center",
            isRecording && "animate-pulse",
          )}
        >
          <div className="mr-1.5 h-1.5 w-1.5 rounded-full bg-red-500 sm:mr-2 sm:h-2 sm:w-2"></div>
          REC {formatTime(elapsedTime)}
        </div>
        <div className="text-primary hidden sm:block">ISO AUTO</div>
      </div>

      {/* Top Right Info */}
      <div className="absolute top-16 right-3 z-10 space-y-1 text-right sm:top-20 sm:right-16 md:top-24 md:right-24">
        <div className="text-secondary">{getAperture()}</div>
        <div className="text-secondary hidden sm:block">
          {getShutterSpeed()}
        </div>
      </div>

      {/* Bottom Left Info */}
      <div className="absolute bottom-4 left-3 z-10 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8">
        <div className="text-primary font-medium tracking-wider">
          {currentSection?.toUpperCase()}
        </div>
      </div>

      {/* Bottom Right Info */}
      <div className="absolute right-3 bottom-4 z-10 sm:right-16 sm:bottom-6 md:right-24 md:bottom-8">
        <div className="text-secondary hidden sm:block">AF</div>
      </div>

      {/* Vignette effect */}
      <div
        className="bg-gradient-radial to-background/30 pointer-events-none absolute inset-0 from-transparent"
        style={{
          maskImage:
            "radial-gradient(circle at center, transparent 0%, black 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, transparent 0%, black 100%)",
        }}
      ></div>

      {/* Corner Markers - Optional visual enhancement */}
      <div className="hidden sm:block">
        <div className="border-primary/30 absolute top-12 left-12 h-8 w-8 border-t-2 border-l-2"></div>
        <div className="border-primary/30 absolute top-12 right-12 h-8 w-8 border-t-2 border-r-2"></div>
        <div className="border-primary/30 absolute bottom-12 left-12 h-8 w-8 border-b-2 border-l-2"></div>
        <div className="border-primary/30 absolute right-12 bottom-12 h-8 w-8 border-r-2 border-b-2"></div>
      </div>
    </motion.div>
  );
}
