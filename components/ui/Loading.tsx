"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Initializing...");

  useEffect(() => {
    const messages = [
      "Initializing...",
      "Loading viewfinder...",
      "Calibrating focus...",
      "Adjusting aperture...",
      "Setting ISO...",
      "Ready",
    ];

    let currentStep = 0;
    const totalSteps = messages.length;
    const interval = 600;

    const timer = setInterval(() => {
      if (currentStep < totalSteps) {
        const newProgress = Math.floor((currentStep / (totalSteps - 1)) * 100);
        setProgress(newProgress);
        setMessage(messages[currentStep]);
        currentStep++;
      } else {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-background fixed inset-0 z-50 flex items-center justify-center">
      <div className="relative flex w-80 flex-col items-center space-y-6 text-center">
        <div className="relative h-20 w-20">
          <div className="border-primary absolute inset-0 rounded-full border-2"></div>
          <div className="border-primary absolute inset-4 rounded-full border"></div>
          <div className="bg-primary absolute inset-0 m-auto h-1 w-8"></div>
          <div className="bg-primary absolute inset-0 m-auto h-8 w-1"></div>
        </div>

        <div className="text-foreground font-mono">{message}</div>
        <div className="bg-muted/20 h-1 w-full rounded-full">
          <div
            className="bg-primary h-1 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="animate-gradient-shift from-primary/10 to-secondary/10 pointer-events-none absolute -z-10 h-64 w-64 rounded-full bg-gradient-to-r blur-3xl"></div>
      </div>
    </div>
  );
}
