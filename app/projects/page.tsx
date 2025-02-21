import Layout from "@/components/layout"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import Link from 'next/link'
import { constructMetadata } from "@/lib/metadata"

export const metadata = constructMetadata({
  title: "Projects",
  description: "Explore my portfolio of development and photography projects",
  keywords: ["projects", "portfolio", "development", "photography"],
  path: "/projects"
})

export default function Projects() {
  const projects = [
    {
      title: "AI Image Generator",
      description: "A machine learning project that generates artistic images from text descriptions.",
      image: "/placeholder.svg",
      tags: ["React", "Python", "TensorFlow"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Smart Home Dashboard",
      description: "IoT dashboard for monitoring and controlling smart home devices.",
      image: "/placeholder.svg",
      tags: ["Next.js", "IoT", "TypeScript"],
      links: {
        github: "#",
        live: "#",
      },
    },
    {
      title: "Photography Portfolio",
      description: "A dynamic portfolio showcasing photography work with advanced filtering.",
      image: "/placeholder.svg",
      tags: ["React", "Framer Motion", "Tailwind"],
      links: {
        github: "#",
        live: "#",
      },
    },
  ]

  return (
    <Layout currentSection="projects">
      <div className="min-h-screen p-8 md:p-16">
        <div className="max-w-6xl mx-auto space-y-12 animate-slide-up">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
            Projects
          </h1>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                      <p className="text-white/80">{project.description}</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.tags.map((tag) => (
                          <span key={tag} className="px-2 py-1 text-sm rounded-full bg-white/10 backdrop-blur-sm">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Link
                          href={project.links.github}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </Link>
                        <Link
                          href={project.links.live}
                          className="p-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
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
  )
}

