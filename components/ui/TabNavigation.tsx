"use client";

import type React from "react";

import { useState, useRef, useEffect, useMemo } from "react";
import { Moon, Sun, Camera, User, Grid, ImageIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface TabNavigationProps {
  currentSection: string;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ElementType;
}

export default function TabNavigation({ currentSection }: TabNavigationProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoverStyle, setHoverStyle] = useState({});
  const [activeStyle, setActiveStyle] = useState({ left: "0px", width: "0px" });
  const [isDarkMode, setIsDarkMode] = useState(false);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);

  const navItems = useMemo<NavItem[]>(
    () => [
      { id: "home", label: "Home", href: "/", icon: Camera },
      { id: "about", label: "About", href: "/about", icon: User },
      {
        id: "experience",
        label: "Experience",
        href: "/experience",
        icon: Grid,
      },
      { id: "gallery", label: "Gallery", href: "/gallery", icon: ImageIcon },
      { id: "contact", label: "Contact", href: "/contact", icon: Mail },
    ],
    [],
  );

  // Find the active index based on currentSection
  useEffect(() => {
    const index = navItems.findIndex((item) => item.id === currentSection);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [currentSection, navItems]);

  useEffect(() => {
    if (hoveredIndex !== null) {
      const hoveredElement = tabRefs.current[hoveredIndex];
      if (hoveredElement) {
        const { offsetLeft, offsetWidth } = hoveredElement;
        setHoverStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    }
  }, [hoveredIndex, navItems]);

  useEffect(() => {
    const activeElement = tabRefs.current[activeIndex];
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setActiveStyle({
        left: `${offsetLeft}px`,
        width: `${offsetWidth}px`,
      });
    }
  }, [activeIndex, navItems]);

  useEffect(() => {
    requestAnimationFrame(() => {
      const index = navItems.findIndex((item) => item.id === currentSection);
      const activeElement = tabRefs.current[index !== -1 ? index : 0];
      if (activeElement) {
        const { offsetLeft, offsetWidth } = activeElement;
        setActiveStyle({
          left: `${offsetLeft}px`,
          width: `${offsetWidth}px`,
        });
      }
    });
  }, [currentSection, navItems]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="border-border bg-background/80 dark:bg-background/50 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <div className="relative container mx-auto flex h-14 items-center justify-center px-2 sm:h-16 sm:px-4">
        <Button
          variant="ghost"
          size="icon"
          className="hover:text-primary absolute right-2 sm:right-4"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          )}
        </Button>

        <div className="relative">
          {/* Hover Highlight */}
          <div
            className="bg-primary/10 dark:bg-primary/20 absolute flex h-[34px] items-center rounded-[6px] transition-all duration-300 ease-out sm:h-[38px]"
            style={{
              ...hoverStyle,
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
          />

          {/* Active Indicator */}
          <div
            className="bg-primary dark:bg-primary absolute bottom-[-10px] h-[2px] transition-all duration-300 ease-out"
            style={activeStyle}
          />

          {/* Tabs */}
          <div className="relative flex items-center space-x-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link href={item.href} key={item.id}>
                  <div
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    className={`h-[34px] cursor-pointer px-3 py-2 transition-colors duration-300 sm:h-[38px] sm:px-4 ${
                      index === activeIndex
                        ? "text-primary dark:text-primary"
                        : "text-muted-foreground dark:text-muted-foreground"
                    }`}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="flex h-full items-center justify-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span className="hidden text-sm font-medium sm:inline">
                        {item.label}
                      </span>
                      {/* Mobile tooltip */}
                      <span className="bg-background/90 text-foreground pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100 sm:hidden">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
