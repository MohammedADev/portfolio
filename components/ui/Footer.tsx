import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-background/5 relative border-t py-12 backdrop-blur-sm">
      <div className="container mx-auto grid gap-12 px-6 md:grid-cols-2">
        <div className="space-y-6">
          <div>
            <h3 className="text-foreground text-xl font-medium">
              Mohammed Abdelaziz
            </h3>
            <div className="from-primary to-secondary mt-1 h-1 w-12 bg-gradient-to-r"></div>
          </div>

          <p className="text-muted-foreground max-w-md">
            A Computer Science student based in the Los Angeles Metropolitan
            Area specializing in full-stack development and distributed systems.
          </p>

          <div className="flex gap-4">
            <Link
              href="https://github.com/MohammedADev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-muted-foreground/20 hover:border-primary/50 h-10 w-10 rounded-full transition-all"
              >
                <SiGithub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>

            <Link
              href="https://www.linkedin.com/in/mohammedadev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-muted-foreground/20 hover:border-primary/50 h-10 w-10 rounded-full transition-all"
              >
                <SiLinkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>

            <Link href="mailto:work@mohammedabdelaziz.com">
              <Button
                variant="outline"
                size="icon"
                className="border-muted-foreground/20 hover:border-primary/50 h-10 w-10 rounded-full transition-all"
              >
                <ExternalLink className="h-4 w-4" />
                <span className="sr-only">Contact</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between space-y-6 p-4 sm:flex-row sm:space-y-0 sm:p-8 md:p-12">
          <div className="flex flex-col space-y-4 sm:space-y-6">
            <div className="flex flex-wrap gap-6">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="/experience"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </Link>
              <Link
                href="/gallery"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="flex w-full flex-col items-start sm:w-auto sm:items-end">
            <div className="w-full space-y-4 sm:space-y-6 sm:text-right">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Mohammed Abdelaziz. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
