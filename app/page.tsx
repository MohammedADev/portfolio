import Layout from "@/components/layout"
import Link from 'next/link'

export default function Home() {
  return (
    <Layout currentSection="home">
      <div className="h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl text-center animate-slide-up">
          <Link 
            href="https://github.com/MohammedADev" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-transparent bg-clip-text relative group"
          >
            Mohammed Abdelaziz
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-purple-500 scale-0 group-hover:scale-100 transition-all duration-500 ease-in-out"></span>
          </Link>
          <p className="text-xl md:text-2xl text-white/80 mb-8">A Developer with many hobbies and interests</p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/projects"
              className="px-6 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/gallery"
              className="px-6 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-400 transition-colors"
            >
              View Gallery
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

