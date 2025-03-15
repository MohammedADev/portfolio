import PageLayout from "@/components/ui/PageLayout";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <PageLayout currentSection="home">
      <div className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8">
        <div className="animate-fade-in max-w-3xl space-y-4 text-center sm:space-y-8">
          <div className="space-y-2 sm:space-y-4">
            <h1 className="from-primary via-secondary to-primary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              Mohammed Abdelaziz
            </h1>
            <p className="text-muted-foreground mx-auto max-w-xl text-lg sm:text-xl md:text-2xl">
              Full-stack developer with a passion for photography and
              distributed systems
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Link
              href="https://github.com/MohammedADev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="icon"
                className="border-muted-foreground/20 hover:border-primary/50 h-12 w-12 rounded-full transition-all"
              >
                <Github className="h-5 w-5" />
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
                className="border-muted-foreground/20 hover:border-primary/50 h-12 w-12 rounded-full transition-all"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:work@mohammedabdelaziz.com">
              <Button
                variant="outline"
                size="icon"
                className="border-muted-foreground/20 hover:border-primary/50 h-12 w-12 rounded-full transition-all"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>

          <div className="flex flex-col justify-center gap-4 pt-6 sm:flex-row">
            <Link href="/experience">
              <Button className="group bg-primary text-primary-foreground hover:bg-primary/90 relative w-full overflow-hidden sm:w-auto">
                <span className="relative z-10 flex items-center">
                  View Experience
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <span className="from-primary via-secondary to-primary group-hover:animate-shimmer absolute inset-0 bg-gradient-to-r bg-[length:200%_100%] opacity-0 transition-opacity group-hover:opacity-50"></span>
              </Button>
            </Link>
            <Link href="/gallery">
              <Button
                variant="outline"
                className="group border-primary/20 hover:border-primary/50 relative w-full transition-all sm:w-auto"
              >
                <span className="relative z-10 flex items-center">
                  Explore Gallery
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="from-background/80 pointer-events-none absolute right-0 bottom-0 left-0 h-1/3 bg-gradient-to-t to-transparent"></div>

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.08),transparent_45%)]"></div>
          <div className="bg-primary/10 absolute top-1/4 left-1/4 h-32 w-32 rounded-full blur-3xl"></div>
          <div className="bg-secondary/10 absolute right-1/4 bottom-1/4 h-32 w-32 rounded-full blur-3xl"></div>
        </div>
      </div>
    </PageLayout>
  );
}
