"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export default function ThemeToggle({
  activeSection,
}: {
  activeSection: string;
}) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button className="text-muted-foreground hover:bg-muted/10 hover:text-foreground flex h-10 w-10 items-center justify-center rounded-lg transition-all">
        <Moon className="h-5 w-5" />
      </Button>
    );
  }

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-lg transition-all",
        activeSection === "theme"
          ? "bg-primary text-primary-foreground"
          : "text-muted-foreground hover:bg-muted/10 hover:text-foreground",
      )}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
