import { cn } from "@/lib/utils";

interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-500",
        isLoading ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 animate-pulse-scale rounded-full border-2 border-secondary" />
        <div className="duration-1500 absolute inset-0 m-auto h-16 w-16 animate-spin rounded-full border border-primary" />
        <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-primary" />
      </div>
    </div>
  );
}
