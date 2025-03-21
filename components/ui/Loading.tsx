"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
    const interval = 250;

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
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-background fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <div className="relative flex w-full max-w-[320px] flex-col items-center space-y-6 text-center sm:space-y-8">
        <div className="relative h-16 w-16 sm:h-24 sm:w-24">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="border-primary absolute inset-0 rounded-full border-2 border-dashed"
          ></motion.div>
          <div className="border-primary absolute inset-4 rounded-full border"></div>

          <motion.div
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 m-auto flex items-center justify-center"
          >
            <div className="bg-primary absolute inset-0 m-auto h-0.5 w-6 sm:h-1 sm:w-8"></div>
            <div className="bg-primary absolute inset-0 m-auto h-6 w-0.5 sm:h-8 sm:w-1"></div>
          </motion.div>
        </div>

        <div className="text-foreground font-mono text-sm tracking-wide sm:text-base">
          {message}
        </div>

        <div className="w-full space-y-2">
          <div className="bg-muted/20 h-1 w-full overflow-hidden rounded-full">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="bg-primary h-full rounded-full"
            ></motion.div>
          </div>
          <div className="text-muted-foreground text-right font-mono text-[10px] sm:text-xs">
            {progress}%
          </div>
        </div>

        <div className="text-primary/50 mt-6 animate-pulse font-mono text-xs sm:mt-8 sm:text-sm">
          CAMERA SYSTEM LOADING
        </div>

        <div className="animate-gradient-shift from-primary/10 to-secondary/10 pointer-events-none absolute -z-10 h-48 w-48 rounded-full bg-gradient-to-r blur-3xl sm:h-64 sm:w-64"></div>
      </div>
    </motion.div>
  );
}
