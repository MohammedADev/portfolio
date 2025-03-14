import React from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-border bg-card/5 relative border-t py-8 backdrop-blur-xs">
      <div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
        <div className="space-y-4">
          <h3 className="text-foreground text-lg font-medium">
            Mohammed Abdelaziz
          </h3>
          <p className="text-muted-foreground max-w-md">
            A Computer Science student based in the Los Angeles Metropolitan
            Area specializing in full-stack development and distributed systems.
          </p>

          <div className="flex gap-4">
            <Link
              href="https://github.com/MohammedADev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <SiGithub className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>

            <Link
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <SiLinkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>

            <Link
              href="mailto:work@mohammedabdelaziz.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
              <span className="sr-only">Contact</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-start md:items-end">
          <div className="space-y-4">
            <div className="flex gap-4">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/gallery"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </div>

            <p className="text-muted-foreground text-sm">
              © {currentYear} Mohammed Abdelaziz. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
