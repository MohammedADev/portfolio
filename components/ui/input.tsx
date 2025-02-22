import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input bg-muted/5 flex h-10 w-full rounded-md border px-3 py-2",
        "text-foreground placeholder:text-muted-foreground text-base",
        "shadow-xs backdrop-blur-xs transition-colors",
        "focus-visible:border-primary focus-visible:ring-primary focus-visible:ring-1 focus-visible:outline-hidden",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "hover:border-primary/50",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
