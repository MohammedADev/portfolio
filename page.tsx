import type React from "react"

import { useEffect, useState } from "react"
import { Camera, Grid, ImageIcon, Menu, User } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import LoadingScreen from "./components/ui/LoadingScreen"

export default function CameraPortfolio() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState("viewfinder")
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    setCursorPosition({ x: e.clientX, y: e.clientY })
  }

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
  ]

  return (
    <div
      className="min-h-screen bg-black text-white overflow-hidden relative"
      onMouseMove={handleMouseMove}
      style={{
        background: "linear-gradient(to bottom right, #000000, #1a1a2e)",
      }}
    >
      {/* Custom Cursor */}
      <div
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference transition-transform duration-[50ms]"
        style={{
          transform: `translate(${cursorPosition.x - 16}px, ${cursorPosition.y - 16}px)`,
        }}
      >
        <div className="w-full h-full border border-cyan-500 rounded-full" />
        <div className="absolute inset-0 m-auto w-1 h-1 bg-cyan-500 rounded-full" />
      </div>

      {/* Loading Screen */}
      {isLoading && <LoadingScreen isLoading={isLoading} />}

      {/* Navigation */}
      <nav className="fixed top-0 right-0 h-screen w-16 flex flex-col items-center justify-center gap-8 border-l border-white/10 bg-black/20 backdrop-blur-sm z-40">
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
              "w-10 h-10 rounded-lg flex items-center justify-center transition-all",
              activeSection === id ? "bg-cyan-500 text-black" : "text-white/60 hover:text-white hover:bg-white/10",
            )}
          >
            <Icon className="w-5 h-5" />
          </button>
        ))}
      </nav>

      {/* Main Content */}
      <main className="w-[calc(100%-4rem)] min-h-screen p-8">
        {/* Viewfinder Overlay */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-8 left-8 text-cyan-500 text-sm font-mono">
            <div>REC 00:00:00</div>
            <div>ISO AUTO</div>
          </div>
          <div className="absolute top-8 right-24 text-purple-500 text-sm font-mono">
            <div>ƒ/2.8</div>
            <div>1/125</div>
          </div>
          <div className="absolute bottom-8 left-8 text-cyan-500 text-sm font-mono">READY</div>
          <div className="absolute bottom-8 right-24 text-purple-500 text-sm font-mono">AF</div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="relative group animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Image
                  src="/placeholder.svg"
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 p-4 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                    <p className="text-sm text-cyan-500">{project.category}</p>
                  </div>
                  <div className="text-right text-sm font-mono text-purple-500">
                    <div>{project.iso}</div>
                    <div>{project.aperture}</div>
                    <div>{project.shutter}</div>
                  </div>
                </div>
                <div className="text-sm font-mono text-cyan-500">{project.location}</div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

