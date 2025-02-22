import type React from "react";

import { useEffect, useState } from "react";
import { Camera, Grid, ImageIcon, Menu, User } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import LoadingScreen from "./components/ui/LoadingScreen";

export default function CameraPortfolio() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("viewfinder");
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  const projects = [
    {
      id: 1,
      title: "Urban Nights",
      category: "Street Photography",
      iso: "ISO 3200",
      aperture: "f/1.8",
      shutter: "1/60",
      location: "Tokyo, Japan",
    },
    {
      id: 2,
      title: "Digital Dreams",
      category: "Conceptual",
      iso: "ISO 100",
      aperture: "f/2.8",
      shutter: "1/125",
      location: "New York, USA",
    },
    {
      id: 3,
      title: "Neon Stories",
      category: "Night Life",
      iso: "ISO 6400",
      aperture: "f/2.0",
      shutter: "1/30",
      location: "Seoul, Korea",
    },
    {
      id: 4,
      title: "Future Perfect",
      category: "Architecture",
      iso: "ISO 200",
      aperture: "f/8.0",
      shutter: "1/250",
      location: "Dubai, UAE",
    },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-black text-white"
      onMouseMove={handleMouseMove}
      style={{
        background: "linear-gradient(to bottom right, #000000, #1a1a2e)",
      }}
    >
      {/* Custom Cursor */}
      <div
        className="pointer-events-none fixed z-50 h-8 w-8 mix-blend-difference transition-transform duration-75"
        style={{
          transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
        }}
      >
        <div className="h-full w-full rounded-full border border-cyan-500" />
        <div className="absolute inset-0 m-auto h-1 w-1 rounded-full bg-cyan-500" />
      </div>

      {/* Loading Screen */}
      {isLoading && <LoadingScreen isLoading={isLoading} />}

      {/* Navigation */}
      <nav className="fixed right-0 top-0 z-40 flex h-screen w-16 flex-col items-center justify-center gap-8 border-l border-white/10 bg-black/20 backdrop-blur-sm">
        {[
          { icon: Camera, id: "viewfinder" },
          { icon: Grid, id: "projects" },
          { icon: ImageIcon, id: "gallery" },
          { icon: User, id: "about" },
          { icon: Menu, id: "menu" },
        ].map(({ icon: Icon, id }) => (
          <button
            key={id}
            onClick={() => setActiveSection(id)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg transition-all",
              activeSection === id
                ? "bg-cyan-500 text-black"
                : "text-white/60 hover:bg-white/10 hover:text-white",
            )}
          >
            <Icon className="h-5 w-5" />
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="min-h-screen w-[calc(100%-4rem)] p-8">
        {/* Viewfinder Overlay */}
        <div className="pointer-events-none fixed inset-0">
          <div className="absolute left-8 top-8 font-mono text-sm text-cyan-500">
            <div>REC 00:00:00</div>
            <div>ISO AUTO</div>
          </div>
          <div className="absolute right-24 top-8 font-mono text-sm text-purple-500">
            <div>ƒ/2.8</div>
            <div>1/125</div>
          </div>
          <div className="absolute bottom-8 left-8 font-mono text-sm text-cyan-500">
            READY
          </div>
          <div className="absolute bottom-8 right-24 font-mono text-sm text-purple-500">
            AF
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 pt-16 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group relative animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video overflow-hidden rounded-lg bg-gray-900">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <Image
                  src="/placeholder.svg"
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-cyan-500">{project.category}</p>
                  </div>
                  <div className="text-right font-mono text-sm text-purple-500">
                    <div>{project.iso}</div>
                    <div>{project.aperture}</div>
                    <div>{project.shutter}</div>
                  </div>
                </div>
                <div className="font-mono text-sm text-cyan-500">
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
