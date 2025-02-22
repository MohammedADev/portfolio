import Layout from "@/components/layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout currentSection="home">
      <div className="flex h-screen items-center justify-center p-8">
        <div className="max-w-2xl animate-slide-up text-center">
          <Link
            href="https://github.com/MohammedADev"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-block bg-gradient-to-r from-primary to-secondary bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
          >
            Mohammed Abdelaziz
            <span className="absolute bottom-0 left-0 h-1 w-full scale-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 ease-in-out group-hover:scale-100" />
          </Link>
          <p className="mb-12 text-xl text-muted-foreground md:text-2xl">
            A Developer with many hobbies and interests
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-primary px-6 py-3 text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
            >
              View Projects
            </Link>
            <Link
              href="/gallery"
              className="rounded-lg bg-secondary px-6 py-3 text-secondary-foreground transition-all hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/20"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
