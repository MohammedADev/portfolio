import PageLayout from "@/components/ui/PageLayout";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Canvas Discord Bot",
      description:
        "A Discord bot that integrates with Canvas LMS to help students track assignments and deadlines. Built with Discord.js and Node.js.",
      image: "/images/projects/canvas-logo.png",
      tags: ["TypeScript", "Discord.js", "Node.js", "Canvas API"],
      links: {
        github: "https://github.com/MohammedADev/Canvas-Discord-Bot",
      },
    },
    {
      id: 2,
      title: "Dressin Automation Bot",
      description:
        "This script is designed to automate the process of placing an order on Dressin.com. It simulates user interactions to navigate through the website, select products, fill out forms, and complete the checkout process.",
      image: "/images/projects/dressin.png",
      tags: ["Typescript", "Node.js", "Dressin", "Playwright", "Google API"],
      links: {
        github: "https://github.com/MohammedADev/Dressin-Bot",
      },
    },
    {
      id: 3,
      title: "Real-time Analytics Dashboard",
      description:
        "A real-time analytics dashboard for monitoring user activity and system performance. Built with Next.js and Socket.io.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Next.js", "Socket.io", "Chart.js"],
      links: {
        demo: "https://example.com",
        github: "https://github.com/MohammedADev/analytics-dashboard",
      },
    },
    {
      id: 4,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and payment processing.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      links: {
        demo: "https://example.com",
        github: "https://github.com/MohammedADev/ecommerce-platform",
      },
    },
  ];

  return (
    <PageLayout currentSection="experience">
      <div className="min-h-screen p-8 pt-16 md:p-16 md:pt-24">
        <div className="animate-fade-in mx-auto max-w-6xl space-y-12">
          <div>
            <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Projects
            </h1>
            <div className="from-primary to-secondary mt-2 h-1 w-20 bg-gradient-to-r"></div>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
              A collection of my recent work in full-stack development,
              distributed systems, and web applications. Each project showcases
              different skills and technologies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.id}
                className="border-border bg-card/5 group hover:border-primary/50 relative flex h-full flex-col overflow-hidden rounded-xl border transition-all hover:shadow-lg"
              >
                <div className="from-primary/5 to-secondary/5 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="from-background/80 absolute inset-0 bg-gradient-to-t to-transparent"></div>
                </div>

                <div className="relative flex flex-1 flex-col p-6">
                  <h2 className="text-foreground text-2xl font-bold">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground mt-2 flex-1">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-primary/10 text-primary rounded-full px-3 py-1 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex gap-4">
                    {project.links.github && (
                      <Link
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="sm" className="gap-2">
                          <Github className="h-4 w-4" />
                          Code
                        </Button>
                      </Link>
                    )}

                    {project.links.demo && (
                      <Link
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button size="sm" className="gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
