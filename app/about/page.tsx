import Layout from "@/components/layout";
import Image from "next/image";
import { Code2, Server, Database, Terminal } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Fullstack Development", icon: Code2, color: "primary" },
    { name: "Backend Systems", icon: Server, color: "secondary" },
    { name: "Database Engineering", icon: Database, color: "accent" },
    { name: "DevOps & Cloud", icon: Terminal, color: "muted" },
  ];

  return (
    <Layout currentSection="about">
      <div className="min-h-screen p-8 md:p-16">
        <div className="mx-auto grid max-w-6xl animate-slide-up items-start gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent">
              About Me
            </h1>
            <div className="relative aspect-square overflow-hidden rounded-lg border border-border bg-card">
              <Image
                src="/placeholder.svg"
                alt="Profile"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a Computer Science student based in Anaheim, CA, with 7 years
              of non-professional programming experience. I specialize in
              full-stack development and distributed systems, with a proven
              track record of leading platforms serving 40,000+ daily users and
              optimizing performance through advanced caching strategies.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="transform rounded-lg border border-border bg-card/50 p-4 backdrop-blur-sm transition-all hover:scale-105 hover:bg-card"
                  >
                    <skill.icon
                      className={`h-6 w-6 text-${skill.color} mb-2`}
                    />
                    <h3 className="font-medium text-card-foreground">
                      {skill.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Experience
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-card/50 p-4 backdrop-blur-sm">
                  <h3 className="font-medium text-primary">
                    Fullstack Engineer
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Pear AI • June 2024 - Present
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-foreground">
                Projects
              </h2>
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-card/50 p-4 backdrop-blur-sm">
                  <h3 className="font-medium text-secondary">
                    Creator & Developer
                  </h3>
                  <p className="text-sm text-muted-foreground">
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
