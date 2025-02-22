import Layout from "@/components/layout";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { constructMetadata } from "@/lib/metadata";

export const metadata = constructMetadata({
  title: "Projects",
  description: "Explore my portfolio of development and photography projects",
  keywords: ["projects", "portfolio", "development", "photography"],
  path: "/projects",
});

export default function Projects() {
  const projects = [
    {
      title: "Pear AI",
      description:
        "Y Combinator-backed project featuring landing page and Stripe payment integration, serving 200k+ visitors annually. Built with Next.js and TypeScript, optimized for global performance.",
      image: "/placeholder.svg",
      tags: ["Next.js", "TypeScript", "Redis", "FastAPI", "Supabase", "Stripe"],
      links: {
        github: "#",
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
        github: "#",
        live: "#",
      },
    },
  ];

  return (
    <Layout currentSection="projects">
      <div className="min-h-screen p-8 md:p-16">
        <div className="mx-auto max-w-6xl animate-slide-up space-y-12">
          <h1 className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent">
            Projects
          </h1>

          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-0 transition-opacity group-hover:opacity-100">
                    <div>
                      <h2 className="mb-2 text-2xl font-bold">
                        {project.title}
                      </h2>
                      <p className="text-white/80">{project.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-white/10 px-2 py-1 text-sm backdrop-blur-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Link
                          href={project.links.github}
                          className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                        <Link
                          href={project.links.live}
                          className="rounded-full bg-white/10 p-2 backdrop-blur-sm transition-colors hover:bg-white/20"
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
