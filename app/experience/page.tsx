"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PageLayout from "@/components/ui/PageLayout";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  ExternalLink,
  Github,
  Briefcase,
  Code,
  Layers,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string;
  skills: string[];
  logo?: string;
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState("projects");

  const projects: Project[] = [
    {
      id: 1,
      title: "Canvas Discord Bot",
      description:
        "Designed and implemented asynchronous Node.js application using Canvas LMS API to automate academic workflows. Created efficient database schema with Supabase that improved query performance and enabled real-time notifications.",
      image: "/images/projects/canvas-logo.png",
      tags: ["Discord.js", "Node.js", "Supabase", "TypeScript", "Canvas API"],
      links: {
        github: "https://github.com/MohammedADev/Canvas-Discord-Bot",
      },
    },
    {
      id: 2,
      title: "Dressin Automation",
      description:
        "This script is designed to automate the process of placing an order on Dressin.com. It simulates user interactions to navigate through the website, select products, fill out forms, and complete the checkout process.",
      image: "/images/projects/dressin-logo.png",
      tags: ["TypeScript", "Node.js", "Playwright", "Google API"],
      links: {
        github: "https://github.com/MohammedADev/Dressin-Bot",
      },
    },
  ];

  const experiences: Experience[] = [
    {
      id: 1,
      company: "PearAI",
      position: "Fullstack Software Engineer",
      period: "June 2024 - Present",
      description:
        "Implemented frontend components using React and TypeScript for Y Combinator application, incorporating feedback from senior engineers (ex-Meta/Coinbase). Designed and integrated Stripe payment system, enabling $1,200 in pre-launch revenue. Optimized React component architecture resulting in 90% pull request approval rate and improved code quality. Implemented performance optimizations for Vercel deployment serving 200K+ visitors, reducing load time by 25% through code splitting and lazy loading.",
      skills: [
        "TypeScript",
        "React.js",
        "Next.js",
        "Redis",
        "FastAPI",
        "Supabase",
        "Stripe",
      ],
      logo: "/images/experience/trypearai-logo.jpeg",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <PageLayout currentSection="experience">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <header className="mb-10 text-center md:mb-14">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            <span className="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-transparent">
              My Work
            </span>
          </h1>
          <div className="from-primary to-primary/70 mx-auto mt-2 h-1 w-20 bg-gradient-to-r"></div>
          <p className="text-muted-foreground mx-auto mt-4 max-w-2xl text-base md:text-lg">
            Explore my professional journey through projects and work experience
          </p>
        </header>

        <Tabs
          defaultValue="projects"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="mb-8 flex justify-center">
            <TabsList className="grid w-full max-w-md grid-cols-2">
              <TabsTrigger value="projects" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Projects
              </TabsTrigger>
              <TabsTrigger
                value="experience"
                className="flex items-center gap-2"
              >
                <Briefcase className="h-4 w-4" />
                Experience
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="projects" className="mt-0">
            <motion.div
              className="space-y-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={item}
                  className="group bg-card/30 hover:bg-card/50 relative overflow-hidden rounded-xl backdrop-blur-sm transition-all"
                >
                  <div className="from-primary/20 via-primary/10 to-secondary/20 absolute -inset-1 rounded-xl bg-gradient-to-r opacity-0 blur transition-all duration-500 group-hover:opacity-100"></div>

                  <div className="relative p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      <div className="bg-background/50 relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg p-1">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                          <h3 className="text-xl font-bold">{project.title}</h3>
                          <div className="text-muted-foreground flex items-center text-sm">
                            <Layers className="mr-1 h-4 w-4" />
                            Project
                          </div>
                        </div>

                        <p className="text-muted-foreground mt-3">
                          {project.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {project.tags.map((tag) => (
                            <Badge
                              key={tag}
                              variant="outline"
                              className="bg-primary/5"
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="mt-4 flex flex-wrap gap-3">
                          {project.links.github && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="gap-1.5 transition-colors"
                            >
                              <Link
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4" />
                                Code
                              </Link>
                            </Button>
                          )}

                          {project.links.demo && (
                            <Button size="sm" asChild className="gap-1.5">
                              <Link
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4" />
                                Live Demo
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          <TabsContent value="experience" className="mt-0">
            <motion.div
              className="space-y-8"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={item}
                  className="group bg-card/30 hover:bg-card/50 relative overflow-hidden rounded-xl backdrop-blur-sm transition-all"
                >
                  <div className="from-primary/20 via-primary/10 to-secondary/20 absolute -inset-1 rounded-xl bg-gradient-to-r opacity-0 blur transition-all duration-500 group-hover:opacity-100"></div>

                  <div className="relative p-6">
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                      {exp.logo && (
                        <div className="bg-background/50 relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg p-2">
                          <Image
                            src={exp.logo || "/placeholder.svg"}
                            alt={exp.company}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}

                      <div className="flex-1">
                        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                          <h3 className="text-xl font-bold">{exp.position}</h3>
                          <div className="text-muted-foreground flex items-center text-sm">
                            <Calendar className="mr-1 h-4 w-4" />
                            {exp.period}
                          </div>
                        </div>

                        <h4 className="text-primary text-lg font-medium">
                          {exp.company}
                        </h4>

                        <p className="text-muted-foreground mt-3">
                          {exp.description}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {exp.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-secondary/10"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>
    </PageLayout>
  );
}
