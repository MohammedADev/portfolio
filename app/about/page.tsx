import Layout from "@/components/layout";
import Image from "next/image";
import { Code2, Server, Database, Terminal } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Fullstack Development", icon: Code2, color: "cyan" },
    { name: "Backend Systems", icon: Server, color: "purple" },
    { name: "Database Engineering", icon: Database, color: "blue" },
    { name: "DevOps & Cloud", icon: Terminal, color: "pink" },
  ];

  return (
    <Layout currentSection="about">
      <div className="min-h-screen p-8 md:p-16">
        <div className="mx-auto grid max-w-6xl animate-slide-up items-start gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent">
              About Me
            </h1>
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-white/80">
              I'm a Computer Science student based in Anaheim, CA, with 7 years
              of non-professional programming experience. I specialize in
              full-stack development and distributed systems, with a proven
              track record of leading platforms serving 40,000+ daily users and
              optimizing performance through advanced caching strategies.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="transform rounded-lg bg-white/5 p-4 backdrop-blur-sm transition-transform hover:scale-105"
                  >
                    <skill.icon
                      className={`h-6 w-6 text-${skill.color}-500 mb-2`}
                    />
                    <h3 className="font-medium">{skill.name}</h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Experience</h2>
              <div className="space-y-4">
                <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                  <h3 className="font-medium text-cyan-500">
                    Fullstack Engineer
                  </h3>
                  <p className="text-sm text-white/60">
                    Pear AI • June 2024 - Present
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-white">Projects</h2>
              <div className="space-y-4">
                <div className="rounded-lg bg-white/5 p-4 backdrop-blur-sm">
                  <h3 className="font-medium text-purple-500">
                    Creator & Developer
                  </h3>
                  <p className="text-sm text-white/60">
                    Canvas Discord Bot • May 2023 - Present
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
