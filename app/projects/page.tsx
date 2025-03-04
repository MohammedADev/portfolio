"use client";
import Layout from "@/components/layout";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { SiGithub } from "react-icons/si";

export default function Projects() {
  const projects = [
    {
      title: "Pear AI",
      description:
        "Y Combinator-backed project featuring landing page and Stripe payment integration, serving 200k+ visitors annually. Built with Next.js and TypeScript, optimized for global performance.",
      image: "/placeholder.svg",
      tags: ["Next.js", "TypeScript", "Redis", "FastAPI", "Supabase", "Stripe"],
      links: {
        github: "https://trypear.ai/",
        live: "#",
      },
    },
    {
      title: "Aniorb",
      description:
        "Redis-backed distributed streaming platform serving 40,000+ daily active users. Achieved 30% latency reduction through optimization and 500% YoY growth.",
      image: "/placeholder.svg",
      tags: ["React", "Docker", "Supabase", "Node.js", "Tailwind CSS"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Canvas Discord Bot",
      description:
        "Automated student workflow bot integrated with Canvas LMS API, reducing missed deadlines by 25% while maintaining 99.9% uptime.",
      image: "/placeholder.svg",
      tags: ["Discord.js", "Node.js", "Supabase", "TypeScript"],
      links: {
        github: "https://github.com/MohammedADev/Canvas-Discord-Bot",
        live: "#",
      },
    },
  ];

  return (
    <Layout currentSection="projects">
      <div className="min-h-screen p-8 md:p-16">
        <div className="animate-slide-up mx-auto max-w-6xl space-y-12">
          <h1 className="from-primary to-secondary bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent">
            Projects
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group animate-scale-in relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="border-border bg-card/5 relative aspect-video overflow-hidden rounded-lg border">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="from-background/80 via-background/30 absolute inset-0 bg-linear-to-t to-transparent opacity-0 backdrop-blur-xs transition-opacity duration-500 group-hover:opacity-100" />

                  <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div>
                      <h2 className="text-foreground mb-2 text-2xl font-bold">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm backdrop-blur-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Link
                          href={
                            project.links.github
                              ? { pathname: project.links.github }
                              : { pathname: "#" }
                          }
                          className="bg-secondary/10 text-secondary hover:bg-secondary/20 hover:shadow-secondary/25 rounded-full p-2 backdrop-blur-xs transition-all hover:shadow-lg"
                        >
                          <SiGithub className="h-5 w-5" />
                        </Link>
                        <Link
                          href={
                            project.links.live
                              ? { pathname: project.links.live }
                              : { pathname: "#" }
                          }
                          className="bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-primary/25 rounded-full p-2 backdrop-blur-xs transition-all hover:shadow-lg"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
