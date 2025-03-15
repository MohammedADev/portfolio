import Image from "next/image";
import { Code2, Server, Database, Terminal, ArrowRight } from "lucide-react";
import PageLayout from "@/components/ui/PageLayout";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  const skills = [
    { name: "Fullstack Development", icon: Code2, color: "text-primary" },
    { name: "Backend Systems", icon: Server, color: "text-secondary" },
    { name: "Database Engineering", icon: Database, color: "text-accent" },
    { name: "DevOps & Cloud", icon: Terminal, color: "text-secondary" },
  ];

  return (
    <PageLayout currentSection="about">
      <div className="min-h-screen p-8 pt-16 md:p-16 md:pt-24">
        <div className="animate-fade-in mx-auto grid max-w-6xl items-start gap-16 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
                About Me
              </h1>
              <div className="from-primary to-secondary mt-2 h-1 w-20 bg-gradient-to-r"></div>
            </div>

            <div className="relative">
              <div className="border-border relative w-full overflow-hidden rounded-xl border shadow-lg">
                <div className="from-primary/10 to-secondary/10 absolute inset-0 bg-gradient-to-br mix-blend-overlay"></div>
                <Image
                  src="/images/profile.jpg"
                  alt="Profile"
                  width={600}
                  height={400}
                  priority
                  className="aspect-auto w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-foreground text-2xl font-semibold">
                Experience
              </h2>
              <div className="space-y-4">
                <div className="border-border bg-card/5 group hover:border-primary/50 relative overflow-hidden rounded-lg border p-4 backdrop-blur-sm transition-all sm:p-6">
                  <div className="from-primary/5 to-secondary/5 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <h3 className="text-primary text-lg font-medium">
                    Fullstack Engineer
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Pear AI • June 2024 - Present
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Leading development of AI-powered platforms serving 40,000+
                    daily users.
                  </p>
                </div>
              </div>
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

            <div className="space-y-6">
              <h2 className="text-foreground text-2xl font-semibold">Skills</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="border-border bg-card/5 group hover:border-primary/50 relative overflow-hidden rounded-lg border p-4 backdrop-blur-sm transition-all hover:shadow-lg sm:p-6"
                  >
                    <div className="from-primary/5 to-secondary/5 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100"></div>
                    <skill.icon className={`h-8 w-8 ${skill.color} mb-4`} />
                    <h3 className="text-card-foreground text-lg font-medium">
                      {skill.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-foreground text-2xl font-semibold">
                Projects
              </h2>
              <div className="space-y-4">
                <div className="border-border bg-card/5 group hover:border-primary/50 relative overflow-hidden rounded-lg border p-4 backdrop-blur-sm transition-all sm:p-6">
                  <div className="from-primary/5 to-secondary/5 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity group-hover:opacity-100"></div>
                  <h3 className="text-secondary text-lg font-medium">
                    Canvas Discord Bot
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Creator & Developer • May 2023 - Present
                  </p>
                  <p className="text-muted-foreground mt-2">
                    Developed a Discord bot that integrates with Canvas LMS to
                    help students track assignments and deadlines.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-start">
              <Link href="/experience">
                <Button className="group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    View All Experience
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="from-primary via-secondary to-primary group-hover:animate-shimmer absolute inset-0 bg-gradient-to-r bg-[length:200%_100%] opacity-0 transition-opacity group-hover:opacity-50"></span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
