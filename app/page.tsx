import PageLayout from "@/components/ui/PageLayout";
import Link from "next/link";

export default function Home() {
  return (
    <PageLayout currentSection="home">
      <div className="flex h-screen items-center justify-center p-8">
        <div className="animate-slide-up max-w-2xl text-center">
          <Link
            href="https://github.com/MohammedADev"
            target="_blank"
            rel="noopener noreferrer"
            className="group from-primary to-secondary relative inline-block bg-linear-to-r bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
          >
            Mohammed Abdelaziz
            <span className="from-primary to-secondary absolute bottom-0 left-0 h-1 w-full scale-0 bg-linear-to-r transition-all duration-500 ease-in-out group-hover:scale-100" />
          </Link>
          <p className="text-muted-foreground mb-12 text-xl md:text-2xl">
            A Developer with many hobbies and interests
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/20 rounded-lg px-6 py-3 transition-all hover:shadow-lg"
            >
              View Projects
            </Link>
            <Link
              href="/gallery"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-secondary/20 rounded-lg px-6 py-3 transition-all hover:shadow-lg"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
