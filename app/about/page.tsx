import Layout from "@/components/layout"
import Image from "next/image"
import { Code2, Camera, Globe2, Cpu } from "lucide-react"

export default function About() {
  const skills = [
    { name: "Frontend Development", icon: Code2, color: "cyan" },
    { name: "Photography", icon: Camera, color: "purple" },
    { name: "UI/UX Design", icon: Globe2, color: "blue" },
    { name: "Machine Learning", icon: Cpu, color: "pink" },
  ]

  return (
    <Layout currentSection="about">
      <div className="min-h-screen p-8 md:p-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start animate-slide-up">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text">
              About Me
            </h1>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image src="/placeholder.svg" alt="Profile" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a developer and photographer based in New York, combining technical expertise with creative vision. My
              work spans from building innovative web applications to capturing compelling visual narratives through
              photography.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="p-4 rounded-lg bg-white/5 backdrop-blur-sm transform transition-transform hover:scale-105"
                  >
                    <skill.icon className={`w-6 h-6 text-${skill.color}-500 mb-2`} />
                    <h3 className="font-medium">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Experience</h2>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <h3 className="font-medium text-cyan-500">Senior Developer</h3>
                  <p className="text-sm text-white/60">Tech Corp • 2020 - Present</p>
                </div>
                <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                  <h3 className="font-medium text-purple-500">Freelance Photographer</h3>
                  <p className="text-sm text-white/60">Self Employed • 2018 - Present</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

