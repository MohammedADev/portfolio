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
            className="group relative mb-6 bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-4xl font-bold text-transparent md:text-6xl"
          >
            Mohammed Abdelaziz
            <span className="absolute bottom-0 left-0 h-1 w-full scale-0 bg-gradient-to-r from-cyan-300 to-purple-300 transition-all duration-500 ease-in-out group-hover:scale-100"></span>
          </Link>
          <p className="mb-8 text-xl text-white/80 md:text-2xl">
            A Developer with many hobbies and interests
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/projects"
              className="rounded-lg bg-cyan-700 px-6 py-3 text-white transition-colors hover:bg-cyan-800"
            >
              View Projects
            </Link>
            <Link
              href="/gallery"
              className="rounded-lg bg-purple-700 px-6 py-3 text-white transition-colors hover:bg-purple-800"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
