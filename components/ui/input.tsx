import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-muted/5 px-3 py-2",
          "text-base text-foreground placeholder:text-muted-foreground",
          "shadow-sm backdrop-blur-sm transition-colors",
          "focus-visible:border-primary focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "hover:border-primary/50",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
