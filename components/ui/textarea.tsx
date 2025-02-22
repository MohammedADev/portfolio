import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "border-input bg-muted/5 flex min-h-[80px] w-full rounded-md border",
        "text-foreground placeholder:text-muted-foreground px-3 py-2 text-base",
        "shadow-xs backdrop-blur-xs transition-all",
        "hover:border-primary/50",
        "focus-visible:border-primary focus-visible:ring-primary focus-visible:ring-1 focus-visible:outline-hidden",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
