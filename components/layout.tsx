"use client";

import type React from "react";
import { useEffect, useState } from "react";
import CustomCursor from "./ui/CustomCursor";
import LoadingScreen from "./ui/LoadingScreen";
import Navigation from "./ui/Navigation";
import ViewfinderOverlay from "./ui/ViewfinderOverlay";

interface LayoutProps {
  children: React.ReactNode;
  currentSection: string;
}

export default function Layout({ children, currentSection }: LayoutProps) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-black text-white"
      onMouseMove={handleMouseMove}
      style={{
        background: "linear-gradient(to bottom right, #000000, #1a1a2e)",
      }}
    >
      <CustomCursor position={cursorPosition} />
      <LoadingScreen isLoading={isLoading} />
      <Navigation currentSection={currentSection} />
      <ViewfinderOverlay currentSection={currentSection} />
      <main className="min-h-screen w-[calc(100%-4rem)]">{children}</main>
    </div>
  );
}
