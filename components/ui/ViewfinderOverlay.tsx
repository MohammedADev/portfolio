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
        "pointer-events-none fixed inset-0 font-mono text-xs md:text-sm",
      )}
    >
      <div className="absolute top-24 left-8 z-10 space-y-1">
        <div
          className={cn(
            "text-primary flex items-center",
            isRecording && "animate-pulse",
          )}
        >
          <div className="mr-2 h-2 w-2 rounded-full bg-red-500"></div>
          REC {formatTime(elapsedTime)}
        </div>
        <div className="text-primary">ISO AUTO</div>
      </div>

      <div className="absolute top-24 right-24 z-10 space-y-1 text-right">
        <div className="text-secondary">{getAperture()}</div>
        <div className="text-secondary">{getShutterSpeed()}</div>
      </div>

      <div className="absolute bottom-8 left-8 z-10">
        <div className="text-primary font-medium tracking-wider">
          {currentSection?.toUpperCase()}
        </div>
      </div>

      <div className="absolute right-24 bottom-8 z-10">
        <div className="text-secondary">AF</div>
      </div>

      {/* Vignette effect */}
      <div className="bg-gradient-radial to-background/30 pointer-events-none absolute inset-0 from-transparent"></div>
    </motion.div>
  );
}
