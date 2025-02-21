import Link from 'next/link'
import { Camera, Grid, ImageIcon, User, Mail, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationProps {
  currentSection: string
}

export default function Navigation({ currentSection }: NavigationProps) {
  const navItems = [
    { icon: Camera, id: "home", href: "/" },
    { icon: User, id: "about", href: "/about" },
    { icon: Grid, id: "projects", href: "/projects" },
    { icon: ImageIcon, id: "gallery", href: "/gallery" },
    { icon: Mail, id: "contact", href: "/contact" },
    { icon: Menu, id: "menu", href: "#" },
  ]

  return (
    <nav className="fixed top-0 right-0 h-screen w-16 flex flex-col items-center justify-center gap-8 border-l border-white/10 bg-black/20 backdrop-blur-sm z-40">
      {navItems.map(({ icon: Icon, id, href }) => (
        <Link
          key={id}
          href={href}
          className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center transition-all",
            currentSection === id ? "bg-cyan-500 text-black" : "text-white/60 hover:text-white hover:bg-white/10",
          )}
        >
          <Icon className="w-5 h-5" />
        </Link>
      ))}
    </nav>
  )
} 