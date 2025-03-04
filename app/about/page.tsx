import Layout from "@/components/layout";
import Image from "next/image";
import { Code2, Server, Database, Terminal } from "lucide-react";

export default function About() {
  const skills = [
    { name: "Fullstack Development", icon: Code2, color: "text-primary" },
    { name: "Backend Systems", icon: Server, color: "text-secondary" },
    { name: "Database Engineering", icon: Database, color: "text-accent" },
    { name: "DevOps & Cloud", icon: Terminal, color: "text-secondary" },
  ];

  return (
    <Layout currentSection="about">
      <div className="min-h-screen p-8 md:p-16">
        <div className="animate-slide-up mx-auto grid max-w-6xl items-start gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
              About Me
            </h1>
            <div className="border-border relative w-full overflow-hidden rounded-lg border">
              <Image
                src="/images/profile.JPG"
                alt="Profile"
                width={600}
                height={400}
                priority
                className="aspect-auto w-full object-cover"
              />
              <div className="from-background/60 absolute inset-0 bg-gradient-to-t to-transparent" />
            </div>
          </div>
          <div className="space-y-8">
            <p className="text-muted-foreground text-lg leading-relaxed">
              I&apos;m a Computer Science student based in the Los Angeles
              Metropolitan Area, with 7 years of programming experience. I
              specialize in full-stack development and distributed systems, with
              a proven track record of leading platforms serving 40,000+ daily
              users and optimizing performance through advanced caching
              strategies.
            </p>
            <div className="space-y-4">
              <h2 className="text-foreground text-2xl font-semibold">Skills</h2>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="border-border bg-card/50 hover:bg-card transform rounded-lg border p-4 backdrop-blur-xs transition-all hover:scale-105"
                  >
                    <skill.icon className={`h-6 w-6 ${skill.color} mb-2`} />
                    <h3 className="text-card-foreground font-medium">
                      {skill.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-foreground text-2xl font-semibold">
                Experience
              </h2>
              <div className="space-y-4">
                <div className="border-border bg-card/50 rounded-lg border p-4 backdrop-blur-xs">
                  <h3 className="text-primary font-medium">
                    Fullstack Engineer
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Pear AI • June 2024 - Present
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-foreground text-2xl font-semibold">
                Projects
              </h2>
              <div className="space-y-4">
                <div className="border-border bg-card/50 rounded-lg border p-4 backdrop-blur-xs">
                  <h3 className="text-secondary font-medium">
                    Creator & Developer
                  </h3>
                  <p className="text-muted-foreground text-sm">
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
