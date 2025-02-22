import Link from "next/link";
import { Camera, Grid, ImageIcon, User, Mail, Menu } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  currentSection: string;
}

export default function Navigation({ currentSection }: NavigationProps) {
  const navItems = [
    { icon: Camera, id: "home", href: "/" },
    { icon: User, id: "about", href: "/about" },
    { icon: Grid, id: "projects", href: "/projects" },
    { icon: ImageIcon, id: "gallery", href: "/gallery" },
    { icon: Mail, id: "contact", href: "/contact" },
    { icon: Menu, id: "menu", href: "#" },
  ];

  return (
    <nav className="fixed right-0 top-0 z-40 flex h-screen w-16 flex-col items-center justify-center gap-8 border-l border-white/10 bg-black/20 backdrop-blur-sm">
      {navItems.map(({ icon: Icon, id, href }) => (
        <Link
          key={id}
          href={href}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg transition-all",
            currentSection === id
              ? "bg-cyan-500 text-black"
              : "text-white/60 hover:bg-white/10 hover:text-white",
          )}
        >
          <Icon className="h-5 w-5" />
        </Link>
      ))}
    </nav>
  );
}
