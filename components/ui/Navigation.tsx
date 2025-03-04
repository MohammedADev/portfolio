import Link from "next/link";
import type { LinkProps } from "next/link";
import { Camera, Grid, ImageIcon, User, Mail, Menu } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavigationProps {
  currentSection: string;
}

interface NavItem {
  icon: LucideIcon;
  id: string;
  href: NonNullable<LinkProps<string>["href"]>;
}

export default function Navigation({ currentSection }: NavigationProps) {
  const navItems: NavItem[] = [
    { icon: Camera, id: "home", href: "/" },
    { icon: User, id: "about", href: "/about" },
    { icon: Grid, id: "projects", href: "/projects" },
    { icon: ImageIcon, id: "gallery", href: "/gallery" },
    { icon: Mail, id: "contact", href: "/contact" },
    { icon: Menu, id: "menu", href: "#" },
  ];

  return (
    <nav className="border-border bg-muted/5 fixed top-0 right-0 z-40 flex h-screen w-16 flex-col items-center justify-center gap-8 border-l backdrop-blur-xs">
      {navItems.map(({ icon: Icon, id, href }) => (
        <Link
          key={id}
          href={href}
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg transition-all",
            currentSection === id
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted hover:text-foreground",
          )}
        >
          <Icon className="h-5 w-5" />
        </Link>
      ))}
    </nav>
  );
}
