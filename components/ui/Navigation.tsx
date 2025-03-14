"use client";

import Link from "next/link";
import type { LinkProps } from "next/link";
import { Camera, Grid, ImageIcon, User, Mail, Menu, X } from "lucide-react";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  currentSection: string;
}

interface NavItem {
  icon: LucideIcon;
  id: string;
  label: string;
  href: NonNullable<LinkProps<string>["href"]>;
}

export default function Navigation({ currentSection }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when path changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navItems: NavItem[] = [
    { icon: Camera, id: "home", label: "Home", href: "/" },
    { icon: User, id: "about", label: "About", href: "/about" },
    { icon: Grid, id: "projects", label: "Projects", href: "/projects" },
    { icon: ImageIcon, id: "gallery", label: "Gallery", href: "/gallery" },
    { icon: Mail, id: "contact", label: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="border-border bg-background/5 fixed top-0 right-0 z-40 hidden h-screen w-16 flex-col items-center justify-center gap-8 border-l backdrop-blur-sm md:flex">
        <div className="flex flex-col items-center gap-8">
          {navItems.map(({ icon: Icon, id, href, label }) => (
            <Link key={id} href={href} className="group relative">
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg transition-all",
                  currentSection === id
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="bg-background absolute top-1/2 right-full mr-2 -translate-y-1/2 rounded px-2 py-1 text-sm font-medium opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                {label}
              </div>
            </Link>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsMobileMenuOpen(true)}
        className="fixed top-4 right-4 z-50 md:hidden"
      >
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="bg-background/95 fixed inset-0 z-50 backdrop-blur-sm md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(false)}
                className="absolute top-4 right-4"
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>

              <div className="flex flex-col items-center gap-6">
                {navItems.map(({ icon: Icon, id, href, label }) => (
                  <Link
                    key={id}
                    href={href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-4 py-3 text-lg font-medium transition-all",
                      currentSection === id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
