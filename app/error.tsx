"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="from-destructive to-secondary bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent">
        Something went wrong!
      </h1>
      <p className="text-muted-foreground">{error.message}</p>
      <div className="flex gap-4">
        <Button
          onClick={() => reset()}
          className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
        >
          Try again
        </Button>
        <Button onClick={() => router.push("/")}>Go home</Button>
      </div>
    </div>
  );
}
