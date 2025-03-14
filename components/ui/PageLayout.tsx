"use client";
import type React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import Navigation from "@/components/ui/Navigation";
import ViewfinderOverlay from "@/components/ui/ViewfinderOverlay";
import Footer from "@/components/ui/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
  currentSection: string;
  showFooter?: boolean;
}

export default function PageLayout({
  children,
  currentSection,
  showFooter = true,
}: PageLayoutProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsLoaded(true);
    });
  }, []);

  return (
    <div
      className={cn(
        "bg-background text-foreground relative min-h-screen overflow-hidden transition-opacity duration-300",
        !isLoaded && "opacity-0",
      )}
    >
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary),0.1),transparent_50%)]" />
      <Navigation currentSection={currentSection} />
      <ViewfinderOverlay currentSection={currentSection} />
      <main className="min-h-screen w-[calc(100%-4rem)]">{children}</main>

      {showFooter && (
        <div className="w-[calc(100%-4rem)]">
          <Footer />
        </div>
      )}
    </div>
  );
}
