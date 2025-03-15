"use client";
import type React from "react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

import TabNavigation from "@/components/ui/TabNavigation";
import ViewfinderOverlay from "@/components/ui/ViewfinderOverlay";
import Footer from "@/components/ui/Footer";
import Loading from "@/components/ui/Loading";

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
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);

      // After loading screen is gone, show the content
      setTimeout(() => {
        setIsLoaded(true);
      }, 300);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{showLoading && <Loading />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "bg-background text-foreground relative min-h-screen overflow-hidden",
        )}
      >
        <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--primary-rgb),0.08),transparent_50%)]" />
        <TabNavigation currentSection={currentSection} />
        <ViewfinderOverlay currentSection={currentSection} />

        <main className="min-h-screen w-full pt-12 sm:pt-16">{children}</main>

        {showFooter && (
          <div className="w-full">
            <Footer />
          </div>
        )}
      </motion.div>
    </>
  );
}
