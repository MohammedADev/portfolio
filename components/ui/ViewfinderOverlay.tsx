"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

let startTime: number | null = null;

interface ViewfinderOverlayProps {
  currentSection: string;
}

export default function ViewfinderOverlay({
  currentSection,
}: ViewfinderOverlayProps) {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRecording] = useState(true);

  useEffect(() => {
    if (startTime === null) {
      startTime = Date.now();
    }

    if (isRecording) {
      const interval = setInterval(() => {
        const currentElapsed = Math.floor((Date.now() - startTime!) / 1000);
        setElapsedTime(currentElapsed);
      }, 1000);

      return () => clearInterval(interval);
    }
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
      case "projects":
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
      case "projects":
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
    <div
      className={cn(
        "pointer-events-none fixed inset-0 font-mono text-xs md:text-sm",
        "transition-opacity duration-500",
      )}
    >
      <div className="absolute top-8 left-8 space-y-1">
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

      <div className="absolute top-8 right-24 space-y-1 text-right">
        <div className="text-secondary">{getAperture()}</div>
        <div className="text-secondary">{getShutterSpeed()}</div>
      </div>

      <div className="absolute bottom-8 left-8">
        <div className="text-primary">{currentSection?.toUpperCase()}</div>
      </div>

      <div className="absolute right-24 bottom-8">
        <div className="text-secondary">AF</div>
      </div>
    </div>
  );
}
