"use client";
import type React from "react";
import { useState } from "react";
import CustomCursor from "./ui/CustomCursor";
import Navigation from "./ui/Navigation";
import ViewfinderOverlay from "./ui/ViewfinderOverlay";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
  currentSection: string;
}

export default function Layout({ children, currentSection }: LayoutProps) {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    requestAnimationFrame(() => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    });
  };

  return (
    <div
      className="bg-background text-foreground relative min-h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
      <CustomCursor position={cursorPosition} />
      <Navigation currentSection={currentSection} />
      <ViewfinderOverlay currentSection={currentSection} />
      <main className={cn("min-h-screen w-[calc(100%-4rem)]")}>{children}</main>
    </div>
  );
}
